import { _ as __nuxt_component_0 } from "./Preloader-bddb5d1e.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InfoCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    count: {},
    icon: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white/[4%] rounded-xl p-4 overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "61px",
        height: "52px",
        "border-radius": "4px",
        "preloader-class": "mb-4",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white text-[40px] font-bold leading-130"${_scopeId}>${ssrInterpolate(_ctx.count)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-white text-[40px] font-bold leading-130" }, toDisplayString(_ctx.count), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "178px",
        height: "26px",
        "border-radius": "4px",
        "preloader-class": "mb-4",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-lg lg:text-xl text-white/60 font-bold leading-130"${_scopeId}>${ssrInterpolate(_ctx.$t(_ctx.title))}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-lg lg:text-xl text-white/60 font-bold leading-130" }, toDisplayString(_ctx.$t(_ctx.title)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "61px",
        height: "52px",
        "border-radius": "4px",
        "preloader-class": "absolute -bottom-4 -right-3",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="absolute w-20 h-20 lg:w-auto lg:h-auto -bottom-4 -right-3"${ssrRenderAttr("src", _ctx.icon)} alt="Card icon"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "absolute w-20 h-20 lg:w-auto lg:h-auto -bottom-4 -right-3",
                src: _ctx.icon,
                alt: "Card icon"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/InfoCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=InfoCard-ef58c1a7.js.map
