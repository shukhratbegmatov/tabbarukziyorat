import { _ as __nuxt_component_0$2 } from "./Single-987bf550.js";
import { _ as __nuxt_component_0$3 } from "./Preloader-bddb5d1e.js";
import { _ as __nuxt_component_1, b as useI18n } from "../server.mjs";
import { _ as _sfc_main$a } from "./Button-b4a346b5.js";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext, resolveDirective, createTextVNode, withDirectives, watch } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                     *//* empty css                         */import { _ as __nuxt_component_5 } from "./Wrapper-ba6738ca.js";
import { _ as _sfc_main$b } from "./InfoCard-ef58c1a7.js";
import { C as CollapseTransition } from "./CollapseTransition-fb7ca217.js";
import { useWindowSize } from "@vueuse/core";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$c, a as __nuxt_component_7, b as __nuxt_component_8 } from "./Subscribe-2780a86b.js";
import { _ as __nuxt_component_6 } from "./CountryCard-ba7b0e33.js";
import dayjs from "dayjs";
import { u as useAboutStore } from "./about-ca95d5b5.js";
import { u as useDestinationStore } from "./destination-7a1b9a3b.js";
import { u as useMainStore } from "./main-aa42713b.js";
import { u as useNewsStore } from "./news-51b7420e.js";
import "./Breadcrumb-90707320.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "@intlify/core-base";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
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
import "@vueuse/components";
import "qrcanvas-vue";
import "./useFetcher-bfa391cb.js";
import "ohash";
const effectFade_min = "";
const scrollbar_min = "";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    images: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const settings = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: "false",
        type: "bullets",
        renderBullet: function(index2, className) {
          return '<span class="' + className + '"><em></em><i></i><b></b></span>';
        }
      },
      effect: "fade",
      centeredSlides: true,
      autoplay: {
        delay: 3e3,
        disableOnInteraction: false
      },
      modules: [Autoplay, EffectFade, Pagination]
    };
    const activeIndex = ref(1);
    const localeData = computed(() => [
      {
        title: "Bibi Khanum Mosque",
        short_description: "<p>Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th century.</p>",
        image: "/registan.webp"
      }
    ]);
    const destinationLength = computed(() => {
      var _a, _b;
      return (_b = (_a = props == null ? void 0 : props.images) == null ? void 0 : _a.destination) == null ? void 0 : _b.length;
    });
    const onSlideChange = (value) => {
      activeIndex.value = (value == null ? void 0 : value.activeIndex) + 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BannerSingle = __nuxt_component_0$2;
      const _component_CommonPreloader = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-full z-30" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(settings, {
        class: "custom-swiper relative h-full",
        onSlideChange
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(((_a = _ctx.images) == null ? void 0 : _a.destination) ? (_b = _ctx.images) == null ? void 0 : _b.destination : unref(localeData), (slide, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                class: "relative h-full transition-all duration-300 !z-50"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BannerSingle, {
                      title: slide == null ? void 0 : slide.title,
                      image: slide == null ? void 0 : slide.image,
                      text: slide == null ? void 0 : slide.short_description,
                      loading: _ctx.loading,
                      content: ""
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                            width: "200px",
                            height: "24px",
                            "preloader-class": "mb-1"
                          }), {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2, _c2, _d2, _e, _f;
                              if (_push5) {
                                _push5(`<div class="flex items-center text-white space-x-2"${_scopeId4}><i class="icon-map-pin text-lg lg:text-2xl"${_scopeId4}></i><span class="text-sm lg:text-xl font-medium leading-130"${_scopeId4}><span${_scopeId4}>${ssrInterpolate((_a2 = slide == null ? void 0 : slide.region) == null ? void 0 : _a2.title)}</span>`);
                                if ((_b2 = slide == null ? void 0 : slide.region) == null ? void 0 : _b2.title) {
                                  _push5(`<span${_scopeId4}>,</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<span${_scopeId4}>${ssrInterpolate((_c2 = slide == null ? void 0 : slide.destination_country) == null ? void 0 : _c2.title)}</span></span></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center text-white space-x-2" }, [
                                    createVNode("i", { class: "icon-map-pin text-lg lg:text-2xl" }),
                                    createVNode("span", { class: "text-sm lg:text-xl font-medium leading-130" }, [
                                      createVNode("span", null, toDisplayString((_d2 = slide == null ? void 0 : slide.region) == null ? void 0 : _d2.title), 1),
                                      ((_e = slide == null ? void 0 : slide.region) == null ? void 0 : _e.title) ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true),
                                      createVNode("span", null, toDisplayString((_f = slide == null ? void 0 : slide.destination_country) == null ? void 0 : _f.title), 1)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                              width: "200px",
                              height: "24px",
                              "preloader-class": "mb-1"
                            }), {
                              default: withCtx(() => {
                                var _a2, _b2, _c2;
                                return [
                                  createVNode("div", { class: "flex items-center text-white space-x-2" }, [
                                    createVNode("i", { class: "icon-map-pin text-lg lg:text-2xl" }),
                                    createVNode("span", { class: "text-sm lg:text-xl font-medium leading-130" }, [
                                      createVNode("span", null, toDisplayString((_a2 = slide == null ? void 0 : slide.region) == null ? void 0 : _a2.title), 1),
                                      ((_b2 = slide == null ? void 0 : slide.region) == null ? void 0 : _b2.title) ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true),
                                      createVNode("span", null, toDisplayString((_c2 = slide == null ? void 0 : slide.destination_country) == null ? void 0 : _c2.title), 1)
                                    ])
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1040)
                          ];
                        }
                      }),
                      suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                            width: "150px",
                            height: "56px",
                            "preloader-class": "mb-1"
                          }), {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: _ctx.localePath(`/destination/${slide == null ? void 0 : slide.slug}`)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_CommonButton, { "button-class": "!px-7 lg:!px-8 !py-3 !flex !items-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span class="text-base font-semibold leading-130 mr-1"${_scopeId6}>${ssrInterpolate(_ctx.$t("explore"))}</span><i class="icon-arrow-right text-2xl"${_scopeId6}></i>`);
                                          } else {
                                            return [
                                              createVNode("span", { class: "text-base font-semibold leading-130 mr-1" }, toDisplayString(_ctx.$t("explore")), 1),
                                              createVNode("i", { class: "icon-arrow-right text-2xl" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_CommonButton, { "button-class": "!px-7 lg:!px-8 !py-3 !flex !items-center" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-base font-semibold leading-130 mr-1" }, toDisplayString(_ctx.$t("explore")), 1),
                                            createVNode("i", { class: "icon-arrow-right text-2xl" })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: _ctx.localePath(`/destination/${slide == null ? void 0 : slide.slug}`)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CommonButton, { "button-class": "!px-7 lg:!px-8 !py-3 !flex !items-center" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-base font-semibold leading-130 mr-1" }, toDisplayString(_ctx.$t("explore")), 1),
                                          createVNode("i", { class: "icon-arrow-right text-2xl" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                              width: "150px",
                              height: "56px",
                              "preloader-class": "mb-1"
                            }), {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: _ctx.localePath(`/destination/${slide == null ? void 0 : slide.slug}`)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_CommonButton, { "button-class": "!px-7 lg:!px-8 !py-3 !flex !items-center" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-base font-semibold leading-130 mr-1" }, toDisplayString(_ctx.$t("explore")), 1),
                                        createVNode("i", { class: "icon-arrow-right text-2xl" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1040)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BannerSingle, {
                        title: slide == null ? void 0 : slide.title,
                        image: slide == null ? void 0 : slide.image,
                        text: slide == null ? void 0 : slide.short_description,
                        loading: _ctx.loading,
                        content: ""
                      }, {
                        prefix: withCtx(() => [
                          createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                            width: "200px",
                            height: "24px",
                            "preloader-class": "mb-1"
                          }), {
                            default: withCtx(() => {
                              var _a2, _b2, _c2;
                              return [
                                createVNode("div", { class: "flex items-center text-white space-x-2" }, [
                                  createVNode("i", { class: "icon-map-pin text-lg lg:text-2xl" }),
                                  createVNode("span", { class: "text-sm lg:text-xl font-medium leading-130" }, [
                                    createVNode("span", null, toDisplayString((_a2 = slide == null ? void 0 : slide.region) == null ? void 0 : _a2.title), 1),
                                    ((_b2 = slide == null ? void 0 : slide.region) == null ? void 0 : _b2.title) ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true),
                                    createVNode("span", null, toDisplayString((_c2 = slide == null ? void 0 : slide.destination_country) == null ? void 0 : _c2.title), 1)
                                  ])
                                ])
                              ];
                            }),
                            _: 2
                          }, 1040)
                        ]),
                        suffix: withCtx(() => [
                          createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                            width: "150px",
                            height: "56px",
                            "preloader-class": "mb-1"
                          }), {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: _ctx.localePath(`/destination/${slide == null ? void 0 : slide.slug}`)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_CommonButton, { "button-class": "!px-7 lg:!px-8 !py-3 !flex !items-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-base font-semibold leading-130 mr-1" }, toDisplayString(_ctx.$t("explore")), 1),
                                      createVNode("i", { class: "icon-arrow-right text-2xl" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        _: 2
                      }, 1032, ["title", "image", "text", "loading"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(((_c = _ctx.images) == null ? void 0 : _c.destination) ? (_d = _ctx.images) == null ? void 0 : _d.destination : unref(localeData), (slide, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: i,
                  class: "relative h-full transition-all duration-300 !z-50"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BannerSingle, {
                      title: slide == null ? void 0 : slide.title,
                      image: slide == null ? void 0 : slide.image,
                      text: slide == null ? void 0 : slide.short_description,
                      loading: _ctx.loading,
                      content: ""
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                          width: "200px",
                          height: "24px",
                          "preloader-class": "mb-1"
                        }), {
                          default: withCtx(() => {
                            var _a2, _b2, _c2;
                            return [
                              createVNode("div", { class: "flex items-center text-white space-x-2" }, [
                                createVNode("i", { class: "icon-map-pin text-lg lg:text-2xl" }),
                                createVNode("span", { class: "text-sm lg:text-xl font-medium leading-130" }, [
                                  createVNode("span", null, toDisplayString((_a2 = slide == null ? void 0 : slide.region) == null ? void 0 : _a2.title), 1),
                                  ((_b2 = slide == null ? void 0 : slide.region) == null ? void 0 : _b2.title) ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true),
                                  createVNode("span", null, toDisplayString((_c2 = slide == null ? void 0 : slide.destination_country) == null ? void 0 : _c2.title), 1)
                                ])
                              ])
                            ];
                          }),
                          _: 2
                        }, 1040)
                      ]),
                      suffix: withCtx(() => [
                        createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                          width: "150px",
                          height: "56px",
                          "preloader-class": "mb-1"
                        }), {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: _ctx.localePath(`/destination/${slide == null ? void 0 : slide.slug}`)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_CommonButton, { "button-class": "!px-7 lg:!px-8 !py-3 !flex !items-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-base font-semibold leading-130 mr-1" }, toDisplayString(_ctx.$t("explore")), 1),
                                    createVNode("i", { class: "icon-arrow-right text-2xl" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      _: 2
                    }, 1032, ["title", "image", "text", "loading"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(destinationLength)) {
        _push(`<div class="absolute right-[12%] top-[40%] hidden xl:flex"><div class="flex flex-col items-center"><span class="relative text-white text-xl font-medium z-10 mb-3"> 0${ssrInterpolate(activeIndex.value)}</span><div class="swiper-pagination"></div><span class="relative text-white text-xl font-medium z-10 mt-1"> 0${ssrInterpolate(unref(destinationLength))}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Slider_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner/Slider.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Location",
  __ssrInlineRender: true,
  props: {
    location: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonPreloader = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.localePath(`/destination/${(_a = _ctx.location) == null ? void 0 : _a.slug}`),
        class: "w-auto inline-block flex gap-3 rounded-xl border border-solid border-white/10 p-3 transition-300 group hover:border-white/60 location-backdrop-blur"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
              width: "75px",
              height: "66px"
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<div class="aspect-location-image overflow-hidden rounded shrink-0 w-[75px] h-[66px] md:h-22 md:w-[100px] relative border-white/12"${_scopeId2}><img${ssrRenderAttr("src", (_a2 = _ctx.location) == null ? void 0 : _a2.image)} alt="location image" class="w-full h-full object-cover"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "aspect-location-image overflow-hidden rounded shrink-0 w-[75px] h-[66px] md:h-22 md:w-[100px] relative border-white/12" }, [
                      createVNode("img", {
                        src: (_b = _ctx.location) == null ? void 0 : _b.image,
                        alt: "location image",
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-start justify-center space-y-[3.75px] md:space-y-[5px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
              width: "70px",
              height: "14px"
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  _push3(`<p class="text-gray-300 text-[13px] md:text-sm mb-1 line-clamp-1 leading-130"${_scopeId2}><span${_scopeId2}>${ssrInterpolate((_b = (_a2 = _ctx.location) == null ? void 0 : _a2.region) == null ? void 0 : _b.title)}</span>`);
                  if ((_d = (_c = _ctx.location) == null ? void 0 : _c.region) == null ? void 0 : _d.title) {
                    _push3(`<span${_scopeId2}>,</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_f = (_e = _ctx.location) == null ? void 0 : _e.destination_country) == null ? void 0 : _f.title)}</span></p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-gray-300 text-[13px] md:text-sm mb-1 line-clamp-1 leading-130" }, [
                      createVNode("span", null, toDisplayString((_h = (_g = _ctx.location) == null ? void 0 : _g.region) == null ? void 0 : _h.title), 1),
                      ((_j = (_i = _ctx.location) == null ? void 0 : _i.region) == null ? void 0 : _j.title) ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true),
                      createVNode("span", null, toDisplayString((_l = (_k = _ctx.location) == null ? void 0 : _k.destination_country) == null ? void 0 : _l.title), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
              width: "192px",
              height: "28px"
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<h4 class="text-white text-base md:text-xl font-semibold line-clamp-2 leading-130"${_scopeId2}>${ssrInterpolate((_a2 = _ctx.location) == null ? void 0 : _a2.title)}</h4>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-white text-base md:text-xl font-semibold line-clamp-2 leading-130" }, toDisplayString((_b = _ctx.location) == null ? void 0 : _b.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                width: "75px",
                height: "66px"
              }), {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode("div", { class: "aspect-location-image overflow-hidden rounded shrink-0 w-[75px] h-[66px] md:h-22 md:w-[100px] relative border-white/12" }, [
                      createVNode("img", {
                        src: (_a2 = _ctx.location) == null ? void 0 : _a2.image,
                        alt: "location image",
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src"])
                    ])
                  ];
                }),
                _: 1
              }, 16),
              createVNode("div", { class: "flex flex-col items-start justify-center space-y-[3.75px] md:space-y-[5px]" }, [
                createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                  width: "70px",
                  height: "14px"
                }), {
                  default: withCtx(() => {
                    var _a2, _b, _c, _d, _e, _f;
                    return [
                      createVNode("p", { class: "text-gray-300 text-[13px] md:text-sm mb-1 line-clamp-1 leading-130" }, [
                        createVNode("span", null, toDisplayString((_b = (_a2 = _ctx.location) == null ? void 0 : _a2.region) == null ? void 0 : _b.title), 1),
                        ((_d = (_c = _ctx.location) == null ? void 0 : _c.region) == null ? void 0 : _d.title) ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString((_f = (_e = _ctx.location) == null ? void 0 : _e.destination_country) == null ? void 0 : _f.title), 1)
                      ])
                    ];
                  }),
                  _: 1
                }, 16),
                createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                  width: "192px",
                  height: "28px"
                }), {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode("h4", { class: "text-white text-base md:text-xl font-semibold line-clamp-2 leading-130" }, toDisplayString((_a2 = _ctx.location) == null ? void 0 : _a2.title), 1)
                    ];
                  }),
                  _: 1
                }, 16)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const Location_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Location.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Locations",
  __ssrInlineRender: true,
  props: {
    locations: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const bottomSettings = {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      centeredSlides: false,
      autoplay: {
        delay: 4e3,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1.25,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 24
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      },
      modules: [Autoplay, EffectFade]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardLocation = _sfc_main$8;
      _push(ssrRenderComponent(unref(Swiper), mergeProps(bottomSettings, { class: "relative -mt-20 w-full !px-5 md:!px-20 !overflow-visible !z-30" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.loading ? 6 : _ctx.locations, (location, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "relative",
                key: i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardLocation, {
                      location: !_ctx.loading ? location : void 0,
                      loading: _ctx.loading
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardLocation, {
                        location: !_ctx.loading ? location : void 0,
                        loading: _ctx.loading
                      }, null, 8, ["location", "loading"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.loading ? 6 : _ctx.locations, (location, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  class: "relative",
                  key: i
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardLocation, {
                      location: !_ctx.loading ? location : void 0,
                      loading: _ctx.loading
                    }, null, 8, ["location", "loading"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider/Locations.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0$1 = "" + __publicAssetsURL("pattern/help.png");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HomeAboutUs",
  __ssrInlineRender: true,
  props: {
    about: {},
    statistics: {}
  },
  setup(__props) {
    const { width } = useWindowSize();
    const toggleSupporter = ref(null);
    const settings = {
      slidesPerView: "auto",
      allowTouchMove: false,
      navigation: {
        prevEl: ".nav-button-prev",
        nextEl: ".nav-button-next"
      },
      breakpoints: {
        320: {
          allowTouchMove: true
        },
        768: {
          allowTouchMove: false
        }
      },
      modules: [Navigation]
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SectionWrapper = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonButton = _sfc_main$a;
      const _component_CardInfoCard = _sfc_main$b;
      const _directive_lazy = resolveDirective("lazy");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative pb-8 lg:pb-16" }, _attrs))} data-v-6db75ef5><img${ssrRenderAttr("src", _imports_0$1)} alt="Main pattern" class="absolute w-full h-auto -top-[60%] left-0 z-20" data-v-6db75ef5><div class="relative container grid xl:grid-cols-2 gap-6 py-16 items-end gallery-slider z-30" data-v-6db75ef5><div data-v-6db75ef5>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        title: "about_us",
        subtitle: "about_us_project_desc",
        class: "!p-0"
      }, null, _parent));
      _push(`<div class="mt-8" data-v-6db75ef5><h4 class="text-xl font-semibold leading-130 mb-3" data-v-6db75ef5>${ssrInterpolate(_ctx.$t("our_supporters"))}</h4><div class="flex gap-3 p-2 flex-col items-start md:items-center md:flex-row" data-v-6db75ef5><!--[-->`);
      ssrRenderList((_a = _ctx.about) == null ? void 0 : _a.supporters, (supporter, i) => {
        _push(`<div class="flex-y-center gap-3" data-v-6db75ef5><div class="flex-y-center gap-3" data-v-6db75ef5><img${ssrRenderAttr("src", supporter == null ? void 0 : supporter.logo)}${ssrRenderAttr("alt", supporter == null ? void 0 : supporter.name)} data-v-6db75ef5>`);
        if (unref(width) > 1024) {
          _push(ssrRenderComponent(CollapseTransition, {
            duration: 400,
            dimension: "width"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(toggleSupporter) === i) {
                  _push2(`<div data-v-6db75ef5${_scopeId}><p class="inline-block !w-[300px]" data-v-6db75ef5${_scopeId}>${ssrInterpolate(supporter == null ? void 0 : supporter.name)}</p></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(toggleSupporter) === i ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("p", { class: "inline-block !w-[300px]" }, toDisplayString(supporter == null ? void 0 : supporter.name), 1)
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<div data-v-6db75ef5><p class="inline-block !w-[300px]" data-v-6db75ef5>${ssrInterpolate(supporter == null ? void 0 : supporter.name)}</p></div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-8 flex-y-center gap-4 max-sm:flex-col" data-v-6db75ef5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/map"),
        class: "!w-full sm:!w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonButton, { class: "!pl-8 !pr-7 !py-3 max-sm:w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex-y-center gap-1 text-base font-semibold leading-150" data-v-6db75ef5${_scopeId2}>${ssrInterpolate(_ctx.$t("explore"))} <i class="icon-earth-globe text-2xl leading-6" data-v-6db75ef5${_scopeId2}></i></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex-y-center gap-1 text-base font-semibold leading-150" }, [
                      createTextVNode(toDisplayString(_ctx.$t("explore")) + " ", 1),
                      createVNode("i", { class: "icon-earth-globe text-2xl leading-6" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommonButton, { class: "!pl-8 !pr-7 !py-3 max-sm:w-full" }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex-y-center gap-1 text-base font-semibold leading-150" }, [
                    createTextVNode(toDisplayString(_ctx.$t("explore")) + " ", 1),
                    createVNode("i", { class: "icon-earth-globe text-2xl leading-6" })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/about"),
        class: "!w-full sm:!w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonButton, {
              class: "!pl-8 !pr-7 !py-3 max-sm:w-full",
              variant: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex-y-center gap-1 text-base font-semibold leading-150" data-v-6db75ef5${_scopeId2}>${ssrInterpolate(_ctx.$t("more_about_us"))} <i class="icon-arrow-right text-2xl leading-6" data-v-6db75ef5${_scopeId2}></i></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex-y-center gap-1 text-base font-semibold leading-150" }, [
                      createTextVNode(toDisplayString(_ctx.$t("more_about_us")) + " ", 1),
                      createVNode("i", { class: "icon-arrow-right text-2xl leading-6" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommonButton, {
                class: "!pl-8 !pr-7 !py-3 max-sm:w-full",
                variant: "secondary"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex-y-center gap-1 text-base font-semibold leading-150" }, [
                    createTextVNode(toDisplayString(_ctx.$t("more_about_us")) + " ", 1),
                    createVNode("i", { class: "icon-arrow-right text-2xl leading-6" })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative group" data-v-6db75ef5>`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({ class: "w-full h-[342px]" }, settings), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a2 = _ctx.about) == null ? void 0 : _a2.images, (item, index2) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index2 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttrs(mergeProps({
                      class: "rounded-xl h-full object-cover w-full",
                      alt: "About us images"
                    }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: item == null ? void 0 : item.image, delay: 500 })))} data-v-6db75ef5${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("img", {
                        class: "rounded-xl h-full object-cover w-full",
                        alt: "About us images"
                      }, null, 512), [
                        [_directive_lazy, { src: item == null ? void 0 : item.image, delay: 500 }]
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b = _ctx.about) == null ? void 0 : _b.images, (item, index2) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index2 }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("img", {
                      class: "rounded-xl h-full object-cover w-full",
                      alt: "About us images"
                    }, null, 512), [
                      [_directive_lazy, { src: item == null ? void 0 : item.image, delay: 500 }]
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="w-8 h-8 lg:w-11 lg:h-11 text-2xl flex navigation-button nav-button-prev icon-arrow-left lg:opacity-0 group-hover:opacity-100 max-md:hidden cursor-pointer" data-v-6db75ef5></button><button class="w-8 h-8 lg:w-11 lg:h-11 text-2xl flex navigation-button nav-button-next icon-arrow-right lg:opacity-0 group-hover:opacity-100 max-md:hidden cursor-pointer" data-v-6db75ef5></button></div></div><div class="container items-center grid md:grid-cols-4 gap-6" data-v-6db75ef5><!--[-->`);
      ssrRenderList(_ctx.statistics, (about, i) => {
        _push(ssrRenderComponent(_component_CardInfoCard, {
          key: i,
          icon: about == null ? void 0 : about.icon,
          title: about == null ? void 0 : about.title,
          count: about == null ? void 0 : about.count,
          class: "!bg-white/10"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const HomeAboutUs_vue_vue_type_style_index_0_scoped_6db75ef5_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/HomeAboutUs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6db75ef5"]]);
const Skeleton_vue_vue_type_style_index_0_scoped_2e31f2b4_lang = "";
const _sfc_main$5 = {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number],
      default: "30px"
    },
    width: {
      type: [String, Number],
      default: "100%"
    },
    line: {
      type: [String, Number],
      default: 1
    },
    borderRadius: {
      type: [String, Number],
      default: "4px"
    },
    preloaderClass: {
      type: [String, Array],
      default: () => ""
    },
    circle: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: "https://picsum/photos/300/300"
    }
  },
  computed: {
    shimmerStyles() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--border-radius": this.circle ? "50%" : this.borderRadius
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.loading) {
    _push(`<div class="${ssrRenderClass([$props.preloaderClass, "flex-shrink-0"])}" style="${ssrRenderStyle({
      height: $props.height,
      width: $props.width
    })}" data-v-2e31f2b4><span class="skeleton" style="${ssrRenderStyle($options.shimmerStyles)}" data-v-2e31f2b4></span></div>`);
  } else {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  }
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Skeleton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2e31f2b4"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Partners",
  __ssrInlineRender: true,
  props: {
    brand: {},
    loading: { type: Boolean, default: false },
    isGray: { type: Boolean, default: false },
    isDark: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonSkeleton = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_CommonSkeleton, mergeProps({
        width: "100%",
        height: "136px",
        "border-radius": "12px",
        loading: _ctx.loading
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<a target="_blank"${ssrRenderAttr("href", `${(_a = _ctx.brand) == null ? void 0 : _a.link}`)} class="partners-card cursor-pointer duration-300 bg-white/5 hover:bg-white/[12%] transition-300 p-0 md:p-4 rounded-xl h-[84px] w-[201px] md:h-[117px] md:w-[280px] flex justify-center items-center group border border-solid border-white/[16%]" data-v-2e8d1883${_scopeId}>`);
            if ((_b = _ctx.brand) == null ? void 0 : _b.logo) {
              _push2(`<img${ssrRenderAttr("src", (_c = _ctx.brand) == null ? void 0 : _c.logo)}${ssrRenderAttr("alt", (_d = _ctx.brand) == null ? void 0 : _d.name)} class="lg:grayscale lg:opacity-60 duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 h-full max-h-[30px] md:max-h-[40px] w-full max-w-[200px] mx-auto object-contain" data-v-2e8d1883${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</a>`);
          } else {
            return [
              createVNode("a", {
                target: "_blank",
                href: `${(_e = _ctx.brand) == null ? void 0 : _e.link}`,
                class: "partners-card cursor-pointer duration-300 bg-white/5 hover:bg-white/[12%] transition-300 p-0 md:p-4 rounded-xl h-[84px] w-[201px] md:h-[117px] md:w-[280px] flex justify-center items-center group border border-solid border-white/[16%]"
              }, [
                ((_f = _ctx.brand) == null ? void 0 : _f.logo) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: (_g = _ctx.brand) == null ? void 0 : _g.logo,
                  alt: (_h = _ctx.brand) == null ? void 0 : _h.name,
                  class: "lg:grayscale lg:opacity-60 duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 h-full max-h-[30px] md:max-h-[40px] w-full max-w-[200px] mx-auto object-contain"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
              ], 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const Partners_vue_vue_type_style_index_0_scoped_2e8d1883_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Partners.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2e8d1883"]]);
const _imports_0 = "" + __publicAssetsURL("partners-logo.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Partners",
  __ssrInlineRender: true,
  props: {
    partners: {},
    loading: { type: Boolean },
    position: {},
    isDark: { type: Boolean }
  },
  setup(__props) {
    function generateItem(arr) {
      if (arr) {
        let index2 = 0;
        let generatedArray = [];
        let checkResponseLength = arr == null ? void 0 : arr.length;
        let checkAdditionalItems = 100 - checkResponseLength;
        for (let i = 0; i <= checkAdditionalItems; i++) {
          generatedArray.push(arr[index2]);
          if (index2 + 1 === checkResponseLength) {
            index2 = 0;
          } else {
            index2++;
          }
        }
        return generatedArray;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardPartners = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "!bg-dark": _ctx.isDark }
      }, _attrs))} data-v-9fb18fef><div class="relative" data-v-9fb18fef><div class="w-16 h-16 lg:w-[100px] lg:h-[100px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full partners-shadow" data-v-9fb18fef><img class="w-full h-full"${ssrRenderAttr("src", _imports_0)} alt="Tabarruk logo" data-v-9fb18fef></div><div class="marquee" data-v-9fb18fef><div aria-hidden="true" class="${ssrRenderClass(`marquee__group_left`)}" data-v-9fb18fef><!--[-->`);
      ssrRenderList(generateItem(_ctx.partners), (item, index2) => {
        _push(ssrRenderComponent(_component_CardPartners, {
          key: index2,
          brand: item,
          loading: _ctx.loading,
          isGray: true,
          isDark: _ctx.isDark
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="marquee mt-7 md:mt-8" data-v-9fb18fef><div aria-hidden="true" class="${ssrRenderClass(`marquee__group_right`)}" data-v-9fb18fef><!--[-->`);
      ssrRenderList(generateItem(_ctx.partners), (item, index2) => {
        _push(ssrRenderComponent(_component_CardPartners, {
          key: index2,
          brand: item,
          loading: _ctx.loading,
          isGray: true,
          isDark: _ctx.isDark
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const Partners_vue_vue_type_style_index_0_scoped_9fb18fef_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider/Partners.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9fb18fef"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ReligionCard",
  __ssrInlineRender: true,
  props: {
    religion: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonPreloader = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.localePath(`/religions/${(_a = _ctx.religion) == null ? void 0 : _a.id}`),
        class: [{ "bg-white/[0.03] mr-4": _ctx.loading }, "relative block p-4 border-[1px] border-white border-opacity-20 rounded-xl ease-all duration-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.04] hover:border-opacity-[0.04] group md:p-8"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex mb-3 md:flex-col md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "60px",
              height: "60px",
              "border-radius": "8px",
              "preloader-class": "mb-6",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-14 h-14 py-3 bg-transparent border-[1px] border-white border-opacity-20 rounded-lg ease-all duration-300 group-hover:bg-[#E54545]"${_scopeId2}><img class="flex-shrink-1" alt="religion"${ssrRenderAttr("src", (_a2 = _ctx.religion) == null ? void 0 : _a2.flag)}${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-14 h-14 py-3 bg-transparent border-[1px] border-white border-opacity-20 rounded-lg ease-all duration-300 group-hover:bg-[#E54545]" }, [
                      createVNode("img", {
                        class: "flex-shrink-1",
                        alt: "religion",
                        src: (_b = _ctx.religion) == null ? void 0 : _b.flag
                      }, null, 8, ["src"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "151px",
              height: "31px",
              "border-radius": "8px",
              "preloader-class": "mb-5",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<h3 class="font-bold text-xl text-white leading-130 pl-4 md:pt-6 md:pb-5 md:pl-0 md:text-2xl"${_scopeId2}>${ssrInterpolate((_a2 = _ctx.religion) == null ? void 0 : _a2.title)}</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "font-bold text-xl text-white leading-130 pl-4 md:pt-6 md:pb-5 md:pl-0 md:text-2xl" }, toDisplayString((_b = _ctx.religion) == null ? void 0 : _b.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "100%",
              height: "63px",
              "border-radius": "8px",
              "preloader-class": "mb-6",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<p class="mb-4 font-medium text-[13px] md:text-base text-white text-opacity-60 leading-130 ease-all duration-300 group-hover:text-opacity-100 md:pb-6 line-clamp-2"${_scopeId2}>${ssrInterpolate((_a2 = _ctx.religion) == null ? void 0 : _a2.short_description)}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "mb-4 font-medium text-[13px] md:text-base text-white text-opacity-60 leading-130 ease-all duration-300 group-hover:text-opacity-100 md:pb-6 line-clamp-2" }, toDisplayString((_b = _ctx.religion) == null ? void 0 : _b.short_description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "96px",
              height: "21px",
              "border-radius": "8px",
              "preloader-class": "mb-6",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: _ctx.localePath(`/religions/${(_a2 = _ctx.religion) == null ? void 0 : _a2.id}`),
                    class: "ease-all duration-300 flex text-white group-hover:text-red"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="font-normal text-[15px] leading-130 md:text-base"${_scopeId3}>${ssrInterpolate(_ctx.$t("see_more"))}</p><span class="icon-arrow-right mt-0.5 ml-2.5"${_scopeId3}></span>`);
                      } else {
                        return [
                          createVNode("p", { class: "font-normal text-[15px] leading-130 md:text-base" }, toDisplayString(_ctx.$t("see_more")), 1),
                          createVNode("span", { class: "icon-arrow-right mt-0.5 ml-2.5" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: _ctx.localePath(`/religions/${(_b = _ctx.religion) == null ? void 0 : _b.id}`),
                      class: "ease-all duration-300 flex text-white group-hover:text-red"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "font-normal text-[15px] leading-130 md:text-base" }, toDisplayString(_ctx.$t("see_more")), 1),
                        createVNode("span", { class: "icon-arrow-right mt-0.5 ml-2.5" })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex mb-3 md:flex-col md:mb-0" }, [
                createVNode(_component_CommonPreloader, {
                  width: "60px",
                  height: "60px",
                  "border-radius": "8px",
                  "preloader-class": "mb-6",
                  loading: _ctx.loading
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode("div", { class: "flex items-center justify-center w-14 h-14 py-3 bg-transparent border-[1px] border-white border-opacity-20 rounded-lg ease-all duration-300 group-hover:bg-[#E54545]" }, [
                        createVNode("img", {
                          class: "flex-shrink-1",
                          alt: "religion",
                          src: (_a2 = _ctx.religion) == null ? void 0 : _a2.flag
                        }, null, 8, ["src"])
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["loading"]),
                createVNode(_component_CommonPreloader, {
                  width: "151px",
                  height: "31px",
                  "border-radius": "8px",
                  "preloader-class": "mb-5",
                  loading: _ctx.loading
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode("h3", { class: "font-bold text-xl text-white leading-130 pl-4 md:pt-6 md:pb-5 md:pl-0 md:text-2xl" }, toDisplayString((_a2 = _ctx.religion) == null ? void 0 : _a2.title), 1)
                    ];
                  }),
                  _: 1
                }, 8, ["loading"])
              ]),
              createVNode(_component_CommonPreloader, {
                width: "100%",
                height: "63px",
                "border-radius": "8px",
                "preloader-class": "mb-6",
                loading: _ctx.loading
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode("p", { class: "mb-4 font-medium text-[13px] md:text-base text-white text-opacity-60 leading-130 ease-all duration-300 group-hover:text-opacity-100 md:pb-6 line-clamp-2" }, toDisplayString((_a2 = _ctx.religion) == null ? void 0 : _a2.short_description), 1)
                  ];
                }),
                _: 1
              }, 8, ["loading"]),
              createVNode(_component_CommonPreloader, {
                width: "96px",
                height: "21px",
                "border-radius": "8px",
                "preloader-class": "mb-6",
                loading: _ctx.loading
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(_component_NuxtLink, {
                      to: _ctx.localePath(`/religions/${(_a2 = _ctx.religion) == null ? void 0 : _a2.id}`),
                      class: "ease-all duration-300 flex text-white group-hover:text-red"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "font-normal text-[15px] leading-130 md:text-base" }, toDisplayString(_ctx.$t("see_more")), 1),
                        createVNode("span", { class: "icon-arrow-right mt-0.5 ml-2.5" })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/ReligionCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SmallNewsCard",
  __ssrInlineRender: true,
  props: {
    news: {},
    short: { type: Boolean },
    loading: { type: Boolean }
  },
  setup(__props) {
    const { locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonPreloader = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.localePath(`/news/${(_a = _ctx.news) == null ? void 0 : _a.slug}`),
        class: "flex lg:p-3 p-2 border-[1px] border-white border-opacity-20 rounded-xl bg-[#07091C] ease-all duration-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.04] hover:border-opacity-[0.04]"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: _ctx.short ? "122px" : "268px",
              height: _ctx.short ? "120px" : "268px",
              "border-radius": "8px",
              class: "!flex-shrink-0",
              "preloader-class": "inline-flex",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d;
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", (_a2 = _ctx.news) == null ? void 0 : _a2.image)}${ssrRenderAttr("alt", (_b = _ctx.news) == null ? void 0 : _b.title)} class="${ssrRenderClass([[
                    _ctx.short ? "!w-[122px] !h-[128px]" : "!w-[122px] !h-[128px] lg:!w-[268px] lg:!h-[290px]"
                  ], "rounded-lg flex-shrink-0 object-cover"])}"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: (_c = _ctx.news) == null ? void 0 : _c.image,
                      alt: (_d = _ctx.news) == null ? void 0 : _d.title,
                      class: ["rounded-lg flex-shrink-0 object-cover", [
                        _ctx.short ? "!w-[122px] !h-[128px]" : "!w-[122px] !h-[128px] lg:!w-[268px] lg:!h-[290px]"
                      ]]
                    }, null, 10, ["src", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col justify-between pl-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "100px",
              height: "24px",
              "border-radius": "8px",
              "preloader-class": "mb-2",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<h4 class="${ssrRenderClass([[_ctx.short ? "text-lg" : "text-lg lg:text-2xl"], "mb-4 text-white font-semibold leading-130 text-base !line-clamp-2"])}"${_scopeId2}>${ssrInterpolate((_a2 = _ctx.news) == null ? void 0 : _a2.title)}</h4>`);
                } else {
                  return [
                    createVNode("h4", {
                      class: ["mb-4 text-white font-semibold leading-130 text-base !line-clamp-2", [_ctx.short ? "text-lg" : "text-lg lg:text-2xl"]]
                    }, toDisplayString((_b = _ctx.news) == null ? void 0 : _b.title), 3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "200px",
              height: "24px",
              "border-radius": "8px",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  if (!!_ctx.short) {
                    _push3(`<div class="news-text text-white text-base leading-130 font-medium !line-clamp-2"${_scopeId2}>${(_a2 = _ctx.news) == null ? void 0 : _a2.short_description}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!_ctx.short ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "news-text text-white text-base leading-130 font-medium !line-clamp-2",
                      innerHTML: (_b = _ctx.news) == null ? void 0 : _b.short_description
                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "200px",
              height: "24px",
              "border-radius": "8px",
              loading: _ctx.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<p class="font-normal text-[13px] leading-130 text-white text-opacity-60 b-0 md:text-base"${_scopeId2}>${ssrInterpolate(unref(dayjs)((_a2 = _ctx.news) == null ? void 0 : _a2.published_at).locale(unref(locale)).format("MMMM DD YYYY"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-normal text-[13px] leading-130 text-white text-opacity-60 b-0 md:text-base" }, toDisplayString(unref(dayjs)((_b = _ctx.news) == null ? void 0 : _b.published_at).locale(unref(locale)).format("MMMM DD YYYY")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_CommonPreloader, {
                width: _ctx.short ? "122px" : "268px",
                height: _ctx.short ? "120px" : "268px",
                "border-radius": "8px",
                class: "!flex-shrink-0",
                "preloader-class": "inline-flex",
                loading: _ctx.loading
              }, {
                default: withCtx(() => {
                  var _a2, _b;
                  return [
                    createVNode("img", {
                      src: (_a2 = _ctx.news) == null ? void 0 : _a2.image,
                      alt: (_b = _ctx.news) == null ? void 0 : _b.title,
                      class: ["rounded-lg flex-shrink-0 object-cover", [
                        _ctx.short ? "!w-[122px] !h-[128px]" : "!w-[122px] !h-[128px] lg:!w-[268px] lg:!h-[290px]"
                      ]]
                    }, null, 10, ["src", "alt"])
                  ];
                }),
                _: 1
              }, 8, ["width", "height", "loading"]),
              createVNode("div", { class: "flex flex-col justify-between pl-4" }, [
                createVNode("div", null, [
                  createVNode(_component_CommonPreloader, {
                    width: "100px",
                    height: "24px",
                    "border-radius": "8px",
                    "preloader-class": "mb-2",
                    loading: _ctx.loading
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode("h4", {
                          class: ["mb-4 text-white font-semibold leading-130 text-base !line-clamp-2", [_ctx.short ? "text-lg" : "text-lg lg:text-2xl"]]
                        }, toDisplayString((_a2 = _ctx.news) == null ? void 0 : _a2.title), 3)
                      ];
                    }),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(_component_CommonPreloader, {
                    width: "200px",
                    height: "24px",
                    "border-radius": "8px",
                    loading: _ctx.loading
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        !!_ctx.short ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "news-text text-white text-base leading-130 font-medium !line-clamp-2",
                          innerHTML: (_a2 = _ctx.news) == null ? void 0 : _a2.short_description
                        }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                      ];
                    }),
                    _: 1
                  }, 8, ["loading"])
                ]),
                createVNode(_component_CommonPreloader, {
                  width: "200px",
                  height: "24px",
                  "border-radius": "8px",
                  loading: _ctx.loading
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode("p", { class: "font-normal text-[13px] leading-130 text-white text-opacity-60 b-0 md:text-base" }, toDisplayString(unref(dayjs)((_a2 = _ctx.news) == null ? void 0 : _a2.published_at).locale(unref(locale)).format("MMMM DD YYYY")), 1)
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
const SmallNewsCard_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/SmallNewsCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const index_vue_vue_type_style_index_0_scoped_a63b54ad_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const destinationStore = useDestinationStore();
    const mainStore = useMainStore();
    const newsStore = useNewsStore();
    const aboutStore = useAboutStore();
    const loading = ref(false);
    const destinations = computed(() => destinationStore.destinations);
    const partners = computed(() => mainStore.partners);
    const newsList = computed(() => newsStore.newsList);
    const instagramPosts = computed(() => mainStore.instagramPosts);
    const aboutData = computed(() => aboutStore.aboutData);
    const statistics = computed(() => aboutStore == null ? void 0 : aboutStore.statistics);
    const mainData = computed(() => mainStore.mainData);
    const religionList = computed(() => destinationStore.religionList);
    const countryList = computed(() => destinationStore.countryList);
    async function fetchData() {
      loading.value = true;
      return await Promise.all([
        mainStore.fetchMainData(),
        mainStore.fetchPartners(),
        aboutStore.fetchStatistics(),
        mainStore.fetchInstagramPost(),
        destinationStore.fetchPopularDestination(),
        destinationStore.fetchReligionList(),
        destinationStore.fetchDestinations("", void 0, void 0),
        aboutStore.fetchAboutData(),
        newsStore.fetchNewsList(1, 3)
      ]);
    }
    fetchData().finally(() => {
      loading.value = false;
    });
    watch(
      () => statistics,
      (value) => {
        var _a, _b, _c, _d;
        statisticsData.value[0].count = (_a = value.value) == null ? void 0 : _a.attractions_count;
        statisticsData.value[1].count = (_b = value.value) == null ? void 0 : _b.destinations_count;
        statisticsData.value[2].count = (_c = value.value) == null ? void 0 : _c.countries_count;
        statisticsData.value[3].count = (_d = value.value) == null ? void 0 : _d.religions_count;
      },
      { deep: true }
    );
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BannerSlider = _sfc_main$9;
      const _component_SliderLocations = _sfc_main$7;
      const _component_SectionHomeAboutUs = __nuxt_component_2;
      const _component_SectionWrapper = __nuxt_component_5;
      const _component_CommonPreloader = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_SliderInstagramPosts = _sfc_main$c;
      const _component_CardInstagramShare = __nuxt_component_7;
      const _component_CardSubscribe = __nuxt_component_8;
      const _component_SliderPartners = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-dark text-white" }, _attrs))} data-v-a63b54ad>`);
      _push(ssrRenderComponent(_component_BannerSlider, {
        images: mainData.value[0],
        loading: loading.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_SliderLocations, {
        locations: destinations.value,
        loading: loading.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionHomeAboutUs, {
        about: aboutData.value,
        statistics: statisticsData.value,
        loading: loading.value,
        id: "about"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionWrapper, {
        class: "z-50 relative",
        id: "country",
        centered: "",
        title: _ctx.$t("how_many_countries_title"),
        subtitle: _ctx.$t("how_many_countries_subtitle")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap justify-center space-bottom-4" data-v-a63b54ad${_scopeId}><!--[-->`);
            ssrRenderList(loading.value ? 3 : countryList.value, (country, i) => {
              _push2(`<div class="mt-10" data-v-a63b54ad${_scopeId}>`);
              _push2(ssrRenderComponent(__nuxt_component_6, {
                country: !loading.value ? country : void 0,
                loading: loading.value
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap justify-center space-bottom-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(loading.value ? 3 : countryList.value, (country, i) => {
                  return openBlock(), createBlock("div", {
                    key: i,
                    class: "mt-10"
                  }, [
                    createVNode(__nuxt_component_6, {
                      country: !loading.value ? country : void 0,
                      loading: loading.value
                    }, null, 8, ["country", "loading"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative custom-bg-img" data-v-a63b54ad>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        id: "religion",
        centered: "",
        title: _ctx.$t("religions"),
        subtitle: _ctx.$t("religions_subtitle")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid lg:grid-cols-3 gap-3 lg:gap-6 space-bottom-4 mt-10 md:grid-cols-2" data-v-a63b54ad${_scopeId}><!--[-->`);
            ssrRenderList(loading.value ? 3 : religionList.value, (religion, index2) => {
              _push2(`<div data-v-a63b54ad${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                religion,
                loading: loading.value
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid lg:grid-cols-3 gap-3 lg:gap-6 space-bottom-4 mt-10 md:grid-cols-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(loading.value ? 3 : religionList.value, (religion, index2) => {
                  return openBlock(), createBlock("div", { key: index2 }, [
                    createVNode(_sfc_main$2, {
                      religion,
                      loading: loading.value
                    }, null, 8, ["religion", "loading"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SectionWrapper, {
        centered: "",
        title: _ctx.$t("news"),
        subtitle: _ctx.$t("news_subtitle")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-x-6 mt-10" data-v-a63b54ad${_scopeId}><div class="lg:col-span-7 col-span-12 mb-2.5 lg:mb-0" data-v-a63b54ad${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              news: loading.value ? 1 : newsList.value[0],
              loading: loading.value,
              class: "h-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-y-2.5 lg:col-span-5 col-span-12" data-v-a63b54ad${_scopeId}><!--[-->`);
            ssrRenderList(loading.value ? 2 : newsList.value.slice(1), (news) => {
              _push2(`<div data-v-a63b54ad${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                news,
                short: "",
                loading: loading.value
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "148px",
              height: "48px",
              "border-radius": "8px",
              "preloader-class": "mt-2 ml-auto",
              loading: loading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: _ctx.localePath("/news")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$a, { class: "!px-8 !py-3 !ml-auto mt-4 ease-all duration-300 s-button-secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("all_news"))} <span class="icon-arrow-right pl-1 text-2xl" data-v-a63b54ad${_scopeId4}></span>`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("all_news")) + " ", 1),
                                createVNode("span", { class: "icon-arrow-right pl-1 text-2xl" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$a, { class: "!px-8 !py-3 !ml-auto mt-4 ease-all duration-300 s-button-secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("all_news")) + " ", 1),
                              createVNode("span", { class: "icon-arrow-right pl-1 text-2xl" })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: _ctx.localePath("/news")
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$a, { class: "!px-8 !py-3 !ml-auto mt-4 ease-all duration-300 s-button-secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("all_news")) + " ", 1),
                            createVNode("span", { class: "icon-arrow-right pl-1 text-2xl" })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-x-6 mt-10" }, [
                createVNode("div", { class: "lg:col-span-7 col-span-12 mb-2.5 lg:mb-0" }, [
                  createVNode(_sfc_main$1, {
                    news: loading.value ? 1 : newsList.value[0],
                    loading: loading.value,
                    class: "h-full"
                  }, null, 8, ["news", "loading"])
                ]),
                createVNode("div", { class: "grid gap-y-2.5 lg:col-span-5 col-span-12" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(loading.value ? 2 : newsList.value.slice(1), (news) => {
                    return openBlock(), createBlock("div", {
                      key: news.id
                    }, [
                      createVNode(_sfc_main$1, {
                        news,
                        short: "",
                        loading: loading.value
                      }, null, 8, ["news", "loading"])
                    ]);
                  }), 128))
                ])
              ]),
              createVNode(_component_CommonPreloader, {
                width: "148px",
                height: "48px",
                "border-radius": "8px",
                "preloader-class": "mt-2 ml-auto",
                loading: loading.value
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: _ctx.localePath("/news")
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$a, { class: "!px-8 !py-3 !ml-auto mt-4 ease-all duration-300 s-button-secondary" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("all_news")) + " ", 1),
                          createVNode("span", { class: "icon-arrow-right pl-1 text-2xl" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-11 pb-16" data-v-a63b54ad>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        centered: "",
        title: _ctx.$t("instagram_title"),
        subtitle: _ctx.$t("instagram_subtitle"),
        class: "!pb-0"
      }, null, _parent));
      _push(`<div class="posts-wrapper relative w-full z-10 px-4 lg:px-0" data-v-a63b54ad>`);
      _push(ssrRenderComponent(_component_SliderInstagramPosts, {
        posts: instagramPosts.value,
        loading: loading.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_CardInstagramShare, { loading: loading.value }, null, _parent));
      _push(ssrRenderComponent(_component_CardSubscribe, null, null, _parent));
      _push(`</div></div><div class="space-y-11 pb-16" data-v-a63b54ad>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        centered: "",
        title: _ctx.$t("partners_title"),
        subtitle: _ctx.$t("partners_subtitle"),
        class: "!pb-0"
      }, null, _parent));
      if (!loading.value) {
        _push(ssrRenderComponent(_component_SliderPartners, {
          partners: partners.value,
          "is-dark": ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a63b54ad"]]);
export {
  index as default
};
//# sourceMappingURL=index-d673f862.js.map
