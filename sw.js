let ael=self.addEventListener
let ver='2'
ael('install',ev=>ev.waitUntil(caches.open(ver).then(cache=>cache.addAll(['/','/app.js','/s.css','/favicon.png','/mithril.min.js',])).catch(console.log)))
ael('activate',ev=>{ev.waitUntil(caches.keys().then(ks=>ks.forEach(k=>{if(k!=ver)caches.delete(k)})))})
let cama=req=>caches.match(req)
let capu=(ver,req,res)=>caches.open(ver).then(cache=>cache.put(req,res))
ael('fetch',ev=>{let req=ev.request
let resCa=cama(req).then(res=>res?res:fetch(req).then(newRes=>{capu(ver,req,newRes)
return newRes.clone()})).catch(console.log);ev.respondWith(resCa)})
