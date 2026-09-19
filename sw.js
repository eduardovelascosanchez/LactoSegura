const CACHE = "lactosegura-v2";
const ASSETS = ["./","./index.html","./centro.html","./centro-contenido.js","./manifest.json","./icon-192.png","./icon-512.png","./icon-maskable-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch", e => {
  if(e.request.method!=="GET")return;
  // La landing del centro se sirve primero desde la red: así los cambios en
  // centro-contenido.js se ven de inmediato, sin tener que limpiar la caché.
  if(new URL(e.request.url).pathname.includes("centro")){
    e.respondWith(fetch(e.request).then(res=>{
      const copy=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return res;
    }).catch(()=>caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res=>{
    const copy=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return res;
  }).catch(()=>caches.match("./index.html"))));
});
