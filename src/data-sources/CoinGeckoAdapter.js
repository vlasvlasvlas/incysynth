import { DataSourceAdapter } from './DataSourceAdapter.js';
import { BolsaMock } from './BolsaMock.js';

// CoinGecko: libre, sin API key, sin registro
// Usa BTC + ETH como proxies de volatilidad del mercado
const CRYPTO_CATALOG = [
  { id: 'bitcoin,ethereum', label: 'Top 2 (BTC/ETH)', desc: 'Indicador general del mercado' },
  { id: 'solana,cardano,polkadot', label: 'Altcoins Layer 1', desc: 'Volatilidad media/alta' },
  { id: 'dogecoin,shiba-inu', label: 'Memecoins', desc: 'Volatilidad extrema, guiada por redes' },
  { id: 'tether,usd-coin', label: 'Stablecoins', desc: 'Refugio, baja volatilidad' },
];

export class CoinGeckoAdapter extends DataSourceAdapter {
  constructor() {
    super();
    this._mock = new BolsaMock();
    this._modo = 'conectando';
    this._coinsId = 'bitcoin,ethereum';
    this._coinsLabel = 'Top 2 (BTC/ETH)';
    this.payloadText = 'mercado: iniciando...';
  }

  start() {
    this._fetch();
    setInterval(() => this._fetch(), 5 * 60 * 1000); // cada 5 min
  }

  tick() {
    if (this._modo !== 'real') {
      this._mock.tick();
      this.magnitud    = this._mock.magnitud;
      this.cambio      = this._mock.cambio;
      this.tendencia   = this._mock.tendencia;
      this.volatilidad = this._mock.volatilidad;
      return;
    }
    // Modo real: pequeñas oscilaciones
    const drift = (Math.random() - 0.5) * 0.003;
    this.cambio   = drift;
    this.magnitud = clamp(this.magnitud + drift, 0, 1);
    this.tendencia = this.tendencia * 0.97 + this.cambio * 0.03;
  }

  async _fetch() {
    try {
      const url = 'https://api.coingecko.com/api/v3/simple/price'
        + `?ids=${this._coinsId}`
        + '&vs_currencies=usd'
        + '&include_24hr_change=true'
        + '&include_24hr_vol=true';
      const res  = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const coins = this._coinsId.split(',');
      let sumChange = 0;
      let validCoins = 0;
      for (const coin of coins) {
        if (data[coin] && typeof data[coin].usd_24h_change === 'number') {
          sumChange += data[coin].usd_24h_change;
          validCoins++;
        }
      }
      const avgChange = validCoins > 0 ? sumChange / validCoins : 0;

      // Normalizar: cambio -20% → 0, +20% → 1, 0% → 0.5
      const prevMag    = this.magnitud;
      this.magnitud    = clamp(0.5 + avgChange / 40, 0, 1);
      this.cambio      = this.magnitud - prevMag;
      this.tendencia   = this.tendencia * 0.9 + this.cambio * 0.1;
      // volatilidad = magnitud del cambio absoluto
      this.volatilidad = clamp(Math.abs(avgChange) / 15, 0, 1);

      this._modo = 'real';
      const sign = avgChange >= 0 ? '+' : '';
      const tickers = coins.map(c => c.substring(0,3).toUpperCase()).join('/');
      this.payloadText = `${tickers} ${sign}${avgChange.toFixed(1)}% (24h)`;
    } catch (e) {
      this._modo = 'error';
      this.payloadText = 'mercado: sin red — sim activa';
    }
  }
  getCatalog() {
    return CRYPTO_CATALOG;
  }

  setSelection(id) {
    const item = CRYPTO_CATALOG.find(c => c.id === id) || CRYPTO_CATALOG[0];
    this._coinsId = item.id;
    this._coinsLabel = item.label;
    this.payloadText = `mercado: cargando ${item.label}...`;
    this._fetch();
  }

  getSelection() {
    return { id: this._coinsId, label: this._coinsLabel };
  }
}

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
