var CACHE_NAME = 'pwgen-cache';
var urlsToCache = [
    '',
    'style.css',
    'script.js',
    'logo.png',
    'logo_192.png',
    'https://fonts.googleapis.com/css?family=Special+Elite'
];
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
