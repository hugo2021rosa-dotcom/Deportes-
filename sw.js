const C='deportes-v1',F=['./','index.html','manifest.json','icons/logo.png','icons/icon-192.png','icons/icon-512.png','favicon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
