import { _ as _sfc_main$5 } from "./Breadcrumb-90707320.js";
import { _ as __nuxt_component_0, a as __nuxt_component_0$1 } from "./Preloader-bddb5d1e.js";
import { _ as __nuxt_component_1 } from "./CopyUrl-5752d3e5.js";
import { defineComponent, resolveDirective, mergeProps, useSSRContext, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, ref, watch, computed, unref, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrGetDirectiveProps, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$6 } from "./Media-6d683094.js";
import { _ as __nuxt_component_5 } from "./Wrapper-ba6738ca.js";
import { _ as _sfc_main$7 } from "./Button-b4a346b5.js";
import { _ as __nuxt_component_5$1 } from "./PromoVideo-f076661c.js";
import { _ as __nuxt_component_0$2 } from "./Modal-0cbe818d.js";
import { _ as _sfc_main$8 } from "./Attractions-171c95f6.js";
import { t as toEmbed } from "./useFetcher-bfa391cb.js";
import { useRoute } from "vue-router";
import { u as useSeoMeta } from "./composables-ffbf1183.js";
import { u as useDestinationStore } from "./destination-7a1b9a3b.js";
import { b as useI18n } from "../server.mjs";
/* empty css                     *//* empty css                         */import "swiper/vue";
import "swiper";
import "@vueuse/components";
import "cookie-es";
import "h3";
import "destr";
import "ohash";
import "@unhead/vue";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "ufo";
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Social",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    const socials = [
      {
        title: "Facebook",
        icon: "icon-facebook text-lg",
        type: "facebook",
        link: "https://www.facebook.com/TabarrukZiyorat"
      },
      {
        title: "Twitter",
        icon: "icon-twitter",
        type: "twitter",
        link: "https://twitter.com/tabarrukziyorat"
      },
      {
        title: "Telegram",
        icon: "icon-telegram",
        type: "telegram",
        link: "https://t.me/tabarrukziyorat"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonCopyUrl = __nuxt_component_1;
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 border border-solid border-white/20 destination-bg-blur rounded-xl flex-center-between gap-4" }, _attrs))} data-v-889a3a39><div class="flex-y-center gap-4" data-v-889a3a39><i class="icon-share text-white text-[32px]" data-v-889a3a39></i><div class="white-shadow-border" data-v-889a3a39></div><div class="flex-y-center gap-4" data-v-889a3a39><!--[-->`);
      ssrRenderList(socials, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "w-8 h-8 rounded-full bg-white/[12%] flex-center cursor-pointer group transition-300 hover:bg-white",
          key: index
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, item == null ? void 0 : item.title)))} data-v-889a3a39><i class="${ssrRenderClass([item == null ? void 0 : item.icon, "text-white text-2xl transition-300 group-hover:text-blue"])}" data-v-889a3a39></i></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_CommonCopyUrl, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const Social_vue_vue_type_style_index_0_scoped_889a3a39_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Destination/Social.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-889a3a39"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Info",
  __ssrInlineRender: true,
  props: {
    isCenter: { type: Boolean },
    single: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_CommonPreloader = __nuxt_component_0;
      const _component_DestinationSocial = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "text-center": _ctx.isCenter }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
        width: "200px",
        height: "26px"
      }, { loading: _ctx.loading }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "flex-center": _ctx.isCenter }, "flex-y-center gap-2"])}"${_scopeId}><i class="icon-map-pin text-[24px] text-white"${_scopeId}></i><p class="text-white text-xl leading-130 font-medium"${_scopeId}>${ssrInterpolate((_b2 = (_a2 = _ctx.single) == null ? void 0 : _a2.region) == null ? void 0 : _b2.title)} `);
            if ((_d = (_c2 = _ctx.single) == null ? void 0 : _c2.region) == null ? void 0 : _d.title) {
              _push2(`<span${_scopeId}>,</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate((_f = (_e = _ctx.single) == null ? void 0 : _e.destination_country) == null ? void 0 : _f.title)}</p></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["flex-y-center gap-2", { "flex-center": _ctx.isCenter }]
              }, [
                createVNode("i", { class: "icon-map-pin text-[24px] text-white" }),
                createVNode("p", { class: "text-white text-xl leading-130 font-medium" }, [
                  createTextVNode(toDisplayString((_h = (_g = _ctx.single) == null ? void 0 : _g.region) == null ? void 0 : _h.title) + " ", 1),
                  ((_j = (_i = _ctx.single) == null ? void 0 : _i.region) == null ? void 0 : _j.title) ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString((_l = (_k = _ctx.single) == null ? void 0 : _k.destination_country) == null ? void 0 : _l.title), 1)
                ])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
        width: "70%",
        height: "50px"
      }, { loading: _ctx.loading }, { "preloader-class": "mt-0.5 mb-4" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<p class="${ssrRenderClass([{ "text-[32px] lg:text-[80px]": _ctx.isCenter }, "destination-single-text-shadow text-[40px] leading-130 font-bold text-white font-playfair"])}"${_scopeId}>${ssrInterpolate((_a2 = _ctx.single) == null ? void 0 : _a2.title)}</p>`);
          } else {
            return [
              createVNode("p", {
                class: ["destination-single-text-shadow text-[40px] leading-130 font-bold text-white font-playfair", { "text-[32px] lg:text-[80px]": _ctx.isCenter }]
              }, toDisplayString((_b2 = _ctx.single) == null ? void 0 : _b2.title), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(2, (item, index) => {
        _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
          width: "100%",
          height: "26px"
        }, { loading: _ctx.loading }, {
          "preloader-class": "mb-0.5",
          key: index
        }), null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
        width: "100%",
        height: "26px"
      }, { loading: _ctx.loading }, { "preloader-class": "mb-4" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "mt-5 mb-6": _ctx.isCenter }, "text-xl leading-130 font-medium my-4 text-white font-medium description-text"])}"${_scopeId}>${(_a2 = _ctx.single) == null ? void 0 : _a2.short_description}</div>`);
          } else {
            return [
              createVNode("div", {
                class: ["text-xl leading-130 font-medium my-4 text-white font-medium description-text", { "mt-5 mb-6": _ctx.isCenter }],
                innerHTML: (_b2 = _ctx.single) == null ? void 0 : _b2.short_description
              }, null, 10, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ "mx-auto": _ctx.isCenter }, "destination-bg-blur flex items-center justify-between gap-4 p-4 border border-solid border-white/20 rounded-xl max-w-[584px] flex-col sm:flex-row"])}"><div class="w-full"><div class="flex-y-center gap-3">`);
      _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
        width: "44px",
        height: "44px"
      }, { loading: _ctx.loading }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-11 h-11 rounded-lg flex-center bg-white/[12%]"${_scopeId}><i class="icon-islam-moon text-white text-xl sm::text-[28px]"${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "w-11 h-11 rounded-lg flex-center bg-white/[12%]" }, [
                createVNode("i", { class: "icon-islam-moon text-white text-xl sm::text-[28px]" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
        width: "100px",
        height: "31.2px"
      }, { loading: _ctx.loading }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-2xl leading-130 text-white/60 font-medium text-left"${_scopeId}>${ssrInterpolate(_ctx.$t("affiliation"))}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-2xl leading-130 text-white/60 font-medium text-left" }, toDisplayString(_ctx.$t("affiliation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
        width: "100px",
        height: "31.2px"
      }, { loading: _ctx.loading }, { "preloader-class": "mt-1" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d;
          if (_push2) {
            _push2(`<p class="text-2xl leading-130 text-white font-bold mt-1 text-left"${_scopeId}>${ssrInterpolate((_b2 = (_a2 = _ctx.single) == null ? void 0 : _a2.religion) == null ? void 0 : _b2.title)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-2xl leading-130 text-white font-bold mt-1 text-left" }, toDisplayString((_d = (_c2 = _ctx.single) == null ? void 0 : _c2.religion) == null ? void 0 : _d.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (((_a = _ctx.single) == null ? void 0 : _a.erected_from) || ((_b = _ctx.single) == null ? void 0 : _b.erected_to)) {
        _push(`<div class="flex sm:items-center flex-col sm:flex-row gap-4 w-full"><div class="white-shadow-border h-px sm:h-[75px] w-full sm:w-px"></div><div><div class="flex-y-center gap-3">`);
        _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
          width: "44px",
          height: "44px"
        }, { loading: _ctx.loading }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-11 h-11 rounded-lg flex-center bg-white/[12%]"${_scopeId}><i class="icon-islam-moon text-white text-xl sm::text-[28px]"${_scopeId}></i></div>`);
            } else {
              return [
                createVNode("div", { class: "w-11 h-11 rounded-lg flex-center bg-white/[12%]" }, [
                  createVNode("i", { class: "icon-islam-moon text-white text-xl sm::text-[28px]" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
          width: "100px",
          height: "31.2px"
        }, { loading: _ctx.loading }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-2xl leading-130 text-white/60 font-medium text-left"${_scopeId}>${ssrInterpolate(_ctx.$t("was_erected"))}</p>`);
            } else {
              return [
                createVNode("p", { class: "text-2xl leading-130 text-white/60 font-medium text-left" }, toDisplayString(_ctx.$t("was_erected")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
          width: "100px",
          height: "31.2px"
        }, { loading: _ctx.loading }, { "preloader-class": "mt-1" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j;
            if (_push2) {
              _push2(`<p class="text-2xl leading-130 text-white font-bold mt-1 text-left"${_scopeId}>`);
              if ((_a2 = _ctx.single) == null ? void 0 : _a2.erected_from) {
                _push2(`<span${_scopeId}>${ssrInterpolate((_b2 = _ctx.single) == null ? void 0 : _b2.erected_from)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((_c2 = _ctx.single) == null ? void 0 : _c2.erected_to) {
                _push2(`<span${_scopeId}> - </span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((_d = _ctx.single) == null ? void 0 : _d.erected_to) {
                _push2(`<span${_scopeId}>${ssrInterpolate((_e = _ctx.single) == null ? void 0 : _e.erected_to)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</p>`);
            } else {
              return [
                createVNode("p", { class: "text-2xl leading-130 text-white font-bold mt-1 text-left" }, [
                  ((_f = _ctx.single) == null ? void 0 : _f.erected_from) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_g = _ctx.single) == null ? void 0 : _g.erected_from), 1)) : createCommentVNode("", true),
                  ((_h = _ctx.single) == null ? void 0 : _h.erected_to) ? (openBlock(), createBlock("span", { key: 1 }, " - ")) : createCommentVNode("", true),
                  ((_i = _ctx.single) == null ? void 0 : _i.erected_to) ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString((_j = _ctx.single) == null ? void 0 : _j.erected_to), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!_ctx.loading) {
        _push(ssrRenderComponent(_component_DestinationSocial, {
          class: ["mt-4 max-w-[584px]", { "mx-auto": _ctx.isCenter }],
          title: (_c = _ctx.single) == null ? void 0 : _c.title
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Info_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Destination/Info.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  __ssrInlineRender: true,
  props: {
    single: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_CommonPreloader = __nuxt_component_0;
      const _component_DestinationInfo = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-y-center justify-center flex-col lg:flex-row gap-6 lg:h-[546px]" }, _attrs))}>`);
      if (((_a = _ctx.single) == null ? void 0 : _a.type) !== "destination") {
        _push(`<div class="w-full lg:w-[382px] min-h-[260px] border-[2px] border-solid border-white/20 h-full rounded-xl relative overflow-hidden shrink-0">`);
        _push(ssrRenderComponent(_component_CommonPreloader, mergeProps({
          width: "100%",
          height: "100%"
        }, { loading: _ctx.loading }, {
          "content-wrapper-class": "w-full h-full",
          class: "w-full h-full"
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", (_a2 = _ctx.single) == null ? void 0 : _a2.image)} alt="single-destination" class="w-full h-full object-cover"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: (_b2 = _ctx.single) == null ? void 0 : _b2.image,
                  alt: "single-destination",
                  class: "w-full h-full object-cover"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_DestinationInfo, mergeProps({
        "is-center": ((_b = _ctx.single) == null ? void 0 : _b.type) !== "attraction"
      }, { single: _ctx.single, loading: _ctx.loading }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Destination/Banner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  props: {
    locations: {},
    mapClass: {},
    defaultCoords: {}
  },
  setup(__props) {
    const props = __props;
    const coords = ref([41.31, 69.26]);
    watch(
      () => props.defaultCoords,
      () => {
        var _a;
        if ((_a = props.defaultCoords) == null ? void 0 : _a.length) {
          coords.value = props.defaultCoords;
        }
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
         <div class="realtive bg-dark rounded-xl p-2 inline-block w-[142px]">
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

      </div>
    `;
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const Contact_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("svg/pattern-bg.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d;
    const destinationStore = useDestinationStore();
    const route = useRoute();
    const loading = ref(false);
    const showModal = ref(false);
    const dashboard360 = "https://tabarruk-dash.uicgroup.tech";
    useI18n();
    const single = computed(() => destinationStore == null ? void 0 : destinationStore.destinationSingle);
    const attractionsList = computed(() => destinationStore == null ? void 0 : destinationStore.attractionList);
    const mediaList = computed(() => destinationStore == null ? void 0 : destinationStore.mediaList);
    const locations = computed(() => {
      var _a2, _b2, _c2, _d2, _e, _f;
      return [
        {
          id: 1,
          title: (_a2 = single == null ? void 0 : single.value) == null ? void 0 : _a2.title,
          location: (_b2 = single == null ? void 0 : single.value) == null ? void 0 : _b2.location,
          region: (_c2 = single == null ? void 0 : single.value) == null ? void 0 : _c2.region,
          destination_country: (_d2 = single == null ? void 0 : single.value) == null ? void 0 : _d2.destination_country,
          image: (_e = single == null ? void 0 : single.value) == null ? void 0 : _e.image,
          religion: (_f = single == null ? void 0 : single.value) == null ? void 0 : _f.religion,
          latitude: 41.321517,
          longitude: 69.304964
        }
      ];
    });
    const menu = computed(() => {
      var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j;
      return [
        {
          title: "country",
          link: `/country/${(_c2 = (_b2 = (_a2 = single == null ? void 0 : single.value) == null ? void 0 : _a2.region) == null ? void 0 : _b2.country) == null ? void 0 : _c2.id}`
        },
        {
          title: (_f = (_e = (_d2 = single == null ? void 0 : single.value) == null ? void 0 : _d2.region) == null ? void 0 : _e.country) == null ? void 0 : _f.title,
          link: `/country/${(_i = (_h = (_g = single == null ? void 0 : single.value) == null ? void 0 : _g.region) == null ? void 0 : _h.country) == null ? void 0 : _i.id}`
        },
        {
          title: (_j = single == null ? void 0 : single.value) == null ? void 0 : _j.title,
          link: "/"
        }
      ];
    });
    async function fetchData() {
      var _a2;
      loading.value = true;
      return await Promise.all([
        destinationStore == null ? void 0 : destinationStore.fetchSingleDestinations(route.params.id).then((res) => {
          var _a3, _b2;
          if (res) {
            destinationStore.fetchAttractions(
              (_a3 = res == null ? void 0 : res.destination_country) == null ? void 0 : _a3.id,
              (_b2 = route == null ? void 0 : route.params) == null ? void 0 : _b2.id
            );
          }
        }),
        destinationStore.fetchDestinationMediaList((_a2 = route == null ? void 0 : route.params) == null ? void 0 : _a2.id, 100)
      ]);
    }
    fetchData().finally(() => {
      loading.value = false;
    });
    const handleShowVideo = () => {
      showModal.value = true;
    };
    useSeoMeta({
      title: (_a = single == null ? void 0 : single.value) == null ? void 0 : _a.title,
      description: (_b = single == null ? void 0 : single.value) == null ? void 0 : _b.short_description,
      ogDescription: (_c = single.value) == null ? void 0 : _c.short_description,
      ogImage: (_d = single == null ? void 0 : single.value) == null ? void 0 : _d.image
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j;
      const _component_CommonBreadcrumb = _sfc_main$5;
      const _component_DestinationBanner = _sfc_main$2;
      const _component_SectionMedia = _sfc_main$6;
      const _component_SectionWrapper = __nuxt_component_5;
      const _component_CommonButton = _sfc_main$7;
      const _component_SectionPromoVideo = __nuxt_component_5$1;
      const _component_CommonModal = __nuxt_component_0$2;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_MapContact = _sfc_main$1;
      const _component_DestinationSocial = __nuxt_component_9;
      const _component_CardAttractions = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1109648b><div class="relative z-10 mt-16 lg:mt-[136px]" data-v-1109648b>`);
      _push(ssrRenderComponent(_component_CommonBreadcrumb, mergeProps({ menu: menu.value }, {
        key: single.value,
        class: "container"
      }), null, _parent));
      _push(`<div class="container h-full mt-6" data-v-1109648b><div class="max-w-[990px] mx-auto h-full" data-v-1109648b>`);
      _push(ssrRenderComponent(_component_DestinationBanner, { single: single.value, loading: loading.value }, null, _parent));
      _push(`</div></div></div><div class="absolute top-0 left-0 w-full" data-v-1109648b><div class="relative w-full" data-v-1109648b><div class="pointer-events-none w-full h-full relative overflow-hidden max-h-[700px]" data-v-1109648b><img${ssrRenderAttr("src", (_a2 = single.value) == null ? void 0 : _a2.image)} alt="destination-single" class="w-full h-full object-cover pointer-events-none" data-v-1109648b></div><div class="${ssrRenderClass([{ "destination-single-blur": ((_b2 = single.value) == null ? void 0 : _b2.type) !== "destination" }, "absolute inset-0 w-full h-full destination-single-blur-bg pointer-events-none"])}" data-v-1109648b></div></div></div><img${ssrRenderAttr("src", _imports_0)} alt="pattern" class="w-full h-full object-cover left-0 top-[700px] absolute pointer-events-none" data-v-1109648b><div class="relative" data-v-1109648b><div class="container" data-v-1109648b><div class="max-w-[990px] mx-auto py-16 destination-text whitespace-pre-line" data-v-1109648b>${(_c2 = single.value) == null ? void 0 : _c2.content}</div></div></div>`);
      if ((_d2 = mediaList.value) == null ? void 0 : _d2.length) {
        _push(ssrRenderComponent(_component_SectionMedia, { images: mediaList.value }, {
          suffix: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_SectionWrapper, {
                class: "!pt-0 !pb-10",
                title: _ctx.$t("media"),
                subtitle: _ctx.$t("view_media")
              }, {
                suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c3, _d3;
                  if (_push3) {
                    if ((_a3 = single.value) == null ? void 0 : _a3.json_field_360) {
                      _push3(`<div class="flex items-end justify-between p-3 rounded-xl bg-white/[4%] w-full max-w-[510px]" data-v-1109648b${_scopeId2}><div class="flex-y-center gap-7" data-v-1109648b${_scopeId2}><div class="flex-center w-[84px] h-[84px] rounded-2xl bg-white/20" data-v-1109648b${_scopeId2}><i class="icon-360 text-white text-[40px]" data-v-1109648b${_scopeId2}></i></div><div data-v-1109648b${_scopeId2}><p class="text-2xl leading-130 font-semibold text-white" data-v-1109648b${_scopeId2}>${ssrInterpolate(_ctx.$t("360_view"))}</p><p class="text-base lading-130 text-white font-semibold mt-2" data-v-1109648b${_scopeId2}>${ssrInterpolate(_ctx.$t("explore_360"))}</p></div></div><a${ssrRenderAttr("href", `${unref(dashboard360)}/360/${(_b3 = single.value) == null ? void 0 : _b3.slug}`)} target="_blank" data-v-1109648b${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_CommonButton, {
                        class: "!py-3",
                        suffix: "",
                        text: _ctx.$t("view")
                      }, {
                        suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<i class="icon-play-stroke ml-1" data-v-1109648b${_scopeId3}></i>`);
                          } else {
                            return [
                              createVNode("i", { class: "icon-play-stroke ml-1" })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</a></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      ((_c3 = single.value) == null ? void 0 : _c3.json_field_360) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-end justify-between p-3 rounded-xl bg-white/[4%] w-full max-w-[510px]"
                      }, [
                        createVNode("div", { class: "flex-y-center gap-7" }, [
                          createVNode("div", { class: "flex-center w-[84px] h-[84px] rounded-2xl bg-white/20" }, [
                            createVNode("i", { class: "icon-360 text-white text-[40px]" })
                          ]),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-2xl leading-130 font-semibold text-white" }, toDisplayString(_ctx.$t("360_view")), 1),
                            createVNode("p", { class: "text-base lading-130 text-white font-semibold mt-2" }, toDisplayString(_ctx.$t("explore_360")), 1)
                          ])
                        ]),
                        createVNode("a", {
                          href: `${unref(dashboard360)}/360/${(_d3 = single.value) == null ? void 0 : _d3.slug}`,
                          target: "_blank"
                        }, [
                          createVNode(_component_CommonButton, {
                            class: "!py-3",
                            suffix: "",
                            text: _ctx.$t("view")
                          }, {
                            suffix: withCtx(() => [
                              createVNode("i", { class: "icon-play-stroke ml-1" })
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ], 8, ["href"])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_SectionWrapper, {
                  class: "!pt-0 !pb-10",
                  title: _ctx.$t("media"),
                  subtitle: _ctx.$t("view_media")
                }, {
                  suffix: withCtx(() => {
                    var _a3, _b3;
                    return [
                      ((_a3 = single.value) == null ? void 0 : _a3.json_field_360) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-end justify-between p-3 rounded-xl bg-white/[4%] w-full max-w-[510px]"
                      }, [
                        createVNode("div", { class: "flex-y-center gap-7" }, [
                          createVNode("div", { class: "flex-center w-[84px] h-[84px] rounded-2xl bg-white/20" }, [
                            createVNode("i", { class: "icon-360 text-white text-[40px]" })
                          ]),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-2xl leading-130 font-semibold text-white" }, toDisplayString(_ctx.$t("360_view")), 1),
                            createVNode("p", { class: "text-base lading-130 text-white font-semibold mt-2" }, toDisplayString(_ctx.$t("explore_360")), 1)
                          ])
                        ]),
                        createVNode("a", {
                          href: `${unref(dashboard360)}/360/${(_b3 = single.value) == null ? void 0 : _b3.slug}`,
                          target: "_blank"
                        }, [
                          createVNode(_component_CommonButton, {
                            class: "!py-3",
                            suffix: "",
                            text: _ctx.$t("view")
                          }, {
                            suffix: withCtx(() => [
                              createVNode("i", { class: "icon-play-stroke ml-1" })
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ], 8, ["href"])
                      ])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 1
                }, 8, ["title", "subtitle"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_e = single.value) == null ? void 0 : _e.youtube_video) {
        _push(`<div class="pt-16" data-v-1109648b>`);
        _push(ssrRenderComponent(_component_SectionPromoVideo, {
          image: (_f = single.value) == null ? void 0 : _f.youtube_video_image,
          title: (_g = single.value) == null ? void 0 : _g.youtube_video_title,
          onHandleShowVideo: handleShowVideo
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CommonModal, {
        show: showModal.value,
        onClose: ($event) => showModal.value = false,
        title: (_h = single.value) == null ? void 0 : _h.title,
        "body-style": "!max-w-full md:!max-w-[70%] h-[30%] sm:h-[50%] md:h-[70%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    (openBlock(), createBlock("iframe", {
                      key: showModal.value,
                      width: "100%",
                      height: "100%",
                      src: `https://www.youtube.com/embed/${("toEmbed" in _ctx ? _ctx.toEmbed : unref(toEmbed))(
                        (_a3 = single.value) == null ? void 0 : _a3.youtube_video
                      )}`,
                      title: "YouTube video player",
                      frameborder: "0",
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                      allowfullscreen: ""
                    }, null, 8, ["src"]))
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-[990px] mx-auto" data-v-1109648b>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        centered: "",
        title: _ctx.$t("map")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-10 border border-solid border-white/20 rounded-xl relative overflow-hidden" data-v-1109648b${_scopeId}>`);
            if (!loading.value) {
              _push2(ssrRenderComponent(_component_MapContact, {
                locations: locations.value,
                "map-class": "!h-[500px]"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-10 border border-solid border-white/20 rounded-xl relative overflow-hidden" }, [
                !loading.value ? (openBlock(), createBlock(_component_MapContact, {
                  key: 0,
                  locations: locations.value,
                  "map-class": "!h-[500px]"
                }, null, 8, ["locations"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="max-w-[584px] mx-auto !py-4 lg:!py-8" data-v-1109648b>`);
      _push(ssrRenderComponent(_component_DestinationSocial, {
        title: (_i = single.value) == null ? void 0 : _i.title,
        class: "!bg-[#07091C80]"
      }, null, _parent));
      _push(`</div>`);
      if ((_j = attractionsList.value) == null ? void 0 : _j.length) {
        _push(ssrRenderComponent(_component_SectionWrapper, {
          class: "!py-4 lg:!py-8",
          centered: "",
          title: _ctx.$t("recommended_attractions"),
          subtitle: _ctx.$t("recommended_attractions_subtitle")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3;
            if (_push2) {
              if ((_a3 = attractionsList.value) == null ? void 0 : _a3.length) {
                _push2(`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10" data-v-1109648b${_scopeId}><!--[-->`);
                ssrRenderList(attractionsList.value, (item, i) => {
                  _push2(ssrRenderComponent(_component_CardAttractions, mergeProps({ item }, {
                    key: i,
                    class: "!w-full !h-[200px]"
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ((_b3 = attractionsList.value) == null ? void 0 : _b3.length) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(attractionsList.value, (item, i) => {
                    return openBlock(), createBlock(_component_CardAttractions, mergeProps({ item }, {
                      key: i,
                      class: "!w-full !h-[200px]"
                    }), null, 16);
                  }), 128))
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _id__vue_vue_type_style_index_0_scoped_1109648b_lang = "";
const _id__vue_vue_type_style_index_1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destination/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1109648b"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-6a77bd31.js.map
