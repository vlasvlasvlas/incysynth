import * as Tone from 'tone';

export class Pulse {
  constructor() {
    this.degradacion = 0;
    // Pulso más audible: triangle en lugar de sine, volumen -18 en vez de -28
    this._synth = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.002, decay: 0.1, sustain: 0, release: 0.05 },
    }).toDestination();
    this._synth.volume.value = -18;
  }

  setDegradacion(valor) {
    this.degradacion = Math.max(0, Math.min(1, valor));
  }

  // Pulso en Do6 cada corchea — ancla rítmica de In C
  triggerAt(time) {
    const pDropout = Math.pow(this.degradacion, 2) * 0.12;
    if (Math.random() < pDropout) return;
    const jitter = (Math.random() - 0.5) * this.degradacion * 0.1;
    this._synth.triggerAttackRelease('C6', '16n', time + jitter);
  }

  setVolume(db) {
    this._synth.volume.rampTo(db, 0.3);
  }

  dispose() {
    this._synth.dispose();
  }
}
