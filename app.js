const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- i18n ---------- */
const I18N = {
  de: {
    'setup.title': 'Willkommen',
    'setup.body': 'Alles wird nur lokal auf diesem Gerät gespeichert – kein Server, kein Login. Leg dir kurz ein Profil an.',
    'setup.nameLabel': 'Dein Name',
    'setup.namePlaceholder': 'z. B. MrMaik240',
    'setup.submit': "Los geht's",
    'nav.overview': 'Übersicht', 'nav.matches': 'Matches', 'nav.history': 'Verlauf', 'nav.stats': 'Statistiken',
    'nav.goals': 'Ziele', 'nav.settings': 'Einstellungen', 'nav.more': 'Mehr', 'nav.help': 'Hilfe',
    'sidebar.local': 'Lokal auf diesem Gerät',
    'header.welcomeBack': 'Willkommen zurück,', 'header.backup': 'Daten sichern',
    'header.helpTitle': 'Hilfe', 'header.settingsTitle': 'Einstellungen',
    'overview.currentRank': 'AKTUELLER RANK', 'overview.noGoal': 'Noch kein Ziel gesetzt', 'overview.today': 'HEUTE',
    'overview.srToday': 'SR HEUTE', 'overview.matches': 'MATCHES', 'overview.winrate': 'WINRATE',
    'overview.bestStreak': 'BESTE STREAK', 'overview.winStreak': 'WIN STREAK', 'overview.srHistory': 'SR VERLAUF',
    'match.addTitle': 'MATCH HINZUFÜGEN', 'match.win': 'WIN', 'match.loss': 'LOSS', 'match.srChange': 'SR Veränderung',
    'match.kills': 'Kills', 'match.deaths': 'Deaths', 'match.placement': 'Platzierung', 'match.placementPh': 'z. B. 4',
    'match.damage': 'Schaden', 'match.damagePh': 'z. B. 3314', 'match.points': 'Punkte', 'match.pointsPh': 'z. B. 3750',
    'match.note': 'Notiz (optional)', 'match.notePh': 'z. B. starke Runde, schwierige Lobby ...',
    'match.save': 'MATCH SPEICHERN', 'match.update': 'MATCH AKTUALISIEREN', 'match.cancelEdit': 'Bearbeitung abbrechen',
    'matches.all': 'Alle', 'matches.wins': 'Siege', 'matches.losses': 'Niederlagen',
    'matches.sortDesc': '↓ Neueste zuerst', 'matches.sortAsc': '↑ Älteste zuerst',
    'matches.empty': 'Noch keine Matches gespeichert.',
    'stats.season': 'Season', 'stats.allSeasons': 'Alle Seasons', 'stats.total': 'Gesamt', 'stats.month': 'Monat',
    'stats.todayTab': 'Heute', 'stats.totalMatches': 'GESAMT MATCHES', 'stats.wins': 'SIEGE', 'stats.losses': 'NIEDERLAGEN',
    'stats.avgSr': 'Ø SR / MATCH', 'stats.avgPlacement': 'Ø PLATZIERUNG', 'stats.avgDamage': 'Ø SCHADEN',
    'stats.avgPoints': 'Ø PUNKTE', 'stats.bestPlacement': 'BESTE PLATZIERUNG', 'stats.rankDistribution': 'RANK VERTEILUNG',
    'stats.noMatches': 'Noch keine Matches für diesen Zeitraum.',
    'goals.title': 'Dein Ziel', 'goals.body': 'Setz dir ein Rang- und SR-Ziel und behalte deinen Fortschritt im Blick.',
    'goals.rank': 'Ziel-Rang', 'goals.rankPh': 'z. B. Diamond II', 'goals.sr': 'Ziel-SR', 'goals.save': 'Ziel speichern',
    'goals.noGoalReached': 'Noch kein Ziel gesetzt',
    'goals.estimate': 'Bei deinem aktuellen Tempo (Ø {avg} SR/Match) noch ca. {n} {matchWord} bis zum Ziel.',
    'goals.noEstimate': 'Noch keine verlässliche Tempo-Schätzung (spiel ein paar Matches, dann rechne ich dir das aus).',
    'goals.matchSingular': 'Match', 'goals.matchPlural': 'Matches',
    'goals.remaining': '{n} SR bis {rank}',
    'goals.toGoal': '{n} SR bis zum Ziel',
    'goals.genericGoal': 'Ziel',
    'settings.avatarTitle': 'Profilbild & Name', 'settings.nameLabel': 'Dein Name',
    'settings.avatarUpload': 'Profilbild übernehmen', 'settings.avatarNote': 'Wird direkt auf diesem Gerät gespeichert, verlässt es nie.',
    'settings.language': 'Sprache', 'settings.languageBody': 'Wähle die Sprache der App.',
    'settings.rankedTitle': 'Ranked-Profil', 'settings.rankedBody': 'Rang und Division werden automatisch aus deiner SR berechnet (Bo7-Ranked-System).',
    'settings.currentSr': 'Aktuelle SR', 'settings.saveProfile': 'Profil speichern',
    'settings.top250Toggle': 'Ich bin aktuell in den Top 250',
    'settings.top250Rank': 'Meine Platzierung (1–250)',
    'settings.backupTitle': 'Daten sichern & wiederherstellen',
    'settings.backupBody': 'Alles liegt nur in diesem Browser. Lösch niemals den Browser-Speicher, ohne vorher eine Sicherung herunterzuladen.',
    'settings.backupDownload': 'Sicherung herunterladen', 'settings.backupRestore': 'Sicherung wiederherstellen',
    'settings.backupNever': 'Noch keine Sicherung heruntergeladen.',
    'settings.backupAgo': 'Letzte Sicherung: vor {n} {dayWord}.',
    'settings.daySingular': 'Tag', 'settings.dayPlural': 'Tagen',
    'settings.seasonTitle': 'Season',
    'settings.seasonBody': 'Wenn eine neue CoD-Season deine SR zurücksetzt, starte hier eine neue Season, damit alte und neue Werte in der Statistik getrennt bleiben.',
    'settings.seasonLabel': 'Name der neuen Season', 'settings.seasonPh': 'z. B. Season 6', 'settings.seasonStart': 'Neue Season starten',
    'settings.seasonNone': 'Noch keine Season gestartet.', 'settings.seasonSince': 'seit',
    'settings.resetTitle': 'Zurücksetzen', 'settings.resetBody': 'Löscht alle lokalen Daten (Profil, Matches) unwiderruflich auf diesem Gerät.',
    'settings.resetButton': 'Alle Daten löschen',
    'help.h1': 'WIN oder LOSS?', 'help.p1': 'Bezieht sich auf deine SR-Veränderung, nicht auf Platz 1. SR gestiegen (auch bei Platz 2, 5, 8...) → WIN. SR gesunken → LOSS.',
    'help.h2': 'Platzierung, Schaden, Punkte', 'help.p2': 'Alle drei sind optional. Platzierung = mit welchem Platz du rausgegangen bist (z. B. "1" für den Sieg). Kannst du auch leer lassen.',
    'help.h3': 'Rang & Division', 'help.p3': 'Werden automatisch aus deiner SR berechnet – nichts manuell einstellen nötig.',
    'help.h4': 'Ziele', 'help.p4': 'Setz dir einen Wunschrang und eine Ziel-SR. Die App schätzt dir, wie viele Matches du bei deinem aktuellen Tempo noch brauchst.',
    'help.h5': 'Season-Marker', 'help.p5': 'Wenn eine neue CoD-Season deine SR zurücksetzt, starte unter Einstellungen eine "Neue Season" – so bleiben alte und neue Werte in der Statistik sauber getrennt.',
    'help.h6': 'Daten sichern', 'help.p6': 'Alles wird nur lokal auf diesem Gerät gespeichert. Lösch niemals den Browser-Speicher, ohne vorher unter Einstellungen eine Sicherung herunterzuladen.',
    'toast.matchSaved': 'Match gespeichert', 'toast.matchUpdated': 'Match aktualisiert', 'toast.matchDeleted': 'Match gelöscht',
    'toast.invalidSr': 'Ungültige SR-Änderung', 'toast.profileSaved': 'Profil gespeichert',
    'toast.pickImage': 'Bitte zuerst ein Bild auswählen', 'toast.imageTooBig': 'Bild ist zu groß (max. 8 MB)',
    'toast.avatarUpdated': 'Profilbild aktualisiert', 'toast.goalSaved': 'Ziel gespeichert',
    'toast.restoreOk': 'Sicherung wiederhergestellt', 'toast.restoreBad': 'Diese Datei ist keine gültige Sicherung',
    'toast.seasonStarted': 'Neue Season gestartet',
    'confirm.deleteMatch': 'Match wirklich löschen?', 'confirm.resetAll': 'Wirklich ALLE lokalen Daten unwiderruflich löschen?',
    'confirm.newSeason': 'Neue Season "{label}" ab jetzt starten? Bisherige Matches bleiben der vorherigen Season zugeordnet.',
    'backup.warnNever': '⚠ Du hast noch nie eine Sicherung heruntergeladen. Falls der Browser-Speicher gelöscht wird, sind deine Matches sonst weg.',
    'backup.warnOld': '⚠ Deine letzte Sicherung ist {n} Tage her. Unter Einstellungen eine neue herunterladen.',
    'match.kd': 'K/D', 'match.placementShort': 'Platz {n}', 'match.damageShort': '{n} Schaden', 'match.pointsShort': '{n} Punkte',
    'rank.topLeaderboard': 'Top 250 (Leaderboard)'
  },
  en: {
    'setup.title': 'Welcome',
    'setup.body': 'Everything is saved locally on this device only – no server, no login. Set up a quick profile.',
    'setup.nameLabel': 'Your name',
    'setup.namePlaceholder': 'e.g. MrMaik240',
    'setup.submit': "Let's go",
    'nav.overview': 'Overview', 'nav.matches': 'Matches', 'nav.history': 'History', 'nav.stats': 'Stats',
    'nav.goals': 'Goals', 'nav.settings': 'Settings', 'nav.more': 'More', 'nav.help': 'Help',
    'sidebar.local': 'Local on this device',
    'header.welcomeBack': 'Welcome back,', 'header.backup': 'Backup data',
    'header.helpTitle': 'Help', 'header.settingsTitle': 'Settings',
    'overview.currentRank': 'CURRENT RANK', 'overview.noGoal': 'No goal set yet', 'overview.today': 'TODAY',
    'overview.srToday': 'SR TODAY', 'overview.matches': 'MATCHES', 'overview.winrate': 'WIN RATE',
    'overview.bestStreak': 'BEST STREAK', 'overview.winStreak': 'WIN STREAK', 'overview.srHistory': 'SR HISTORY',
    'match.addTitle': 'ADD MATCH', 'match.win': 'WIN', 'match.loss': 'LOSS', 'match.srChange': 'SR change',
    'match.kills': 'Kills', 'match.deaths': 'Deaths', 'match.placement': 'Placement', 'match.placementPh': 'e.g. 4',
    'match.damage': 'Damage', 'match.damagePh': 'e.g. 3314', 'match.points': 'Points', 'match.pointsPh': 'e.g. 3750',
    'match.note': 'Note (optional)', 'match.notePh': 'e.g. strong round, tough lobby ...',
    'match.save': 'SAVE MATCH', 'match.update': 'UPDATE MATCH', 'match.cancelEdit': 'Cancel editing',
    'matches.all': 'All', 'matches.wins': 'Wins', 'matches.losses': 'Losses',
    'matches.sortDesc': '↓ Newest first', 'matches.sortAsc': '↑ Oldest first',
    'matches.empty': 'No matches saved yet.',
    'stats.season': 'Season', 'stats.allSeasons': 'All seasons', 'stats.total': 'Total', 'stats.month': 'Month',
    'stats.todayTab': 'Today', 'stats.totalMatches': 'TOTAL MATCHES', 'stats.wins': 'WINS', 'stats.losses': 'LOSSES',
    'stats.avgSr': 'AVG SR / MATCH', 'stats.avgPlacement': 'AVG PLACEMENT', 'stats.avgDamage': 'AVG DAMAGE',
    'stats.avgPoints': 'AVG POINTS', 'stats.bestPlacement': 'BEST PLACEMENT', 'stats.rankDistribution': 'RANK DISTRIBUTION',
    'stats.noMatches': 'No matches for this period yet.',
    'goals.title': 'Your goal', 'goals.body': 'Set a rank and SR goal and keep track of your progress.',
    'goals.rank': 'Target rank', 'goals.rankPh': 'e.g. Diamond II', 'goals.sr': 'Target SR', 'goals.save': 'Save goal',
    'goals.noGoalReached': 'No goal set yet',
    'goals.estimate': 'At your current pace (avg {avg} SR/match) about {n} {matchWord} left to your goal.',
    'goals.noEstimate': "No reliable pace estimate yet (play a few matches, then I'll calculate this).",
    'goals.matchSingular': 'match', 'goals.matchPlural': 'matches',
    'goals.remaining': '{n} SR to {rank}',
    'goals.toGoal': '{n} SR to your goal',
    'goals.genericGoal': 'goal',
    'settings.avatarTitle': 'Avatar & name', 'settings.nameLabel': 'Your name',
    'settings.avatarUpload': 'Apply avatar', 'settings.avatarNote': "Stored directly on this device, never leaves it.",
    'settings.language': 'Language', 'settings.languageBody': 'Choose the app language.',
    'settings.rankedTitle': 'Ranked profile', 'settings.rankedBody': 'Rank and division are calculated automatically from your SR (Bo7 ranked system).',
    'settings.currentSr': 'Current SR', 'settings.saveProfile': 'Save profile',
    'settings.top250Toggle': "I'm currently in the Top 250",
    'settings.top250Rank': 'My placement (1–250)',
    'settings.backupTitle': 'Backup & restore',
    'settings.backupBody': 'Everything lives only in this browser. Never clear browser storage without downloading a backup first.',
    'settings.backupDownload': 'Download backup', 'settings.backupRestore': 'Restore backup',
    'settings.backupNever': 'No backup downloaded yet.',
    'settings.backupAgo': 'Last backup: {n} {dayWord} ago.',
    'settings.daySingular': 'day', 'settings.dayPlural': 'days',
    'settings.seasonTitle': 'Season',
    'settings.seasonBody': 'When a new CoD season resets your SR, start a new season here so old and new values stay separated in your stats.',
    'settings.seasonLabel': 'New season name', 'settings.seasonPh': 'e.g. Season 6', 'settings.seasonStart': 'Start new season',
    'settings.seasonNone': 'No season started yet.', 'settings.seasonSince': 'since',
    'settings.resetTitle': 'Reset', 'settings.resetBody': 'Deletes all local data (profile, matches) permanently on this device.',
    'settings.resetButton': 'Delete all data',
    'help.h1': 'WIN or LOSS?', 'help.p1': "Refers to your SR change, not finishing 1st. SR went up (even at place 2, 5, 8...) → WIN. SR went down → LOSS.",
    'help.h2': 'Placement, damage, points', 'help.p2': 'All three are optional. Placement = what place you finished (e.g. "1" for the win). You can leave them empty.',
    'help.h3': 'Rank & division', 'help.p3': 'Calculated automatically from your SR – nothing to set manually.',
    'help.h4': 'Goals', 'help.p4': "Set a target rank and target SR. The app estimates how many matches you have left at your current pace.",
    'help.h5': 'Season markers', 'help.p5': 'When a new CoD season resets your SR, start a "New season" under settings – this keeps old and new values cleanly separated in your stats.',
    'help.h6': 'Backing up data', 'help.p6': 'Everything is stored locally on this device only. Never clear browser storage without downloading a backup under settings first.',
    'toast.matchSaved': 'Match saved', 'toast.matchUpdated': 'Match updated', 'toast.matchDeleted': 'Match deleted',
    'toast.invalidSr': 'Invalid SR change', 'toast.profileSaved': 'Profile saved',
    'toast.pickImage': 'Please choose an image first', 'toast.imageTooBig': 'Image is too large (max. 8 MB)',
    'toast.avatarUpdated': 'Avatar updated', 'toast.goalSaved': 'Goal saved',
    'toast.restoreOk': 'Backup restored', 'toast.restoreBad': 'This file is not a valid backup',
    'toast.seasonStarted': 'New season started',
    'confirm.deleteMatch': 'Really delete this match?', 'confirm.resetAll': 'Really delete ALL local data permanently?',
    'confirm.newSeason': 'Start new season "{label}" from now on? Existing matches stay assigned to the previous season.',
    'backup.warnNever': "⚠ You haven't downloaded a backup yet. If browser storage gets cleared, your matches would be lost.",
    'backup.warnOld': '⚠ Your last backup was {n} days ago. Download a new one under settings.',
    'match.kd': 'K/D', 'match.placementShort': 'Place {n}', 'match.damageShort': '{n} damage', 'match.pointsShort': '{n} points',
    'rank.topLeaderboard': 'Top 250 (Leaderboard)'
  }
};
let currentLang = 'de';
function t(key, vars) {
  let str = (I18N[currentLang] && I18N[currentLang][key]) || I18N.de[key] || key;
  if (vars) for (const k in vars) str = str.replace(`{${k}}`, vars[k]);
  return str;
}
function translateStatic() {
  document.documentElement.lang = currentLang;
  $$('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    const hasElChild = [...el.childNodes].some(n => n.nodeType === 1);
    if (hasElChild) {
      const textNode = [...el.childNodes].find(n => n.nodeType === 3);
      if (textNode) textNode.textContent = val;
      else el.insertBefore(document.createTextNode(val), el.firstChild);
    } else {
      el.textContent = val;
    }
  });
  $$('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.getAttribute('data-i18n-placeholder')));
  $$('[data-i18n-title]').forEach(el => el.title = t(el.getAttribute('data-i18n-title')));
}
function setLanguage(lang) {
  currentLang = (lang === 'en') ? 'en' : 'de';
  if ($('#languageSelect')) $('#languageSelect').value = currentLang;
  translateStatic();
  if (store && store.profile) render();
}
const locale = () => currentLang === 'en' ? 'en-US' : 'de-DE';

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
    profile: { username: name, avatar: null, rank: 'UNRANKED', division: '', sr: 0, startingSr: 0, srTarget: 0, goalRank: '', lastBackupAt: null, language: currentLang, top250: false, top250Rank: null },
    matches: [],
    seasons: []
  };
}

