// Controles independientes: lente país, noticias y selector de ciudad

export function buildNoticiasCard(noticiasFuente) {
  const card = document.createElement('div');
  card.className = 'lente-card noticias-card';

  const h = document.createElement('h3');
  h.textContent = 'NOTICIAS';
  card.appendChild(h);

  const help = document.createElement('div');
  help.className = 'noticias-help';
  help.textContent = 'Elegis pais/edicion y medio. Los titulares se convierten en palabras, categorias y presion musical.';
  card.appendChild(help);

  const rowPais = document.createElement('div');
  rowPais.className = 'lente-row';
  const lblPais = document.createElement('span');
  lblPais.className = 'lente-label';
  lblPais.textContent = 'PAIS';
  const selPais = document.createElement('select');
  selPais.className = 'lente-sel';
  rowPais.appendChild(lblPais);
  rowPais.appendChild(selPais);
  card.appendChild(rowPais);

  const rowMedio = document.createElement('div');
  rowMedio.className = 'lente-row';
  const lblMedio = document.createElement('span');
  lblMedio.className = 'lente-label';
  lblMedio.textContent = 'MEDIO';
  const selMedio = document.createElement('select');
  selMedio.className = 'lente-sel';
  rowMedio.appendChild(lblMedio);
  rowMedio.appendChild(selMedio);
  card.appendChild(rowMedio);

  const estado = document.createElement('div');
  estado.className = 'lente-crudo noticias-status';
  card.appendChild(estado);

  const catalog = noticiasFuente.getCatalog ? noticiasFuente.getCatalog() : [];
  for (const country of catalog) {
    const opt = document.createElement('option');
    opt.value = country.id;
    opt.textContent = country.label;
    selPais.appendChild(opt);
  }

  const fillMedios = () => {
    const country = catalog.find(c => c.id === selPais.value) || catalog[0];
    selMedio.innerHTML = '<option value="all">Todos los medios del pais</option>';
    for (const feed of country?.feeds || []) {
      const opt = document.createElement('option');
      opt.value = feed.id;
      opt.textContent = feed.name;
      selMedio.appendChild(opt);
    }
  };

  const apply = async () => {
    if (!noticiasFuente.setSelection) return;
    selPais.disabled = true;
    selMedio.disabled = true;
    estado.textContent = 'cargando RSS...';
    try {
      await noticiasFuente.setSelection(selPais.value, selMedio.value);
      const selection = noticiasFuente.getSelection?.();
      estado.textContent = selection
        ? `${selection.countryLabel} / ${selection.sourceLabel}`
        : 'noticias actualizadas';
    } catch (e) {
      estado.textContent = `error: ${e.message || e}`;
    } finally {
      selPais.disabled = false;
      selMedio.disabled = false;
    }
  };

  selPais.addEventListener('change', () => {
    fillMedios();
    apply();
  });
  selMedio.addEventListener('change', apply);

  if (catalog[0]) selPais.value = catalog[0].id;
  fillMedios();
  const selection = noticiasFuente.getSelection?.();
  estado.textContent = selection
    ? `${selection.countryLabel} / ${selection.sourceLabel}`
    : 'Global / todos los medios';

  return card;
}

export function buildMercadoCard(mercadoFuente) {
  const card = document.createElement('div');
  card.className = 'lente-card';

  const h = document.createElement('h3');
  h.textContent = 'MERCADO (COINGECKO)';
  card.appendChild(h);

  const row = document.createElement('div');
  row.className = 'lente-row';
  const lbl = document.createElement('span');
  lbl.className = 'lente-label';
  lbl.textContent = 'ACTIVOS';
  const sel = document.createElement('select');
  sel.className = 'lente-sel';

  const catalog = mercadoFuente.getCatalog ? mercadoFuente.getCatalog() : [];
  for (const item of catalog) {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = item.label;
    sel.appendChild(opt);
  }

  const estado = document.createElement('div');
  estado.className = 'lente-crudo';
  estado.style.marginTop = '0.25rem';

  sel.addEventListener('change', () => {
    if (mercadoFuente.setSelection) {
      mercadoFuente.setSelection(sel.value);
      estado.textContent = `Cargando ${sel.options[sel.selectedIndex].text}...`;
    }
  });

  if (mercadoFuente.getSelection) {
    const s = mercadoFuente.getSelection();
    if (s && s.id) sel.value = s.id;
  }

  row.appendChild(lbl);
  row.appendChild(sel);
  card.appendChild(row);
  card.appendChild(estado);

  return card;
}

