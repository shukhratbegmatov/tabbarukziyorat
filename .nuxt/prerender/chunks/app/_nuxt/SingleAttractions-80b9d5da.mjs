import { defineComponent, ref, watch, mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString, createTextVNode } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_0 } from './Preloader-bddb5d1e.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AttractionTab",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    list: {},
    itemClass: {},
    activeClass: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const $emit = __emit;
    const active = ref({ left: 0, width: 0 });
    const pick = (tab, e) => {
      const target = e == null ? void 0 : e.target;
      if (target) {
        active.value = {
          left: target == null ? void 0 : target.offsetLeft,
          width: target == null ? void 0 : target.offsetWidth
        };
        $emit("update:modelValue", tab);
      }
    };
    watch(
      () => props.modelValue,
      () => {
        const item = document.getElementById(
          `item_${props.modelValue}`
        );
        pick(props.modelValue, { target: item });
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-full md:max-w-fit relative gap-[6px] p-0.5 bg-white/10 border border-solid border-white/10 rounded-xl flex overflow-hidden p-[6px]" }, _attrs))}><div class="${ssrRenderClass([_ctx.activeClass, "absolute h-[calc(100%-12px)] rounded-md bg-red w-full -translate-y-1/2 top-1/2 transition-all duration-300 border border-white/25"])}" style="${ssrRenderStyle({
        width: `${unref(active).width}px`,
        left: `${unref(active).left}px`
      })}"></div><!--[-->`);
      ssrRenderList(_ctx.list, (tab, idx) => {
        _push(`<button${ssrRenderAttr("id", "item_" + (tab == null ? void 0 : tab.id))} class="${ssrRenderClass([[
          _ctx.itemClass,
          _ctx.modelValue === (tab == null ? void 0 : tab.id) ? "text-white font-medium" : "text-white/60 font-medium"
        ], "min-w-[32%] sm:min-w-[32.5%] md:min-w-[160px] bg-white/10 py-2 px-3 md:px-7 text-sm sm:text-base md:text-xl leading-130 rounded-md z-10 m-0 transition-all duration-300 hover:text-white/100 border border-transparent hover:border-white/25"])}">`);
        ssrRenderSlot(_ctx.$slots, "item", tab, () => {
          _push(`${ssrInterpolate(tab == null ? void 0 : tab.title)}`);
        }, _push, _parent);
        _push(`</button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/AttractionTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SingleAttractions",
  __ssrInlineRender: true,
  props: {
    data: {},
    cardLoading: { type: Boolean },
    titleClass: {},
    cardClass: {},
    textClass: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_CommonPreloader = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.localePath(`/destination/${(_a = _ctx.data) == null ? void 0 : _a.slug}`),
        class: ["group w-[200px] sm:w-[220px] md:w-[280px] h-[220px] sm:h-[240px] md:h-[300px]", _ctx.cardClass]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full relative rounded-xl border border-white/25 overflow-hidden" data-v-dbad3b64${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "100%",
              height: "100%",
              "border-radius": "12px",
              loading: _ctx.cardLoading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d, _e, _f;
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", (_a2 = _ctx.data) == null ? void 0 : _a2.image)}${ssrRenderAttr("alt", _ctx.data.title)} class="absolute w-full h-full object-cover top-0 left-0 z-10 transition-300 group-hover:scale-110" data-v-dbad3b64${_scopeId2}><div class="gradient-overlay absolute w-full h-full top-0 left-0 z-20 p-3 sm:p-5 flex items-end justify-start" data-v-dbad3b64${_scopeId2}><div class="text-white" data-v-dbad3b64${_scopeId2}><p class="${ssrRenderClass([_ctx.titleClass, "font-semibold leading-130 text-lg sm:text-xl md:text-2xl translate-y-5 group-hover:translate-y-0 transition-300"])}" data-v-dbad3b64${_scopeId2}>${ssrInterpolate(_ctx.data.title)}</p><p class="${ssrRenderClass([_ctx.textClass, "font-medium leading-130 text-sm sm:text-base md:text-xl text-white/80 mt-1 flex items-center gap-x-2 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-300"])}" data-v-dbad3b64${_scopeId2}><i class="icon-map-pin" data-v-dbad3b64${_scopeId2}></i> ${ssrInterpolate((_c = (_b = _ctx.data) == null ? void 0 : _b.destination_country) == null ? void 0 : _c.title)}</p></div></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: (_d = _ctx.data) == null ? void 0 : _d.image,
                      alt: _ctx.data.title,
                      class: "absolute w-full h-full object-cover top-0 left-0 z-10 transition-300 group-hover:scale-110"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "gradient-overlay absolute w-full h-full top-0 left-0 z-20 p-3 sm:p-5 flex items-end justify-start" }, [
                      createVNode("div", { class: "text-white" }, [
                        createVNode("p", {
                          class: [_ctx.titleClass, "font-semibold leading-130 text-lg sm:text-xl md:text-2xl translate-y-5 group-hover:translate-y-0 transition-300"]
                        }, toDisplayString(_ctx.data.title), 3),
                        createVNode("p", {
                          class: [_ctx.textClass, "font-medium leading-130 text-sm sm:text-base md:text-xl text-white/80 mt-1 flex items-center gap-x-2 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-300"]
                        }, [
                          createVNode("i", { class: "icon-map-pin" }),
                          createTextVNode(" " + toDisplayString((_f = (_e = _ctx.data) == null ? void 0 : _e.destination_country) == null ? void 0 : _f.title), 1)
                        ], 2)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full relative rounded-xl border border-white/25 overflow-hidden" }, [
                createVNode(_component_CommonPreloader, {
                  width: "100%",
                  height: "100%",
                  "border-radius": "12px",
                  loading: _ctx.cardLoading
                }, {
                  default: withCtx(() => {
                    var _a2, _b, _c;
                    return [
                      createVNode("img", {
                        src: (_a2 = _ctx.data) == null ? void 0 : _a2.image,
                        alt: _ctx.data.title,
                        class: "absolute w-full h-full object-cover top-0 left-0 z-10 transition-300 group-hover:scale-110"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "gradient-overlay absolute w-full h-full top-0 left-0 z-20 p-3 sm:p-5 flex items-end justify-start" }, [
                        createVNode("div", { class: "text-white" }, [
                          createVNode("p", {
                            class: [_ctx.titleClass, "font-semibold leading-130 text-lg sm:text-xl md:text-2xl translate-y-5 group-hover:translate-y-0 transition-300"]
                          }, toDisplayString(_ctx.data.title), 3),
                          createVNode("p", {
                            class: [_ctx.textClass, "font-medium leading-130 text-sm sm:text-base md:text-xl text-white/80 mt-1 flex items-center gap-x-2 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-300"]
                          }, [
                            createVNode("i", { class: "icon-map-pin" }),
                            createTextVNode(" " + toDisplayString((_c = (_b = _ctx.data) == null ? void 0 : _b.destination_country) == null ? void 0 : _c.title), 1)
                          ], 2)
                        ])
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/SingleAttractions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dbad3b64"]]);

export { _sfc_main$1 as _, __nuxt_component_1 as a };
//# sourceMappingURL=SingleAttractions-80b9d5da.mjs.map
