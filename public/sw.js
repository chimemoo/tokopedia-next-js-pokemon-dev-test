const CACHE_NAME = 'tokopedia-pokemon';
const urlsToCache = ['/'];

self.addEventListener('install', event => {
  const preLoaded = caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache));
  event.waitUntil(preLoaded);
});

self.addEventListener('fetch', event => {
  return caches.match(event.request).then(function (response) {
    return (
      response ||
      fetch(event.request).then(function (response) {
        caches.put(event.request, response.clone());
        return response;
      })
    );
  });
});
