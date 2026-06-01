// Sistema de color de La Sala — BITACORA Parte 9
// Los colores vienen de las FUENTES, no de los instrumentos.
// La identidad del instrumento se expresa por posición vertical, no por color.

// Colores por FUENTE (planos, sin gradientes)
export const SOURCE_COLORS = {
  clima:    { r: 22,  g: 102, b: 204 }, // azul profundo — cielo, agua, presión
  noticias: { r: 204, g: 136, b: 0   }, // ámbar — alerta, urgencia
  mercado:  { r: 26,  g: 122, b: 26  }, // base; el signo del cambio decide verde/rojo
  default:  { r: 160, g: 160, b: 160 }, // gris — sin fuente
};
// bolsa es dinámico: verde si cambio >= 0, rojo si cambio < 0
export function getBolsaColor(cambio) {
  return cambio >= 0
    ? { r: 26,  g: 122, b: 26  } // verde — movimiento
    : { r: 200, g: 34,  b: 0   }; // rojo oxidado — fricción
}

// Identidad visual de cada instrumento (para borde del dot, no para fill)
export const INSTRUMENT_IDENTITY = {
  cuerdas:   { shape: 'circle',  strokeDash: [],     label: '◯' },
  percusion: { shape: 'square',  strokeDash: [3, 2], label: '□' },
  mallets:   { shape: 'diamond', strokeDash: [1, 3], label: '◇' },
};

export class ColorSystem {
  constructor() {
    // colorMap no se usa — los colores vienen de las fuentes
    this.map = SOURCE_COLORS; // acceso directo para SalaView
  }

  // Devuelve el color RGB de una fuente dado su tipo y su señal actual
  getSourceColor(tipo, señal) {
    if (!tipo) return SOURCE_COLORS.default;
    if (tipo === 'bolsa' || tipo === 'mercado') return getBolsaColor(señal ? señal.cambio : 0);
    return SOURCE_COLORS[tipo] || SOURCE_COLORS.default;
  }

  getDotColor(inst, sala) {
    if (inst._colorHex) return inst._colorHex;
    
    if (!inst.fuentes || inst.fuentes.length === 0) {
      return `rgb(${SOURCE_COLORS.default.r},${SOURCE_COLORS.default.g},${SOURCE_COLORS.default.b})`;
    }

    let r = 0, g = 0, b = 0;
    for (const f of inst.fuentes) {
      const tipo = f.tipo || f.id?.split('_')[0];
      const c = this.getSourceColor(tipo, f.source);
      r += c.r; g += c.g; b += c.b;
    }
    const n = inst.fuentes.length;
    let fr = Math.round(r / n), fg = Math.round(g / n), fb = Math.round(b / n);

    // Capa 2: desaturar si está lejos del grupo (boids)
    const dist = Math.abs(inst.posicion - sala.getCentroMasa());
    const sat  = 1 - clamp((dist - 2) / 4, 0, 0.65);
    fr = Math.round(lerp(fr, 140, 1 - sat));
    fg = Math.round(lerp(fg, 140, 1 - sat));
    fb = Math.round(lerp(fb, 140, 1 - sat));

    return `rgb(${fr},${fg},${fb})`;
  }

  // Color de la huella de stigmergy — usa el color de la fuente dominante del instrumento
  getHuellaColor(inst, intensidad) {
    if (!inst.fuentes || !inst.fuentes.length) {
      return `rgba(160,160,160,${intensidad})`;
    }
    // Fuente dominante = mayor magnitud
    let dominant = inst.fuentes[0];
    for (const f of inst.fuentes) {
      if ((f.source?.magnitud || 0) > (dominant.source?.magnitud || 0)) dominant = f;
    }
    const tipo = dominant.tipo || dominant.id?.split('_')[0];
    const c = this.getSourceColor(tipo, dominant.source);
    return `rgba(${c.r},${c.g},${c.b},${intensidad})`;
  }

  // Capa 0: índice país → posición vertical, opacidad, blur
  getAudibilidadStyle(audibilidad) {
    if (audibilidad > 0.70) return { verticalOffset: 0,  opacity: 1.0, filter: 'none'       };
    if (audibilidad > 0.30) return { verticalOffset: 20, opacity: 0.7, filter: 'none'       };
    return                         { verticalOffset: 38, opacity: 0.4, filter: 'blur(1px)'  };
  }

  // Devuelve color CSS de un tipo de fuente para la UI
  getSourceCSS(tipo, señal) {
    const c = this.getSourceColor(tipo, señal);
    return `rgb(${c.r},${c.g},${c.b})`;
  }
}

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function lerp(a, b, t) { return a + (b - a) * t; }
