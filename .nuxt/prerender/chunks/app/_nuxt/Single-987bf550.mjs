import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './Preloader-bddb5d1e.mjs';
import { useSSRContext, defineComponent, resolveDirective, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-90707320.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _imports_0 = "" + publicAssetsURL("pattern/main.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Single",
  __ssrInlineRender: true,
  props: {
    image: { default: "/islam.webp" },
    title: { default: "registan square" },
    text: {},
    breadcrumb: {},
    loading: { type: Boolean },
    hasBreadcrumb: { type: Boolean, default: false },
    content: { type: Boolean },
    isReligion: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0$1;
      const _directive_lazy = resolveDirective("lazy");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center h-[752px] lg:h-screen py-[70px] lg:py-[136px]" }, _attrs))} data-v-187ea054><img${ssrRenderAttr("src", _imports_0)} alt="Main pattern" class="${ssrRenderClass([_ctx.isReligion ? "opacity-0" : "opacity-100", "absolute w-[431px] h-[437px] lg:w-auto lg:h-auto top-[20%] lg:top-[112px] left-0 !z-20 select-none"])}" data-v-187ea054><template><img${ssrRenderAttrs(mergeProps({
        alt: _ctx.title,
        class: "absolute left-0 top-0 w-full h-full object-cover z-0 select-none"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: _ctx.image })))} data-v-187ea054></template><div class="absolute top-0 left-0 w-full h-full custom-gradient z-10 select-none" data-v-187ea054></div><div class="relative h-full w-full flex items-center justify-center flex-col !z-50" data-v-187ea054>`);
      if (_ctx.hasBreadcrumb) {
        _push(ssrRenderComponent(_sfc_main$1, {
          menu: _ctx.breadcrumb,
          class: "absolute w-full left-0 top-0 z-30"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative container h-full my-auto flex items-center justify-center !z-50" data-v-187ea054><div class="flex items-center justify-center flex-col max-w-[800px] relative z-20" data-v-187ea054>`);
      ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
      _push(`<div class="flex items-center justify-center flex-col space-y-[9px] lg:space-y-5 mb-[13px] lg:mb-[30px]" data-v-187ea054>`);
      _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
        width: "400px",
        height: "104px"
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center text-white text-40 lg:text-80 font-bold leading-130 font-playfair capitalize" data-v-187ea054${_scopeId}>${ssrInterpolate(_ctx.title)}</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-center text-white text-40 lg:text-80 font-bold leading-130 font-playfair capitalize" }, toDisplayString(_ctx.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
        width: "600px",
        height: "54px"
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.content) {
              _push2(`<div class="text-center text-white text-sm lg:text-xl font-medium leading-130" data-v-187ea054${_scopeId}>${_ctx.text}</div>`);
            } else {
              _push2(`<p class="text-center text-white text-sm lg:text-xl font-medium leading-130" data-v-187ea054${_scopeId}>${ssrInterpolate(_ctx.text)}</p>`);
            }
          } else {
            return [
              _ctx.content ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center text-white text-sm lg:text-xl font-medium leading-130",
                innerHTML: _ctx.text
              }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("p", {
                key: 1,
                class: "text-center text-white text-sm lg:text-xl font-medium leading-130"
              }, toDisplayString(_ctx.text), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "additional", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner/Single.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-187ea054"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Single-987bf550.mjs.map
