import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    label: { default: "Label" },
    forId: { default: "input" },
    required: { type: Boolean, default: false },
    info: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: _ctx.forId,
        class: "font-medium text-base text-white leading-130 flex items-start gap-0.5"
      }, _attrs))}>${ssrInterpolate(_ctx.label)} `);
      if (_ctx.required) {
        _push(`<span class="text-xs text-orange">*</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.info) {
        _push(`<span class="icon-info-circle text-gray text-base mt-2 cursor-pointer transition-200 hover:text-blue"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Label.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Label-05217919.js.map
