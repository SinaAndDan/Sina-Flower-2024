// src/sw/service-worker.ts
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching', event.request.url);
    event.respondWith(caches.match(event.request).then((response) => {
        return response || fetch(event.request);
    }));
});
