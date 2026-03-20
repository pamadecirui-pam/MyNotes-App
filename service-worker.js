self.addEventListener("install", function(e) {
    e.waitUntil (
        caches.open("notes-cache").then(function(cache) {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "service-worker.js"
            ]);
        })
    );
});

self.addEventListener("fetch", function(e) {
    e.respondWith (
        caches.match(e.resquest).then(function(response) {
            return response || fetch(e.resquest);
        })
    );
});