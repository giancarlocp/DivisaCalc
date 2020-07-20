let ael=self.addEventListener,ver="3"
ael('install',ev=>ev.waitUntil(caches.open(ver).then(cache=>cache.addAll(['/','/s.css','/app.js','/favicon.png','https://pagecdn.io/lib/mithril/2.0.4/mithril.min.js',])).catch(console.log)))
ael('activate',ev=>{ev.waitUntil(caches.keys().then(ks=>ks.forEach(k=>{k!=ver&&caches.delete(k)})))})
let cama=req=>caches.match(req)
let caup=(ver,req)=>caches.open(ver).then(cache=>{fetch(req).then(res=>cache.put(req,res))
return cama(req)})
ael('fetch',ev=>{let req=ev.request
let resCa=caup(ver,req).catch(console.log)
ev.respondWith(resCa)})
