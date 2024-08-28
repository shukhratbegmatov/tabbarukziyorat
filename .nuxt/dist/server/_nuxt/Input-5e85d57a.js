import { defineComponent, ref, watch, mergeProps, unref, readonly, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    type: { default: "text" },
    placeholder: {},
    modelValue: {},
    disabled: { type: Boolean },
    error: { type: Boolean },
    focus: { type: Boolean },
    maxlength: { default: 99 },
    minlength: { default: void 0 },
    max: { default: void 0 },
    min: { default: void 0 },
    inputClass: { default: void 0 },
    prefixClass: {},
    suffixClass: {},
    autocomplete: { default: "new-password" },
    id: {},
    readonly: { type: Boolean }
  },
  emits: ["update:modelValue", "blur", "focusout", "focus", "enter"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const Input = ref();
    __expose({ Input });
    const props = __props;
    watch(
      () => props == null ? void 0 : props.focus,
      (value) => {
        var _a;
        if (value) {
          (_a = Input == null ? void 0 : Input.value) == null ? void 0 : _a.focus();
        }
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "relative inline-flex items-center transition-300 relative rounded-lg border overflow-hidden w-full px-4 py-3 group focus-within:border-white/70 bg-white/10 border-white/20 input-backdrop",
          { "!border-red": _ctx.error }
        ]
      }, _attrs))} data-v-d73a1dbb><span class="${ssrRenderClass([[_ctx.prefixClass], "flex-center"])}" data-v-d73a1dbb>`);
      ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
      _push(`</span><input${ssrRenderAttrs(mergeProps({ value: _ctx.modelValue }, {
        type: _ctx.type,
        minlength: _ctx.minlength,
        maxlength: _ctx.maxlength,
        max: _ctx.max,
        min: _ctx.min,
        disabled: _ctx.disabled,
        placeholder: _ctx.placeholder,
        readonly: "readonly" in _ctx ? _ctx.readonly : unref(readonly),
        autocomplete: _ctx.autocomplete,
        id: _ctx.id
      }, {
        class: [[
          _ctx.inputClass,
          "font-medium leading-130 text-base placeholder:text-base placeholder:font-normal bg-transparent flex-grow outline-none text-white placeholder:text-white/20"
        ], "w-full"],
        ref_key: "Input",
        ref: Input
      }))} data-v-d73a1dbb><span class="${ssrRenderClass([[_ctx.suffixClass], "flex-center"])}" data-v-d73a1dbb>`);
      ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
      _push(`</span></div>`);
    };
  }
});
const Input_vue_vue_type_style_index_0_lang = "";
const Input_vue_vue_type_style_index_1_scoped_d73a1dbb_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d73a1dbb"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Input-5e85d57a.js.map
