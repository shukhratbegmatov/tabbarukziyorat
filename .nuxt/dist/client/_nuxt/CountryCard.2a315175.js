import{_}from"./Preloader.2d25eb69.js";import{d as h,o as b,k as m,w as a,e as t,b as n,t as l,n as g,_ as y,p as x,l as w}from"./entry.564f8815.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";const v=r=>(x("data-v-15b1ca1b"),r=r(),w(),r),k={class:"relative"},C=["src","alt"],B=["src","alt"],I={class:"font-semibold leading-130 text-5 text-white"},S={class:"font-medium text-base leading-130 text-white text-opacity-60 pb-[22px]"},z=v(()=>t("span",{class:"block absolute w-10 h-0.5 bg-white bg-opacity-40 bottom-0 ease-all duration-300 group-hover:w-full group-hover:bg-opacity-100"},null,-1)),N=h({__name:"CountryCard",props:{country:{},loading:{type:Boolean}},setup(r){return(o,P)=>{var i;const s=_,u=y;return b(),m(u,{to:o.localePath(`/country/${(i=o.country)==null?void 0:i.id}`),class:g([{"bg-white/[0.03] mr-4":o.loading},"w-[164px] sm:w-[280px] items-center flex flex-col ease-all duration-300 hover:cursor-pointer border-1 border-white border-opacity-[0.04] rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-[0.04] group relative"])},{default:a(()=>{var d,p;return[t("div",k,[n(s,{width:"90px",height:"90px","border-radius":"100%",class:"flex-shrink-0","preloader-class":"mb-6 mt-4",loading:o.loading},{default:a(()=>{var e,c;return[t("img",{src:(e=o.country)==null?void 0:e.flag,alt:(c=o.country)==null?void 0:c.title,class:"relative border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[50px] sm:w-[90px] h-[50px] sm:h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-20"},null,8,C)]}),_:1},8,["loading"]),t("img",{src:(d=o.country)==null?void 0:d.flag,alt:(p=o.country)==null?void 0:p.title,class:"border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[90px] h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-0 absolute left-0 top-0 custom-shadow transition-300 opacity-0 group-hover:opacity-40"},null,8,B)]),n(s,{width:"80px",height:"24px","border-radius":"4px",class:"mb-1",loading:o.loading},{default:a(()=>{var e;return[t("h3",I,l((e=o.country)==null?void 0:e.title),1)]}),_:1},8,["loading"]),n(s,{width:"100px",height:"24px","border-radius":"4px","preloader-class":"mb-4",loading:o.loading},{default:a(()=>{var e;return[t("p",S,l((e=o.country)==null?void 0:e.destination_count)+" "+l(o.$t("destinations")),1)]}),_:1},8,["loading"]),z]}),_:1},8,["to","class"])}}});const L=f(N,[["__scopeId","data-v-15b1ca1b"]]);export{L as _};
