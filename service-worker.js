const CACHE_NAME = "ratha-portal-v1";

const urlsToCache = [
  "/",
  "/pages/home.html",
  "/style.css",
  "/script.js",
  "/images/logo-192.png",
  "/images/logo-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});