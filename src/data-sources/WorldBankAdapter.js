import { DataSourceAdapter } from './DataSourceAdapter.js';

// World Bank Open Data API — completamente libre, sin key
// https://datahelpdesk.worldbank.org/knowledgebase/articles/898581
export class WorldBankAdapter extends DataSourceAdapter {
  constructor() {
    super();
    this._paisCodigo    = null;
    this._indicador     = null;
    this._indicadorMeta = null; // { invert, rango }
    this._valorCrudo    = null;
    this._modo          = 'sin_configurar';
    this.payloadText    = 'lente país: sin configurar';
  }

  async setLente(paisCodigo, indicadorCodigo, indicadorMeta, rango) {
    this._paisCodigo    = paisCodigo;
    this._indicador     = indicadorCodigo;
    this._indicadorMeta = indicadorMeta;
    this._rango         = rango;
    this._modo          = 'cargando';
    this.payloadText    = `${paisCodigo}/${indicadorCodigo}: cargando...`;
    await this._fetch();
  }

  tick() {}  // datos anuales — no hay tick de simulación

  async _fetch() {
    if (!this._paisCodigo || !this._indicador) return;
    try {
      // World Bank API: último valor disponible
      const url = `https://api.worldbank.org/v2/country/${this._paisCodigo}/indicator/${this._indicador}`
        + `?format=json&mrv=1&per_page=1`;
      const res  = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      // Estructura: [ meta, [ { value, date, country } ] ]
      const registros = data[1];
      if (!registros?.length || registros[0].value === null) {
        throw new Error('sin datos');
      }

      const registro = registros[0];
      this._valorCrudo = registro.value;
      const pais       = registro.country?.value || this._paisCodigo;
      const año        = registro.date;

      // Normalizar
      const rango = this._rango;
      let norm = rango
        ? Math.max(0, Math.min(1, (this._valorCrudo - rango.min) / (rango.max - rango.min)))
        : Math.max(0, Math.min(1, this._valorCrudo / 100));
      this.magnitud = this._indicadorMeta?.invert ? 1 - norm : norm;

      this.cambio      = 0;
      this.tendencia   = 0;
      this.volatilidad = 0;
      this._modo       = 'real';
      this.payloadText = `${pais} ${año}: ${this._valorCrudo?.toFixed?.(1) ?? this._valorCrudo} (${this._indicador})`;
    } catch (e) {
      this._modo = 'error';
      this.payloadText = `${this._paisCodigo}/${this._indicador}: ${e.message}`;
      // Mantener el valor anterior si existía
    }
  }

  getInfoTexto() {
    return {
      modo:      this._modo,
      crudo:     this._valorCrudo,
      pais:      this._paisCodigo,
      indicador: this._indicador,
      payload:   this.payloadText,
    };
  }
}
