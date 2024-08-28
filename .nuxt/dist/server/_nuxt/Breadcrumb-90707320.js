import { _ as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    menu: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-light py-4 hidden-on-print overflow-x-hidden z-10" }, _attrs))}><div class="container flex items-center md:overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/"),
        class: "flex items-center space-x-1 text-white font-semibold leading-130 group transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="icon-house-medical text-white text-base leading-130 transition-300 group-hover:text-red"${_scopeId}></i><p class="text-sm text-white font-bold leading-130 transition-300 group-hover:text-red"${_scopeId}>${ssrInterpolate(_ctx.$t("home"))}</p>`);
          } else {
            return [
              createVNode("i", { class: "icon-house-medical text-white text-base leading-130 transition-300 group-hover:text-red" }),
              createVNode("p", { class: "text-sm text-white font-bold leading-130 transition-300 group-hover:text-red" }, toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(_ctx.menu, (item, index) => {
        var _a, _b;
        _push(`<div class="flex items-center gap-1 overflow-hidden group shrink-0">`);
        if ((_a = item == null ? void 0 : item.link) == null ? void 0 : _a.length) {
          _push(`<i class="icon-chevron-right text-gray-100 text-sm ml-1"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.localePath(item == null ? void 0 : item.link),
          class: [{
            "pointer-events-none !text-gray-100": index === ((_b = _ctx.menu) == null ? void 0 : _b.length) - 1
          }, "transition-200 flex cursor-pointer items-center text-white font-semibold leading-130 min-w-max group-last:min-w-[100px] sm:group-last:min-w-[200px] text-sm hover:text-red breadcrumb-menu line-clamp-2 transition-300 capitalize"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (index === 0) {
                _push2(`<!--[-->${ssrInterpolate(_ctx.$t(item == null ? void 0 : item.title))}<!--]-->`);
              } else {
                _push2(`<!--[-->${ssrInterpolate(item == null ? void 0 : item.title)}<!--]-->`);
              }
            } else {
              return [
                index === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(_ctx.$t(item == null ? void 0 : item.title)), 1)
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(item == null ? void 0 : item.title), 1)
                ], 64))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Breadcrumb-90707320.js.map
