navigator.serviceWorker&&navigator.serviceWorker.register("sw.js")
function mapObj(e,t){let n={};for(let u in t)n[u]=e(t[u],u,t);return n}
let fx=e=>Math.round(1e5*e)/1e5,conv=(e,t,n)=>(u,o)=>t==o?n:fx(e[t+o](n)),num=e=>""==e?0:parseFloat(e),styl=e=>e<0?"background:tomato":"",noedit=e=>m(".item",{style:styl(e)},e),input_=e=>(t,n)=>m("input.item[type=number]",{min:0,style:styl(t),value:t,id:n,oninput:e}),noRow=({u:e,b:t,c:n},u,o)=>[noedit(e),noedit(t),noedit(n),m("label",o)],row_=e=>({u:t,b:n,c:u},o,c)=>[e(t,o+"u"),e(n,o+"b"),e(u,o+"c"),m(c?"label.v":"",c)]
function G(){let e,t,n={r:"u",f:{u:5,b:1e3,c:20},p:{u:0,b:0,c:0},v:{u:0,b:0,c:0},d:{u:0,b:0,c:0},c:{u:0,b:0,c:0},e:{u:0,b:0,c:0}},u={ub:t=>t*e,bu:t=>t/e,uc:n=>n*e/t,cb:e=>e*t,bc:e=>e/t,cu:n=>n*t/e}
function o(e,t,o){n[e]=mapObj(conv(u,t,o),n[e])}let c=({u:n,b:u,c:o})=>n*e+u+o*t
function i(e){let[t,o,i]=e,l=c(n[o])-n[t].b;n[i]=mapObj(conv(u,"b",l),n[i])}let l=()=>{i("fpv"),i("vdc")},b=(e,t)=>{o("f",e,t),l(),n.r=e}
function r({target:{value:e,id:t}}){e=(e=num(e))<0?-1*e:e;let[u,c]=t;n[u][c]=e,"f"==u?b(c,e):"e"==u?o(u,c,e):l()}input_(r);let a=row_(input_(r))
return{view:({attrs:u})=>(e=u.u2b,t=u.c2b,b(n.r,n.f[n.r]),m(".container",[m("label","$"),m("label","Bs"),m("label","Co"),m(""),a(n.f,"f","Fact"),a(n.p,"p","Pago"),noRow(n.v,"v","Vuelto"),hideRow,a(n.d,"d","Devol"),noRow(n.c,"c","Cierre"),hideRow,a(n.e,"e")]))}}function App(){let e={u2b:200,c2b:50}
function t({target:{value:t,id:n}}){t=num(t),e[n]=t}let n=(e,n,u)=>m(".itex",[m("label.h",e),input_(t)(n,u)])
return{view:t=>m("",[m(".flx",[n("Bs/$",e.u2b,"u2b"),n("Bs/Co",e.c2b,"c2b")]),m(G,{...e})])}}hideRow=[m(""),m(""),m(""),m(".t",".")],m.mount(document.getElementById("app"),App)
