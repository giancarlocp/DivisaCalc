let pr=1e5,fx=t=>Math.round(t*pr)/pr
function G(){let t={c:{u:5,b:1e3,c:20},p:{u:0,b:0,c:0},v:{u:0,b:0,c:0},d:{u:0,b:0,c:0}}
function u(u,c){"u"===c?(t[u].b=fx(t[u].u*u2b),t[u].c=fx(t[u].b/c2b)):"b"===c?(t[u].u=fx(t[u].b/u2b),t[u].c=fx(t[u].b/c2b)):"c"===c&&(t[u].b=fx(t[u].c*c2b),t[u].u=fx(t[u].b/u2b))}let c=()=>t.p.u*u2b+t.p.b+t.p.c*c2b
function e(){t.v.b=fx(c()-t.c.b),t.v.u=fx(t.v.b/u2b),t.v.c=fx(t.v.b/c2b)}let b=inputfn(function(c){let{value:b,id:m}=c.target
b=num(b)
let[n,i]=m
t[n][i]=b,"c"==n?(u(n,i),e()):"p"==n?e():"d"==n&&u(n,i)}),n=t=>m(".item",{style:styl(t)},t)
return{view:({attrs:u})=>(u2b=u.s.u2b,c2b=u.s.c2b,m(".container",[m(".item.h","$"),m(".item.h","Bs"),m(".item.h","Co"),m(""),b(t.c.u,"cu"),b(t.c.b,"cb"),b(t.c.c,"cc"),m(".item.v","Fact"),b(t.p.u,"pu"),b(t.p.b,"pb"),b(t.p.c,"pc"),m(".item.v","Pago"),n(t.v.u),n(t.v.b),n(t.v.c),m(".item","Vuelto"),m(""),m(""),m(""),m("",{style:"color:teal"},"."),b(t.d.u,"du"),b(t.d.b,"db"),b(t.d.c,"dc")]))}}let styl=t=>t<0?"background:tomato":"",inputfn=t=>(u,c)=>m("input.item",{type:"number",style:styl(u),value:u,id:c,onchange:t}),num=t=>""==t?0:parseFloat(t)
function AppView(){let t={u2b:200,c2b:50}
function u(u){let{value:c,id:e}=u.target
c=num(c),t[e]=c}let c=(t,c,e)=>m(".itex",[m("label",t),inputfn(u)(c,e)])
return{view:u=>m("",[m(".flx",[c("Bs/$",t.u2b,"u2b"),c("Bs/Co",t.c2b,"c2b")]),m(G,{s:t})])}}m.mount(document.getElementById("app"),AppView)
