import { DataSourceAdapter } from './DataSourceAdapter.js';

// Constante configurable — gravedad estructural, no varía en tiempo real
export class IndicioPaisMock extends DataSourceAdapter {
  constructor(valor = 0.65) {
    super();
    this.magnitud    = valor;
    this.cambio      = 0;
    this.tendencia   = 0;
    this.volatilidad = 0;
  }

  tick() {} // los datos estructurales no cambian por tick

  setValor(v) {
    this.magnitud = Math.max(0, Math.min(1, v));
  }
}
