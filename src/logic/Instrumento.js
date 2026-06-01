import { ESTADOS, transicionar } from './StateMachine.js';

export class Instrumento {
  constructor(id, sala, mapeo, umbrales, pesos) {
    this.id       = id;
    this.sala     = sala;
    this.mapeo    = mapeo; // mapeo del primer source (actualizado en tick)
    this.umbrales = umbrales;
    this.pesos    = pesos;

    this.posicion   = 0;
    this.estado     = ESTADOS.DORMIDO;
    this.señal      = null;   // señal compuesta
    this.fuentes    = [];     // [{ id, tipo, source, mapeo }]
    this.lente      = null;
    this.numFuentes = 0;

    this._ciclosSinActividad = 0;
    this._mutaValor          = 0;
    this._probBreakdown      = null;
    this._lastPayload        = '';
    this._lastDecision       = 'sin ciclo';
    this._verbos             = {};
    this._volumenDb          = -18;
    this._manualSignal       = 0;
    this._manualBlend        = 0;
    this._manualMuta         = 0;
    this._advanceBias        = 0;
    this._glowRadius         = 1;
    this._lightGain          = 1;
    this._lastManualSignal   = 0;
    this._manualCambio       = 0;
  }

  // Conectar array de fuentes: [{ id, tipo, source, mapeo }]
  conectarFuentes(fuentesConMapeo) {
    this.fuentes    = (fuentesConMapeo || []).filter(Boolean);
    this.numFuentes = this.fuentes.length;
  }

  // Compat: conectar una sola fuente
  conectarFuente(señal, id = 'manual', mapeo = this.mapeo) {
    if (!señal) { this.conectarFuentes([]); return; }
    this.conectarFuentes([{ id, tipo: id.split('_')[0], source: señal, mapeo }]);
  }

  conectarLente(lente) { this.lente = lente; }

  tick() {
    this._reconstruirSeñalCompuesta();

    // Fix de mapeo: usar el mapeo de la fuente primaria como ctx.mapeo
    if (this.fuentes.length > 0 && this.fuentes[0].mapeo) {
      this.mapeo = this.fuentes[0].mapeo;
    }

    const indice_pais = this.lente ? this.lente.magnitud : null;

    if (this.señal && this.señal.magnitud < this.umbrales.entrada) {
      this._ciclosSinActividad++;
    } else {
      this._ciclosSinActividad = 0;
    }

    const ctx = {
      señal:              this.señal,
      mapeo:              this.mapeo,
      sala:               this.sala,
      numFuentes:         this.numFuentes,
      ciclosSinActividad: this._ciclosSinActividad,
      indice_pais,
      posicion:           this.posicion,
      numPatrones:        this.sala.numPatrones,
      umbrales:           this.umbrales,
    };
    this.estado = transicionar(this.estado, ctx);

    this._mutaValor = this.señal ? this.señal.getVerb('MUTA', this.mapeo) : 0;
    this._verbos = this.señal ? {
      ENTRA:   this.señal.getVerb('ENTRA', this.mapeo),
      AVANZA:  this.señal.getVerb('AVANZA', this.mapeo),
      RETIENE: this.señal.getVerb('RETIENE', this.mapeo),
      MUTA:    this.señal.getVerb('MUTA', this.mapeo),
      SALE:    this.señal.getVerb('SALE', this.mapeo),
    } : {};
  }

  decidirAvance() {
    const breakdown = this.getProbabilidadBreakdown();
    this._probBreakdown = breakdown;
    this._lastPayload   = this.señal?.payloadText || '';

    if ([ESTADOS.DORMIDO, ESTADOS.ARMADO, ESTADOS.DESCANSANDO, ESTADOS.RETENIDO].includes(this.estado)) {
      this._lastDecision = this.estado === ESTADOS.RETENIDO ? 'RETENIDO: repite patron' : `${this.estado}: no avanza`;
      this.sala.actualizarPosicion(this.id, this.posicion, false);
      return false;
    }

    const avanzo = Math.random() < breakdown.p;
    if (avanzo) {
      this.posicion++;
      this.sala.actualizarPosicion(this.id, this.posicion, true);
      this._lastDecision = 'AVANZO al proximo patron';
    } else {
      this.sala.actualizarPosicion(this.id, this.posicion, false);
      this._lastDecision = 'REPITE el patron actual';
    }
    return avanzo;
  }

