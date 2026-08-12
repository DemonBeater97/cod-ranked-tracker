const CACHE = 'cod-ranked-tracker-local-v5';
const SHELL = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest'];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(event.request, copy)); return r; })
      .catch(() => caches.match(event.request))
  );
});
