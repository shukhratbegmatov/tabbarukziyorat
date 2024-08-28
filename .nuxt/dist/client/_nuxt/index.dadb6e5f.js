import{_ as P}from"./Breadcrumb.vue.50e343cc.js";import{_ as S}from"./Preloader.2d25eb69.js";import{_ as $}from"./Wrapper.0d7e14f4.js";import{C as B}from"./CollapseTransition.aa87f44e.js";import{d as F,z as f,I as y,o as i,c,G as I,b as s,w as r,e as o,F as L,h as k,m as _,t as T,n as M,j as N,y as V,J as z,g as x,B as D,q as C,s as A}from"./entry.564f8815.js";import{u as Q,r as v,e as j,_ as H}from"./index.369be1ad.js";import{u as E}from"./composables.026d736b.js";import{u as G}from"./main.92fc2401.js";import{_ as J}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.70c143b2.js";import"./Attractions.vue.9aff34aa.js";import"./useFetcher.6f3508fb.js";const R={class:"grid md:grid-cols-2 items-start gap-6 mt-6"},W=["onClick"],K={class:"bg-red-100 border border-white/20 w-10 h-10 flex-center rounded-lg shrink-0 faq-item__icon"},O=["src","alt"],U={class:"font-semibold text-lg lg:text-xl leading-130 text-white group-hover:text-red-100 transition-300 w-full"},X={class:"w-10 h-10 bg-white/10 border border-white/10 flex-center shrink-0 rounded-lg"},Y={key:0,class:"pt-3"},Z=["innerHTML"],ee=F({__name:"FAQ",props:{faqList:{},loading:{type:Boolean}},setup(b){var p;const a=b,n=f((p=a.faqList[0])==null?void 0:p.id),l=y(()=>a.faqList.slice(0,a.faqList.length/2)),g=y(()=>a.faqList.slice(a.faqList.length/2,a.faqList.length)),h=t=>{if(n.value===t){n.value=0;return}n.value=t};return(t,w)=>{const d=S,q=$;return i(),c("section",null,[I(" dsadsa "),s(q,{title:"frequently_given_questions",line:!1,class:"pt-9 pb-14",loading:t.loading},{default:r(()=>[o("div",R,[(i(),c(L,null,k(2,u=>o("div",{class:"flex flex-col gap-6",key:u},[(i(!0),c(L,null,k(t.loading?1:u===1?_(l):_(g),(e,m)=>(i(),c("div",{key:m,class:"pl-2 py-2 lg:pl-4 lg:py-4 bg-white/5 rounded-xl border border-white/20"},[o("div",{class:"flex-y-center gap-4 pr-2 lg:pr-4 cursor-pointer group",onClick:se=>h(e.id)},[s(d,{width:"40px",height:"40px","border-radius":"4px","preloader-class":"mb-2",loading:t.loading},{default:r(()=>[o("span",K,[o("img",{class:"w-6 h-6 object-contain",src:e==null?void 0:e.logo,alt:e==null?void 0:e.question},null,8,O)])]),_:2},1032,["loading"]),s(d,{width:"100%",height:"26px",class:"w-full","border-radius":"4px","preloader-class":"mb-2",loading:t.loading},{default:r(()=>[o("p",U,T(e==null?void 0:e.question),1)]),_:2},1032,["loading"]),s(d,{width:"40px",height:"40px","border-radius":"4px","preloader-class":"mb-2",loading:t.loading},{default:r(()=>[o("span",X,[o("i",{class:M(["icon-chevron-bottom text-2xl text-white transition-300",{"rotate-180":_(n)===(e==null?void 0:e.id)}])},null,2)])]),_:2},1032,["loading"])],8,W),s(d,{width:"90%",height:"40px","border-radius":"4px",class:"relative",loading:t.loading},{default:r(()=>[s(B,null,{default:r(()=>[_(n)===(e==null?void 0:e.id)?(i(),c("div",Y,[o("div",{innerHTML:e==null?void 0:e.answer,class:"pl-1.5 pr-4 pt-3 border-t border-white/20 text-base leading-130 text-white"},null,8,Z)])):N("",!0)]),_:2},1024)]),_:2},1032,["loading"])]))),128))])),64))])]),_:1},8,["loading"])])}}}),ae={class:"bg-dark"},te={class:"faq-section pt-[90px] lg:pt-[136px]"},oe=F({__name:"index",setup(b){const a=G(),{t:n}=V(),l=f(!1),g=f();g.value=z();const h=x(()=>a.faq),p=x(()=>a.popularAttractions);x(()=>a.contact);async function t(){return l.value=!0,await Promise.all([a.fetchFaq(),a.fetchPopularAttractions(),a.fetchContactData()])}t().finally(()=>{l.value=!1}),E({title:n("help")});const w=[{title:"FAQ",link:"/faq"}];return Q({full_name:"",email:"",message:""},{full_name:{required:v},email:{email:j,required:v},message:{required:v}}),f(!1),(d,q)=>{const u=P,e=ee,m=H;return i(),c("div",ae,[o("div",te,[s(u,D({menu:w},{class:""}),null,16),s(e,C(A({faqList:h.value,loading:l.value})),null,16)]),s(m,C(A({popularAttractions:p.value,loading:l.value})),null,16)])}}});const me=J(oe,[["__scopeId","data-v-6fa3a0ca"]]);export{me as default};