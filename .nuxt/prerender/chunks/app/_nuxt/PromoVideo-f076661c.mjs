import { useSSRContext, defineComponent, mergeProps } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PromoVideo",
  __ssrInlineRender: true,
  props: {
    title: { default: "promo_video" },
    image: {}
  },
  emits: ["handleShowVideo"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-[482px] lg:h-[682px] flex items-center justify-center" }, _attrs))} data-v-580411b2><div class="absolute top-0 left-0 w-full shape-top h-[200px] z-20" data-v-580411b2></div><div class="absolute bottom-0 left-0 w-full shape-bottom h-[200px] z-10" data-v-580411b2></div><div class="absolute left-0 top-0 w-full h-full bg-dark/50 z-20" data-v-580411b2></div><h2 class="absolute w-fit mx-auto top-8 left-0 right-0 text-white text-2xl lg:text-[28px] text-center sm:text-40 font-bold leading-130 font-playfair z-20" data-v-580411b2>${ssrInterpolate(_ctx.$t(_ctx.title))}</h2><img${ssrRenderAttr("src", _ctx.image)}${ssrRenderAttr("alt", _ctx.title)} class="absolute left-0 top-0 object-cover w-full h-full z-0" data-v-580411b2><button class="relative flex items-center justify-center w-20 h-20 lg:w-[100px] lg:h-[100px] bg-red-100 transition-300 group group-hover:bg-red rounded-full z-30" data-v-580411b2><i class="icon-play text-white text-4xl lg:text-[50px] transition-300 group-hover:scale-110" data-v-580411b2></i></button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/PromoVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-580411b2"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=PromoVideo-f076661c.mjs.map
