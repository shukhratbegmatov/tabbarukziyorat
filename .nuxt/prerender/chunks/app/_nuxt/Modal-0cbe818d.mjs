import { useSSRContext, defineComponent } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    title: { default: "Modal" },
    show: { type: Boolean },
    bodyStyle: {},
    headerStyle: {},
    buttonClass: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3028af9e>`);
      if (_ctx.show) {
        _push(`<div class="fixed top-0 w-full h-full bg-black/60 z-50 flex items-center justify-center transition-300 p-5" data-v-3028af9e></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.show) {
        _push(`<div id="ModalBg" class="fixed top-0 w-full h-full z-[51] flex items-center justify-center transition-300 p-5" data-v-3028af9e><div id="Modal" class="${ssrRenderClass([[{ "!scale-100": _ctx.show }, _ctx.bodyStyle], "bg-dark rounded-xl w-full max-w-[484px] overflow-hidden scale-110 transition-300"])}" data-v-3028af9e>`);
        ssrRenderSlot(_ctx.$slots, "header", {}, () => {
          _push(`<div class="${ssrRenderClass([_ctx.headerStyle, "px-5 py-2 md:py-3 flex justify-between items-center border-b border-white/18"])}" data-v-3028af9e><h3 class="text-white text-lg md:text-2xl font-semibold text-white" data-v-3028af9e>${ssrInterpolate(_ctx.title)}</h3><button class="${ssrRenderClass([_ctx.buttonClass, "text-white/50 transition-300 hover:text-white"])}" data-v-3028af9e><i class="icon-xmark" data-v-3028af9e></i></button></div>`);
        }, _push, _parent);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Modal/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3028af9e"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Modal-0cbe818d.mjs.map
