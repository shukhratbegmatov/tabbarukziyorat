import { defineComponent, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    text: { default: "Button" },
    textClass: { default: "" },
    shadowColor: { default: "" },
    hasShadow: { type: Boolean, default: true },
    spinnerColor: { default: "white" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    type: { default: "button" },
    variant: { default: "primary" },
    icon: {},
    iconClass: {},
    buttonClass: {},
    suffix: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const buttonVariantClass = computed(() => `s-button-${props.variant}`);
    const textStyle = computed(() => {
      const labelClass = props.textClass;
      return [
        labelClass,
        !props.loading ? "opacity-100 visible" : "opacity-0 invisible",
        "font-semibold leading-150 text-base select-none"
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ disabled: _ctx.disabled, type: _ctx.type }, {
        class: ["transition-300 rounded-lg py-4 px-3 flex-center cursor-pointer relative group disabled:bg-grey-light disabled:hover:bg-grey-light disabled:text-dark/40 outline-none", [
          _ctx.buttonClass,
          { "pointer-events-none w-[110px]": _ctx.loading },
          buttonVariantClass.value
        ]],
        style: { "--box-shadow": _ctx.shadowColor, "--spinnerColor": _ctx.spinnerColor }
      }, _attrs))}><i class="${ssrRenderClass([
        "s-transition absolute-center-h absolute-center-v",
        _ctx.loading ? "opacity-100 visible" : "opacity-0 invisible w-0"
      ])}"><svg class="loading-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path${ssrRenderAttr("opacity", [_ctx.loading ? 1 : 0.2])} d="M11.9999 3.14746C16.8856 3.14746 20.8524 7.11425 20.8524 11.9999C20.8524 16.8856 16.8856 20.8524 11.9999 20.8524C7.11425 20.8524 3.14746 16.8856 3.14746 11.9999C3.14746 7.11425 7.11425 3.14746 11.9999 3.14746Z"${ssrRenderAttr("stroke", [_ctx.loading ? "#ffffff" : "#111325"])} stroke-width="3"></path><path d="M11.2458 20.8191C9.38896 20.6622 7.56653 19.9205 6.07624 18.5787C3.60297 16.3517 2.67826 13.0422 3.37337 10.0106" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"></path></svg></i>`);
      if (!_ctx.loading) {
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.icon) {
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="${ssrRenderClass([textStyle.value, "s-transition"])}">${ssrInterpolate(_ctx.text)}</span>`);
          if (_ctx.suffix) {
            ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const Button_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Button-b4a346b5.js.map
