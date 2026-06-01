import { DataSourceAdapter } from './DataSourceAdapter.js';
import { ClimaMock } from './ClimaMock.js';

// Open-Meteo: completamente libre, sin API key, sin registro
// Docs: https://open-meteo.com/en/docs
export class OpenMeteoAdapter extends DataSourceAdapter {
  constructor(lat = -34.6, lon = -58.4, ciudad = 'Buenos Aires') {
    super();
    this.lat    = lat;
    this.lon    = lon;
    this.ciudad = ciudad;
    this._mock  = new ClimaMock();
    this._modo  = 'conectando';
    this._lastTemp   = null;
    this._lastViento = null;
    this.payloadText = `${ciudad}: iniciando...`;
  }

  start() {
    this._fetch();
    setInterval(() => this._fetch(), 10 * 60 * 1000); // cada 10 min
  }

  tick() {
    // Interpolación suave mientras esperamos el próximo fetch
    this._mock.tick();
    if (this._modo === 'error' || this._modo === 'conectando') {
      this.magnitud    = this._mock.magnitud;
      this.cambio      = this._mock.cambio;
      this.tendencia   = this._mock.tendencia;
      this.volatilidad = this._mock.volatilidad;
      return;
    }
    // Modo real: pequeñas oscilaciones alrededor del valor real
    const drift = (Math.random() - 0.5) * 0.005;
    this.cambio      = drift;
    this.magnitud    = clamp(this.magnitud + drift, 0, 1);
    this.tendencia   = this.tendencia * 0.95 + this.cambio * 0.05;
  }

  async _fetch() {
    try {
      const url = `https://api.open-meteo.com/v1/forecast`
        + `?latitude=${this.lat}&longitude=${this.lon}`
        + `&current_weather=true&hourly=relative_humidity_2m`
        + `&forecast_days=1`;
      const res  = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const cw      = data.current_weather;
      const temp    = cw.temperature;       // celsius
      const viento  = cw.windspeed;         // km/h
      const codigo  = cw.weathercode;
      const humedad = data.hourly?.relative_humidity_2m?.[0] ?? 50;

      const prevMag    = this.magnitud;
      // Normalizar: -10°C → 0, 40°C → 1
      this.magnitud    = clamp((temp + 10) / 50, 0, 1);
      this.cambio      = this.magnitud - prevMag;
      this.tendencia   = this.tendencia * 0.9 + this.cambio * 0.1;
      // volatilidad = viento normalizado: 0 km/h → 0, 80 km/h → 1
      this.volatilidad = clamp(viento / 80, 0, 1);

      this._modo  = 'real';
      const descWMO = wmoDesc(codigo);
      this.payloadText = `${this.ciudad}: ${temp.toFixed(1)}°C ${descWMO}, viento ${viento}km/h`;
    } catch (e) {
      this._modo = 'error';
      this.payloadText = `${this.ciudad}: sin red — sim activa`;
    }
  }
}

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

// WMO Weather Code → descripción breve
function wmoDesc(code) {
  if (code === 0)          return '☀ despejado';
  if (code <= 3)           return '⛅ nublado';
  if (code <= 9)           return '🌫 niebla';
  if (code <= 19)          return '🌦 lluvia leve';
  if (code <= 29)          return '⛈ tormenta';
  if (code <= 39)          return '🌨 nieve';
  if (code <= 49)          return '🌫 niebla';
  if (code <= 59)          return '🌧 llovizna';
  if (code <= 69)          return '🌧 lluvia';
  if (code <= 79)          return '❄ nieve';
  if (code <= 99)          return '⛈ tormenta';
  return '?';
}
