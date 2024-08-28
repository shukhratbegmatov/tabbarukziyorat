import { _ as __nuxt_component_1 } from '../server.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, createVNode, withDirectives, toDisplayString, useSSRContext } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderStyle, ssrInterpolate } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Attractions",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1;
      const _directive_lazy = resolveDirective("lazy");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.localePath(`/destination/${(_a = _ctx.item) == null ? void 0 : _a.slug}`),
        class: "!w-[178px] !h-[200px] flex rounded-xl overflow-hidden border border-white/20 relative group preloader-image"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="relative z-0 w-full h-full"${_scopeId}><img${ssrRenderAttrs(mergeProps({
              class: "w-full h-full object-cover absolute top-0 left-0 z-0 transition-300 group-hover:scale-110",
              alt: "attraction-image"
            }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: (_a2 = _ctx.item) == null ? void 0 : _a2.image, delay: 500 })))}${_scopeId}></div><span class="absolute w-full h-full inset-0 z-1" style="${ssrRenderStyle({ "background": "linear-gradient(\n          180deg,\n          rgba(7, 9, 28, 0) 56.88%,\n          rgba(7, 9, 28, 0.8) 100%\n        )" })}"${_scopeId}></span><div class="absolute w-full h-full inset-0 flex flex-col justify-end p-4 z-2"${_scopeId}><p class="font-semibold leading-130 text-base text-white translate-y-5 group-hover:translate-y-0 transition-300 line-clamp-2"${_scopeId}>${ssrInterpolate(_ctx.item.title)}</p><p class="font-medium leading-130 text-sm text-white/80 translate-y-5 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-300"${_scopeId}>${ssrInterpolate((_b = _ctx.item.destination_country) == null ? void 0 : _b.title)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-0 w-full h-full" }, [
                withDirectives(createVNode("img", {
                  class: "w-full h-full object-cover absolute top-0 left-0 z-0 transition-300 group-hover:scale-110",
                  alt: "attraction-image"
                }, null, 512), [
                  [_directive_lazy, { src: (_c = _ctx.item) == null ? void 0 : _c.image, delay: 500 }]
                ])
              ]),
              createVNode("span", {
                class: "absolute w-full h-full inset-0 z-1",
                style: { "background": "linear-gradient(\n          180deg,\n          rgba(7, 9, 28, 0) 56.88%,\n          rgba(7, 9, 28, 0.8) 100%\n        )" }
              }),
              createVNode("div", { class: "absolute w-full h-full inset-0 flex flex-col justify-end p-4 z-2" }, [
                createVNode("p", { class: "font-semibold leading-130 text-base text-white translate-y-5 group-hover:translate-y-0 transition-300 line-clamp-2" }, toDisplayString(_ctx.item.title), 1),
                createVNode("p", { class: "font-medium leading-130 text-sm text-white/80 translate-y-5 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-300" }, toDisplayString((_d = _ctx.item.destination_country) == null ? void 0 : _d.title), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Attractions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Attractions-171c95f6.mjs.map
