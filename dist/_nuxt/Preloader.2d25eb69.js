import{d as f,z as m,D as g,c as n,g as k,o as r,b as i,w as c,n as u,H as p,e as b,v as y,T as v}from"./entry.564f8815.js";import{_ as C}from"./_plugin-vue_export-helper.c27b6911.js";const w=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(s,{slots:e,attrs:o}){const a=m(!1);return g(()=>{a.value=!0}),l=>{var d;if(a.value)return(d=e.default)==null?void 0:d.call(e);const t=e.fallback||e.placeholder;if(t)return t();const _=l.fallback||l.placeholder||"",h=l.fallbackTag||l.placeholderTag||"span";return n(h,o,_)}}}),T={class:"inline"},B=f({__name:"Preloader",props:{loading:{type:Boolean},height:{default:"20px"},width:{default:"50px"},margin:{},line:{default:1},borderRadius:{default:"4px"},preloaderClass:{default:""},circle:{type:Boolean},contentWrapperClass:{}},setup(s){const e=s,o=k(()=>({"--width":e.width,"--height":e.height,"--border-radius":e.circle?"50%":e.borderRadius}));return(a,l)=>{const t=w;return r(),n("div",T,[i(v,{name:"skeleton",mode:"out-in"},{default:c(()=>[a.loading?(r(),n("div",{key:"loading",class:u([a.preloaderClass,"flex-shrink-0"]),style:p({height:a.height,width:a.width,margin:a.margin})},[b("span",{class:"skeleton",style:p(o.value)},null,4)],6)):(r(),n("div",{key:1,class:u(a.contentWrapperClass)},[i(t,null,{default:c(()=>[y(a.$slots,"default",{},void 0,!0)]),_:3})],2))]),_:3})])}}});const z=C(B,[["__scopeId","data-v-fc8f2b51"]]);export{z as _,w as a};