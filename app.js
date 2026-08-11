const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- Local storage layer (replaces the server API entirely) ---------- */
const STORE_KEY = 'crt_local_v1';

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}
function saveStore(store) {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}
function emptyStore(name) {
  return {
    profile: { username: name, avatar: null, rank: 'UNRANKED', division: '', sr: 0, srTarget: 0, goalRank: '' },
    matches: []
  };
}

let store = loadStore();
let selectedResult = 'WIN', statRange = 'all';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[ch]));

const toast = (m) => {
  const t = $('#toast');
  t.textContent = m;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
};

const avatarFallback = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="#20232a"/><circle cx="100" cy="78" r="38" fill="#f28c00"/><path d="M35 185c5-43 30-64 65-64s60 21 65 64" fill="#f28c00"/></svg>`
);

const RANK_COLORS = { DIAMOND: '#4fa8ff', PLATIN: '#9fb3c8', PLATINUM: '#9fb3c8', GOLD: '#f2c14e', SILBER: '#c8c8d0', SILVER: '#c8c8d0', BRONZE: '#c47a4a', UNRANKED: '#5a5f6b', CRIMSON: '#ff5c5c', IRIDESCENT: '#8b6bff' };
const rankColor = (r) => RANK_COLORS[(r || 'UNRANKED').toUpperCase()] || '#8b909c';

/* ---------- First-run setup ---------- */
$('#setupForm').onsubmit = e => {
  e.preventDefault();
  const name = $('#setupName').value.trim();
  if (!name) return;
  store = emptyStore(name);
  saveStore(store);
  enterApp();
};

/* ---------- Navigation ---------- */
function showPage(page) {
  $$('.nav').forEach(x => x.classList.toggle('active', x.dataset.page === page));
  $$('.bnav').forEach(x => x.classList.toggle('active', x.dataset.page === page));
  $$('.page').forEach(x => x.classList.toggle('active-page', x.id === page));
  $('.sidebar').classList.remove('open');
  $('#moreSheet').classList.remove('open');
  if (page === 'history') drawHistory();
  if (page === 'stats') renderStats();
}
$$('.nav').forEach(b => b.onclick = () => showPage(b.dataset.page));
$$('.bnav[data-page]').forEach(b => b.onclick = () => showPage(b.dataset.page));
$('#mobileMenu').onclick = () => $('.sidebar').classList.toggle('open');
$('#settingsBtn').onclick = () => showPage('settings');
$('#bnavMore').onclick = () => $('#moreSheet').classList.toggle('open');

/* ---------- Match entry ---------- */
$$('.result').forEach(b => b.onclick = () => {
  selectedResult = b.dataset.result;
  $$('.result').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
});
$('#minusSr').onclick = () => $('#srChange').value = Number($('#srChange').value || 0) - 1;
$('#plusSr').onclick = () => $('#srChange').value = Number($('#srChange').value || 0) + 1;

function uid() {
  return (crypto.randomUUID ? crypto.randomUUID() : 'm-' + Date.now() + '-' + Math.random().toString(16).slice(2));
}

$('#saveMatch').onclick = () => {
  const srChange = Math.trunc(Number($('#srChange').value));
  if (!Number.isFinite(srChange)) return toast('Ungültige SR-Änderung');
  const srBefore = Number(store.profile.sr || 0);
  const srAfter = Math.max(0, srBefore + srChange);
  store.profile.sr = srAfter;
  store.matches.unshift({
    id: uid(), result: selectedResult, srChange, srBefore, srAfter,
    note: $('#note').value.trim().slice(0, 160),
    kills: Math.max(0, Math.trunc(Number($('#kills').value) || 0)),
    deaths: Math.max(0, Math.trunc(Number($('#deaths').value) || 0)),
    rankAtMatch: [store.profile.rank || 'UNRANKED', store.profile.division].filter(Boolean).join(' '),
    createdAt: new Date().toISOString()
  });
  saveStore(store);
  $('#note').value = ''; $('#kills').value = 0; $('#deaths').value = 0;
  toast('Match gespeichert'); render();
};

/* ---------- Settings: profile, avatar ---------- */
$('#saveProfile').onclick = () => {
  store.profile.rank = $('#profileRank').value.trim().slice(0, 32);
  store.profile.division = $('#profileDivision').value.trim().slice(0, 16);
  store.profile.sr = Math.max(0, Math.trunc(Number($('#profileSr').value) || 0));
  saveStore(store);
  toast('Profil gespeichert'); render();
};

$('#profileName').addEventListener('change', () => {
  const name = $('#profileName').value.trim();
  if (name) { store.profile.username = name.slice(0, 24); saveStore(store); render(); }
});

function resizeImageToDataUrl(file, maxSize, cb) {
  const img = new Image();
  const reader = new FileReader();
  reader.onload = e => { img.src = e.target.result; };
  img.onload = () => {
    const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
    const w = Math.round(img.width * scale), h = Math.round(img.height * scale);
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    c.getContext('2d').drawImage(img, 0, 0, w, h);
    cb(c.toDataURL('image/jpeg', 0.85));
  };
  reader.readAsDataURL(file);
}

$('#uploadAvatar').onclick = () => {
  const f = $('#avatarInput').files[0];
  if (!f) return toast('Bitte zuerst ein Bild auswählen');
  if (f.size > 8 * 1024 * 1024) return toast('Bild ist zu groß (max. 8 MB)');
  resizeImageToDataUrl(f, 320, dataUrl => {
    store.profile.avatar = dataUrl;
    saveStore(store);
    toast('Profilbild aktualisiert'); render();
  });
};

/* ---------- Goals ---------- */
$('#saveGoal').onclick = () => {
  store.profile.goalRank = $('#goalRankInput').value.trim().slice(0, 40);
  store.profile.srTarget = Math.max(0, Math.trunc(Number($('#goalSrInput').value) || 0));
  saveStore(store);
  toast('Ziel gespeichert'); render();
};

/* ---------- Export / Import / Reset ---------- */
function exportData() {
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), ...store }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `cod-ranked-tracker-${store.profile.username || 'backup'}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
$('#exportBtn').onclick = exportData;
$('#exportBtn2').onclick = exportData;