export function buildLenteCard(paisesData, lenteFuente, instrumentos) {
  const card = document.createElement('div');
  card.className = 'lente-card';

  const h = document.createElement('h3');
  h.textContent = 'LENTE PAÍS';
  card.appendChild(h);

  // Selector de PAÍS
  const rowPais = document.createElement('div');
  rowPais.className = 'lente-row';
  const lblP = document.createElement('span');
  lblP.className = 'lente-label'; lblP.textContent = 'PAÍS';
  const selPais = document.createElement('select');
  selPais.className = 'lente-sel';
  selPais.innerHTML = '<option value="">— ninguno —</option>';
  for (const p of paisesData.paises) {
    selPais.innerHTML += `<option value="${p.codigo}">${p.nombre}</option>`;
  }
  rowPais.appendChild(lblP); rowPais.appendChild(selPais);
  card.appendChild(rowPais);

  // Selector de INDICADOR
  const rowInd = document.createElement('div');
  rowInd.className = 'lente-row';
  const lblI = document.createElement('span');
  lblI.className = 'lente-label'; lblI.textContent = 'DATO';
  const selInd = document.createElement('select');
  selInd.className = 'lente-sel';
  selInd.innerHTML = '<option value="">— ninguno —</option>';
  for (const ind of paisesData.indicadores) {
    selInd.innerHTML += `<option value="${ind.codigo}">${ind.nombre}</option>`;
  }
  rowInd.appendChild(lblI); rowInd.appendChild(selInd);
  card.appendChild(rowInd);

  // Barra de valor
  const rowVal = document.createElement('div');
  rowVal.className = 'lente-row'; rowVal.style.marginTop = '0.5rem';
  const barBg   = document.createElement('div'); barBg.className = 'lente-bar-bg';
  const barFill = document.createElement('div'); barFill.className = 'lente-bar-fill'; barFill.id = 'lente-bar';
  barBg.appendChild(barFill);
  const efEl    = document.createElement('span'); efEl.className = 'lente-efecto'; efEl.id = 'lente-efecto'; efEl.textContent = 'sin lente';
  rowVal.appendChild(barBg); rowVal.appendChild(efEl);
  card.appendChild(rowVal);

  // Dato crudo
  const crudoEl = document.createElement('div');
  crudoEl.className = 'lente-crudo'; crudoEl.id = 'lente-crudo';
  crudoEl.style.marginTop = '0.25rem';
  card.appendChild(crudoEl);

  // Lógica
  const update = async () => {
    const pais = selPais.value, ind = selInd.value;
    if (!pais || !ind) {
      efEl.textContent = 'sin lente';
      for (const id in instrumentos) instrumentos[id].conectarLente(null);
      return;
    }
    efEl.textContent = 'cargando...';
    const rango   = paisesData.rangos[ind];
    const indMeta = paisesData.indicadores.find(i => i.codigo === ind);
    await lenteFuente.setLente(pais, ind, indMeta, rango);
    const val = lenteFuente.magnitud;
    barFill.style.width  = `${val * 100}%`;
    efEl.textContent     = val > 0.7 ? 'central' : val > 0.3 ? 'borde' : 'periférico';
    crudoEl.textContent  = lenteFuente.payloadText;
    for (const id in instrumentos) instrumentos[id].conectarLente(lenteFuente);
  };

  selPais.addEventListener('change', update);
  selInd.addEventListener('change', update);
  return card;
}

export function buildCiudadCard(onCambioCiudad) {
  const card = document.createElement('div');
  card.className = 'ciudad-card';

  const h = document.createElement('h3');
  h.textContent = 'CIUDAD (CLIMA)';
  card.appendChild(h);

  const inp = document.createElement('input');
  inp.type = 'text'; inp.className = 'ciudad-input';
  inp.placeholder = 'Buenos Aires'; inp.value = 'Buenos Aires';
  card.appendChild(inp);

  const btn = document.createElement('button');
  btn.className = 'ciudad-btn'; btn.textContent = 'CAMBIAR';
  btn.addEventListener('click', async () => {
    const ciudad = inp.value.trim();
    if (!ciudad) return;
    btn.textContent = 'buscando...';
    btn.disabled = true;
    // Geocodificar con Open-Meteo Geocoding API (libre, sin key)
    try {
      const res  = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ciudad)}&count=1&language=es`);
      const data = await res.json();
      const loc  = data.results?.[0];
      if (!loc) { btn.textContent = 'no encontrada'; btn.disabled = false; return; }
      onCambioCiudad(loc.name, loc.latitude, loc.longitude);
      btn.textContent = `✓ ${loc.name}`;
      setTimeout(() => { btn.textContent = 'CAMBIAR'; btn.disabled = false; }, 2000);
    } catch (e) {
      btn.textContent = 'error'; btn.disabled = false;
    }
  });
  card.appendChild(btn);
  return card;
}