function recomputeChain() {
  const ordered = [...store.matches].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  let running = Number(store.profile.startingSr || 0);
  for (const m of ordered) {
    m.srBefore = running;
    running = Math.max(0, running + Number(m.srChange || 0));
    m.srAfter = running;
  }
  store.profile.sr = running;
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

const RANK_TIERS = [
  { key: 'Bronze',     nameDe: 'Bronze',     nameEn: 'Bronze',     min: 0,     color: '#cd7f32' },
  { key: 'Silver',     nameDe: 'Silber',     nameEn: 'Silver',     min: 900,   color: '#c3c9d1' },
  { key: 'Gold',       nameDe: 'Gold',       nameEn: 'Gold',       min: 2100,  color: '#e8c34a' },
  { key: 'Platinum',   nameDe: 'Platin',     nameEn: 'Platinum',   min: 3600,  color: '#3fd6c9' },
  { key: 'Diamond',    nameDe: 'Diamant',    nameEn: 'Diamond',    min: 5400,  color: '#4fa8ff' },
  { key: 'Crimson',    nameDe: 'Crimson',    nameEn: 'Crimson',    min: 7500,  color: '#e6483f' },
  { key: 'Iridescent', nameDe: 'Iridescent', nameEn: 'Iridescent', min: 10000, color: '#c14fe6' }
];
const tierName = (tier) => currentLang === 'en' ? tier.nameEn : tier.nameDe;

function rankForSr(sr) {
  sr = Math.max(0, Number(sr) || 0);
  let idx = 0;
  for (let i = 0; i < RANK_TIERS.length; i++) { if (sr >= RANK_TIERS[i].min) idx = i; }
  const tier = RANK_TIERS[idx];
  const next = RANK_TIERS[idx + 1];
  const name = tierName(tier);
  if (!next) {
    return { key: tier.key, name, division: '', color: tier.color, icon: `icons/ranks/${tier.key}.png`, nextLabel: t('rank.topLeaderboard'), srToNext: null };
  }
  const nextName = tierName(next);
  const range = next.min - tier.min;
  const third = range / 3;
  const pos = sr - tier.min;
  const divIdx = pos < third ? 0 : pos < 2 * third ? 1 : 2; // 0=I (entry), 1=II, 2=III (about to promote)
  const roman = ['I', 'II', 'III'][divIdx];
  const nextThreshold = divIdx < 2 ? tier.min + (divIdx + 1) * third : next.min;
  const nextLabel = divIdx < 2 ? `${name} ${['II', 'III'][divIdx]}` : (RANK_TIERS[idx + 2] ? `${nextName} I` : nextName);
  const icon = `icons/ranks/${tier.key}_Division_${roman}.png`;
  return { key: tier.key, name, division: roman, color: tier.color, icon, nextLabel, srToNext: Math.max(0, Math.round(nextThreshold - sr)) };
}

const RANK_COLORS = { DIAMOND: '#4fa8ff', PLATIN: '#3fd6c9', PLATINUM: '#3fd6c9', GOLD: '#e8c34a', SILBER: '#c3c9d1', SILVER: '#c3c9d1', BRONZE: '#cd7f32', UNRANKED: '#5a5f6b', CRIMSON: '#e6483f', IRIDESCENT: '#c14fe6' };
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
const openHelp = () => { $('#helpOverlay').classList.remove('hidden'); $('#moreSheet').classList.remove('open'); };
$('#helpBtn').onclick = openHelp;
$('#helpBtnMobile').onclick = openHelp;
$('#closeHelp').onclick = () => $('#helpOverlay').classList.add('hidden');
$('#helpOverlay').onclick = (e) => { if (e.target.id === 'helpOverlay') $('#helpOverlay').classList.add('hidden'); };

/* ---------- Match entry ---------- */
$$('.result').forEach(b => b.onclick = () => {
  selectedResult = b.dataset.result;
  $$('.result').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
});
function updateSrChangeColor() {
  $('#srChange').style.color = Number($('#srChange').value || 0) < 0 ? 'var(--red)' : 'var(--green)';
}
$('#srChange').addEventListener('input', updateSrChangeColor);
$('#minusSr').onclick = () => { $('#srChange').value = Number($('#srChange').value || 0) - 1; updateSrChangeColor(); };
$('#plusSr').onclick = () => { $('#srChange').value = Number($('#srChange').value || 0) + 1; updateSrChangeColor(); };

function uid() {
  return (crypto.randomUUID ? crypto.randomUUID() : 'm-' + Date.now() + '-' + Math.random().toString(16).slice(2));
}

let editingMatchId = null;

function resetMatchForm() {
  editingMatchId = null;
  $('#saveMatch').textContent = t('match.save');
  $('#cancelEdit').classList.add('hidden');
  $('#srChange').value = 25; $('#kills').value = 0; $('#deaths').value = 0;
  $('#placement').value = ''; $('#damage').value = ''; $('#points').value = ''; $('#note').value = '';
  selectedResult = 'WIN';
  $$('.result').forEach(x => x.classList.toggle('active', x.dataset.result === 'WIN'));
  updateSrChangeColor();
}

function startEditMatch(id) {
  const m = store.matches.find(x => x.id === id);
  if (!m) return;
  editingMatchId = id;
  selectedResult = m.result;
  $$('.result').forEach(x => x.classList.toggle('active', x.dataset.result === m.result));
  $('#srChange').value = m.srChange;
  updateSrChangeColor();
  $('#kills').value = m.kills || 0;
  $('#deaths').value = m.deaths || 0;
  $('#placement').value = Number.isFinite(m.placement) ? m.placement : '';
  $('#damage').value = Number.isFinite(m.damage) ? m.damage : '';
  $('#points').value = Number.isFinite(m.points) ? m.points : '';
  $('#note').value = m.note || '';
  $('#saveMatch').textContent = t('match.update');
  $('#cancelEdit').classList.remove('hidden');
  showPage('overview');
  $('.match-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

$('#cancelEdit').onclick = resetMatchForm;

$('#saveMatch').onclick = () => {
  const srChange = Math.trunc(Number($('#srChange').value));
  if (!Number.isFinite(srChange)) return toast(t('toast.invalidSr'));
  const optNum = (id) => { const v = $(id).value; return v === '' ? null : Math.max(0, Math.trunc(Number(v)) || 0); };
  const fields = {
    result: selectedResult, srChange,
    note: $('#note').value.trim().slice(0, 160),
    kills: Math.max(0, Math.trunc(Number($('#kills').value) || 0)),
    deaths: Math.max(0, Math.trunc(Number($('#deaths').value) || 0)),
    placement: optNum('#placement'),
    damage: optNum('#damage'),
    points: optNum('#points')
  };
  if (editingMatchId) {
    const m = store.matches.find(x => x.id === editingMatchId);
    if (m) Object.assign(m, fields);
    toast(t('toast.matchUpdated'));
  } else {
    store.matches.unshift({
      id: uid(), ...fields,
      rankAtMatch: '',
      createdAt: new Date().toISOString()
    });
    toast(t('toast.matchSaved'));
  }
  recomputeChain();
  // fill rankAtMatch for the affected match using its own srBefore now that the chain is computed
  const affected = editingMatchId ? store.matches.find(x => x.id === editingMatchId) : store.matches[0];
  if (affected) { const rk = rankForSr(affected.srBefore); affected.rankAtMatch = rk.division ? `${rk.name} ${rk.division}` : rk.name; }
  saveStore(store);
  resetMatchForm();
  render();
};

/* ---------- Match list filter/sort ---------- */
$$('.match-filter').forEach(b => b.onclick = () => {
  matchFilter = b.dataset.filter;
  $$('.match-filter').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  renderMatches();
});
$('#sortToggle').onclick = () => {
  matchSort = matchSort === 'desc' ? 'asc' : 'desc';
  $('#sortToggle').textContent = matchSort === 'desc' ? t('matches.sortDesc') : t('matches.sortAsc');
  renderMatches();
};

/* ---------- Settings: profile, avatar ---------- */
$('#top250Toggle').onchange = () => {
  $('#top250RankWrap').classList.toggle('hidden', !$('#top250Toggle').checked);
};

$('#saveProfile').onclick = () => {
  const newSr = Math.max(0, Math.trunc(Number($('#profileSr').value) || 0));
  const matchSum = store.matches.reduce((s, m) => s + Number(m.srChange || 0), 0);
  store.profile.startingSr = Math.max(0, newSr - matchSum);
  store.profile.top250 = $('#top250Toggle').checked;
  store.profile.top250Rank = store.profile.top250 ? Math.min(250, Math.max(1, Math.trunc(Number($('#top250Rank').value)) || 250)) : null;
  recomputeChain();
  saveStore(store);
  toast(t('toast.profileSaved')); render();
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
  if (!f) return toast(t('toast.pickImage'));
  if (f.size > 8 * 1024 * 1024) return toast(t('toast.imageTooBig'));
  resizeImageToDataUrl(f, 320, dataUrl => {
    store.profile.avatar = dataUrl;
    saveStore(store);
    toast(t('toast.avatarUpdated')); render();
  });
};

/* ---------- Goals ---------- */
$('#saveGoal').onclick = () => {
  store.profile.goalRank = $('#goalRankInput').value.trim().slice(0, 40);
  store.profile.srTarget = Math.max(0, Math.trunc(Number($('#goalSrInput').value) || 0));
  saveStore(store);
  toast(t('toast.goalSaved')); render();
};

/* ---------- Export / Import / Reset ---------- */
function exportData() {
  store.profile.lastBackupAt = new Date().toISOString();
  saveStore(store);
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), ...store }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `cod-ranked-tracker-${store.profile.username || 'backup'}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  render();
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
      store = { profile: data.profile, matches: data.matches, seasons: Array.isArray(data.seasons) ? data.seasons : [] };
      saveStore(store);
      toast(t('toast.restoreOk')); render();
    } catch { toast(t('toast.restoreBad')); }
  };
  reader.readAsText(f);
};

$('#resetBtn').onclick = () => {
  if (!confirm(t('confirm.resetAll'))) return;
  localStorage.removeItem(STORE_KEY);
  location.reload();
};

/* ---------- Seasons ---------- */
$('#startSeason').onclick = () => {
  const label = $('#seasonLabel').value.trim().slice(0, 40) || `Season ${(store.seasons || []).length + 1}`;
  if (!confirm(t('confirm.newSeason', { label }))) return;
  store.seasons = store.seasons || [];
  store.seasons.push({ id: uid(), label, startedAt: new Date().toISOString() });
  $('#seasonLabel').value = '';
  saveStore(store);
  toast(t('toast.seasonStarted')); render();
};

function renderSeasons() {
  const seasons = store.seasons || [];
  $('#seasonList').innerHTML = seasons.length
    ? seasons.slice().reverse().map(s => `<div class="muted" style="font-size:12px;margin-bottom:4px">${escapeHtml(s.label)} — ${t('settings.seasonSince')} ${new Date(s.startedAt).toLocaleDateString(locale())}</div>`).join('')
    : `<div class="muted" style="font-size:12px">${t('settings.seasonNone')}</div>`;
  const sel = $('#seasonFilter');
  const current = sel.value;
  sel.innerHTML = '<option value="all">Alle Seasons</option>' + seasons.map(s => `<option value="${s.id}">${escapeHtml(s.label)}</option>`).join('');
  if ([...sel.options].some(o => o.value === current)) sel.value = current;
}
$('#seasonFilter').onchange = () => renderStats();

function matchesInSeason(matches, seasonId) {
  if (seasonId === 'all') return matches;
  const seasons = (store.seasons || []).slice().sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt));
  const idx = seasons.findIndex(s => s.id === seasonId);
  if (idx < 0) return matches;
  const start = new Date(seasons[idx].startedAt);
  const end = idx + 1 < seasons.length ? new Date(seasons[idx + 1].startedAt) : null;
  return matches.filter(m => { const d = new Date(m.createdAt); return d >= start && (!end || d < end); });
}

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
  const withPlacement = matches.filter(m => Number.isFinite(m.placement));
  const withDamage = matches.filter(m => Number.isFinite(m.damage));
  const withPoints = matches.filter(m => Number.isFinite(m.points));
  const avg = (arr, key) => arr.length ? arr.reduce((s, m) => s + Number(m[key]), 0) / arr.length : null;
  return {
    total: matches.length, wins, losses,
    winrate: matches.length ? (wins / matches.length) * 100 : 0,
    avgSr: matches.length ? matches.reduce((s, m) => s + Number(m.srChange || 0), 0) / matches.length : 0,
    streak,
    kd: deaths > 0 ? kills / deaths : kills,
    rankDistribution,
    avgPlacement: avg(withPlacement, 'placement'),
    avgDamage: avg(withDamage, 'damage'),
    avgPoints: avg(withPoints, 'points'),
    bestPlacement: withPlacement.length ? Math.min(...withPlacement.map(m => m.placement)) : null
  };
}
function getStats(range) {
  const seasonId = $('#seasonFilter') ? $('#seasonFilter').value : 'all';
  const all = matchesInSeason(store.matches, seasonId);
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
  store.matches.splice(idx, 1);
  recomputeChain();
  saveStore(store);
  if (editingMatchId === id) resetMatchForm();
  toast(t('toast.matchDeleted')); render();
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

  function top250Icon(rank) {
    if (rank === 1) return 'icons/ranks/Platz_1.png';
    if (rank <= 50) return 'icons/ranks/Top_250_50-1.png';
    if (rank <= 150) return 'icons/ranks/Top_250_150-51.png';
    if (rank <= 200) return 'icons/ranks/Top_250_200-151.png';
    return 'icons/ranks/Top_250_250-201.png';
  }
  const rk = (p.top250 && p.top250Rank)
    ? { name: 'Top 250', division: `#${p.top250Rank}`, color: '#f2c14e', icon: top250Icon(p.top250Rank), nextLabel: '', srToNext: null }
    : rankForSr(p.sr);
  $('#rankName').textContent = rk.name.toUpperCase();
  $('#rankName').style.color = rk.color;
  $('#divisionName').textContent = rk.division ? (p.top250 ? rk.division : `DIVISION ${rk.division}`) : '';
  $('#divisionName').style.color = p.top250 ? rk.color : '';
  $$('.rank-emblem').forEach(el => el.innerHTML = `<img src="${rk.icon}" alt="${rk.name} ${rk.division}" onerror="this.style.display='none'"/>`);
  $('#srValue').textContent = p.sr.toLocaleString(locale());
  $('#srTarget').textContent = p.srTarget ? `/ ${p.srTarget.toLocaleString(locale())}` : '';
  const pct = p.srTarget ? Math.min(100, (p.sr / p.srTarget) * 100) : 0;
  $('#srBar').style.width = pct + '%';
  $('#srRemaining').textContent = p.srTarget
    ? t('goals.toGoal', { n: Math.max(0, p.srTarget - p.sr) })
    : (rk.srToNext !== null ? t('goals.remaining', { n: rk.srToNext, rank: rk.nextLabel }) : rk.nextLabel);

  const s = getStats(statRange);
  $('#todaySr').textContent = (s.today.sr >= 0 ? '+' : '') + s.today.sr;
  $('#todaySr').style.color = s.today.sr >= 0 ? 'var(--green)' : 'var(--red)';
  $('#todayMatches').textContent = s.today.matches;
  $('#todayWL').textContent = `${s.today.wins}W · ${s.today.losses}L`;
  $('#winrate').textContent = s.winrate.toFixed(1) + '%';
  $('#streak').textContent = '🔥 ' + s.streak;

  $('#profileSr').value = p.sr;
  $('#top250Toggle').checked = !!p.top250;
  $('#top250Rank').value = p.top250Rank || '';
  $('#top250RankWrap').classList.toggle('hidden', !p.top250);
  $('#goalRankInput').value = p.goalRank || '';
  $('#goalSrInput').value = p.srTarget || '';
  $('#goalCurrentSr').textContent = p.sr.toLocaleString(locale()) + ' SR';
  $('#goalBar').style.width = pct + '%';
  $('#goalRemaining').textContent = p.srTarget
    ? t('goals.remaining', { n: Math.max(0, p.srTarget - p.sr), rank: p.goalRank || t('goals.genericGoal') })
    : t('overview.noGoal');

  // Ziel-Rechner: Matches bis zum Ziel, basierend auf Ø SR/Match (letzte 20 Matches)
  if (p.srTarget && p.srTarget > p.sr) {
    const recent = store.matches.slice(0, 20);
    const avgRecent = recent.length ? recent.reduce((s2, m) => s2 + Number(m.srChange || 0), 0) / recent.length : 0;
    if (avgRecent > 0) {
      const needed = Math.ceil((p.srTarget - p.sr) / avgRecent);
      $('#goalEstimate').textContent = t('goals.estimate', { avg: (avgRecent >= 0 ? '+' : '') + avgRecent.toFixed(1), n: needed, matchWord: t(needed === 1 ? 'goals.matchSingular' : 'goals.matchPlural') });
    } else {
      $('#goalEstimate').textContent = t('goals.noEstimate');
    }
  } else {
    $('#goalEstimate').textContent = '';
  }

  // Backup-Erinnerung
  const lastBackup = p.lastBackupAt ? new Date(p.lastBackupAt) : null;
  const daysSince = lastBackup ? Math.floor((Date.now() - lastBackup.getTime()) / 86400000) : null;
  if (store.matches.length > 0 && (daysSince === null || daysSince >= 14)) {
    $('#backupWarning').classList.remove('hidden');
    $('#backupWarning').textContent = daysSince === null
      ? t('backup.warnNever')
      : t('backup.warnOld', { n: daysSince });
  } else {
    $('#backupWarning').classList.add('hidden');
  }
  $('#backupStatus').textContent = daysSince === null ? t('settings.backupNever') : t('settings.backupAgo', { n: daysSince, dayWord: t(daysSince === 1 ? 'settings.daySingular' : 'settings.dayPlural') });

  renderSeasons();
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
  $('#avgPlacement').textContent = s.avgPlacement !== null ? '#' + s.avgPlacement.toFixed(1) : '–';
  $('#avgDamage').textContent = s.avgDamage !== null ? Math.round(s.avgDamage).toLocaleString(locale()) : '–';
  $('#avgPoints').textContent = s.avgPoints !== null ? Math.round(s.avgPoints).toLocaleString(locale()) : '–';
  $('#bestPlacement').textContent = s.bestPlacement !== null ? '#' + s.bestPlacement : '–';
  drawDonut(s.rankDistribution || []);
}

let matchFilter = 'all', matchSort = 'desc';

function renderMatches() {
  const extra = (m) => {
    const parts = [];
    if (m.kills || m.deaths) parts.push(`${Number(m.kills || 0)}/${Number(m.deaths || 0)} ${t('match.kd')}`);
    if (Number.isFinite(m.placement)) parts.push(t('match.placementShort', { n: m.placement }));
    if (Number.isFinite(m.damage)) parts.push(t('match.damageShort', { n: m.damage.toLocaleString(locale()) }));
    if (Number.isFinite(m.points)) parts.push(t('match.pointsShort', { n: m.points.toLocaleString(locale()) }));
    return parts.join(' · ');
  };
  let list = store.matches.filter(m => matchFilter === 'all' || (matchFilter === 'win' && m.result === 'WIN') || (matchFilter === 'loss' && m.result === 'LOSS'));
  list = list.slice().sort((a, b) => matchSort === 'desc' ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt));
  const html = list.map(m => `
    <div class="match-row">
      <strong class="${m.result === 'WIN' ? 'win-t' : 'loss-t'}">${m.result}</strong>
      <strong class="${m.srChange >= 0 ? 'win-t' : 'loss-t'}">${m.srChange >= 0 ? '+' : ''}${m.srChange} SR</strong>
      <span>${escapeHtml(m.note || '—')}${extra(m) ? ` · ${extra(m)}` : ''}</span>
      <small class="date">${new Date(m.createdAt).toLocaleDateString(locale())}</small>
      <button class="edit" data-id="${m.id}">✎</button>
      <button class="delete" data-id="${m.id}">×</button>
    </div>`).join('') || `<p style="color:var(--muted)">${t('matches.empty')}</p>`;
  $('#matchesList').innerHTML = html;
  $('#historyList').innerHTML = html;
  $$('.delete').forEach(b => b.onclick = () => {
    if (!confirm(t('confirm.deleteMatch'))) return;
    deleteMatch(b.dataset.id);
  });
  $$('.edit').forEach(b => b.onclick = () => startEditMatch(b.dataset.id));
}