$('#importFile').onchange = () => {
  const f = $('#importFile').files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.profile || !Array.isArray(data.matches)) throw new Error('ungültig');
      store = { profile: data.profile, matches: data.matches };
      saveStore(store);
      toast('Sicherung wiederhergestellt'); render();
    } catch { toast('Diese Datei ist keine gültige Sicherung'); }
  };
  reader.readAsText(f);
};

$('#resetBtn').onclick = () => {
  if (!confirm('Wirklich ALLE lokalen Daten unwiderruflich löschen?')) return;
  localStorage.removeItem(STORE_KEY);
  location.reload();
};

/* ---------- Stats range tabs ---------- */
$$('.stat-tab').forEach(b => b.onclick = () => {
  statRange = b.dataset.range;
  $$('.stat-tab').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  renderStats();
});

/* ---------- Stats computation (client-side, mirrors the old server logic) ---------- */
function localDateKey(d) {
  const dt = new Date(d);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}
function computeStats(matches) {
  const wins = matches.filter(m => m.result === 'WIN').length;
  const losses = matches.filter(m => m.result === 'LOSS').length;
  const kills = matches.reduce((s, m) => s + Number(m.kills || 0), 0);
  const deaths = matches.reduce((s, m) => s + Number(m.deaths || 0), 0);
  const ordered = [...matches].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  let streak = 0;
  for (const m of ordered) { if (m.result === 'WIN') streak++; else break; }
  const rankCounts = {};
  for (const m of matches) {
    const base = (m.rankAtMatch || 'UNRANKED').split(' ')[0] || 'UNRANKED';
    rankCounts[base] = (rankCounts[base] || 0) + 1;
  }
  const rankDistribution = Object.entries(rankCounts)
    .map(([rank, count]) => ({ rank, count, pct: matches.length ? (count / matches.length) * 100 : 0 }))
    .sort((a, b) => b.count - a.count);
  return {
    total: matches.length, wins, losses,
    winrate: matches.length ? (wins / matches.length) * 100 : 0,
    avgSr: matches.length ? matches.reduce((s, m) => s + Number(m.srChange || 0), 0) / matches.length : 0,
    streak,
    kd: deaths > 0 ? kills / deaths : kills,
    rankDistribution
  };
}
function getStats(range) {
  const all = store.matches;
  const now = new Date();
  const todayKey = localDateKey(now);
  const todayMatches = all.filter(m => localDateKey(m.createdAt) === todayKey);
  const monthMatches = all.filter(m => {
    const d = new Date(m.createdAt);
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  });
  const scoped = range === 'today' ? todayMatches : range === 'month' ? monthMatches : all;
  return {
    ...computeStats(scoped),
    today: {
      matches: todayMatches.length,
      wins: todayMatches.filter(m => m.result === 'WIN').length,
      losses: todayMatches.filter(m => m.result === 'LOSS').length,
      sr: todayMatches.reduce((s, m) => s + Number(m.srChange || 0), 0)
    }
  };
}

