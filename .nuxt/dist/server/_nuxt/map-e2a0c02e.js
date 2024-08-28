import { _ as __nuxt_component_1, b as useI18n, u as useRoute, g as useRouter } from "../server.mjs";
import { _ as _sfc_main$9 } from "./Logo-a89e0c66.js";
import { _ as __nuxt_component_0$3 } from "./Input-5e85d57a.js";
import { defineComponent, ref, watch, mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString, computed, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0$1, a as __nuxt_component_0$2 } from "./Preloader-bddb5d1e.js";
import { _ as _sfc_main$8 } from "./ReligionBadge-6fb900e7.js";
import { d as debounce } from "./useFetcher-bfa391cb.js";
import { useWindowSize, useIntersectionObserver } from "@vueuse/core";
import { u as useDestinationStore } from "./destination-7a1b9a3b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __nuxt_component_0$4 } from "./Modal-0cbe818d.js";
import { _ as _sfc_main$a } from "./Label-05217919.js";
import { _ as _sfc_main$b } from "./Button-b4a346b5.js";
import "destr";
import { useRoute as useRoute$1 } from "vue-router";
import { u as useMounted } from "./useMounted-2a075af2.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "@intlify/core-base";
import "@intlify/vue-devtools";
import "cookie-es";
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
import "ohash";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Tab",
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
      const target = e.target;
      active.value = {
        left: target == null ? void 0 : target.offsetLeft,
        width: target == null ? void 0 : target.offsetWidth
      };
      $emit("update:modelValue", tab);
    };
    watch(
      () => props.modelValue,
      () => {
        const item = document.getElementById(
          `item_${props.modelValue}`
        );
        pick(props.modelValue, { target: item });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-tab relative bg-white/12 rounded-full flex w-max transition-300 overflow-hidden" }, _attrs))}><div class="${ssrRenderClass([_ctx.activeClass, "absolute h-full rounded-full bg-white w-full -translate-y-1/2 top-1/2 transition-300 text-dark"])}" style="${ssrRenderStyle({ width: `${unref(active).width}px`, left: `${unref(active).left}px` })}"></div><!--[-->`);
      ssrRenderList(_ctx.list, (tab, idx) => {
        _push(`<button${ssrRenderAttr("id", `item_${tab.value}`)} class="${ssrRenderClass([[
          _ctx.itemClass,
          _ctx.modelValue === tab.value ? "text-dark hover:!text-dark" : "!text-white"
        ], "tabs py-2.5 px-6 rounded-full transition-300 w-full text-lg font-medium z-10 hover:text-dark font-medium tabs"])}">${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Tab.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "LocationItem",
  __ssrInlineRender: true,
  props: {
    data: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonPreloader = __nuxt_component_0$1;
      const _component_CommonReligionBadge = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex pl-5 transition-300 hover:bg-white/5 group cursor-pointer", { "bg-white/[3%]": _ctx.loading }]
      }, _attrs))}><div class="flex gap-3 h-max cursor-pointer pr-2 py-4 border-b border-dark-200">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath(`/destination/${(_a = _ctx.data) == null ? void 0 : _a.slug}`)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "118px",
              height: "72px",
              "border-radius": "4px",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d, _e, _f;
                if (_push3) {
                  _push3(`<div class="aspect-location-image overflow-hidden rounded shrink-0 w-[118px] relative border-white/12"${_scopeId2}><img${ssrRenderAttr("src", (_a2 = _ctx.data) == null ? void 0 : _a2.image)} alt="location image" class="w-full h-full object-cover"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CommonReligionBadge, {
                    class: "absolute bottom-2 left-2",
                    type: (_c = (_b = _ctx.data) == null ? void 0 : _b.religion) == null ? void 0 : _c.type
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="absolute w-full h-full opacity-0 top-0 lef-0 transition-300 group-hover:opacity-40 bg-dark/80 group-hover:bg-dark flex flex-col items-center justify-center hover:!opacity-100 hover:!bg-dark/80"${_scopeId2}><i class="icon-external-link text-white text-2xl"${_scopeId2}></i><span class="text-white text-xs"${_scopeId2}>${ssrInterpolate(_ctx.$t("view"))}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "aspect-location-image overflow-hidden rounded shrink-0 w-[118px] relative border-white/12" }, [
                      createVNode("img", {
                        src: (_d = _ctx.data) == null ? void 0 : _d.image,
                        alt: "location image",
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src"]),
                      createVNode(_component_CommonReligionBadge, {
                        class: "absolute bottom-2 left-2",
                        type: (_f = (_e = _ctx.data) == null ? void 0 : _e.religion) == null ? void 0 : _f.type
                      }, null, 8, ["type"]),
                      createVNode("div", { class: "absolute w-full h-full opacity-0 top-0 lef-0 transition-300 group-hover:opacity-40 bg-dark/80 group-hover:bg-dark flex flex-col items-center justify-center hover:!opacity-100 hover:!bg-dark/80" }, [
                        createVNode("i", { class: "icon-external-link text-white text-2xl" }),
                        createVNode("span", { class: "text-white text-xs" }, toDisplayString(_ctx.$t("view")), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommonPreloader, {
                width: "118px",
                height: "72px",
                "border-radius": "4px",
                loading: _ctx.loading
              }, {
                default: withCtx(() => {
                  var _a2, _b, _c;
                  return [
                    createVNode("div", { class: "aspect-location-image overflow-hidden rounded shrink-0 w-[118px] relative border-white/12" }, [
                      createVNode("img", {
                        src: (_a2 = _ctx.data) == null ? void 0 : _a2.image,
                        alt: "location image",
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src"]),
                      createVNode(_component_CommonReligionBadge, {
                        class: "absolute bottom-2 left-2",
                        type: (_c = (_b = _ctx.data) == null ? void 0 : _b.religion) == null ? void 0 : _c.type
                      }, null, 8, ["type"]),
                      createVNode("div", { class: "absolute w-full h-full opacity-0 top-0 lef-0 transition-300 group-hover:opacity-40 bg-dark/80 group-hover:bg-dark flex flex-col items-center justify-center hover:!opacity-100 hover:!bg-dark/80" }, [
                        createVNode("i", { class: "icon-external-link text-white text-2xl" }),
                        createVNode("span", { class: "text-white text-xs" }, toDisplayString(_ctx.$t("view")), 1)
                      ])
                    ])
                  ];
                }),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "98px",
        height: "18px",
        "border-radius": "4px",
        loading: _ctx.loading,
        "preloader-class": "mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<p class="text-gray-300 text-sm mb-1 line-clamp-1"${_scopeId}>${ssrInterpolate(((_c = (_b = (_a2 = _ctx.data) == null ? void 0 : _a2.region) == null ? void 0 : _b.country) == null ? void 0 : _c.title) ? (_f = (_e = (_d = _ctx.data) == null ? void 0 : _d.region) == null ? void 0 : _e.country) == null ? void 0 : _f.title : "Baku, Azerbaijan")}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-300 text-sm mb-1 line-clamp-1" }, toDisplayString(((_i = (_h = (_g = _ctx.data) == null ? void 0 : _g.region) == null ? void 0 : _h.country) == null ? void 0 : _i.title) ? (_l = (_k = (_j = _ctx.data) == null ? void 0 : _j.region) == null ? void 0 : _k.country) == null ? void 0 : _l.title : "Baku, Azerbaijan"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "200px",
        height: "18px",
        "border-radius": "4px",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<h4 class="text-white font-semibold line-clamp-2"${_scopeId}>${ssrInterpolate((_a2 = _ctx.data) == null ? void 0 : _a2.title)}</h4>`);
          } else {
            return [
              createVNode("h4", { class: "text-white font-semibold line-clamp-2" }, toDisplayString((_b = _ctx.data) == null ? void 0 : _b.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/LocationItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    locations: {},
    mapClass: {},
    defaultCoords: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    ref(14);
    const props = __props;
    const emit = __emit;
    const coords = ref([41.31, 69.26]);
    watch(
      () => props.defaultCoords,
      () => {
        var _a;
        if ((_a = props.defaultCoords) == null ? void 0 : _a.length) {
          coords.value = props.defaultCoords;
        }
      },
      {
        immediate: true
      }
    );
    watch(
      () => coords.value,
      () => {
        emit("update:modelValue", coords.value);
      },
      {
        deep: true
      }
    );
    ref({
      apiKey: "",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1"
    });
    computed(() => {
      return function(item) {
        var _a, _b, _c;
        return `
         <a href="/destination/${item == null ? void 0 : item.slug}"  class="relative bg-dark rounded-xl overflow-visible p-2 inline-block w-[142px]">
          <img
            src="${item == null ? void 0 : item.image}"
            class="object-cover h-20 max-w-[126px] w-full rounded-xl"
            alt="Map image"
          />
          <p class="mt-2 mb-1 text-[10px] text-[#83848D] line-clamp-1 leading-120">
            ${(_a = item == null ? void 0 : item.region) == null ? void 0 : _a.title} ${((_b = item == null ? void 0 : item.region) == null ? void 0 : _b.title) ? `<span>,</span>` : ""}
                 ${(_c = item == null ? void 0 : item.destination_country) == null ? void 0 : _c.title}
          </p>
          <p class="text-xs text-white font-semibold leading-130"> ${item == null ? void 0 : item.title} </p>

      </a>
    `;
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const Main_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map/Main.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("svg/empty-state.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    locations: {},
    popular: {},
    loading: { type: Boolean }
  },
  emits: ["open-filter", "handleSearch", "observe", "observeDestinations"],
  setup(__props, { emit: __emit }) {
    const { width } = useWindowSize();
    const emit = __emit;
    const destinationStore = useDestinationStore();
    const search = ref("");
    const coords = ref([]);
    const target = ref(null);
    const targetIsVisible = ref(false);
    const next = computed(() => destinationStore.next);
    useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting;
        if (targetIsVisible.value && (next == null ? void 0 : next.value) !== null) {
          emit("observeDestinations");
        }
      }
    );
    const handleSearch = (value) => {
      search.value = value;
      debounce("search", () => {
        emit("handleSearch", search.value);
      });
    };
    function clearInput() {
      search.value = "";
      emit("handleSearch", "");
    }
    function observeCard(location) {
      var _a;
      if (width.value < 900) {
        activeTab.value = "map";
      }
      coords.value = (_a = location == null ? void 0 : location.location) == null ? void 0 : _a.split(";");
      emit("observe", location);
    }
    const activeTab = ref("list");
    const tabs = [
      {
        label: "Map",
        value: "map"
      },
      {
        label: "List",
        value: "list"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonLogo = _sfc_main$9;
      const _component_FormInput = __nuxt_component_0$3;
      const _component_CommonTab = _sfc_main$7;
      const _component_CardLocationItem = _sfc_main$6;
      const _component_MapMain = _sfc_main$5;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "h-screen grid grid-rows-max-1 w-[404px] bg-dark map-sidebar" }, _attrs))} data-v-38ddace4><div class="border-b border-white/8 p-5" data-v-38ddace4><div class="flex items-center gap-2 mb-3" data-v-38ddace4><button class="group" data-v-38ddace4><i class="icon-arrow-left text-white text-2xl transition-300 group-hover:text-white/60" data-v-38ddace4></i></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonLogo, { key: _ctx.loading }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(_component_CommonLogo, { key: _ctx.loading }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(width) > 900) {
        _push(`<div class="flex gap-3" data-v-38ddace4>`);
        _push(ssrRenderComponent(_component_FormInput, {
          modelValue: search.value,
          "onUpdate:modelValue": [($event) => search.value = $event, handleSearch],
          placeholder: _ctx.$t("search")
        }, {
          prefix: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="icon-search text-xl leading-5 text-gray-400 mr-2 transition-300" data-v-38ddace4${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", { class: "icon-search text-xl leading-5 text-gray-400 mr-2 transition-300" })
              ];
            }
          }),
          suffix: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<span class="${ssrRenderClass([
                ((_a2 = search.value) == null ? void 0 : _a2.length) ? "opacity-100 visible" : "opacity-0 invisible",
                "icon-xmark text-gray-400 -my-0.5 text-2xl leading-6 transition duration-300 cursor-pointer hover:text-gray"
              ])}" data-v-38ddace4${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: [
                    "icon-xmark text-gray-400 -my-0.5 text-2xl leading-6 transition duration-300 cursor-pointer hover:text-gray",
                    ((_b2 = search.value) == null ? void 0 : _b2.length) ? "opacity-100 visible" : "opacity-0 invisible"
                  ],
                  onClick: clearInput
                }, null, 2)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="shrink-0 text-gray-200 transition-300 hover:text-white" data-v-38ddace4><i class="icon-sliders text-2xl" data-v-38ddace4></i></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CommonTab, {
        list: tabs,
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event,
        class: "!w-full mt-4 hidden tab-sidebar"
      }, null, _parent));
      _push(`</div><div class="h-full max-h-full overflow-y-auto custom-scroll px-4 lg:px-0" data-v-38ddace4>`);
      if (activeTab.value === "list") {
        _push(`<div data-v-38ddace4>`);
        if (unref(width) < 900) {
          _push(`<div class="flex gap-3 my-4" data-v-38ddace4>`);
          _push(ssrRenderComponent(_component_FormInput, {
            modelValue: search.value,
            "onUpdate:modelValue": [($event) => search.value = $event, handleSearch],
            placeholder: _ctx.$t("search")
          }, {
            prefix: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="icon-search text-xl leading-5 text-gray-400 mr-2 transition-300" data-v-38ddace4${_scopeId}></span>`);
              } else {
                return [
                  createVNode("span", { class: "icon-search text-xl leading-5 text-gray-400 mr-2 transition-300" })
                ];
              }
            }),
            suffix: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2;
              if (_push2) {
                _push2(`<span class="${ssrRenderClass([
                  ((_a2 = search.value) == null ? void 0 : _a2.length) ? "opacity-100 visible" : "opacity-0 invisible",
                  "icon-xmark text-gray-400 -my-0.5 text-2xl leading-6 transition duration-300 cursor-pointer hover:text-gray"
                ])}" data-v-38ddace4${_scopeId}></span>`);
              } else {
                return [
                  createVNode("span", {
                    class: [
                      "icon-xmark text-gray-400 -my-0.5 text-2xl leading-6 transition duration-300 cursor-pointer hover:text-gray",
                      ((_b2 = search.value) == null ? void 0 : _b2.length) ? "opacity-100 visible" : "opacity-0 invisible"
                    ],
                    onClick: clearInput
                  }, null, 2)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<button class="shrink-0 text-gray-200 transition-300 hover:text-white" data-v-38ddace4><i class="icon-sliders text-2xl" data-v-38ddace4></i></button></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_a = _ctx.locations) == null ? void 0 : _a.length) {
          _push(`<div class="py-4" data-v-38ddace4><!--[-->`);
          ssrRenderList(_ctx.loading ? 13 : _ctx.locations, (location, idx) => {
            _push(ssrRenderComponent(_component_CardLocationItem, {
              key: idx,
              loading: _ctx.loading,
              data: location,
              onClick: ($event) => observeCard(location)
            }, null, _parent));
          });
          _push(`<!--]--><div data-v-38ddace4></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!((_b = _ctx.locations) == null ? void 0 : _b.length) && ((_c = _ctx.popular) == null ? void 0 : _c.length)) {
          _push(`<!--[--><div class="flex flex-col justify-center items-center pt-6 pb-8 border-b border-b-white/10" data-v-38ddace4><img${ssrRenderAttr("src", _imports_0)} alt="No data" data-v-38ddace4><p class="mt-4 text-white/60 max-w-[280px] text-center font-medium" data-v-38ddace4>${ssrInterpolate(_ctx.$t("no_results_found_text"))}</p></div>`);
          if ((_d = _ctx.popular) == null ? void 0 : _d.length) {
            _push(`<!--[--><h3 class="text-white px-5 mt-4 text-lg font-medium" data-v-38ddace4>${ssrInterpolate(_ctx.$t("popular_attractions"))}</h3><!--[-->`);
            ssrRenderList(_ctx.popular, (location, idx) => {
              _push(ssrRenderComponent(_component_CardLocationItem, {
                key: idx,
                data: location
              }, null, _parent));
            });
            _push(`<!--]--><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="w-full h-full" data-v-38ddace4>`);
        _push(ssrRenderComponent(_component_MapMain, {
          "default-coords": coords.value,
          locations: _ctx.locations
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></aside>`);
    };
  }
});
const Sidebar_vue_vue_type_style_index_0_scoped_38ddace4_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map/Sidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-38ddace4"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: [String, Number, Boolean] },
    label: {},
    name: {},
    value: { type: [String, Number, Boolean] },
    disabled: { type: Boolean },
    error: { type: Boolean },
    labelStyles: {},
    icon: {},
    checked: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["group inline-flex items-center relative select-none min-h-[24px] px-5 py-3 border border-white/8 rounded-lg transition-300 hover:border-white/40", _ctx.disabled ? "cursor-not-allowed" : "cursor-pointer"]
      }, _attrs))}><div class="pr-8 flex items-center">`);
      ssrRenderSlot(_ctx.$slots, "label", {}, () => {
        if (_ctx.icon) {
          _push(`<img${ssrRenderAttr("src", _ctx.icon)} alt="icon" class="rounded-full mr-3 w-6 h-6">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="${ssrRenderClass([
          "font-medium letter-3 leading-130 text-white text-base",
          _ctx.labelStyles
        ])}">${ssrInterpolate(_ctx.label)}</span>`);
      }, _push, _parent);
      _push(`</div><input${ssrRenderAttrs(mergeProps({ disabled: _ctx.disabled, checked: _ctx.checked }, {
        type: "checkbox",
        class: "absolute opacity-0 invisible h-0 w-0 peer",
        value: _ctx.value,
        name: _ctx.name
      }))}><span class="${ssrRenderClass([
        "duration-200 ease-in-out absolute right-5 inline-block h-6 w-6 rounded border-2 peer-checked:-rotate-90 peer-checked:after:opacity-100 peer-checked:after:rotate-[138deg] after:transition-all after:duration-200 after:absolute after:left-2 after:top-[5px] after:w-1.5 after:h-3 after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[0deg] after:opacity-0",
        "border-grey-light peer-checked:border-orange peer-checked:bg-orange after:border-white peer-disabled:border-grey-100 peer-disabled:after:border-grey-100",
        {
          "!border-danger": _ctx.error,
          "group-hover:border-primary": !_ctx.disabled
        }
      ])}"></span></label>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Checkbox.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CheckboxGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    items: {},
    labelKey: { default: "name" },
    valueKey: { default: "id" },
    wrapperClass: { default: "flex flex-wrap gap-4" },
    name: { default: `k-checkbox-${Math.floor(Math.random() * 1e3)}` },
    isAll: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const onUpdate = (e) => {
      const newValue = [...props.modelValue];
      if (newValue.includes(e)) {
        newValue.splice(newValue.indexOf(e), 1);
      } else {
        newValue.push(e);
      }
      emit("update:modelValue", newValue);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormCheckbox = _sfc_main$3;
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        if (_ctx.items && Object.keys(_ctx.items).length > 0) {
          _push(`<div class="${ssrRenderClass(_ctx.wrapperClass)}">`);
          if (_ctx.isAll) {
            ssrRenderSlot(_ctx.$slots, "all", {}, null, _push, _parent);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(_ctx.items, (item, index) => {
            var _a;
            _push(ssrRenderComponent(_component_FormCheckbox, {
              key: index,
              label: item[_ctx.labelKey],
              value: item[_ctx.valueKey],
              name: _ctx.name,
              checked: (_a = _ctx.modelValue) == null ? void 0 : _a.includes(String(item.id)),
              icon: item.flag,
              "onUpdate:modelValue": onUpdate
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/CheckboxGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function mapFilter(t, options) {
  return [
    {
      label: t("choose_religion"),
      name: "religion",
      labelKey: "title",
      valueKey: "id",
      options: options == null ? void 0 : options.religion
    },
    {
      label: t("choose_country"),
      name: "country",
      labelKey: "title",
      valueKey: "id",
      options: options == null ? void 0 : options.country
    }
  ];
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    religions: {},
    countries: {}
  },
  emits: ["close", "handleFilter"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const props = __props;
    const emit = __emit;
    const form = ref({
      religion: [],
      country: []
    });
    const isAllReligion = ref(false);
    const isAllCountry = ref(false);
    const mapFilterList = computed(() => {
      const data = {
        religion: props == null ? void 0 : props.religions,
        country: props == null ? void 0 : props.countries
      };
      return mapFilter(t, data);
    });
    const apply = () => {
      var _a, _b, _c, _d;
      const query = {
        ...route.query,
        religion: (_a = form.value.religion) == null ? void 0 : _a.join(","),
        country: (_b = form.value.country) == null ? void 0 : _b.join(",")
      };
      router.push({
        ...route,
        query: {
          ...query
        }
      });
      emit("handleFilter", {
        religion: isAllReligion.value ? void 0 : (_c = form.value.religion) == null ? void 0 : _c.join(","),
        country: isAllCountry.value ? void 0 : (_d = form.value.country) == null ? void 0 : _d.join(",")
      });
      emit("close");
    };
    const clear = () => {
      for (const key in form.value) {
        form.value[key] = void 0;
      }
      apply();
    };
    watch(
      () => props.show,
      () => {
        var _a, _b;
        if (!props.show) {
          form.value.religion = [];
          form.value.country = [];
        } else {
          form.value.religion = ((_a = route.query.religion) == null ? void 0 : _a.split(",")) ?? [];
          form.value.country = ((_b = route.query.country) == null ? void 0 : _b.split(",")) ?? [];
        }
      }
    );
    function onUpdate(e) {
      isAllReligion.value = !isAllReligion.value;
    }
    function onUpdateCountry(e) {
      isAllCountry.value = !isAllCountry.value;
    }
    watch(
      () => isAllReligion.value,
      () => {
        var _a, _b, _c;
        if (isAllReligion.value) {
          (_a = props.religions) == null ? void 0 : _a.forEach((el) => {
            var _a2, _b2;
            if (!((_a2 = form.value.religion) == null ? void 0 : _a2.includes(String(el == null ? void 0 : el.id)))) {
              (_b2 = form.value.religion) == null ? void 0 : _b2.push(String(el == null ? void 0 : el.id));
            }
          });
        } else {
          if (((_b = form.value.religion) == null ? void 0 : _b.length) === ((_c = props.religions) == null ? void 0 : _c.length)) {
            form.value.religion = [];
          }
        }
      }
    );
    watch(
      () => form.value.religion,
      () => {
        var _a, _b;
        isAllReligion.value = ((_a = form.value.religion) == null ? void 0 : _a.length) === ((_b = props.religions) == null ? void 0 : _b.length);
      },
      {
        deep: true
      }
    );
    watch(
      () => isAllCountry.value,
      () => {
        var _a, _b, _c;
        if (isAllCountry.value) {
          (_a = props.countries) == null ? void 0 : _a.forEach((el) => {
            var _a2, _b2;
            if (!((_a2 = form.value.country) == null ? void 0 : _a2.includes(String(el == null ? void 0 : el.id)))) {
              (_b2 = form.value.country) == null ? void 0 : _b2.push(String(el == null ? void 0 : el.id));
            }
          });
        } else {
          if (((_b = form.value.country) == null ? void 0 : _b.length) === ((_c = props.countries) == null ? void 0 : _c.length)) {
            form.value.country = [];
          }
        }
      }
    );
    watch(
      () => form.value.country,
      () => {
        var _a, _b;
        isAllCountry.value = ((_a = form.value.country) == null ? void 0 : _a.length) === ((_b = props.countries) == null ? void 0 : _b.length);
      },
      {
        deep: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonModal = __nuxt_component_0$4;
      const _component_FormLabel = _sfc_main$a;
      const _component_FormCheckboxGroup = _sfc_main$2;
      const _component_FormCheckbox = _sfc_main$3;
      const _component_CommonButton = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonModal, mergeProps({ show: _ctx.show }, {
        title: _ctx.$t("filter"),
        onClose: ($event) => emit("close")
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="text-white flex flex-col"${_scopeId}><div class="space-y-6 overflow-y-auto max-h-[500px] lg:max-h-fit p-5"${_scopeId}><!--[-->`);
            ssrRenderList((_a = unref(mapFilterList)) == null ? void 0 : _a.slice(0, 1), (item, index) => {
              _push2(`<div class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormLabel, {
                label: item.label,
                "for-id": item.name,
                class: "mb-4"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormCheckboxGroup, {
                items: item.options,
                name: item.name,
                "label-key": item.labelKey,
                "value-key": item.valueKey,
                modelValue: unref(form).religion,
                "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                "wrapper-class": "grid md:grid-cols-2 grid-cols-1 gap-5",
                "is-all": ""
              }, {
                all: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_FormCheckbox, {
                      label: _ctx.$t("all"),
                      value: !unref(isAllReligion),
                      checked: unref(isAllReligion),
                      name: _ctx.name,
                      "onUpdate:modelValue": onUpdate
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_FormCheckbox, {
                        label: _ctx.$t("all"),
                        value: !unref(isAllReligion),
                        checked: unref(isAllReligion),
                        name: _ctx.name,
                        "onUpdate:modelValue": onUpdate
                      }, null, 8, ["label", "value", "checked", "name"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(mapFilterList).slice(1, 2), (item, index) => {
              _push2(`<div class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormLabel, {
                label: item.label,
                "for-id": item.name,
                class: "mb-4"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormCheckboxGroup, {
                items: item.options,
                name: item.name,
                "label-key": item.labelKey,
                "value-key": item.valueKey,
                modelValue: unref(form)[item.name],
                "onUpdate:modelValue": ($event) => unref(form)[item.name] = $event,
                "wrapper-class": "grid md:grid-cols-2 grid-cols-1 gap-5",
                "is-all": ""
              }, {
                all: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_FormCheckbox, {
                      label: _ctx.$t("all"),
                      value: !unref(isAllCountry),
                      checked: unref(isAllCountry),
                      name: _ctx.name,
                      "onUpdate:modelValue": onUpdateCountry
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_FormCheckbox, {
                        label: _ctx.$t("all"),
                        value: !unref(isAllCountry),
                        checked: unref(isAllCountry),
                        name: _ctx.name,
                        "onUpdate:modelValue": onUpdateCountry
                      }, null, 8, ["label", "value", "checked", "name"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="flex items-center gap-4 p-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonButton, {
              text: _ctx.$t("clear"),
              class: "w-full",
              variant: "secondary",
              onClick: clear
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonButton, {
              text: _ctx.$t("apply"),
              class: "w-full",
              onClick: apply
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-white flex flex-col" }, [
                createVNode("div", { class: "space-y-6 overflow-y-auto max-h-[500px] lg:max-h-fit p-5" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(mapFilterList)) == null ? void 0 : _b.slice(0, 1), (item, index) => {
                    return openBlock(), createBlock("div", {
                      class: "relative",
                      key: index
                    }, [
                      createVNode(_component_FormLabel, {
                        label: item.label,
                        "for-id": item.name,
                        class: "mb-4"
                      }, null, 8, ["label", "for-id"]),
                      createVNode(_component_FormCheckboxGroup, {
                        items: item.options,
                        name: item.name,
                        "label-key": item.labelKey,
                        "value-key": item.valueKey,
                        modelValue: unref(form).religion,
                        "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                        "wrapper-class": "grid md:grid-cols-2 grid-cols-1 gap-5",
                        "is-all": ""
                      }, {
                        all: withCtx(() => [
                          createVNode(_component_FormCheckbox, {
                            label: _ctx.$t("all"),
                            value: !unref(isAllReligion),
                            checked: unref(isAllReligion),
                            name: _ctx.name,
                            "onUpdate:modelValue": onUpdate
                          }, null, 8, ["label", "value", "checked", "name"])
                        ]),
                        _: 2
                      }, 1032, ["items", "name", "label-key", "value-key", "modelValue", "onUpdate:modelValue"])
                    ]);
                  }), 128)),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(mapFilterList).slice(1, 2), (item, index) => {
                    return openBlock(), createBlock("div", {
                      class: "relative",
                      key: index
                    }, [
                      createVNode(_component_FormLabel, {
                        label: item.label,
                        "for-id": item.name,
                        class: "mb-4"
                      }, null, 8, ["label", "for-id"]),
                      createVNode(_component_FormCheckboxGroup, {
                        items: item.options,
                        name: item.name,
                        "label-key": item.labelKey,
                        "value-key": item.valueKey,
                        modelValue: unref(form)[item.name],
                        "onUpdate:modelValue": ($event) => unref(form)[item.name] = $event,
                        "wrapper-class": "grid md:grid-cols-2 grid-cols-1 gap-5",
                        "is-all": ""
                      }, {
                        all: withCtx(() => [
                          createVNode(_component_FormCheckbox, {
                            label: _ctx.$t("all"),
                            value: !unref(isAllCountry),
                            checked: unref(isAllCountry),
                            name: _ctx.name,
                            "onUpdate:modelValue": onUpdateCountry
                          }, null, 8, ["label", "value", "checked", "name"])
                        ]),
                        _: 2
                      }, 1032, ["items", "name", "label-key", "value-key", "modelValue", "onUpdate:modelValue"])
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "flex items-center gap-4 p-5" }, [
                  createVNode(_component_CommonButton, {
                    text: _ctx.$t("clear"),
                    class: "w-full",
                    variant: "secondary",
                    onClick: clear
                  }, null, 8, ["text"]),
                  createVNode(_component_CommonButton, {
                    text: _ctx.$t("apply"),
                    class: "w-full",
                    onClick: apply
                  }, null, 8, ["text"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "map",
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = useWindowSize();
    const mounted = useMounted();
    const coords = ref([]);
    const route = useRoute$1();
    const loading = ref(false);
    const destinationStore = useDestinationStore();
    const popularDestinations = computed(() => destinationStore.popularDestination);
    const destinations = ref([]);
    const limit = ref(100);
    const religionList = computed(() => destinationStore.religionList);
    const countryList = computed(() => destinationStore.countryList);
    const show = ref(false);
    const fetchDestinations = () => {
      var _a, _b;
      const value = {
        religion: (_a = route == null ? void 0 : route.query) == null ? void 0 : _a.religion,
        country: (_b = route == null ? void 0 : route.query) == null ? void 0 : _b.country
      };
      destinationStore.fetchDestinations(
        "",
        limit.value,
        value.religion ?? void 0,
        value.country ?? void 0
      ).then((res) => {
        destinations.value = res;
      }).finally(() => {
        setTimeout(() => {
          loading.value = false;
        }, 400);
      });
    };
    const handleObserveDestinations = () => {
      loading.value = true;
      limit.value += 5;
      fetchDestinations();
    };
    function handleFilter(value) {
      loading.value = true;
      destinationStore.fetchDestinations("", limit.value, value.religion, value.country).then((res) => {
        destinations.value = res;
      }).finally(() => {
        setTimeout(() => {
          loading.value = false;
        }, 100);
      });
    }
    function handleShowFilter() {
      show.value = true;
    }
    function observeMap(location) {
      var _a;
      coords.value = (_a = location == null ? void 0 : location.location) == null ? void 0 : _a.split(";");
    }
    watch(
      () => destinations.value,
      () => {
        var _a, _b;
        coords.value = (_b = (_a = destinations.value[0]) == null ? void 0 : _a.location) == null ? void 0 : _b.split(";");
      },
      {
        deep: true
      }
    );
    function handleSearchDestination(value) {
      destinationStore.fetchDestinations(value).then((res) => {
        destinations.value = res;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MapSidebar = __nuxt_component_0;
      const _component_MapMain = _sfc_main$5;
      const _component_MapModal = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-screen w-screen grid grid-cols-max-1 overflow-hidden map-wrapper" }, _attrs))} data-v-1ae22bbe>`);
      if (unref(mounted)) {
        _push(ssrRenderComponent(_component_MapSidebar, {
          loading: loading.value,
          locations: destinations.value,
          popular: popularDestinations.value,
          onHandleSearch: handleSearchDestination,
          onOpenFilter: handleShowFilter,
          onObserve: observeMap,
          onObserveDestinations: handleObserveDestinations
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(width) > 900) {
        _push(`<div class="w-full h-full" data-v-1ae22bbe><div id="map" class="w-full h-full" data-v-1ae22bbe>`);
        _push(ssrRenderComponent(_component_MapMain, {
          "default-coords": coords.value,
          locations: destinations.value,
          key: destinations.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_MapModal, mergeProps({ show: show.value, religions: religionList.value, countries: countryList.value }, {
        onClose: ($event) => show.value = false,
        onHandleFilter: handleFilter
      }), null, _parent));
      _push(`</main>`);
    };
  }
});
const map_vue_vue_type_style_index_0_scoped_1ae22bbe_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const map = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ae22bbe"]]);
export {
  map as default
};
//# sourceMappingURL=map-e2a0c02e.js.map
