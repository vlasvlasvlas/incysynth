import { DataSourceAdapter } from './DataSourceAdapter.js';

// Pulsos semánticos irregulares: cambios suaves + eventos discursivos abruptos.
export class NoticiasMock extends DataSourceAdapter {
  constructor() {
    super();
    this._topicos = ['clima', 'frontera', 'mercado', 'conflicto', 'salud', 'energia'];
    this._topicoActual = this._topicos[0];
  }

  tick() {
    const evento = Math.random() < 0.15;
    const ruidoBase = (Math.random() - 0.5) * 0.04;
    const impulso = evento ? (Math.random() - 0.35) * 0.42 : 0;
    const delta = ruidoBase + impulso;

    this.magnitud = clamp(this.magnitud + delta, 0, 1);
    this.cambio = delta;
    this.tendencia = this.tendencia * 0.9 + this.cambio * 0.1;
    this.volatilidad = clamp(
      this.volatilidad * 0.7 + Math.abs(delta) * (evento ? 2.4 : 1.2),
      0,
      1
    );

    if (evento) {
      this._topicoActual = this._topicos[Math.floor(Math.random() * this._topicos.length)];
    }
    const intensidad = Math.round(this.magnitud * 100);
    this.payloadText = `${this._topicoActual}:${intensidad}`;
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
