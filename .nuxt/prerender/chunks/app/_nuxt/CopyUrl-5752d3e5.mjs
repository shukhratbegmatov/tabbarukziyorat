import { defineComponent, mergeProps, useSSRContext, computed, ref, withCtx, createTextVNode, toDisplayString } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    withTrigger: { type: Boolean },
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["absolute bottom-full left-1/2 -translate-x-1/2 transition duration-300", [
          _ctx.show && _ctx.withTrigger ? "!-translate-y-4 !visible !opacity-100" : "invisible opacity-0",
          {
            "md:group-hover:visible md:group-hover:opacity-100 md:group-hover:-translate-y-4": !_ctx.withTrigger
          }
        ]]
      }, _attrs))}><div class="tooltip bg-dark-100 rounded-lg px-4 py-2 text-sm leading-4 text-white relative">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Tooltip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CopyUrl",
  __ssrInlineRender: true,
  setup(__props) {
    const url = computed(() => {
      return "";
    });
    const copied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTooltip = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer relative bg-white/10 hover:bg-gray-650 flex items-center justify-between pl-2 rounded-lg group max-w-[584px] transition-300 single-detail" }, _attrs))} data-v-8bed980c><span style="${ssrRenderStyle({ "word-break": "break-all" })}" class="line-clamp-1 text-white leading-130 transition-300 max-w-[252px] break-all" data-v-8bed980c>${ssrInterpolate(url.value)}</span><span class="w-8 h-8 shrink-0 bg-red-100 group-hover:bg-[#e52b2b] transition-300 rounded-md flex-center ml-2 group relative" data-v-8bed980c><i class="icon-file-copy text-2xl leading-6 text-white" data-v-8bed980c></i>`);
      _push(ssrRenderComponent(_component_CommonTooltip, {
        "with-trigger": "",
        show: copied.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("copied"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("copied")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/CopyUrl.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bed980c"]]);

export { __nuxt_component_1 as _, _sfc_main$1 as a };
//# sourceMappingURL=CopyUrl-5752d3e5.mjs.map
