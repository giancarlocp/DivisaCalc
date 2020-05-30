let ael=self.addEventListener,ver="1"
ael("install",e=>e.waitUntil(caches.open(ver).then(e=>e.addAll(["/","/a.js","/s.css","/favicon.png","https://pagecdn.io/lib/mithril/2.0.4/mithril.min.js"])).catch(console.log))),ael("activate",e=>{e.waitUntil(caches.keys().then(e=>e.forEach(e=>{e!=ver&&caches.delete(e)})))})
let cama=e=>caches.match(e),capu=(e,t,a)=>caches.open(e).then(e=>e.put(t,a))
ael("fetch",e=>{let t=e.request,a=cama(t).then(e=>e||fetch(t).then(e=>(capu(ver,t,e),e.clone()))).catch(console.log)
e.respondWith(a)})