function drawHistory() { draw($('#historyChart'), store.matches.slice().reverse()); }

function draw(c, data) {
  const ctx = c.getContext('2d'), w = c.width, h = c.height;
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#23262d'; ctx.lineWidth = 1;
  for (let i = 1; i < 5; i++) { const y = i * h / 5; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  c._points = [];
  if (!data.length) return;
  const vals = data.map(x => x.srAfter), min = Math.min(...vals) - 50, max = Math.max(...vals) + 50, range = Math.max(1, max - min);
  const xy = (i) => ({
    x: (i / Math.max(1, vals.length - 1)) * (w - 30) + 15,
    y: h - 20 - ((vals[i] - min) / range) * (h - 40)
  });
  const colorFor = (m) => Number(m.srChange || 0) < 0 ? '#ff5c5c' : '#3ddc84';
  // line segments, colored by the destination match's result
  ctx.lineWidth = 4;
  for (let i = 1; i < data.length; i++) {
    const a = xy(i - 1), b = xy(i);
    ctx.strokeStyle = colorFor(data[i]);
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  }
  // points
  data.forEach((m, i) => {
    const p = xy(i);
    ctx.fillStyle = colorFor(m);
    ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, Math.PI * 2); ctx.fill();
    c._points.push({ x: p.x, y: p.y, match: m });
  });
}

