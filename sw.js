const CACHE_NAME = 'airtel-v2';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    'https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
