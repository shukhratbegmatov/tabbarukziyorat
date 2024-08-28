import { _ as __nuxt_component_1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Preloader-bddb5d1e.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CountryCard",
  __ssrInlineRender: true,
  props: {
    country: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonPreloader = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.localePath(`/country/${(_a = _ctx.country) == null ? void 0 : _a.id}`),
        class: [{ "bg-white/[0.03] mr-4": _ctx.loading }, "w-[164px] sm:w-[280px] items-center flex flex-col ease-all duration-300 hover:cursor-pointer border-1 border-white border-opacity-[0.04] rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-[0.04] group relative"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="relative" data-v-15b1ca1b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "90px",
              height: "90px",
              "border-radius": "100%",
              class: "flex-shrink-0",
              "preloader-class": "mb-6 mt-4",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c2, _d2;
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", (_a3 = _ctx.country) == null ? void 0 : _a3.flag)}${ssrRenderAttr("alt", (_b2 = _ctx.country) == null ? void 0 : _b2.title)} class="relative border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[50px] sm:w-[90px] h-[50px] sm:h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-20" data-v-15b1ca1b${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: (_c2 = _ctx.country) == null ? void 0 : _c2.flag,
                      alt: (_d2 = _ctx.country) == null ? void 0 : _d2.title,
                      class: "relative border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[50px] sm:w-[90px] h-[50px] sm:h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-20"
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<img${ssrRenderAttr("src", (_a2 = _ctx.country) == null ? void 0 : _a2.flag)}${ssrRenderAttr("alt", (_b = _ctx.country) == null ? void 0 : _b.title)} class="border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[90px] h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-0 absolute left-0 top-0 custom-shadow transition-300 opacity-0 group-hover:opacity-40" data-v-15b1ca1b${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "80px",
              height: "24px",
              "border-radius": "4px",
              class: "mb-1",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(`<h3 class="font-semibold leading-130 text-5 text-white" data-v-15b1ca1b${_scopeId2}>${ssrInterpolate((_a3 = _ctx.country) == null ? void 0 : _a3.title)}</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "font-semibold leading-130 text-5 text-white" }, toDisplayString((_b2 = _ctx.country) == null ? void 0 : _b2.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "100px",
              height: "24px",
              "border-radius": "4px",
              "preloader-class": "mb-4",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(`<p class="font-medium text-base leading-130 text-white text-opacity-60 pb-[22px]" data-v-15b1ca1b${_scopeId2}>${ssrInterpolate((_a3 = _ctx.country) == null ? void 0 : _a3.destination_count)} ${ssrInterpolate(_ctx.$t("destinations"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-medium text-base leading-130 text-white text-opacity-60 pb-[22px]" }, toDisplayString((_b2 = _ctx.country) == null ? void 0 : _b2.destination_count) + " " + toDisplayString(_ctx.$t("destinations")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="block absolute w-10 h-0.5 bg-white bg-opacity-40 bottom-0 ease-all duration-300 group-hover:w-full group-hover:bg-opacity-100" data-v-15b1ca1b${_scopeId}></span>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode(_component_CommonPreloader, {
                  width: "90px",
                  height: "90px",
                  "border-radius": "100%",
                  class: "flex-shrink-0",
                  "preloader-class": "mb-6 mt-4",
                  loading: _ctx.loading
                }, {
                  default: withCtx(() => {
                    var _a3, _b2;
                    return [
                      createVNode("img", {
                        src: (_a3 = _ctx.country) == null ? void 0 : _a3.flag,
                        alt: (_b2 = _ctx.country) == null ? void 0 : _b2.title,
                        class: "relative border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[50px] sm:w-[90px] h-[50px] sm:h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-20"
                      }, null, 8, ["src", "alt"])
                    ];
                  }),
                  _: 1
                }, 8, ["loading"]),
                createVNode("img", {
                  src: (_c = _ctx.country) == null ? void 0 : _c.flag,
                  alt: (_d = _ctx.country) == null ? void 0 : _d.title,
                  class: "border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[90px] h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-0 absolute left-0 top-0 custom-shadow transition-300 opacity-0 group-hover:opacity-40"
                }, null, 8, ["src", "alt"])
              ]),
              createVNode(_component_CommonPreloader, {
                width: "80px",
                height: "24px",
                "border-radius": "4px",
                class: "mb-1",
                loading: _ctx.loading
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode("h3", { class: "font-semibold leading-130 text-5 text-white" }, toDisplayString((_a3 = _ctx.country) == null ? void 0 : _a3.title), 1)
                  ];
                }),
                _: 1
              }, 8, ["loading"]),
              createVNode(_component_CommonPreloader, {
                width: "100px",
                height: "24px",
                "border-radius": "4px",
                "preloader-class": "mb-4",
                loading: _ctx.loading
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode("p", { class: "font-medium text-base leading-130 text-white text-opacity-60 pb-[22px]" }, toDisplayString((_a3 = _ctx.country) == null ? void 0 : _a3.destination_count) + " " + toDisplayString(_ctx.$t("destinations")), 1)
                  ];
                }),
                _: 1
              }, 8, ["loading"]),
              createVNode("span", { class: "block absolute w-10 h-0.5 bg-white bg-opacity-40 bottom-0 ease-all duration-300 group-hover:w-full group-hover:bg-opacity-100" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const CountryCard_vue_vue_type_style_index_0_scoped_15b1ca1b_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/CountryCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15b1ca1b"]]);
export {
  __nuxt_component_6 as _
};
//# sourceMappingURL=CountryCard-ba7b0e33.js.map
