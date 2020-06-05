let ael=self.addEventListener,ver="3"
ael("install",e=>e.waitUntil(caches.open(ver).then(e=>e.addAll(["/","/app.js","/s.css","/favicon.png","/mithril.min.js"])).catch(console.log))),ael("activate",e=>{e.waitUntil(caches.keys().then(e=>e.forEach(e=>{e!=ver&&caches.delete(e)})))})
let cama=e=>caches.match(e),capu=(e,a,c)=>caches.open(e).then(e=>e.put(a,c))
ael("fetch",e=>{let a=e.request,c=fetch(a).then(e=>e?(capu(ver,a,e),e.clone()):cama(a)).catch(e=>cama(a));e.respondWith(c)})
