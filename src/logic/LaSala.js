export class LaSala {
  constructor(numPatrones) {
    this.numPatrones = numPatrones;
    this.terreno     = new Float32Array(numPatrones); // stigmergy: 0-1
    this.instrumentos = {};
    this._historialAvances = []; // últimos 8 ciclos: 1=avanzó, 0=repitió
    this._shockwaves = []; // { pos, age }
  }

  registrarInstrumento(id, posicionInicial = 0) {
    this.instrumentos[id] = { posicion: posicionInicial };
  }

  actualizarPosicion(id, nuevaPosicion, avanzo) {
    if (!this.instrumentos[id]) return;
    this.instrumentos[id].posicion = nuevaPosicion;
    if (avanzo !== undefined) {
      this._historialAvances.push(avanzo ? 1 : 0);
      if (this._historialAvances.length > 8) this._historialAvances.shift();
      if (avanzo) {
        this._shockwaves.push({ pos: nuevaPosicion, age: 0 });
      }
    }
  }

  // Llamado en cada pulso: decae el terreno y deposita huellas
  pulso() {
    for (let i = 0; i < this.numPatrones; i++) {
      this.terreno[i] = Math.max(0, this.terreno[i] - 0.04);
    }
    for (let i = this._shockwaves.length - 1; i >= 0; i--) {
      this._shockwaves[i].age += 0.08;
      if (this._shockwaves[i].age >= 1) this._shockwaves.splice(i, 1);
    }
    for (const id in this.instrumentos) {
      const pos = this.instrumentos[id].posicion;
      if (pos >= 0 && pos < this.numPatrones) {
        this.terreno[pos] = Math.min(1, this.terreno[pos] + 0.18);
      }
    }
  }

  // --- Las 6 propiedades ---

  getDensidad(pos) {
    let count = 0;
    for (const id in this.instrumentos) {
      if (Math.abs(this.instrumentos[id].posicion - pos) <= 1) count++;
    }
    return count;
  }

  getHuecos() {
    const posiciones = Object.values(this.instrumentos).map(i => i.posicion);
    if (posiciones.length < 2) return 0;
    const min = Math.min(...posiciones);
    const max = Math.max(...posiciones);
    let huecos = 0;
    for (let p = min; p <= max; p++) {
      if (!posiciones.includes(p)) huecos++;
    }
    return huecos;
  }

  getMomentum() {
    if (this._historialAvances.length === 0) return 0;
    const suma = this._historialAvances.reduce((a, b) => a + b, 0);
    return suma / this._historialAvances.length;
  }

  getCentroMasa() {
    const ids = Object.keys(this.instrumentos);
    if (ids.length === 0) return 0;
    const suma = ids.reduce((s, id) => s + this.instrumentos[id].posicion, 0);
    return suma / ids.length;
  }

  getDistanciaMaxima() {
    const posiciones = Object.values(this.instrumentos).map(i => i.posicion);
    if (posiciones.length < 2) return 0;
    return Math.max(...posiciones) - Math.min(...posiciones);
  }

  getEnergiaTotal(senales) {
    return Object.values(senales).reduce((s, señal) => s + (señal ? señal.magnitud : 0), 0);
  }

  getImpactoShockwave(pos) {
    let impacto = 0;
    for (const sw of this._shockwaves) {
      const dist = Math.abs(sw.pos - pos);
      // Radio de impacto 5 patrones
      if (dist < 5) {
        const fuerza = (1 - sw.age) * (1 - dist / 5);
        impacto = Math.max(impacto, fuerza);
      }
    }
    return impacto;
  }

  getShockwaves() {
    return this._shockwaves.map(sw => ({ pos: sw.pos, age: sw.age }));
  }

  // --- Función de probabilidad central ---
  // Combina señal de API + las 3 capas físicas de La Sala
  // Combina señal de API + las 3 capas físicas de La Sala
  calcularProbabilidadBreakdown(pos, señal, mapeo, pesos, umbrales) {
    const centro    = this.getCentroMasa();
    const densidad  = this.getDensidad(pos);
    const momentum  = this.getMomentum();
    const desgaste  = this.terreno[pos];

    const p_api       = señal ? señal.getVerb('AVANZA', mapeo) : 0;
    const p_stigmergy = desgaste;
    const p_cohesion  = clamp((centro - pos) / 4, 0, 1);
    const p_separac   = densidad > 1 ? 0.4 : 0;
    const p_momentum  = momentum;
    const p_shockwave = this.getImpactoShockwave(pos) * 1.5; // Contagio fuerte
    const freno       = pos > centro + umbrales.distancia_max ? 0.6 : 0;

    const partes = {
      api:       p_api       * pesos.api,
      stigmergy: p_stigmergy * pesos.stigmergy,
      cohesion:  p_cohesion  * pesos.cohesion,
      separacion:p_separac   * pesos.separacion,
      momentum:  p_momentum  * pesos.momentum,
      shockwave: p_shockwave,
      freno,
    };

    const p_raw = partes.api
                + partes.stigmergy
                + partes.cohesion
                + partes.separacion
                + partes.momentum
                + partes.shockwave
                - partes.freno;

    const contribuciones = [
      ['dato', partes.api],
      ['huella', partes.stigmergy],
      ['grupo', partes.cohesion],
      ['separacion', partes.separacion],
      ['momentum', partes.momentum],
      ['impacto', partes.shockwave],
      ['freno', -partes.freno],
    ].sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));

    return {
      p: clamp(p_raw, 0, 1),
      raw: round2(p_raw),
      api: round2(partes.api),
      stigmergy: round2(partes.stigmergy),
      cohesion: round2(partes.cohesion),
      separacion: round2(partes.separacion),
      momentum: round2(partes.momentum),
      shockwave: round2(partes.shockwave),
      freno: round2(partes.freno),
      densidad,
      centro: round2(centro),
      desgaste: round2(desgaste),
      distanciaAlCentro: round2(pos - centro),
      motivo: contribuciones[0]?.[0] || 'dato',
    };
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function round2(v) {
  return Math.round(v * 100) / 100;
}
