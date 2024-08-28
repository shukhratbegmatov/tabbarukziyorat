import { p as publicAssetsURL } from '../../renderer.mjs';
import { useSSRContext, defineComponent, computed, resolveDirective, mergeProps, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, renderSlot, ref, watch } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$a } from './Breadcrumb-90707320.mjs';
import { _ as __nuxt_component_0, a as __nuxt_component_0$1 } from './Preloader-bddb5d1e.mjs';
import { _ as _sfc_main$9 } from './InfoCard-ef58c1a7.mjs';
import { _ as __nuxt_component_5 } from './Wrapper-ba6738ca.mjs';
import { Autoplay, Navigation } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/swiper/swiper.esm.js';
import { Swiper, SwiperSlide } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/swiper/vue/swiper-vue.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_5$1 } from './PromoVideo-f076661c.mjs';
import { f as formatPhoneNumber, t as toEmbed } from './useFetcher-bfa391cb.mjs';
import { _ as __nuxt_component_0$2 } from './Modal-0cbe818d.mjs';
import { u as useSeoMeta } from './composables-ffbf1183.mjs';
import { u as useAboutStore } from './about-ca95d5b5.mjs';
import { b as useI18n } from '../server.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@vueuse/components/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/vue/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/dom/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/is-https/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/dayjs.min.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/az.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/en.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/hu.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/kk.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/ky.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/ru.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/tk.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/tr.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/locale/uz-latn.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/plugin/relativeTime.js';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue3-lazyload/dist/index.mjs';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Multi",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    const props = __props;
    const firtsImage = computed(() => {
      var _a;
      return (_a = props.images[0]) == null ? void 0 : _a.image;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _directive_lazy = resolveDirective("lazy");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[200px] lg:h-[550px]" }, _attrs))}>`);
      if (_ctx.images) {
        _push(`<div class="w-full h-full flex-y-center relative"><!--[-->`);
        ssrRenderList(_ctx.images, (item, index) => {
          var _a2, _b2;
          _push(`<div class="${ssrRenderClass([{ "border-r-[0px]": index === ((_a2 = _ctx.images) == null ? void 0 : _a2.length) - 1 }, "w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"])}"><img${ssrRenderAttrs(mergeProps({
            class: ["w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6]", {
              "opacity-0": index === 0 || index === ((_b2 = _ctx.images) == null ? void 0 : _b2.length) - 1
            }],
            alt: "banner-image"
          }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: item == null ? void 0 : item.image, delay: 500 })))}></div>`);
        });
        _push(`<!--]--><img${ssrRenderAttrs(mergeProps({
          class: "w-full h-full absolute left-0 max-w-[30%] object-cover",
          alt: "banner-image"
        }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: firtsImage.value, delay: 500 })))}><img${ssrRenderAttrs(mergeProps({
          class: "w-full h-full absolute right-0 max-w-[30%] object-cover",
          alt: "banner-image"
        }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: (_b = _ctx.images[((_a = _ctx.images) == null ? void 0 : _a.length) - 1]) == null ? void 0 : _b.image, delay: 500 })))}><div class="w-full h-full absolute inset-0 bg-dark/20 z-[2]"></div></div>`);
      } else {
        _push(`<div class="w-full h-full flex-y-center relative"><div class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner/Multi.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AboutUs",
  __ssrInlineRender: true,
  props: {
    statistics: {},
    about: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0;
      if (_ctx.statistics) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative z-10" }, _attrs))}><div class="container"><div class="py-6 md:py-8 lg:py-16 space-y-8 lg:space-y-16"><div class="space-y-4 text-white">`);
        _push(ssrRenderComponent(_component_CommonPreloader, {
          width: "163px",
          height: "52px",
          "border-radius": "4px",
          class: "!inline-block mb-4",
          loading: _ctx.loading
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-3xl lg:text-[40px] font-bold leading-130 font-playfair"${_scopeId}>${ssrInterpolate(_ctx.$t("about_us_title"))}</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-3xl lg:text-[40px] font-bold leading-130 font-playfair" }, toDisplayString(_ctx.$t("about_us_title")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_CommonPreloader, {
          width: "100%",
          height: "70px",
          "border-radius": "4px",
          loading: _ctx.loading
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<div class="text-base lg:text-lg font-medium leading-130"${_scopeId}>${(_a = _ctx.about) == null ? void 0 : _a.description}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "text-base lg:text-lg font-medium leading-130",
                  innerHTML: (_b = _ctx.about) == null ? void 0 : _b.description
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(_ctx.loading ? 4 : _ctx.statistics, (about2, i) => {
          _push(ssrRenderComponent(_sfc_main$9, {
            key: i,
            icon: about2 == null ? void 0 : about2.icon,
            title: about2 == null ? void 0 : about2.title,
            count: about2 == null ? void 0 : about2.count,
            loading: _ctx.loading
          }, null, _parent));
        });
        _push(`<!--]--></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/AboutUs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0$1 = "" + publicAssetsURL("svg/mission-bg.svg");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "OurMission",
  __ssrInlineRender: true,
  props: {
    mission: {},
    supporters: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-white/5 py-8 lg:py-16 after:absolute after:top-0 after:left-0 after:top-0 after:w-full after:h-full after:bg-black/50 xl:after:hidden" }, _attrs))}><img${ssrRenderAttr("src", _imports_0$1)} alt="mission-bg" class="absolute right-0 top-0 h-full object-cover"><div class="relative container space-y-6 z-20"><div class="space-y-4 text-white max-w-[583px]">`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "163px",
        height: "52px",
        "border-radius": "4px",
        class: "!inline-block mb-4",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl lg:text-[40px] font-bold leading-130 font-playfair"${_scopeId}>${ssrInterpolate(_ctx.$t("our_mission"))}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl lg:text-[40px] font-bold leading-130 font-playfair" }, toDisplayString(_ctx.$t("our_mission")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "100%",
        height: "70px",
        "border-radius": "4px",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-base lg:text-lg font-medium leading-130"${_scopeId}>${_ctx.mission}</div>`);
          } else {
            return [
              createVNode("div", {
                class: "text-base lg:text-lg font-medium leading-130",
                innerHTML: _ctx.mission
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4">`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "139px",
        height: "26px",
        "border-radius": "4px",
        "preloader-class": "mb-4",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="text-xl text-white font-semibold leading-130"${_scopeId}>${ssrInterpolate(_ctx.$t("our_supporter"))}</h4>`);
          } else {
            return [
              createVNode("h4", { class: "text-xl text-white font-semibold leading-130" }, toDisplayString(_ctx.$t("our_supporter")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="inline-flex flex-col space-y-[18px] w-full max-w-[423px]"><!--[-->`);
      ssrRenderList(_ctx.supporters, (el, i) => {
        _push(`<div class="relative bg-white/5 rounded-lg p-3 border border-solid border-white/5 overflow-hidden">`);
        _push(ssrRenderComponent(_component_CommonPreloader, {
          width: "250px",
          height: "43px",
          "border-radius": "4px",
          "preloader-class": "mb-4",
          loading: _ctx.loading
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center space-x-2"${_scopeId}><img${ssrRenderAttr("src", el == null ? void 0 : el.logo)}${ssrRenderAttr("alt", el == null ? void 0 : el.name)}${_scopeId}><p class="text-[15px] text-white font-bold leading-130 font-playfair"${_scopeId}>${ssrInterpolate(el == null ? void 0 : el.name)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center space-x-2" }, [
                  createVNode("img", {
                    src: el == null ? void 0 : el.logo,
                    alt: el == null ? void 0 : el.name
                  }, null, 8, ["src", "alt"]),
                  createVNode("p", { class: "text-[15px] text-white font-bold leading-130 font-playfair" }, toDisplayString(el == null ? void 0 : el.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_CommonPreloader, {
          width: "100px",
          height: "120px",
          "border-radius": "4px",
          "preloader-class": "absolute -bottom-full right-0",
          loading: _ctx.loading
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", el == null ? void 0 : el.logo)}${ssrRenderAttr("alt", el == null ? void 0 : el.name)} class="absolute w-[120px] h-[120px] object-contain -bottom-16 right-0 grayscale opacity-10"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: el == null ? void 0 : el.logo,
                  alt: el == null ? void 0 : el.name,
                  class: "absolute w-[120px] h-[120px] object-contain -bottom-16 right-0 grayscale opacity-10"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/OurMission.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StatementCard",
  __ssrInlineRender: true,
  props: {
    statement: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "statement-card relative w-full flex items-start flex-col rounded-[20px] border border-solid border-white/20 pb-[70px] px-3 transition-all duration-300 bg-dark-400" }, _attrs))} data-v-6707ccb1><div class="flex items-center justify-center flex-col mb-5 w-full" data-v-6707ccb1><div class="flex-shrink-0 w-[84px] h-[84px] rounded-full border border-gray-200 overflow-hidden -mt-[45px] custom-shadow" data-v-6707ccb1><img${ssrRenderAttr("src", (_a = _ctx.statement) == null ? void 0 : _a.image)}${ssrRenderAttr("alt", (_b = _ctx.statement) == null ? void 0 : _b.full_name)} class="w-full h-full object-cover" data-v-6707ccb1></div><div class="flex flex-col items-center w-full mt-4 space-y-[6.8px]" data-v-6707ccb1><p class="custom-title text-red-100 text-base leading-130 font-bold" data-v-6707ccb1>${ssrInterpolate((_c = _ctx.statement) == null ? void 0 : _c.full_name)}</p><p class="custom-subtitle text-white/80 text-sm leading-130 font-medium" data-v-6707ccb1>${ssrInterpolate((_d = _ctx.statement) == null ? void 0 : _d.position)}</p></div></div><p class="custom-text text-sm text-white font-bold leading-130 text-center" data-v-6707ccb1>${ssrInterpolate((_e = _ctx.statement) == null ? void 0 : _e.statement)}</p><span class="icon-uni-cut absolute bottom-0 right-0 text-gray-100 text-[58px] opacity-5" data-v-6707ccb1></span></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/StatementCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const StatementCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6707ccb1"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Statements",
  __ssrInlineRender: true,
  props: {
    statements: {}
  },
  setup(__props) {
    const settings = {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".slider-nav-next",
        prevEl: ".slider-nav-prev"
      },
      centeredSlides: true,
      autoplay: {
        delay: 1e3,
        disableOnInteraction: false
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 55
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 55
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 55
        }
      },
      modules: [Autoplay, Navigation]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWrapper = __nuxt_component_5;
      _push(ssrRenderComponent(_component_SectionWrapper, mergeProps({
        centered: "",
        title: "statements",
        subtitle: "statements_sub"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative md:px-[70px] xl:px-[100px]" data-v-add03442${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), settings, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.statements, (statement, i) => {
                    _push3(ssrRenderComponent(unref(SwiperSlide), {
                      key: i,
                      class: "custom-state transition-all duration-300"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(StatementCard, { statement }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(StatementCard, { statement }, null, 8, ["statement"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.statements, (statement, i) => {
                      return openBlock(), createBlock(unref(SwiperSlide), {
                        key: i,
                        class: "custom-state transition-all duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(StatementCard, { statement }, null, 8, ["statement"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-prev lg:flex hidden absolute left-0 top-1/2 cursor-pointer group" data-v-add03442${_scopeId}><i class="icon-arrow-left text-3xl text-dark transition-300 group-hover:!text-white" data-v-add03442${_scopeId}></i></button><button class="w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-next lg:flex hidden absolute right-0 top-1/2 cursor-pointer group" data-v-add03442${_scopeId}><i class="icon-arrow-right text-3xl text-dark transition-300 group-hover:!text-white" data-v-add03442${_scopeId}></i></button></div>`);
          } else {
            return [
              createVNode("div", { class: "relative md:px-[70px] xl:px-[100px]" }, [
                createVNode(unref(Swiper), settings, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.statements, (statement, i) => {
                      return openBlock(), createBlock(unref(SwiperSlide), {
                        key: i,
                        class: "custom-state transition-all duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(StatementCard, { statement }, null, 8, ["statement"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }, 16),
                createVNode("button", { class: "w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-prev lg:flex hidden absolute left-0 top-1/2 cursor-pointer group" }, [
                  createVNode("i", { class: "icon-arrow-left text-3xl text-dark transition-300 group-hover:!text-white" })
                ]),
                createVNode("button", { class: "w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-next lg:flex hidden absolute right-0 top-1/2 cursor-pointer group" }, [
                  createVNode("i", { class: "icon-arrow-right text-3xl text-dark transition-300 group-hover:!text-white" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Statements.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-add03442"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InfoData",
  __ssrInlineRender: true,
  props: {
    title: { default: "Location" },
    icon: { default: "icon-location-pin" },
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "93px",
        height: "21px",
        "border-radius": "4px",
        "preloader-class": "mb-2",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-2"${_scopeId}><i class="${ssrRenderClass([_ctx.icon, "text-white/60 text-xl"])}"${_scopeId}></i><span class="text-white/60 text-base font-medium leading-130"${_scopeId}>${ssrInterpolate(_ctx.$t(_ctx.title))}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-2" }, [
                createVNode("i", {
                  class: ["text-white/60 text-xl", _ctx.icon]
                }, null, 2),
                createVNode("span", { class: "text-white/60 text-base font-medium leading-130" }, toDisplayString(_ctx.$t(_ctx.title)), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "100%",
        height: "21px",
        "border-radius": "4px",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white text-lg lg:text-xl font-bold leading-130"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", { class: "text-white text-lg lg:text-xl font-bold leading-130" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/InfoData.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  props: {
    locations: {},
    mapClass: {}
  },
  setup(__props) {
    computed(() => {
      return {
        apiKey: "",
        lang: "ru_RU",
        coordorder: "latlong",
        version: "2.1"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      if (_ctx.locations) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map/About.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Locations",
  __ssrInlineRender: true,
  props: {
    contacts: {}
  },
  setup(__props) {
    const props = __props;
    const locationData = computed(() => {
      var _a;
      return {
        title: "location_contact",
        icon: "icon-location-pin",
        text: (_a = props == null ? void 0 : props.contacts) == null ? void 0 : _a.location
      };
    });
    const mainData = computed(() => {
      var _a;
      return {
        title: "mail",
        icon: "icon-mail",
        text: (_a = props == null ? void 0 : props.contacts) == null ? void 0 : _a.email
      };
    });
    const phoneData = computed(() => {
      var _a;
      return {
        title: "phone_number",
        icon: "icon-phone",
        text: (_a = props == null ? void 0 : props.contacts) == null ? void 0 : _a.phone_number
      };
    });
    computed(() => {
      var _a, _b;
      return [
        {
          id: 1,
          name: (_a = props == null ? void 0 : props.contacts) == null ? void 0 : _a.location,
          location: (_b = props == null ? void 0 : props.contacts) == null ? void 0 : _b.map_location,
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.azernews.az%2Fmedia%2F2020%2F03%2F18%2F1584458665_old-city-4-800x450.jpg&f=1&nofb=1&ipt=f4812c3d5e90563db375976e60f0d823c56487fbdfae56428a7a4815a0cea048&ipo=images",
          religion: {
            type: "about"
          },
          latitude: 41.321517,
          longitude: 69.304964
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_CommonInfoData = _sfc_main$3;
      const _component_MapAbout = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-16" }, _attrs))}><div class="container flex items-stretch justify-between gap-5 flex-col lg:flex-row"><div><h3 class="mb-6 text-white text-3xl lg:text-40 font-semibold leading-130 font-playfair">${ssrInterpolate(_ctx.$t("contacts"))}</h3><div class="space-y-5">`);
      _push(ssrRenderComponent(_component_CommonInfoData, {
        title: (_a = locationData.value) == null ? void 0 : _a.title,
        icon: (_b = locationData.value) == null ? void 0 : _b.icon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate((_a2 = locationData.value) == null ? void 0 : _a2.text)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString((_b2 = locationData.value) == null ? void 0 : _b2.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonInfoData, {
        title: (_c = mainData.value) == null ? void 0 : _c.title,
        icon: (_d = mainData.value) == null ? void 0 : _d.icon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2;
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", `mailto:${(_a2 = mainData.value) == null ? void 0 : _a2.text}`)} class="hover:text-red duration-300"${_scopeId}>${ssrInterpolate((_b2 = mainData.value) == null ? void 0 : _b2.text)}</a>`);
          } else {
            return [
              createVNode("a", {
                href: `mailto:${(_c2 = mainData.value) == null ? void 0 : _c2.text}`,
                class: "hover:text-red duration-300"
              }, toDisplayString((_d2 = mainData.value) == null ? void 0 : _d2.text), 9, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonInfoData, {
        title: (_e = phoneData.value) == null ? void 0 : _e.title,
        icon: (_f = phoneData.value) == null ? void 0 : _f.icon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2;
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", `tel:${(_a2 = phoneData.value) == null ? void 0 : _a2.text}`)} class="hover:text-red duration-300"${_scopeId}>${ssrInterpolate(unref(formatPhoneNumber)((_b2 = phoneData.value) == null ? void 0 : _b2.text))}</a>`);
          } else {
            return [
              createVNode("a", {
                href: `tel:${(_c2 = phoneData.value) == null ? void 0 : _c2.text}`,
                class: "hover:text-red duration-300"
              }, toDisplayString(unref(formatPhoneNumber)((_d2 = phoneData.value) == null ? void 0 : _d2.text)), 9, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (_ctx.contacts) {
        _push(`<div class="rounded-xl relative overflow-hidden border border-solid border-white/20 w-full lg:max-w-[584px]">`);
        _push(ssrRenderComponent(_component_MapAbout, {
          locations: _ctx.contacts,
          "map-class": "!h-[300px]"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Locations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("svg/bg-frame.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const aboutStore = useAboutStore();
    const { t } = useI18n();
    const statistics = computed(() => aboutStore == null ? void 0 : aboutStore.statistics);
    const aboutData = computed(() => aboutStore == null ? void 0 : aboutStore.aboutData);
    const statements = computed(() => aboutStore == null ? void 0 : aboutStore.statements);
    const contacts = computed(() => aboutStore == null ? void 0 : aboutStore.contacts);
    const title = computed(() => t("about_us_title"));
    const breadcrumb = [
      {
        title: "About us",
        link: "/about"
      }
    ];
    const loading = ref(false);
    const showModal = ref(false);
    watch(
      () => statistics,
      (value) => {
        var _a2, _b2, _c2, _d;
        statisticsData.value[0].count = (_a2 = value.value) == null ? void 0 : _a2.attractions_count;
        statisticsData.value[1].count = (_b2 = value.value) == null ? void 0 : _b2.destinations_count;
        statisticsData.value[2].count = (_c2 = value.value) == null ? void 0 : _c2.countries_count;
        statisticsData.value[3].count = (_d = value.value) == null ? void 0 : _d.religions_count;
      },
      { deep: true }
    );
    useSeoMeta({
      title,
      description: (_a = aboutData == null ? void 0 : aboutData.value) == null ? void 0 : _a.title,
      ogTitle: (_b = aboutData == null ? void 0 : aboutData.value) == null ? void 0 : _b.title,
      ogImage: (_c = aboutData == null ? void 0 : aboutData.value) == null ? void 0 : _c.video_image
    });
    const statisticsData = ref([
      {
        title: "attractions",
        count: 0,
        icon: "/svg/moscue.svg"
      },
      {
        title: "destinations",
        count: 0,
        icon: "/svg/global.svg"
      },
      {
        title: "countries",
        count: 0,
        icon: "/svg/flag.svg"
      },
      {
        title: "religions",
        count: 0,
        icon: "/svg/hope.svg"
      }
    ]);
    async function fetchData() {
      loading.value = true;
      return await Promise.all([
        await aboutStore.fetchAboutData(),
        await aboutStore.fetchStatistics(),
        await aboutStore.fetchStatements(),
        await aboutStore.fetchContacts()
      ]);
    }
    fetchData().finally(() => {
      loading.value = false;
    });
    const handleShowVideo = () => {
      showModal.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d;
      const _component_BannerMulti = _sfc_main$8;
      const _component_CommonBreadcrumb = _sfc_main$a;
      const _component_SectionAboutUs = _sfc_main$7;
      const _component_SectionOurMission = _sfc_main$6;
      const _component_SectionStatements = __nuxt_component_4;
      const _component_SectionPromoVideo = __nuxt_component_5$1;
      const _component_SectionLocations = _sfc_main$1;
      const _component_CommonModal = __nuxt_component_0$2;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-fdb8a45c><div class="relative" data-v-fdb8a45c><img${ssrRenderAttr("src", _imports_0)} alt="background frame" class="absolute top-0 left-0 w-full h-full z-0" data-v-fdb8a45c>`);
      _push(ssrRenderComponent(_component_BannerMulti, {
        images: aboutData.value.images,
        loading: loading.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommonBreadcrumb, { menu: breadcrumb }, null, _parent));
      _push(ssrRenderComponent(_component_SectionAboutUs, {
        about: aboutData.value,
        statistics: statisticsData.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SectionOurMission, {
        mission: (_a2 = aboutData.value) == null ? void 0 : _a2.our_mission,
        supporters: (_b2 = aboutData.value) == null ? void 0 : _b2.supporters,
        loading: loading.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionStatements, { statements: statements.value }, null, _parent));
      _push(ssrRenderComponent(_component_SectionPromoVideo, mergeProps({ class: "mb-8 lg:mb-16" }, { image: (_c2 = aboutData.value) == null ? void 0 : _c2.video_image }, { onHandleShowVideo: handleShowVideo }), null, _parent));
      if (!loading.value) {
        _push(ssrRenderComponent(_component_SectionLocations, { contacts: contacts.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CommonModal, {
        show: showModal.value,
        onClose: ($event) => showModal.value = false,
        title: (_d = aboutData.value) == null ? void 0 : _d.title,
        "body-style": "!max-w-[100%] md:!max-w-[70%] h-[55%] sm:h-[50%] md:h-[70%]"
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
                        (_a3 = aboutData.value) == null ? void 0 : _a3.video_link
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fdb8a45c"]]);

export { about as default };
//# sourceMappingURL=about-b513f1e5.mjs.map
