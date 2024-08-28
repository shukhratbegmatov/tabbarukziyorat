import { _ as _sfc_main$1 } from "./Header-9178e243.js";
import { u as useRoute, a as useHomeStore, _ as __nuxt_component_1 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./Button-b4a346b5.js";
import { defineComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_2 } from "./logo-main-e7260c77.js";
import "./Logo-a89e0c66.js";
import "./Preloader-bddb5d1e.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "vue-router";
import "./Input-5e85d57a.js";
import "vue-highlight-words";
import "./useFetcher-bfa391cb.js";
import "cookie-es";
import "h3";
import "ohash";
import "./destination-7a1b9a3b.js";
import "@vueuse/core";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "ufo";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "@intlify/core-base";
import "@intlify/vue-devtools";
import "js-cookie";
import "is-https";
import "dayjs";
import "dayjs/locale/az.js";
import "dayjs/locale/en.js";
import "dayjs/locale/hu.js";
import "dayjs/locale/kk.js";
import "dayjs/locale/ky.js";
import "dayjs/locale/ru.js";
import "dayjs/locale/tk.js";
import "dayjs/locale/tr.js";
import "dayjs/locale/uz-latn.js";
import "dayjs/plugin/relativeTime.js";
import "vue3-lazyload";
import "defu";
const _imports_0 = "" + __publicAssetsURL("svg/404.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    useRoute();
    const homeStore = useHomeStore();
    homeStore.nuxtServerInit();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen error-page flex-center relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
      _push(`<div class="container"><div class="md:max-w-[822px] max-auto text-center"><div class="relative mb-16 sm:mb-8 md:mb-0"><img class="mx-auto w-[80%] md:w-full"${ssrRenderAttr("src", _imports_0)} alt="404"><span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center"><img class="shape !max-w-[70%] md:max-w-full"${ssrRenderAttr("src", _imports_1)} alt="shape"></span><img class="logo-moon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1"${ssrRenderAttr("src", _imports_2)} alt="main logo"></div><h1 class="text-center text-white text-xl sm:text-2xl md:text-40 font-bold leading-130 mb-4 error-title">${ssrInterpolate(_ctx.$t("error_title"))}</h1><p class="mt-14 mx-auto font-medium text-sm sm:text-base md:text-xl leading-130 text-white error-description mb-9">${ssrInterpolate(_ctx.$t("error_desc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonButton, {
              text: _ctx.$t("go_home"),
              suffix: "",
              class: "mx-auto",
              "button-class": "!px-8 !py-3"
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"${_scopeId2}><path d="M19.5 9.77809V16.2C19.5 17.8801 19.5 18.7202 19.173 19.362C18.8854 19.9264 18.4265 20.3854 17.862 20.673C17.2202 21 16.3802 21 14.7 21H10.3C8.61984 21 7.77976 21 7.13803 20.673C6.57354 20.3854 6.1146 19.9264 5.82698 19.362C5.5 18.7202 5.5 17.8801 5.5 16.2V9.77743M21.5 12L16.0668 5.96396C14.8311 4.59119 14.2133 3.90481 13.4856 3.65141C12.8466 3.42885 12.151 3.4289 11.5119 3.65156C10.7843 3.90506 10.1666 4.59154 8.93114 5.96449L3.5 12M14.5 12C14.5 13.1046 13.6046 14 12.5 14C11.3954 14 10.5 13.1046 10.5 12C10.5 10.8954 11.3954 9.99999 12.5 9.99999C13.6046 9.99999 14.5 10.8954 14.5 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      width: "25",
                      height: "24",
                      viewBox: "0 0 25 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "ml-1"
                    }, [
                      createVNode("path", {
                        d: "M19.5 9.77809V16.2C19.5 17.8801 19.5 18.7202 19.173 19.362C18.8854 19.9264 18.4265 20.3854 17.862 20.673C17.2202 21 16.3802 21 14.7 21H10.3C8.61984 21 7.77976 21 7.13803 20.673C6.57354 20.3854 6.1146 19.9264 5.82698 19.362C5.5 18.7202 5.5 17.8801 5.5 16.2V9.77743M21.5 12L16.0668 5.96396C14.8311 4.59119 14.2133 3.90481 13.4856 3.65141C12.8466 3.42885 12.151 3.4289 11.5119 3.65156C10.7843 3.90506 10.1666 4.59154 8.93114 5.96449L3.5 12M14.5 12C14.5 13.1046 13.6046 14 12.5 14C11.3954 14 10.5 13.1046 10.5 12C10.5 10.8954 11.3954 9.99999 12.5 9.99999C13.6046 9.99999 14.5 10.8954 14.5 12Z",
                        stroke: "white",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommonButton, {
                text: _ctx.$t("go_home"),
                suffix: "",
                class: "mx-auto",
                "button-class": "!px-8 !py-3"
              }, {
                suffix: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    width: "25",
                    height: "24",
                    viewBox: "0 0 25 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "ml-1"
                  }, [
                    createVNode("path", {
                      d: "M19.5 9.77809V16.2C19.5 17.8801 19.5 18.7202 19.173 19.362C18.8854 19.9264 18.4265 20.3854 17.862 20.673C17.2202 21 16.3802 21 14.7 21H10.3C8.61984 21 7.77976 21 7.13803 20.673C6.57354 20.3854 6.1146 19.9264 5.82698 19.362C5.5 18.7202 5.5 17.8801 5.5 16.2V9.77743M21.5 12L16.0668 5.96396C14.8311 4.59119 14.2133 3.90481 13.4856 3.65141C12.8466 3.42885 12.151 3.4289 11.5119 3.65156C10.7843 3.90506 10.1666 4.59154 8.93114 5.96449L3.5 12M14.5 12C14.5 13.1046 13.6046 14 12.5 14C11.3954 14 10.5 13.1046 10.5 12C10.5 10.8954 11.3954 9.99999 12.5 9.99999C13.6046 9.99999 14.5 10.8954 14.5 12Z",
                      stroke: "white",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                _: 1
              }, 8, ["text"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const error_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=error-component-cfc1303a.js.map
