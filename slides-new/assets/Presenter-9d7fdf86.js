import{o as d,f as k,g as e,B as S,C as D,v as h,d as M,i as B,a as P,D as y,x as p,E as H,_ as z,G as I,H as R,c as b,b as A,I as $,J as E,K as L,L as q,M as F,N as O,O as U,P as W,Q as X,h as i,m as u,t as Z,n as x,R as N,S as V,p as j,T as G,U as w,V as J,F as K,W as Q,X as Y,w as ee,Y as te,Z as se,q as T,$ as oe,a0 as le,a1 as ne,a2 as ae,k as ie,a3 as re,a4 as ce}from"./index-04f22cef.js";import{N as ue}from"./NoteDisplay-5c5c4dd8.js";import de from"./DrawingControls-9969b003.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),ve=[me];function pe(o,n){return d(),k("svg",_e,ve)}const he={name:"carbon-renew",render:pe},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(o,n){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/slides-new/assets/logo-title-horizontal-96c3c915.png";function Ce(){const o=S(Date.now()),n=D({interval:1e3}),_=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function m(){o.value=n.value}return{timer:_,resetTimer:m}}const be=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o;B(P);const _=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),m=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),p(ue,{class:H(n.class),note:_.value,"note-html":m.value},null,8,["class","note","note-html"]))}}),$e=z(be,[["__file","/home/soumitradev/Code/cruX/crux-raf/node_modules/.pnpm/@slidev+client@0.42.7_postcss@8.4.27_vite@4.4.9/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(Q("data-v-5b1d7280"),o=o(),Y(),o),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),ze=f(()=>e("div",{class:"context"}," next ",-1)),De={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=M({__name:"Presenter",setup(o){B(P);const n=S();I(),R(n);const _=b.titleTemplate.replace("%s",b.title||"Slidev");A({title:`Presenter - ${_}`});const{timer:m,resetTimer:t}=Ce(),l=S([]),s=h(()=>$.value<E.value?{route:y.value,clicks:$.value+1}:L.value?{route:q.value,clicks:0}:null);return F(()=>{const C=n.value.querySelector("#slide-content"),r=O(U()),g=W();X(()=>{if(!g.value||te.value||!se.value)return;const c=C.getBoundingClientRect(),a=(r.x-c.left)/c.width*100,v=(r.y-c.top)/c.height*100;if(!(a<0||a>100||v<0||v>100))return{x:a,y:v}},c=>{ee.cursor=c})}),(C,r)=>{const g=ye,c=he;return d(),k(K,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...a)=>i(t)&&i(t)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,Z(i(m)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(i(T))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(i(T))},[s.value?(d(),p(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var a;return[u(i(ne),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=v=>l.value=v),clicks:s.value.clicks,"clicks-disabled":!1,class:H(i(le)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):j("v-if",!0),ze],4),e("div",De,[(d(),p($e,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(re,{persist:!0})]),(d(),p(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(i(ae)-1)/(i(ie)-1)*100}%`})},null,4)])]),u(ce),u(J,{modelValue:i(w),"onUpdate:modelValue":r[2]||(r[2]=a=>G(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const Fe=z(Ae,[["__scopeId","data-v-5b1d7280"],["__file","/home/soumitradev/Code/cruX/crux-raf/node_modules/.pnpm/@slidev+client@0.42.7_postcss@8.4.27_vite@4.4.9/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Fe as default};
