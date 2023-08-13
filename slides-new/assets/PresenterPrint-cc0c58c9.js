import{d,i as _,a as p,u,b as h,c as m,e as f,f as n,g as t,t as s,h as a,F as v,r as g,n as x,j as y,o as r,k as b,l as N,m as k,p as P,q as w,_ as S}from"./index-0901e3a1.js";import{N as V}from"./NoteDisplay-55ebe80e.js";const j={class:"m-4"},C={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>y.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:x(a(w))},[t("div",j,[t("div",C,[t("h1",L,s(a(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(r(!0),n(v,null,g(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(b)),1),N(" "+s(e==null?void 0:e.title)+" ",1),z])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",F)):P("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/home/soumitradev/Code/cruX/crux-raf/node_modules/.pnpm/@slidev+client@0.42.7_postcss@8.4.27_vite@4.4.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