/* ---------- Chart hover tooltip ---------- */
function attachChartTooltip(canvas) {
  const tip = $('#chartTooltip');
  const show = (clientX, clientY, match) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width / canvas.width, scaleY = rect.height / canvas.height;
    let nearest = null, nearestDist = Infinity;
    const cx = (clientX - rect.left) / scaleX, cy = (clientY - rect.top) / scaleY;
    (canvas._points || []).forEach(p => {
      const d = Math.hypot(p.x - cx, p.y - cy);
      if (d < nearestDist) { nearestDist = d; nearest = p; }
    });
    if (!nearest || nearestDist > 28) { tip.classList.add('hidden'); return; }
    const m = nearest.match;
    const date = new Date(m.createdAt).toLocaleDateString(locale());
    const noteHtml = m.note ? `<br>${escapeHtml(m.note)}` : '';
    tip.innerHTML = `<strong class="${m.srChange >= 0 ? 'win-t' : 'loss-t'}">${date} · ${m.result} · ${m.srChange >= 0 ? '+' : ''}${m.srChange} SR</strong>${noteHtml}`;
    tip.classList.remove('hidden');
    tip.style.left = (rect.left + nearest.x * scaleX) + 'px';
    tip.style.top = (rect.top + nearest.y * scaleY - 10) + 'px';
  };
  canvas.addEventListener('mousemove', e => show(e.clientX, e.clientY));
  canvas.addEventListener('mouseleave', () => tip.classList.add('hidden'));
  canvas.addEventListener('touchstart', e => { const t = e.touches[0]; if (t) show(t.clientX, t.clientY); }, { passive: true });
  canvas.addEventListener('touchmove', e => { const t = e.touches[0]; if (t) show(t.clientX, t.clientY); }, { passive: true });
  canvas.addEventListener('touchend', () => tip.classList.add('hidden'));
}
attachChartTooltip($('#chart'));
attachChartTooltip($('#historyChart'));