/* ---------- Delete match (with SR chain recompute) ---------- */
function deleteMatch(id) {
  const idx = store.matches.findIndex(m => m.id === id);
  if (idx < 0) return;
  const removed = store.matches[idx];
  store.matches.splice(idx, 1);
  store.profile.sr = Math.max(0, Number(store.profile.sr || 0) - Number(removed.srChange || 0));
  for (const m of store.matches) {
    if (new Date(m.createdAt) > new Date(removed.createdAt)) {
      if (Number.isFinite(Number(m.srBefore))) m.srBefore = Math.max(0, Number(m.srBefore) - Number(removed.srChange || 0));
      if (Number.isFinite(Number(m.srAfter))) m.srAfter = Math.max(0, Number(m.srAfter) - Number(removed.srChange || 0));
    }
  }
  saveStore(store);
  toast('Match gelöscht'); render();
}

/* ---------- App lifecycle ---------- */
function enterApp() {
  $('#setupView').classList.add('hidden');
  $('#appView').classList.remove('hidden');
  render();
}

function render() {
  const p = store.profile;
  const av = p.avatar || avatarFallback;
  $('#sideAvatar').src = av; $('#profileAvatar').src = av;
  $('#sideName').textContent = p.username;
  $('#helloName').textContent = p.username;
  $('#profileName').value = p.username;

  $('#rankName').textContent = p.rank || 'UNRANKED';
  $('#divisionName').textContent = p.division ? `DIVISION ${p.division}` : '';
  $('#srValue').textContent = p.sr.toLocaleString('de-DE');
  $('#srTarget').textContent = p.srTarget ? `/ ${p.srTarget.toLocaleString('de-DE')}` : '';
  const pct = p.srTarget ? Math.min(100, (p.sr / p.srTarget) * 100) : 0;
  $('#srBar').style.width = pct + '%';
  $('#srRemaining').textContent = p.srTarget ? `${Math.max(0, p.srTarget - p.sr)} SR bis zum Ziel` : 'Noch kein Ziel gesetzt';

  const s = getStats(statRange);
  $('#todaySr').textContent = (s.today.sr >= 0 ? '+' : '') + s.today.sr;
  $('#todaySr').style.color = s.today.sr >= 0 ? 'var(--green)' : 'var(--red)';
  $('#todayMatches').textContent = s.today.matches;
  $('#todayWL').textContent = `${s.today.wins}W · ${s.today.losses}L`;
  $('#winrate').textContent = s.winrate.toFixed(1) + '%';
  $('#streak').textContent = '🔥 ' + s.streak;

  $('#profileRank').value = p.rank;
  $('#profileDivision').value = p.division;
  $('#profileSr').value = p.sr;
  $('#goalRankInput').value = p.goalRank || '';
  $('#goalSrInput').value = p.srTarget || '';
  $('#goalCurrentSr').textContent = p.sr.toLocaleString('de-DE') + ' SR';
  $('#goalBar').style.width = pct + '%';
  $('#goalRemaining').textContent = p.srTarget
    ? `${Math.max(0, p.srTarget - p.sr)} SR bis ${p.goalRank || 'Ziel'}`
    : 'Noch kein Ziel gesetzt';

  renderStats();
  renderMatches();
  draw($('#chart'), store.matches.slice(0, 12).slice().reverse());
}

