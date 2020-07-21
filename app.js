navigator.serviceWorker&&navigator.serviceWorker.register("sw.js")
function mapObj(fn,obj){let nObj={}
for(let k in obj)
nObj[k]=fn(obj[k],k,obj)
return nObj}
let fx=n=>Math.round(n*1e5)/1e5
let conv=(f,u,m)=>(v,k)=>u==k?m:fx(f[u+k](m))
let num=v=>''==v?0:parseFloat(v)
let styl=(v)=>v<0?'background:tomato':''
let noedit=(v)=>m('.item',{style:styl(v)},v)
let input_=(oninput)=>(value,id)=>m('input.item[type=number][min=0]',{style:styl(value),value,id,oninput})
let noRow=({u,b,c},r,l)=>[noedit(u),noedit(b),noedit(c),m('label',l),]
let row_=(input)=>({u,b,c},r,l)=>[input(u,r+'u'),input(b,r+'b'),input(c,r+'c'),m(l?'label.v':'',l),]
hideRow=[m(''),m(''),m(''),m('.t','.')]
function G(){let u2b,u2c
let d={r:'u',f:{u:5,b:0,c:0},p:{u:0,b:0,c:0},v:{u:0,b:0,c:0},d:{u:0,b:0,c:0},c:{u:0,b:0,c:0},e:{u:0,b:0,c:0},}
let F={ub:u=>u*u2b,bu:b=>b/u2b,cb:c=>c/u2c*u2b,uc:u=>u*u2c,cu:c=>c/u2c,bc:b=>b/u2b*u2c,}
function cost(r,c,m){d[r]=mapObj(conv(F,c,m),d[r])}
let t=({u,b,c})=>u*u2b+b+c*u2c
function pago(z){let[j,k,l]=z
let v=fx(t(d[k])-d[j].b)
d[l]=mapObj(conv(F,'b',v),d[l])}
let pag=()=>{pago('fpv');pago('vdc')}
let all=(c,v)=>{cost('f',c,v);pag();d.r=c}
function change({target:{value,id}}){value=num(value)
value=value<0?-1*value:value
let[r,c]=id
d[r][c]=value
if(r=='f')
all(c,value)
else if(r=='e')
cost(r,c,value)
else
pag()}
let input=input_(change)
let inRow=row_(input_(change))
return{view({attrs:s}){u2b=s.u2b
u2c=s.u2c
all(d.r,d.f[d.r])
return m('.container',[m('label.gr','$'),m('label.vt','Bs'),m('label.yl','Co'),m(''),inRow(d.f,'f','Fact'),inRow(d.p,'p','Pago'),noRow(d.v,'v','Vuelto'),hideRow,inRow(d.d,'d','Devol'),noRow(d.c,'c','Cierre'),hideRow,inRow(d.e,'e'),])}}}
let LocalStore={get:(k)=>JSON.parse(localStorage.getItem(k)),set(k,state){localStorage.setItem(k,JSON.stringify(state))}}
function App(){let s={u2b:243,u2c:3.6}
Object.assign(s,LocalStore.get('s'))
function change({target:{value,id}}){value=num(value)
s[id]=value
LocalStore.set('s',s)}
let input=(label,val,id)=>m('.itex',[m('label.h',label),input_(change)(val,id)])
return{view:(vnode)=>m('',[m('.flx',[input('Bs/$',s.u2b,'u2b'),input('Co/$',s.u2c,'u2c'),]),m(G,{...s}),])}}
m.mount(document.getElementById('app'),App)