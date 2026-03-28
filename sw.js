const CACHE_NAME = 'airtel-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    'https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js'
];

// Installation : on met en cache les fichiers
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// Récupération : on sert le cache si offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
