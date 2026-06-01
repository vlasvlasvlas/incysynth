import { DataSourceAdapter } from './DataSourceAdapter.js';
import { ClimaMock } from './ClimaMock.js';

// API real de OpenWeather con fallback a mock si no hay clave o falla la red
export class OpenWeatherAdapter extends DataSourceAdapter {
  constructor(apiKey, ciudad = 'Buenos Aires') {
    super();
    this.apiKey  = apiKey;
    this.ciudad  = ciudad;
    this._mock   = new ClimaMock();
    this._usandoMock = !apiKey;
    this._fetchInterval = null;
  }

  start() {
    if (!this.apiKey) {
      this._usandoMock = true;
      this.payloadText = '(sin clave API — usando simulación)';
      return;
    }
    this._fetch();
    this._fetchInterval = setInterval(() => this._fetch(), 10 * 60 * 1000); // cada 10 min
  }

  stop() {
    if (this._fetchInterval) clearInterval(this._fetchInterval);
  }

  // tick() es llamado por el loop principal cada 800ms
  // Si estamos en modo mock, simula; si tenemos datos reales, hace pequeñas interpolaciones
  tick() {
    if (this._usandoMock) {
      this._mock.tick();
      this.magnitud    = this._mock.magnitud;
      this.cambio      = this._mock.cambio;
      this.tendencia   = this._mock.tendencia;
      this.volatilidad = this._mock.volatilidad;
      if (!this.payloadText?.startsWith('(real)')) {
        this.payloadText = `(sim) ${this._mock.payloadText}`;
      }
      return;
    }
    // Con datos reales: pequeña interpolación hacia el target
    if (this._targetMagnitud !== undefined) {
      const delta = (this._targetMagnitud - this.magnitud) * 0.1;
      this.magnitud    = clamp(this.magnitud + delta, 0, 1);
      this.cambio      = delta;
      this.tendencia   = this.tendencia * 0.95 + this.cambio * 0.05;
      this.volatilidad = clamp(0.05 + Math.abs(delta) * 5, 0, 1);
    }
  }

  async _fetch() {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(this.ciudad)}&appid=${this.apiKey}&units=metric`;
      const res  = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const temp    = data.main.temp;       // celsius
      const humedad = data.main.humidity;   // %
      const viento  = data.wind.speed;      // m/s
      const desc    = data.weather[0].description;

      // Normalizar: -10°C = 0, 40°C = 1
      this._targetMagnitud = clamp((temp + 10) / 50, 0, 1);
      this.volatilidad     = clamp(viento / 20, 0, 1);
      this._usandoMock     = false;
      this.payloadText     = `(real) ${data.name}: ${temp.toFixed(1)}°C ${desc}, humedad ${humedad}%`;
    } catch (e) {
      this._usandoMock = true;
      this.payloadText = `(error API: ${e.message}) — usando simulación`;
    }
  }
}

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
