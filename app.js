function G(){const c={c:{u:5,b:1e3,c:20},p:{u:0,b:0,c:0},v:{u:0,b:0,c:0},d:{u:0,b:0,c:0}};function u(u,b){"u"===u&&(c[b].b=c[b].u*u2b,c[b].c=c[b].b/c2b),"b"===u&&(c[b].u=c[b].b/u2b,c[b].c=c[b].b/c2b),"c"===u&&(c[b].b=c[b].c*c2b,c[b].u=c[b].b/u2b)}const b=()=>c.p.u*u2b+c.p.b+c.p.c*c2b;function t(u){"u"==u&&(c.v.u=b()/u2b-c.c.u,c.v.b=c.v.u*u2b,c.v.c=c.v.b/c2b),"b"==u&&(c.v.b=b()-c.c.b,c.v.u=c.v.b/u2b,c.v.c=c.v.b/c2b),"c"==u&&(c.v.c=b()/c2b-c.c.c,c.v.b=c.v.c*c2b,c.v.u=c.v.b/u2b)}const n=inputfn(function(b){let{value:n,id:e}=b.target;n=num(n);const[m,o]=e;c[m][o]=n,"c"==m&&(u(o,m),t(o)),"p"==m&&t(o),"d"==m&&u(o,m)});return{view:({attrs:u})=>(u2b=u.s.u2b,c2b=u.s.c2b,m(".container",[m(".item.h","$"),m(".item.h","Bs"),m(".item.h","Co"),m(""),n(c.c.u,"cu"),n(c.c.b,"cb"),n(c.c.c,"cc"),m(".item.v","Fact"),n(c.p.u,"pu"),n(c.p.b,"pb"),n(c.p.c,"pc"),m(".item.v","Pago"),n(c.v.u,"vu"),n(c.v.b,"vb"),n(c.v.c,"vc"),m(".item","Vuelto"),m(""),m(""),m(""),m("",{style:"color:teal"},"."),n(c.d.u,"du"),n(c.d.b,"db"),n(c.d.c,"dc")]))}}const inputfn=c=>(u,b)=>{return m("input.item",{type:"number",value:u,id:b,style:u<0?"background-color:tomato":"",onchange:c})},num=c=>""==c?0:parseFloat(c);function AppView(){const c={u2b:200,c2b:50};function u(u){let{value:b,id:t}=u.target;b=num(b),c[t]=b}const b=(c,b,t)=>m(".fex",[m("label",c),inputfn(u)(b,t)]);return{view:u=>m("",[m(".flx",[b("Bs/$",c.u2b,"u2b"),b("Bs/Co",c.c2b,"c2b")]),m(G,{s:c})])}}const node=document.getElementById("app");m.mount(node,AppView);
