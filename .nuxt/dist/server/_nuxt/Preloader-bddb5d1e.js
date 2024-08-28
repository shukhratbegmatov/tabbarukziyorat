import { defineComponent, ref, createElementBlock, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Preloader",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean },
    height: { default: "20px" },
    width: { default: "50px" },
    margin: {},
    line: { default: 1 },
    borderRadius: { default: "4px" },
    preloaderClass: { default: "" },
    circle: { type: Boolean },
    contentWrapperClass: {}
  },
  setup(__props) {
    const props = __props;
    const shimmerStyles = computed(() => {
      return {
        "--width": props.width,
        "--height": props.height,
        "--border-radius": props.circle ? "50%" : props.borderRadius
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline" }, _attrs))} data-v-fc8f2b51>`);
      if (_ctx.loading) {
        _push(`<div class="${ssrRenderClass([_ctx.preloaderClass, "flex-shrink-0"])}" style="${ssrRenderStyle({
          height: _ctx.height,
          width: _ctx.width,
          margin: _ctx.margin
        })}" data-v-fc8f2b51><span class="skeleton" style="${ssrRenderStyle(shimmerStyles.value)}" data-v-fc8f2b51></span></div>`);
      } else {
        _push(`<div class="${ssrRenderClass(_ctx.contentWrapperClass)}" data-v-fc8f2b51>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const Preloader_vue_vue_type_style_index_0_scoped_fc8f2b51_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Preloader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc8f2b51"]]);
export {
  __nuxt_component_0 as _,
  __nuxt_component_0$1 as a
};
//# sourceMappingURL=Preloader-bddb5d1e.js.map
