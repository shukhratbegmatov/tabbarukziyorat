import{_ as U}from"./Breadcrumb.vue.50e343cc.js";import{_ as P}from"./Label.vue.1f221fcd.js";import{_ as j}from"./Input.70a6b03e.js";import{d as V,z as x,o as $,c as k,e as a,B as S,t as p,j as G,n as M,b as l,q as N,s as z,v as R,m as r,y as T,x as Q,k as J,w as d,K,G as I,_ as O,J as W,g as B}from"./entry.564f8815.js";import{_ as A}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as Y}from"./Preloader.2d25eb69.js";import{_ as H}from"./Button.vue.37b7c303.js";import{_ as X}from"./Wrapper.0d7e14f4.js";import{f as Z,$ as ee}from"./useFetcher.6f3508fb.js";import{u as ae,r as F,e as te,_ as oe}from"./index.369be1ad.js";import{u as le}from"./composables.026d736b.js";import{u as se}from"./main.92fc2401.js";import"./index.70c143b2.js";import"./Attractions.vue.9aff34aa.js";const ne=["value","readonly","id","placeholder"],ie={key:0,class:"absolute bottom-2 right-2 text-xs text-white/60 font-normal leading-130"},re=V({__name:"Textarea",props:{type:{default:"text"},placeholder:{},modelValue:{},disabled:{type:Boolean},error:{type:Boolean},maxlength:{default:void 0},minlength:{default:void 0},max:{default:void 0},min:{default:void 0},inputClass:{default:void 0},prefixClass:{},suffixClass:{},autocomplete:{type:Boolean,default:!0},id:{},noResize:{type:Boolean}},emits:["update:modelValue"],setup(y,{expose:s,emit:f}){const o=f,u=t=>{o("update:modelValue",t.target.value)},_=x();return s({Input:_}),(t,m)=>($(),k("div",{class:M(["inline-flex items-stretch relative border rounded-lg border overflow-hidden w-full transition-300 bg-transparent border-white/20 min-h-[87px] focus-within:border-white/70",{"!border-red":t.error}])},[a("textarea",S({value:t.modelValue},{type:t.type,minlength:t.minlength,maxlength:t.maxlength,max:t.max,min:t.min,disabled:t.disabled,placeholder:t.placeholder},{readonly:!t.autocomplete,id:t.id,class:[[t.inputClass,"font-medium resize-none h-full leading-130 text-base placeholder:text-base placeholder:font-normal bg-transparent flex-grow px-4 py-3 outline-none text-white placeholder:text-white/20",{"resize-none":t.noResize}],"w-full"],placeholder:t.$t(t.placeholder),ref_key:"Input",ref:_,onInput:u,onBlur:m[0]||(m[0]=g=>t.$emit("blur")),onFocusout:m[1]||(m[1]=g=>t.$emit("focusout")),onFocus:m[2]||(m[2]=g=>t.$emit("focus"))}),null,16,ne),t.maxlength?($(),k("span",ie,p(t.modelValue.length+"/"+t.maxlength),1)):G("",!0)],2))}});const de=A(re,[["__scopeId","data-v-e2201289"]]),me={class:"space-y-2 flex-col"},ue=V({__name:"Group",props:{label:{default:"Label"},forId:{default:"input"},required:{type:Boolean,default:!1},info:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(y){return(s,f)=>{const o=P;return $(),k("div",me,[l(o,N(z({label:s.label,forId:s.forId,required:s.required,info:s.info,dark:s.dark})),null,16),R(s.$slots,"default")])}}}),pe={class:"mt-9"},ce={class:"grid lg:grid-cols-2 gap-x-[70px] gap-y-2 max-xl:items-start"},fe={class:"flex-y-center gap-6 max-sm:hidden"},_e=a("div",{class:"max-lg:hidden"},null,-1),ge={class:"grid grid-cols-2 gap-x-6 gap-y-5"},he={class:"max-sm:col-span-2"},ve={class:"max-sm:col-span-2"},be={class:"border border-white/10 rounded-xl p-5 flex flex-col justify-between gap-4 max-lg:order-3 max-lg:mt-4"},xe={class:"space-y-2"},$e={class:"flex-y-center space-x-2 text-white/60"},ye=a("i",{class:"icon-location-pin text-xl leading-5"},null,-1),we={class:"font-medium text-base leading-130"},ke={class:"mt-2 font-bold leading-130 text-white text-lg lg:text-xl"},Ve=a("hr",{class:"w-full border-0 h-px bg-white/10"},null,-1),Le={class:"flex max-lg:flex-col"},Ce={class:"w-full lg:w-1/2 max-lg:border-b lg:border-r border-white/10 max-lg:pb-4 lg:pr-5 space-y-2"},Be={class:"flex-y-center space-x-2 text-white/60"},Fe=a("i",{class:"icon-mail text-xl leading-5"},null,-1),qe={class:"font-medium text-base leading-130"},Ie=["href"],Pe={class:"w-full lg:w-1/2 max-lg:pt-4 lg:pl-5 space-y-2"},Se={class:"flex-y-center gap-2 text-white/60"},Ne=a("i",{class:"icon-phone text-xl leading-5"},null,-1),ze={class:"font-medium text-base leading-130"},Te=["href"],Ae={class:"mt-3 lg:mt-6 max-lg:order-2"},De={class:"flex-y-center gap-2 text-base font-semibold"},Ee=a("i",{class:"icon-send text-2xl leading-6 text-white translate-x-0 group-hover:translate-x-2 transition-300"},null,-1),Ue=V({__name:"Contact",props:{data:{},form:{},loading:{type:Boolean},stateLoading:{type:Boolean}},emits:["submitForm"],setup(y,{emit:s}){const o=r(y.form),u=x("");T();const _=e=>{u.value=e},t=()=>{u.value=""},m=s,g=()=>{var e;o.$v.value.$touch(),console.log(o),!o.$v.value.$invalid&&u.value&&((e=Object.values(o.values))!=null&&e.some(n=>n==null?void 0:n.length))&&(m("submitForm"),o.$v.value.$reset())};return(e,n)=>{const h=P,w=j,v=de,q=ue,c=Y,L=O,C=Q("i18n-t"),D=H,E=X;return $(),J(E,{title:"have_question_for_us",subtitle:"have_question_for_us_desc",loading:e.stateLoading},{default:d(()=>[a("div",pe,[a("div",ce,[a("div",fe,[l(h,{class:"w-full",label:e.stateLoading?"Name":e.$t("form.name"),"for-id":"name"},null,8,["label"]),l(h,{class:"w-full",label:e.stateLoading?"Email":e.$t("form.email"),"for-id":"email"},null,8,["label"])]),_e,a("div",ge,[a("div",he,[l(h,{class:"w-full mb-2 sm:hidden",label:e.stateLoading?"Nmae":e.$t("form.name"),"for-id":"name"},null,8,["label"]),l(w,{placeholder:"Samantha Smith",modelValue:r(o).values.full_name,"onUpdate:modelValue":n[0]||(n[0]=i=>r(o).values.full_name=i),error:r(o).$v.value.full_name.$error},null,8,["modelValue","error"])]),a("div",ve,[l(h,{class:"w-full mb-2 sm:hidden",label:e.stateLoading?"Contact":e.$t("form.contact"),"for-id":"email"},null,8,["label"]),l(w,{placeholder:"example@gmail.com",modelValue:r(o).values.email,"onUpdate:modelValue":n[1]||(n[1]=i=>r(o).values.email=i),error:r(o).$v.value.email.$error},null,8,["modelValue","error"])]),l(q,{class:"col-span-2",label:e.stateLoading?"Message":e.$t("form.message")},{default:d(()=>[l(v,{modelValue:r(o).values.message,"onUpdate:modelValue":n[2]||(n[2]=i=>r(o).values.message=i),error:r(o).$v.value.message.$error,placeholder:e.stateLoading?"Your message":e.$t("your_message"),maxlength:"300"},null,8,["modelValue","error","placeholder"])]),_:1},8,["label"])]),a("div",be,[a("div",xe,[l(c,{width:"93px",height:"21px","border-radius":"4px","preloader-class":"mb-2",loading:e.stateLoading},{default:d(()=>[a("div",$e,[ye,a("p",we,p(e.$t("location_contact")),1)])]),_:1},8,["loading"]),l(c,{width:"100%",height:"21px","border-radius":"4px",loading:e.stateLoading},{default:d(()=>{var i;return[a("p",ke,p((i=e.data)==null?void 0:i.location),1)]}),_:1},8,["loading"])]),Ve,a("div",Le,[a("div",Ce,[l(c,{width:"93px",height:"21px","border-radius":"4px","preloader-class":"mb-2",loading:e.stateLoading},{default:d(()=>[a("div",Be,[Fe,a("p",qe,p(e.$t("email_address")),1)])]),_:1},8,["loading"]),l(c,{width:"100%",height:"21px","border-radius":"4px",loading:e.stateLoading},{default:d(()=>{var i,b;return[a("a",{href:`mailto:${(i=e.data)==null?void 0:i.email}`,target:"_blank",class:"inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"},p((b=e.data)==null?void 0:b.email),9,Ie)]}),_:1},8,["loading"])]),a("div",Pe,[l(c,{width:"93px",height:"21px","border-radius":"4px","preloader-class":"mb-2",loading:e.stateLoading},{default:d(()=>[a("div",Se,[Ne,a("p",ze,p(e.$t("phone_number")),1)])]),_:1},8,["loading"]),l(c,{width:"100%",height:"21px","border-radius":"4px",loading:e.stateLoading},{default:d(()=>{var i,b;return[a("a",{href:`tel:${(i=e.data)==null?void 0:i.phone_number}`,target:"_blank",class:"inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"},p(("formatPhoneNumber"in e?e.formatPhoneNumber:r(Z))((b=e.data)==null?void 0:b.phone_number)),9,Te)]}),_:1},8,["loading"])])])]),a("div",Ae,[l(r(K),{class:"mb-4",theme:"dark",onVerify:_,onExpired:t}),l(C,{tag:"p",keypath:"by_sending_this_message_you_signing_privacy_agreement",class:"text-white/60 font-medium leading-130 text-base mb-4"},{privacy_agreement:d(()=>[l(L,{to:e.localePath("/page/privacy-agreement"),class:"text-white hover:text-red-100 font-semibold transition-300"},{default:d(()=>[I(p(e.$t("privacy_agreement")),1)]),_:1},8,["to"])]),_:1}),l(D,{onClick:g,loading:e.loading,class:"group","button-class":"min-w-full sm:min-w-[280px]"},{default:d(()=>[a("span",De,[I(p(e.$t("send"))+" ",1),Ee])]),_:1},8,["loading"])])])])]),_:1},8,["loading"])}}}),je={class:"bg-dark"},Ge={class:"faq-section pt-[90px] lg:pt-[136px]"},Me={class:"bg-dark-200"},Re=V({__name:"index",setup(y){const s=se(),{t:f}=T(),o=x(!1),u=x();u.value=W(),B(()=>s.faq);const _=B(()=>s.popularAttractions),t=B(()=>s.contact);async function m(){return o.value=!0,await Promise.all([s.fetchFaq(),s.fetchPopularAttractions(),s.fetchContactData()])}m().finally(()=>{o.value=!1}),le({title:f("help")});const g=[{title:"FAQ",link:"/faq"}],e=ae({full_name:"",email:"",message:""},{full_name:{required:F},email:{email:te,required:F},message:{required:F}}),n=x(!1);function h(){for(const v in e.values)e.values[v]=""}function w(){n.value=!0,ee.$post("/about/UserQuestionCreate",{body:e.values}).then(()=>{u.value.success(f("sent_successfully")),h()}).catch(v=>{u.value.error(`${v}`)}).finally(()=>{setTimeout(()=>{n.value=!1},200),e.$v.value.$reset()})}return(v,q)=>{const c=U,L=Ue,C=oe;return $(),k("div",je,[a("div",Ge,[l(c,S({menu:g},{class:""}),null,16)]),a("div",Me,[l(L,{data:t.value,form:r(e),onSubmitForm:w,loading:n.value,"state-loading":o.value},null,8,["data","form","loading","state-loading"])]),l(C,N(z({popularAttractions:_.value,loading:o.value})),null,16)])}}});const sa=A(Re,[["__scopeId","data-v-c99fd94f"]]);export{sa as default};
