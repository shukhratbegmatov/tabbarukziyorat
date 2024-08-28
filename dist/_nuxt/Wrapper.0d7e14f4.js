import{_ as z}from"./Preloader.2d25eb69.js";import{d as T,t as m,n as X,a as g,b as A,c as G,i as P,e as W,f as R}from"./index.70c143b2.js";import{g as D,z as h,A as y,L as q,D as F,d as J,o as x,c as b,e as C,b as I,w as L,v as M,j as B,n as k,i as K,m as N,G as Q,t as V}from"./entry.564f8815.js";import{_ as U}from"./_plugin-vue_export-helper.c27b6911.js";function _(e){var t;const o=m(e);return(t=o==null?void 0:o.$el)!=null?t:o}const H=P?window:void 0;function Z(...e){let t,o,n,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,n,u]=e,t=H):[t,o,n,u]=e,!t)return g;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const i=[],c=()=>{i.forEach(l=>l()),i.length=0},r=(l,a,v,p)=>(l.addEventListener(a,v,p),()=>l.removeEventListener(a,v,p)),s=y(()=>[_(t),m(u)],([l,a])=>{if(c(),!l)return;const v=R(a)?{...a}:a;i.push(...o.flatMap(p=>n.map(d=>r(l,p,d,v))))},{immediate:!0,flush:"post"}),f=()=>{s(),c()};return A(f),f}function ee(){const e=h(!1);return q()&&F(()=>{e.value=!0}),e}function te(e){const t=ee();return D(()=>(t.value,Boolean(e())))}function $(e,t,o={}){const{root:n,rootMargin:u="0px",threshold:i=.1,window:c=H,immediate:r=!0}=o,s=te(()=>c&&"IntersectionObserver"in c),f=D(()=>{const d=m(e);return(Array.isArray(d)?d:[d]).map(_).filter(X)});let l=g;const a=h(r),v=s.value?y(()=>[f.value,_(n),a.value],([d,j])=>{if(l(),!a.value||!d.length)return;const E=new IntersectionObserver(t,{root:_(j),rootMargin:u,threshold:i});d.forEach(S=>S&&E.observe(S)),l=()=>{E.disconnect(),l=g}},{immediate:r,flush:"post"}):g,p=()=>{l(),v(),a.value=!1};return A(p),{isSupported:s,isActive:a,pause(){l(),a.value=!1},resume(){a.value=!0},stop:p}}function O(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}const ne={[T.mounted](e,t){typeof t.value=="function"?$(e,t.value):$(e,...t.value)}};function Y(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const o=e.parentNode;return!o||o.tagName==="BODY"?!1:Y(o)}}function oe(e){const t=e||window.event,o=t.target;return Y(o)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const w=new WeakMap;function re(e,t=!1){const o=h(t);let n=null,u;y(G(e),r=>{const s=O(m(r));if(s){const f=s;w.get(f)||w.set(f,u),o.value&&(f.style.overflow="hidden")}},{immediate:!0});const i=()=>{const r=O(m(e));!r||o.value||(W&&(n=Z(r,"touchmove",s=>{oe(s)},{passive:!1})),r.style.overflow="hidden",o.value=!0)},c=()=>{var r;const s=O(m(e));!s||!o.value||(W&&(n==null||n()),s.style.overflow=(r=w.get(s))!=null?r:"",w.delete(s),o.value=!1)};return A(c),D({get(){return o.value},set(r){r?i():c()}})}function se(){let e=!1;const t=h(!1);return(o,n)=>{if(t.value=n.value,e)return;e=!0;const u=re(o,n.value);y(t,i=>u.value=i)}}se();const le={class:"py-8 md:py-16 container w-full"},ae=J({__name:"Wrapper",props:{title:{},subtitle:{},line:{type:Boolean,default:!0},centered:{type:Boolean},loading:{type:Boolean}},setup(e){const t=h(!1);function o([{isIntersecting:n}]){t.value=n}return(n,u)=>{const i=z;return x(),b("div",le,[C("div",{class:k(["flex-center-between flex-col lg:flex-row gap-4 w-full",{"flex-center":n.centered}])},[C("div",null,[I(i,{width:"300px",height:"52px","border-radius":"4px","preloader-class":"mb-2",loading:n.loading},{default:L(()=>[K((x(),b("h2",{class:k(["text-2xl md:text-3xl md:text-40 leading-130 text-white font-bold relative w-fit font-playfair",[{"pb-3 md:pb-4 title-line":n.line},{"title-line_full":N(t)},{"mx-auto title-line_centered":n.centered}]])},[Q(V(n.$t(n.title)),1)],2)),[[N(ne),o]])]),_:1},8,["loading"]),I(i,{width:"350px",height:"26px","border-radius":"4px",loading:n.loading},{default:L(()=>[n.subtitle?(x(),b("p",{key:0,class:k([[{"text-center":n.centered}],"mt-[14px] font-medium leading-130 text-base md:text-xl text-white"])},V(n.$t(n.subtitle)),3)):B("",!0)]),_:1},8,["loading"])]),n.centered?B("",!0):M(n.$slots,"suffix",{key:0},void 0,!0)],2),M(n.$slots,"default",{},void 0,!0)])}}});const de=U(ae,[["__scopeId","data-v-61acfe4e"]]);export{de as _};