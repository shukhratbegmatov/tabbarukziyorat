import { _ as _sfc_main$3 } from './Breadcrumb-90707320.mjs';
import { u as useRoute, b as useI18n, _ as __nuxt_component_1$1, g as useRouter } from '../server.mjs';
import { _ as __nuxt_component_0 } from './Preloader-bddb5d1e.mjs';
import { useSSRContext, defineComponent, computed, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, ref, isRef, openBlock, createBlock } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import dayjs from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/dayjs/dayjs.min.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { VueAwesomePaginate } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-awesome-paginate/dist/index.js';
import { u as useSeoMeta } from './composables-ffbf1183.mjs';
import { u as useNewsStore } from './news-51b7420e.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/vue/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/dom/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/is-https/dist/index.mjs';
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
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/pathe/dist/index.mjs';
import './useFetcher-bfa391cb.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "News",
  __ssrInlineRender: true,
  props: {
    item: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_CommonPreloader = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.localePath(`/news/${(_a = _ctx.item) == null ? void 0 : _a.slug}`),
        class: ["w-full p-3 pb-4 bg-dark-100 rounded-xl group transition-300", { "pointer-events-none": _ctx.loading }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="aspect-video w-full rounded-xl overflow-hidden" data-v-359dbfad${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
              width: "100%",
              height: "100%"
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d;
                if (_push3) {
                  _push3(`<img class="w-full h-full object-cover"${ssrRenderAttr("src", (_a2 = _ctx.item) == null ? void 0 : _a2.image)}${ssrRenderAttr("alt", (_b = _ctx.item) == null ? void 0 : _b.title)} data-v-359dbfad${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full h-full object-cover",
                      src: (_c = _ctx.item) == null ? void 0 : _c.image,
                      alt: (_d = _ctx.item) == null ? void 0 : _d.title
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="my-3" data-v-359dbfad${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, mergeProps({
              height: "42px",
              width: "100%",
              margin: "0 0 8px 0"
            }, { loading: _ctx.loading }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<h2 class="font-semibold leading-130 text-base text-white line-clamp-2 mb-2 transition-300 group-hover:text-red-100" data-v-359dbfad${_scopeId2}>${ssrInterpolate((_a2 = _ctx.item) == null ? void 0 : _a2.title)}</h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "font-semibold leading-130 text-base text-white line-clamp-2 mb-2 transition-300 group-hover:text-red-100" }, toDisplayString((_b = _ctx.item) == null ? void 0 : _b.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, mergeProps({
              height: "36px",
              width: "100%"
            }, { loading: _ctx.loading }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<div data-v-359dbfad${_scopeId2}></div><p class="text-gray text-sm leading-130 line-clamp-2" data-v-359dbfad${_scopeId2}>${(_a2 = _ctx.item) == null ? void 0 : _a2.short_description}</p>`);
                } else {
                  return [
                    createVNode("div"),
                    createVNode("p", {
                      class: "text-gray text-sm leading-130 line-clamp-2",
                      innerHTML: (_b = _ctx.item) == null ? void 0 : _b.short_description
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-center-between" data-v-359dbfad${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, mergeProps({
              height: "18px",
              width: "70px"
            }, { loading: _ctx.loading }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<p class="font-medium text-sm leading-130 text-white" data-v-359dbfad${_scopeId2}>${ssrInterpolate(unref(dayjs)((_a2 = _ctx.item) == null ? void 0 : _a2.published_at).format("DD.MM.YYYY"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-medium text-sm leading-130 text-white" }, toDisplayString(unref(dayjs)((_b = _ctx.item) == null ? void 0 : _b.published_at).format("DD.MM.YYYY")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<i class="icon-arrow-right text-xl leading-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-300 text-red-100" data-v-359dbfad${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "aspect-video w-full rounded-xl overflow-hidden" }, [
                createVNode(_component_CommonPreloader, mergeProps({ loading: _ctx.loading }, {
                  width: "100%",
                  height: "100%"
                }), {
                  default: withCtx(() => {
                    var _a2, _b;
                    return [
                      createVNode("img", {
                        class: "w-full h-full object-cover",
                        src: (_a2 = _ctx.item) == null ? void 0 : _a2.image,
                        alt: (_b = _ctx.item) == null ? void 0 : _b.title
                      }, null, 8, ["src", "alt"])
                    ];
                  }),
                  _: 1
                }, 16)
              ]),
              createVNode("div", { class: "my-3" }, [
                createVNode(_component_CommonPreloader, mergeProps({
                  height: "42px",
                  width: "100%",
                  margin: "0 0 8px 0"
                }, { loading: _ctx.loading }), {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode("h2", { class: "font-semibold leading-130 text-base text-white line-clamp-2 mb-2 transition-300 group-hover:text-red-100" }, toDisplayString((_a2 = _ctx.item) == null ? void 0 : _a2.title), 1)
                    ];
                  }),
                  _: 1
                }, 16),
                createVNode(_component_CommonPreloader, mergeProps({
                  height: "36px",
                  width: "100%"
                }, { loading: _ctx.loading }), {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode("div"),
                      createVNode("p", {
                        class: "text-gray text-sm leading-130 line-clamp-2",
                        innerHTML: (_a2 = _ctx.item) == null ? void 0 : _a2.short_description
                      }, null, 8, ["innerHTML"])
                    ];
                  }),
                  _: 1
                }, 16)
              ]),
              createVNode("div", { class: "flex-center-between" }, [
                createVNode(_component_CommonPreloader, mergeProps({
                  height: "18px",
                  width: "70px"
                }, { loading: _ctx.loading }), {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode("p", { class: "font-medium text-sm leading-130 text-white" }, toDisplayString(unref(dayjs)((_a2 = _ctx.item) == null ? void 0 : _a2.published_at).format("DD.MM.YYYY")), 1)
                    ];
                  }),
                  _: 1
                }, 16),
                createVNode("i", { class: "icon-arrow-right text-xl leading-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-300 text-red-100" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/News.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-359dbfad"]]);
function useUpdateRouteQuery(key, value) {
  const router = useRouter();
  const routeQuery = { ...router.currentRoute.value.query };
  if (!value) {
    delete routeQuery[key];
  } else {
    routeQuery[key] = value;
  }
  router.replace({ query: routeQuery });
  function clearRouteQuery(params) {
    if (params == null ? void 0 : params.length) {
      for (const i in params) {
        delete routeQuery[params[i]];
      }
      router.replace({ query: routeQuery });
    } else {
      router.replace({ query: {} });
    }
  }
  return { clearRouteQuery };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    total: { default: 24 },
    perPage: { default: 12 },
    maxPageShow: { default: 3 }
  },
  emits: ["handle-page"],
  setup(__props, { emit: __emit }) {
    var _a;
    const route = useRoute();
    const emit = __emit;
    function onClickHandler(page) {
      useUpdateRouteQuery("page", page);
      setTimeout(() => {
        emit("handle-page", page);
      }, 0);
    }
    const currentPage = ref(+((_a = route.query) == null ? void 0 : _a.page) || 1);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.total > _ctx.perPage) {
        _push(ssrRenderComponent(unref(VueAwesomePaginate), mergeProps({
          modelValue: unref(currentPage),
          "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
          "active-page-class": "btn-active",
          "disabled-back-button-class": "dd",
          "total-items": _ctx.total,
          "items-per-page": _ctx.perPage,
          "max-pages-shown": _ctx.maxPageShow,
          "back-button-class": `${unref(currentPage) === 1 ? "disable" : ""} back-button`,
          "next-button-class": `${unref(currentPage) === Math.ceil(_ctx.total / _ctx.perPage) ? "disable" : ""} next-button`,
          onClick: onClickHandler
        }, _attrs), {
          "prev-button": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.5 5L7.5 10L12.5 15" stroke="#969696" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M12.5 5L7.5 10L12.5 15",
                    stroke: "#969696",
                    "stroke-width": "1.8",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          "next-button": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M7.5 5L12.5 10L7.5 15" stroke="#969696" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M7.5 5L12.5 10L7.5 15",
                    stroke: "#969696",
                    "stroke-width": "1.8",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const newsStore = useNewsStore();
    const { t } = useI18n();
    const offset = computed(() => {
      const page = Number(route.query.page) || 1;
      return (page - 1) * 12;
    });
    const loading = computed(() => newsStore.newsLoading);
    const newsList = computed(() => newsStore.newsList);
    const total = computed(() => newsStore.newsCount);
    const fetchNews = () => {
      newsStore.fetchNewsList(offset.value);
    };
    watch(
      () => route.query.page,
      () => {
        fetchNews();
      },
      { immediate: true }
    );
    useSeoMeta({
      title: t("news")
    });
    const menu = [
      {
        title: "News",
        link: "/news"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBreadcrumb = _sfc_main$3;
      const _component_CardNews = __nuxt_component_1;
      const _component_CommonPagination = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-239px)]" }, _attrs))}><div class="pt-20 md:pt-[120px]">`);
      _push(ssrRenderComponent(_component_CommonBreadcrumb, mergeProps({ menu }, { class: "container px-0" }), null, _parent));
      _push(`<div class="container pt-5 md:pt-9 pb-5 md:pb-8"><h1 class="font-bold leading-130 text-3xl md:text-40 text-white mb-3 md:mb-6 font-playfair">${ssrInterpolate(_ctx.$t("news"))}</h1><div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"><!--[-->`);
      ssrRenderList(unref(loading) ? 12 : unref(newsList), (item, i) => {
        _push(ssrRenderComponent(_component_CardNews, mergeProps({
          key: i,
          item: unref(loading) ? void 0 : item
        }, { loading: unref(loading) }), null, _parent));
      });
      _push(`<!--]--></div>`);
      if (!unref(loading)) {
        _push(ssrRenderComponent(_component_CommonPagination, mergeProps({
          class: "justify-end mt-8",
          "per-page": 12
        }, { total: unref(total) }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4a050e4a.mjs.map
