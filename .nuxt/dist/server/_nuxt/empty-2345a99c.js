import { mergeProps, useSSRContext, defineComponent, ref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlotInner, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_2 } from "./logo-main-e7260c77.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const Loader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 h-screen w-screen bg-dark z-[100] flex-y-center" }, _attrs))}><div class="w-full h-full flex-y-center"><div class="relative w-full max-auto text-center"><div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[270px] lg:h-[270px] bg-red-100 rounded-full"></div><div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[270px] lg:h-[270px] bg-red-100 rounded-full custom-blur"></div><span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"><img class="shape w-[150px] h-[150px] lg:w-auto lg:h-auto"${ssrRenderAttr("src", _imports_1)} alt="shape"></span><img class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-[80px] h-[80px] lg:w-auto lg:h-auto"${ssrRenderAttr("src", _imports_2)} alt="main logo"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Loader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "empty",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
      if (loading.value) {
        _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const empty_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/empty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=empty-2345a99c.js.map
