import { _ as __nuxt_component_5 } from "./Wrapper-ba6738ca.js";
import { _ as _sfc_main$1 } from "./Attractions-171c95f6.js";
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, reactive } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import useVuelidate from "@vuelidate/core";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PopularAttractions",
  __ssrInlineRender: true,
  props: {
    isRecommended: { type: Boolean },
    popularAttractions: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWrapper = __nuxt_component_5;
      const _component_CardAttractions = _sfc_main$1;
      _push(ssrRenderComponent(_component_SectionWrapper, mergeProps({
        title: _ctx.isRecommended ? "recommended_attractions" : "popular_attractions",
        subtitle: "popular_attractions_desc",
        centered: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.popularAttractions, (item, i) => {
              _push2(ssrRenderComponent(_component_CardAttractions, mergeProps({ item }, { key: i }), null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.popularAttractions, (item, i) => {
                  return openBlock(), createBlock(_component_CardAttractions, mergeProps({ item }, { key: i }), null, 16);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/PopularAttractions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function useForm(...args) {
  const [initialValues, validations, vuelidateConfig] = args;
  const values = reactive(initialValues);
  const $v = useVuelidate(validations, values, vuelidateConfig);
  return { values, $v };
}
export {
  _sfc_main as _,
  useForm as u
};
//# sourceMappingURL=useForm-0edd66a5.js.map
