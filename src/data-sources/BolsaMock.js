import { DataSourceAdapter } from './DataSourceAdapter.js';

// Caminata normal + spikes de Poisson (10% de ticks) — carácter volátil de la bolsa
export class BolsaMock extends DataSourceAdapter {
  tick() {
    const spike = Math.random() < 0.10;
    const paso  = spike
      ? (Math.random() - 0.5) * 0.55
      : (Math.random() - 0.5) * 0.05;
    this.magnitud    = clamp(this.magnitud + paso, 0, 1);
    this.cambio      = paso;
    this.volatilidad = clamp(this.volatilidad * 0.75 + Math.abs(paso) * 2.2, 0, 1);
    this.tendencia   = this.tendencia * 0.95 + this.cambio * 0.05;
    
    const ticker = spike ? "NASDAQ" : "S&P500";
    const sign = this.cambio > 0 ? "+" : "";
    this.payloadText = `${ticker} ${sign}${(this.cambio * 15).toFixed(2)}%`;
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
