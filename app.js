function G(){const c={c:{u:5,b:6,c:7},p:{u:0,b:0,c:0},v:{u:0,b:0,c:0}};function b(b){"u"===b&&(c.v.u=(c.p.u*u2b+c.p.b+c.p.c*c2b)/u2b-c.c.u,c.v.b=c.v.u*u2b,c.v.c=c.v.b/c2b),"b"===b&&(c.v.b=c.p.u*u2b+c.p.b+c.p.c*c2b-c.c.b,c.v.u=c.v.b/u2b,c.v.c=c.v.b/c2b),"c"===b&&(c.v.c=(c.p.u*u2b+c.p.b+c.p.c*c2b)/c2b-c.c.c,c.v.b=c.v.c*c2b,c.v.u=c.v.b/u2b)}const u=inputfn(function(u){let{value:t,id:n}=u.target;t=parseFloat(t);const[e,v]=n;c[e][v]=t,"c"===e?(function(b){"u"===b&&(c.c.b=c.c.u*u2b,c.c.c=c.c.b/c2b),"b"===b&&(c.c.u=c.c.b/u2b,c.c.c=c.c.b/c2b),"c"===b&&(c.c.b=c.c.c*c2b,c.c.u=c.c.b/u2b)}(v),b(v)):"p"===e&&b(v)});return{view:({attrs:b})=>(u2b=b.s.u2b,c2b=b.s.c2b,m(".container",[m(".item.h","$"),m(".item.h","Bs"),m(".item.h","Co"),m(""),u(c.c.u,"cu"),u(c.c.b,"cb"),u(c.c.c,"cc"),m(".item.v","Co"),u(c.p.u,"pu"),u(c.p.b,"pb"),u(c.p.c,"pc"),m(".item.v","Pa"),u(c.v.u,"vu"),u(c.v.b,"vb"),u(c.v.c,"vc"),m(".item.v","Vu")]))}}const inputfn=c=>(b,u)=>{return m("input.item",{type:"number",value:b,id:u,style:b<0?"background-color:tomato":"",oninput:c})};function MainView(){const c={u2b:100,c2b:10};function b(b){let{value:u,id:t}=b.target;u=parseFloat(u),c[t]=u}const u=(c,u,t)=>m("fex",[m("label",c),inputfn(b)(u,t)]);return{view:b=>m("",[m(".flx",[u("Bs/$",c.u2b,"u2b"),u("Bs/CoP",c.c2b,"c2b")]),m("","."),m(G,{s:c})])}}const node=document.getElementById("app");m.mount(node,MainView);