function drawDonut(dist) {
  const c = $('#donutChart'); if (!c) return;
  const ctx = c.getContext('2d'), w = c.width, h = c.height, cx = w / 2, cy = h / 2, r = Math.min(w, h) / 2 - 8, inner = r * 0.62;
  ctx.clearRect(0, 0, w, h);
  if (!dist.length) {
    ctx.strokeStyle = '#23262d'; ctx.lineWidth = r - inner; ctx.beginPath();
    ctx.arc(cx, cy, (r + inner) / 2, 0, Math.PI * 2); ctx.stroke();
    $('#donutLegend').innerHTML = `<span class="muted">${t('stats.noMatches')}</span>`;
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
currentLang = (navigator.language || 'de').toLowerCase().startsWith('en') ? 'en' : 'de';
translateStatic();

$('#languageSelect').onchange = () => {
  setLanguage($('#languageSelect').value);
  if (store && store.profile) { store.profile.language = currentLang; saveStore(store); }
};

if (store && store.profile) {
  // Migration: older saves don't have startingSr/seasons - derive without changing the displayed SR
  if (!Number.isFinite(store.profile.startingSr)) {
    const matchSum = (store.matches || []).reduce((s, m) => s + Number(m.srChange || 0), 0);
    store.profile.startingSr = Math.max(0, Number(store.profile.sr || 0) - matchSum);
  }
  if (!Array.isArray(store.seasons)) store.seasons = [];
  if (store.profile.language === 'en' || store.profile.language === 'de') currentLang = store.profile.language;
  translateStatic();
  if ($('#languageSelect')) $('#languageSelect').value = currentLang;
  saveStore(store);
  enterApp();
} else {
  $('#setupView').classList.remove('hidden');
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
