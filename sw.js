const CACHE_NAME = 'scc-app-v1';
const urlsToCache = [
  '/',
  'index.html',
  'bg.jpg',
  'logo1.jpg',
  'logo2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
