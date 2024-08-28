import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';

var EReligion = /* @__PURE__ */ ((EReligion2) => {
  EReligion2["ISLAM"] = "islam";
  EReligion2["CHRISTIANITY"] = "christianity";
  EReligion2["BUDDHISM"] = "buddhism";
  EReligion2["ABOUT"] = "about";
  return EReligion2;
})(EReligion || {});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReligionBadge",
  __ssrInlineRender: true,
  props: {
    type: { default: EReligion.ISLAM }
  },
  setup(__props) {
    const props = __props;
    const iconStyle = computed(() => {
      switch (props.type) {
        case EReligion.ISLAM:
          return "icon-islam-moon";
        case EReligion.CHRISTIANITY:
          return "icon-christian";
        case EReligion.BUDDHISM:
          return "icon-budda";
        default:
          return "icon-islam-moon";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "w-6 h-6 rounded-full flex items-center justify-center" }, _attrs))}><i class="${ssrRenderClass([unref(iconStyle), "text-white text-[27px]"])}"></i></button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/ReligionBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ReligionBadge-6fb900e7.mjs.map