function renderStats() {
  const s = getStats(statRange);
  $('#totalMatches').textContent = s.total;
  $('#totalWins').textContent = s.wins;
  $('#totalLosses').textContent = s.losses;
  $('#totalWinrate').textContent = s.winrate.toFixed(1) + '%';
  $('#avgSr').textContent = (s.avgSr >= 0 ? '+' : '') + s.avgSr.toFixed(1);
  $('#kdRatio').textContent = s.kd.toFixed(2);
  drawDonut(s.rankDistribution || []);
}

function renderMatches() {
  const html = store.matches.map(m => `
    <div class="match-row">
      <strong class="${m.result === 'WIN' ? 'win-t' : 'loss-t'}">${m.result}</strong>
      <strong class="${m.srChange >= 0 ? 'win-t' : 'loss-t'}">${m.srChange >= 0 ? '+' : ''}${m.srChange} SR</strong>
      <span>${escapeHtml(m.note || '—')}${m.kills || m.deaths ? ` · ${Number(m.kills || 0)}/${Number(m.deaths || 0)} K/D` : ''}</span>
      <small class="date">${new Date(m.createdAt).toLocaleDateString('de-DE')}</small>
      <button class="delete" data-id="${m.id}">×</button>
    </div>`).join('') || '<p style="color:var(--muted)">Noch keine Matches gespeichert.</p>';
  $('#matchesList').innerHTML = html;
  $('#historyList').innerHTML = html;
  $$('.delete').forEach(b => b.onclick = () => {
    if (!confirm('Match wirklich löschen?')) return;
    deleteMatch(b.dataset.id);
  });
}

function drawHistory() { draw($('#historyChart'), store.matches.slice().reverse()); }

function draw(c, data) {
  const ctx = c.getContext('2d'), w = c.width, h = c.height;
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#23262d'; ctx.lineWidth = 1;
  for (let i = 1; i < 5; i++) { const y = i * h / 5; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  if (!data.length) return;
  const vals = data.map(x => x.srAfter), min = Math.min(...vals) - 50, max = Math.max(...vals) + 50, range = Math.max(1, max - min);
  ctx.strokeStyle = '#ff7a1a'; ctx.lineWidth = 4; ctx.beginPath();
  vals.forEach((v, i) => {
    const x = (i / Math.max(1, vals.length - 1)) * (w - 30) + 15, y = h - 20 - ((v - min) / range) * (h - 40);
    i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  });
  ctx.stroke();
  ctx.fillStyle = '#ff7a1a';
  vals.forEach((v, i) => {
    const x = (i / Math.max(1, vals.length - 1)) * (w - 30) + 15, y = h - 20 - ((v - min) / range) * (h - 40);
    ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
  });
}

function drawDonut(dist) {
  const c = $('#donutChart'); if (!c) return;
  const ctx = c.getContext('2d'), w = c.width, h = c.height, cx = w / 2, cy = h / 2, r = Math.min(w, h) / 2 - 8, inner = r * 0.62;
  ctx.clearRect(0, 0, w, h);
  if (!dist.length) {
    ctx.strokeStyle = '#23262d'; ctx.lineWidth = r - inner; ctx.beginPath();
    ctx.arc(cx, cy, (r + inner) / 2, 0, Math.PI * 2); ctx.stroke();
    $('#donutLegend').innerHTML = '<span class="muted">Noch keine Matches für diesen Zeitraum.</span>';
    return;
  }
  let start = -Math.PI / 2;
  ctx.lineWidth = r - inner;
  dist.forEach(d => {
    const angle = (d.pct / 100) * Math.PI * 2;
    ctx.strokeStyle = rankColor(d.rank);
    ctx.beginPath();
    ctx.arc(cx, cy, (r + inner) / 2, start, start + angle);
    ctx.stroke();
    start += angle;
  });
  $('#donutLegend').innerHTML = dist.map(d => `
    <div class="legend-row"><span class="legend-dot" style="background:${rankColor(d.rank)}"></span>${escapeHtml(d.rank)}<span>${d.pct.toFixed(0)}%</span></div>
  `).join('');
}

/* ---------- Boot ---------- */
if (store && store.profile) {
  enterApp();
} else {
  $('#setupView').classList.remove('hidden');
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
