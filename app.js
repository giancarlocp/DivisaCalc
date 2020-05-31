//navigator.serviceWorker&&navigator.serviceWorker.register("sw.js")
const pr=1e5,fx=b=>Math.round(b*pr)/pr
function G({attrs:b}){console.log("G",b)
const c={f:{u:5,b:1e3,c:20},p:{u:0,b:0,c:0},v:{u:0,b:0,c:0},d:{u:0,b:0,c:0},c:{u:0,b:0,c:0},e:{u:0,b:0,c:0}}
function u(b,u){"u"===u?(c[b].b=fx(c[b].u*u2b),c[b].c=fx(c[b].b/c2b)):"b"===u?(c[b].u=fx(c[b].b/u2b),c[b].c=fx(c[b].b/c2b)):"c"===u&&(c[b].b=fx(c[b].c*c2b),c[b].u=fx(c[b].b/u2b))}const t=b=>c[b].u*u2b+c[b].b+c[b].c*c2b
function e(b){let[u,e,n]="d"==b?"vdc":"fpv"
c[n].b=fx(t(e)-c[u].b),c[n].u=fx(c[n].b/u2b),c[n].c=fx(c[n].b/c2b)}const n=inputfn(function(b){let{value:t,id:n}=b.target
t=num(t)
const[l,m]=n
c[l][m]=t,"f"==l?(u(l,m),e(l)):"p"==l||"d"==l?e(l):"e"==l&&u(l,m)}),l=b=>m(".item",{style:styl(b)},b)
return{view:({attrs:b})=>(u2b=b.u2b,c2b=b.c2b,m(".container",[m("label","$"),m("label","Bs"),m("label","Co"),m(""),n(c.f.u,"fu"),n(c.f.b,"fb"),n(c.f.c,"fc"),m("label.v","Fact"),n(c.p.u,"pu"),n(c.p.b,"pb"),n(c.p.c,"pc"),m("label.v","Pago"),l(c.v.u),l(c.v.b),l(c.v.c),m("label","Vuelto"),m(""),m(""),m(""),m(".t","."),n(c.d.u,"du"),n(c.d.b,"db"),n(c.d.c,"dc"),m("label","Devol"),l(c.c.u),l(c.c.b),l(c.c.c),m("label.v","Cierre"),m(""),m(""),m(""),m(".t","."),n(c.e.u,"eu"),n(c.e.b,"eb"),n(c.e.c,"ec")]))}}const styl=b=>b<0?"background:tomato":"",inputfn=b=>(c,u)=>m("input.item",{type:"number",style:styl(c),value:c,id:u,onchange:b}),num=b=>""==b?0:parseFloat(b)
function AppView(){const b={u2b:200,c2b:50}
function c(c){let{value:u,id:t}=c.target
u=num(u),b[t]=u}const u=(b,u,t)=>m(".itex",[m("label.h",b),inputfn(c)(u,t)])
return{view:c=>m("",[m(".flx",[u("Bs/$",b.u2b,"u2b"),u("Bs/Co",b.c2b,"c2b")]),m(G,{...b})])}}m.mount(document.getElementById("app"),AppView)
