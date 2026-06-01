import { DataSourceAdapter } from './DataSourceAdapter.js';

// Caminata lenta, media-reversa hacia 0.5 — carácter gradual del clima
export class ClimaMock extends DataSourceAdapter {
  tick() {
    const atraccion = (0.5 - this.magnitud) * 0.04;
    const ruido = (Math.random() - 0.5) * 0.03;
    const delta = atraccion + ruido;
    this.magnitud    = clamp(this.magnitud + delta, 0, 1);
    this.cambio      = delta;
    this.tendencia   = this.tendencia * 0.92 + this.cambio * 0.08;
    this.volatilidad = clamp(0.05 + Math.abs(this.cambio) * 1.5, 0, 1);

    const temp = (10 + this.magnitud * 25).toFixed(1);
    const varTemp = this.cambio > 0 ? "↑" : "↓";
    this.payloadText = `Temp: ${temp}°C ${varTemp}`;
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