  getProbabilidadBreakdown() {
    const breakdown = this.sala.calcularProbabilidadBreakdown(
      this.posicion, this.señal, this.mapeo, this.pesos, this.umbrales
    );
    const bias = clamp(this._advanceBias ?? 0, -0.45, 0.45);
    breakdown.bias = round2(bias);
    breakdown.raw = round2((breakdown.raw ?? breakdown.p) + bias);
    breakdown.p = clamp(breakdown.p + bias, 0, 1);
    if (Math.abs(bias) > Math.abs(breakdown[breakdown.motivo] ?? 0)) {
      breakdown.motivo = bias >= 0 ? 'control' : 'freno_manual';
    }
    return breakdown;
  }

  getAudibilidad() {
    return this.lente ? Math.max(0, Math.min(1, this.lente.magnitud)) : 1;
  }

  getVolatilidadGlobal() {
    return this.señal ? this.señal.volatilidad : 0;
  }

  getEstadoUI() {
    return {
      estado:        this.estado,
      posicion:      this.posicion,
      señal:         this.señal?.magnitud ?? 0,
      volatilidad:   this.señal?.volatilidad ?? 0,
      muta:          this._mutaValor,
      audibilidad:   this.getAudibilidad(),
      probBreakdown: this._probBreakdown,
      payload:       this._lastPayload,
      decision:      this._lastDecision,
      verbos:        this._verbos,
      manual:        this._manualSignal,
      mezclaManual:  this._manualBlend,
      brillo:        this._lightGain,
      difusion:      this._glowRadius,
      avanceBias:    this._advanceBias,
    };
  }

  _reconstruirSeñalCompuesta() {
    if (!this.fuentes.length) { this.señal = null; this.numFuentes = 0; return; }
    this.numFuentes = this.fuentes.length;
    const n = this.numFuentes;

    let magnitud = 0, cambio = 0, tendencia = 0, volatilidad = 0;
    for (const f of this.fuentes) {
      magnitud   += f.source.magnitud   ?? 0;
      cambio     += f.source.cambio     ?? 0;
      tendencia  += f.source.tendencia  ?? 0;
      volatilidad = Math.max(volatilidad, f.source.volatilidad ?? 0);
    }

    const manualSignal = clamp(this._manualSignal ?? 0, 0, 1);
    const manualBlend  = clamp(this._manualBlend ?? 0, 0, 1);
    this._manualCambio = manualSignal - (this._lastManualSignal ?? manualSignal);
    this._lastManualSignal = manualSignal;

    const fuenteMagnitud = magnitud / n;
    const fuenteCambio = cambio / n;
    const fuenteTendencia = tendencia / n;
    const manualCambio = this._manualCambio;
    const manualVolatilidad = clamp(Math.abs(manualCambio) * 4 + (this._manualMuta ?? 0) * 0.75, 0, 1);

    const payloadParts = this.fuentes.map(f => f.source.payloadText).filter(Boolean).slice(0, 2);
    if (manualBlend > 0.02) {
      payloadParts.unshift(`control ${Math.round(manualSignal * 100)}%`);
    }

    this.señal = {
      magnitud:    lerp(fuenteMagnitud, manualSignal, manualBlend),
      cambio:      lerp(fuenteCambio, manualCambio, manualBlend),
      tendencia:   lerp(fuenteTendencia, manualCambio, manualBlend),
      volatilidad: Math.max(volatilidad, manualVolatilidad * manualBlend),
      payloadText: payloadParts.join(' · '),
      // getVerb usa los mapeos individuales de cada fuente (fix)
      getVerb: (verbo, _mapeoIgnorado) => {
        let suma = 0;
        for (const f of this.fuentes) {
          suma += f.source.getVerb(verbo, f.mapeo);
        }
        const fuenteVerb = suma / n;
        const manualVerb = getManualVerb(verbo, manualSignal, manualCambio, this._manualMuta ?? 0);
        return clamp(lerp(fuenteVerb, manualVerb, manualBlend), 0, 1);
      },
    };
  }
}

function getManualVerb(verbo, magnitud, cambio, muta) {
  switch (verbo) {
    case 'ENTRA':
      return magnitud;
    case 'AVANZA':
      return clamp(Math.abs(cambio) * 3.2 + magnitud * 0.35, 0, 1);
    case 'RETIENE':
      return clamp((1 - Math.abs(cambio)) * (1 - magnitud) * 0.45, 0, 1);
    case 'MUTA':
      return clamp(muta + Math.abs(cambio) * 2.2, 0, 1);
    case 'SALE':
      return magnitud < 0.05 ? 1 : 0;
    default:
      return 0;
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function round2(v) {
  return Math.round(v * 100) / 100;
}
