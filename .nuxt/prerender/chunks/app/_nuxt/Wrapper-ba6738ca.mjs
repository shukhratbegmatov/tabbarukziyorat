import { _ as __nuxt_component_0 } from './Preloader-bddb5d1e.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, unref, withDirectives, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderSlot } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { vIntersectionObserver } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@vueuse/components/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Wrapper",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    line: { type: Boolean, default: true },
    centered: { type: Boolean },
    loading: { type: Boolean }
  },
  setup(__props) {
    const intersecting = ref(false);
    function onIntersectionObserver([{ isIntersecting }]) {
      intersecting.value = isIntersecting;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-16 container w-full" }, _attrs))} data-v-61acfe4e><div class="${ssrRenderClass([{ "flex-center": _ctx.centered }, "flex-center-between flex-col lg:flex-row gap-4 w-full"])}" data-v-61acfe4e><div data-v-61acfe4e>`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "300px",
        height: "52px",
        "border-radius": "4px",
        "preloader-class": "mb-2",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${ssrRenderAttrs(mergeProps({
              class: ["text-2xl md:text-3xl md:text-40 leading-130 text-white font-bold relative w-fit font-playfair", [
                { "pb-3 md:pb-4 title-line": _ctx.line },
                { "title-line_full": unref(intersecting) },
                { "mx-auto title-line_centered": _ctx.centered }
              ]]
            }, ssrGetDirectiveProps(_ctx, unref(vIntersectionObserver), onIntersectionObserver)))} data-v-61acfe4e${_scopeId}>${ssrInterpolate(_ctx.$t(_ctx.title))}</h2>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("h2", {
                class: ["text-2xl md:text-3xl md:text-40 leading-130 text-white font-bold relative w-fit font-playfair", [
                  { "pb-3 md:pb-4 title-line": _ctx.line },
                  { "title-line_full": unref(intersecting) },
                  { "mx-auto title-line_centered": _ctx.centered }
                ]]
              }, [
                createTextVNode(toDisplayString(_ctx.$t(_ctx.title)), 1)
              ], 2)), [
                [unref(vIntersectionObserver), onIntersectionObserver]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "350px",
        height: "26px",
        "border-radius": "4px",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.subtitle) {
              _push2(`<p class="${ssrRenderClass([[{ "text-center": _ctx.centered }], "mt-[14px] font-medium leading-130 text-base md:text-xl text-white"])}" data-v-61acfe4e${_scopeId}>${ssrInterpolate(_ctx.$t(_ctx.subtitle))}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.subtitle ? (openBlock(), createBlock("p", {
                key: 0,
                class: [[{ "text-center": _ctx.centered }], "mt-[14px] font-medium leading-130 text-base md:text-xl text-white"]
              }, toDisplayString(_ctx.$t(_ctx.subtitle)), 3)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!_ctx.centered) {
        ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Wrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61acfe4e"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=Wrapper-ba6738ca.mjs.map
