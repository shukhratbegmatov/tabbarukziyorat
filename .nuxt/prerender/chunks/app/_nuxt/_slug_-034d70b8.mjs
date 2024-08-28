import { _ as __nuxt_component_0 } from './Single-987bf550.mjs';
import { _ as __nuxt_component_0$1 } from './Preloader-bddb5d1e.mjs';
import { b as useI18n, u as useRoute, _ as __nuxt_component_1 } from '../server.mjs';
import { _ as _sfc_main$3 } from './ReligionBadge-6fb900e7.mjs';
import { _ as _sfc_main$4 } from './InfoCard-ef58c1a7.mjs';
import { _ as __nuxt_component_5 } from './Wrapper-ba6738ca.mjs';
import { _ as __nuxt_component_6 } from './CountryCard-ba7b0e33.mjs';
import { _ as _sfc_main$2 } from './Attractions-171c95f6.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, computed } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { C as CollapseTransition } from './CollapseTransition-fb7ca217.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { u as useSeoMeta } from './composables-ffbf1183.mjs';
import { c as calculateNumberWithShortcuts, $ as $api } from './useFetcher-bfa391cb.mjs';
import '../../renderer.mjs';
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
import './Breadcrumb-90707320.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/vue/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/dom/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/cookie-es/dist/index.mjs';
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
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@vueuse/components/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionWrapper",
  __ssrInlineRender: true,
  props: {
    card: {}
  },
  setup(__props) {
    useI18n();
    const show = ref(false);
    function countParser(key, count) {
      var _a, _b;
      const keysArr = key.split("|");
      if (count === 0) {
        return keysArr[2];
      } else if (count === 1) {
        return keysArr[0];
      } else {
        console.log("full", (_a = keysArr[1]) == null ? void 0 : _a.replace("{n}", count));
        return (_b = keysArr[1]) == null ? void 0 : _b.replace("{n}", count);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_CardAttractions = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cb69d826><div class="container mx-auto px-4 sm:px-6 lg:px-8" data-v-cb69d826><div data-v-cb69d826><p class="text-white text-[28px] leading-130 font-bold card-title-shadow font-playfair" data-v-cb69d826>${ssrInterpolate((_a = _ctx.card) == null ? void 0 : _a.title)}</p><p class="text-white/60 card-title-shadow text-sm leading-130 font-semibold mt-2" data-v-cb69d826>${ssrInterpolate(countParser(
        _ctx.$t("destination_count", (_c = (_b = _ctx.card) == null ? void 0 : _b.destinations) == null ? void 0 : _c.length),
        (_e = (_d = _ctx.card) == null ? void 0 : _d.destinations) == null ? void 0 : _e.length
      ))}</p></div><div class="w-full mt-4" data-v-cb69d826><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6" data-v-cb69d826><!--[-->`);
      ssrRenderList((_f = _ctx.card) == null ? void 0 : _f.destinations.slice(0, 6), (item, i) => {
        _push(ssrRenderComponent(_component_CardAttractions, mergeProps({ item }, { key: i }), null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(CollapseTransition, { duration: 400 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j;
          if (_push2) {
            if (unref(show)) {
              _push2(`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 pt-6" data-v-cb69d826${_scopeId}><!--[-->`);
              ssrRenderList((_a2 = _ctx.card) == null ? void 0 : _a2.destinations.slice(6), (item, i) => {
                _push2(ssrRenderComponent(_component_CardAttractions, mergeProps({ item }, {
                  key: i,
                  class: "!w-full !h-[200px]"
                }), null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (((_b2 = _ctx.card) == null ? void 0 : _b2.destinations_count) > ((_d2 = (_c2 = _ctx.card) == null ? void 0 : _c2.destinations) == null ? void 0 : _d2.length)) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: _ctx.localePath(`/attractions/${(_e2 = _ctx.card) == null ? void 0 : _e2.id}`),
                  class: "!w-[178px] !h-[200px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="w-full h-full border border-solid border-white/[24%] rounded-xl flex-center group relative overflow-hidden" data-v-cb69d826${_scopeId2}><div data-v-cb69d826${_scopeId2}><p class="text-white text-base leading-130 font-semibold group-hover:tracking-[1px] transition-300 text-center" data-v-cb69d826${_scopeId2}>${ssrInterpolate(_ctx.$t("all_attractions"))}</p><div class="w-full flex-center mt-2" data-v-cb69d826${_scopeId2}><i class="icon-arrow-right text-white text-[28px]" data-v-cb69d826${_scopeId2}></i></div></div><i class="icon-mosque absolute text-white/[7%] bottom-0 right-0 text-[110px]" data-v-cb69d826${_scopeId2}></i></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "w-full h-full border border-solid border-white/[24%] rounded-xl flex-center group relative overflow-hidden" }, [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-white text-base leading-130 font-semibold group-hover:tracking-[1px] transition-300 text-center" }, toDisplayString(_ctx.$t("all_attractions")), 1),
                            createVNode("div", { class: "w-full flex-center mt-2" }, [
                              createVNode("i", { class: "icon-arrow-right text-white text-[28px]" })
                            ])
                          ]),
                          createVNode("i", { class: "icon-mosque absolute text-white/[7%] bottom-0 right-0 text-[110px]" })
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(show) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 pt-6"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_f2 = _ctx.card) == null ? void 0 : _f2.destinations.slice(6), (item, i) => {
                  return openBlock(), createBlock(_component_CardAttractions, mergeProps({ item }, {
                    key: i,
                    class: "!w-full !h-[200px]"
                  }), null, 16);
                }), 128)),
                ((_g2 = _ctx.card) == null ? void 0 : _g2.destinations_count) > ((_i = (_h2 = _ctx.card) == null ? void 0 : _h2.destinations) == null ? void 0 : _i.length) ? (openBlock(), createBlock(_component_NuxtLink, {
                  key: 0,
                  to: _ctx.localePath(`/attractions/${(_j = _ctx.card) == null ? void 0 : _j.id}`),
                  class: "!w-[178px] !h-[200px]"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full h-full border border-solid border-white/[24%] rounded-xl flex-center group relative overflow-hidden" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-white text-base leading-130 font-semibold group-hover:tracking-[1px] transition-300 text-center" }, toDisplayString(_ctx.$t("all_attractions")), 1),
                        createVNode("div", { class: "w-full flex-center mt-2" }, [
                          createVNode("i", { class: "icon-arrow-right text-white text-[28px]" })
                        ])
                      ]),
                      createVNode("i", { class: "icon-mosque absolute text-white/[7%] bottom-0 right-0 text-[110px]" })
                    ])
                  ]),
                  _: 1
                }, 8, ["to"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (((_h = (_g = _ctx.card) == null ? void 0 : _g.destinations) == null ? void 0 : _h.length) > 6) {
        _push(`<div class="flex-center w-full mt-6" data-v-cb69d826><button class="px-4 py-2 rounded-xl leading-130 text-xl text-white font-semibold bg-white/10 border border-solid border-white/10 transition-300 hover:bg-white/30 active:scale-95" data-v-cb69d826>`);
        if (!unref(show)) {
          _push(`<span data-v-cb69d826>${ssrInterpolate(_ctx.$t("more"))}</span>`);
        } else {
          _push(`<span data-v-cb69d826>${ssrInterpolate(_ctx.$t("less"))}</span>`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Religion/SectionWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cb69d826"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d;
    const { t } = useI18n();
    const route = useRoute();
    const single = ref({});
    const loading = ref(true);
    const list = ref([]);
    const countryList = ref([]);
    function getReligionList() {
      $api.$get(`/destination/ReligionList`).then((res) => {
        list.value = res == null ? void 0 : res.results;
      });
    }
    function getSingle() {
      $api.$get(`/destination/ReligionDetail/${route.params.slug}`).then((res) => {
        single.value = res;
      });
    }
    function getCountryList() {
      $api.$get(
        `/destination/CountryListWithDestinations/${route.params.slug}?limit=20`
      ).then((res) => {
        countryList.value = res;
      });
    }
    const fetchData = async () => {
      await getSingle();
      await getReligionList();
      await getCountryList();
    };
    fetchData().finally(() => {
      loading.value = false;
    });
    const aboutData = computed(() => {
      var _a2, _b2, _c2, _d2;
      return [
        {
          title: t("attractions"),
          count: calculateNumberWithShortcuts(
            String((_a2 = single.value) == null ? void 0 : _a2.attractions_count)
          ),
          icon: "/svg/moscue.svg"
        },
        {
          title: t("countries"),
          count: calculateNumberWithShortcuts(String((_b2 = single.value) == null ? void 0 : _b2.countries_count)),
          icon: "/svg/flag.svg"
        },
        {
          title: t("population_single", { name: (_c2 = single.value) == null ? void 0 : _c2.type }),
          count: calculateNumberWithShortcuts(String((_d2 = single.value) == null ? void 0 : _d2.population)),
          icon: "/svg/population.svg"
        }
      ];
    });
    const breadcrumb = computed(() => {
      var _a2;
      return [
        {
          title: "Religions",
          link: "/"
        },
        {
          title: (_a2 = single == null ? void 0 : single.value) == null ? void 0 : _a2.type,
          link: "/religions/islam"
        }
      ];
    });
    useSeoMeta({
      title: (_a = single == null ? void 0 : single.value) == null ? void 0 : _a.name,
      description: (_b = single == null ? void 0 : single.value) == null ? void 0 : _b.short_description,
      ogDescription: (_c = single.value) == null ? void 0 : _c.short_description,
      ogImage: (_d = single == null ? void 0 : single.value) == null ? void 0 : _d.image
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e;
      const _component_BannerSingle = __nuxt_component_0;
      const _component_CommonPreloader = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonReligionBadge = _sfc_main$3;
      const _component_CardInfoCard = _sfc_main$4;
      const _component_SectionWrapper = __nuxt_component_5;
      const _component_CardCountryCard = __nuxt_component_6;
      const _component_ReligionSectionWrapper = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-16" }, _attrs))} data-v-d0590950>`);
      _push(ssrRenderComponent(_component_BannerSingle, mergeProps({
        loading: loading.value,
        "has-breadcrumb": "",
        title: (_a2 = single.value) == null ? void 0 : _a2.name
      }, { text: (_b2 = single.value) == null ? void 0 : _b2.short_description, breadcrumb: breadcrumb.value }, {
        image: (_c2 = single.value) == null ? void 0 : _c2.image,
        isReligion: true,
        key: (_d2 = single.value) == null ? void 0 : _d2.image
      }), {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-9" data-v-d0590950${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "50px",
              height: "50px",
              "border-radius": "4px",
              loading: loading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3;
                if (_push3) {
                  _push3(`<div class="w-[50px] h-[50px]" data-v-d0590950${_scopeId2}><img${ssrRenderAttr("src", (_a3 = single.value) == null ? void 0 : _a3.flag)} alt="religion flag" class="w-full h-full" data-v-d0590950${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-[50px] h-[50px]" }, [
                      createVNode("img", {
                        src: (_b3 = single.value) == null ? void 0 : _b3.flag,
                        alt: "religion flag",
                        class: "w-full h-full"
                      }, null, 8, ["src"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-9" }, [
                createVNode(_component_CommonPreloader, {
                  width: "50px",
                  height: "50px",
                  "border-radius": "4px",
                  loading: loading.value
                }, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      createVNode("div", { class: "w-[50px] h-[50px]" }, [
                        createVNode("img", {
                          src: (_a3 = single.value) == null ? void 0 : _a3.flag,
                          alt: "religion flag",
                          class: "w-full h-full"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        additional: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute top-[20%] lg:top-auto left-0 p-4 border border-solid border-white/10 border-l-[0] bg-white/[4%] rounded-r-xl additional-blur-religious-single z-50 flex flex-col gap-2.5" data-v-d0590950${_scopeId}><!--[-->`);
            ssrRenderList(list.value, (item, index) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: index,
                to: _ctx.localePath(`/religions/${item == null ? void 0 : item.id}`)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-lg flex-center border border-solid border-white/10 cursor-pointer hover:bg-red transition-300 religious-single-card" data-v-d0590950${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_CommonReligionBadge, {
                      type: item == null ? void 0 : item.type
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-lg flex-center border border-solid border-white/10 cursor-pointer hover:bg-red transition-300 religious-single-card" }, [
                        createVNode(_component_CommonReligionBadge, {
                          type: item == null ? void 0 : item.type
                        }, null, 8, ["type"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute top-[20%] lg:top-auto left-0 p-4 border border-solid border-white/10 border-l-[0] bg-white/[4%] rounded-r-xl additional-blur-religious-single z-50 flex flex-col gap-2.5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, index) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    key: index,
                    to: _ctx.localePath(`/religions/${item == null ? void 0 : item.id}`)
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-lg flex-center border border-solid border-white/10 cursor-pointer hover:bg-red transition-300 religious-single-card" }, [
                        createVNode(_component_CommonReligionBadge, {
                          type: item == null ? void 0 : item.type
                        }, null, 8, ["type"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative -mt-20 w-full !z-30" data-v-d0590950><div class="container items-center grid md:grid-cols-3 gap-6" data-v-d0590950><!--[-->`);
      ssrRenderList(aboutData.value, (about, i) => {
        _push(ssrRenderComponent(_component_CardInfoCard, {
          loading: loading.value,
          key: i,
          icon: about == null ? void 0 : about.icon,
          title: about == null ? void 0 : about.title,
          count: about == null ? void 0 : about.count,
          class: "!bg-white/10"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if ((_e = countryList.value) == null ? void 0 : _e.length) {
        _push(`<div class="container pb-11" data-v-d0590950>`);
        _push(ssrRenderComponent(_component_SectionWrapper, {
          centered: "",
          title: _ctx.$t("countries")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap justify-center mt-6 gap-y-6 gap-[30px]" data-v-d0590950${_scopeId}><!--[-->`);
              ssrRenderList(countryList.value, (obj) => {
                _push2(`<div class="!min-w-[144px]" data-v-d0590950${_scopeId}>`);
                _push2(ssrRenderComponent(_component_CardCountryCard, { country: obj }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap justify-center mt-6 gap-y-6 gap-[30px]" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(countryList.value, (obj) => {
                    return openBlock(), createBlock("div", {
                      key: obj.destinations,
                      class: "!min-w-[144px]"
                    }, [
                      createVNode(_component_CardCountryCard, { country: obj }, null, 8, ["country"])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (countryList.value.length) {
          _push(`<div class="relative flex-center" data-v-d0590950><div class="flex flex-col gap-10" data-v-d0590950><!--[-->`);
          ssrRenderList(countryList.value, (card, index) => {
            _push(ssrRenderComponent(_component_ReligionSectionWrapper, mergeProps({ key: index }, { card }), null, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/religions/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d0590950"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-034d70b8.mjs.map
