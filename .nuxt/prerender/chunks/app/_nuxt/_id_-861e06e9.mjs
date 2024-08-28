import { _ as _sfc_main$1$1, a as __nuxt_component_1 } from './SingleAttractions-80b9d5da.mjs';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-90707320.mjs';
import { _ as _sfc_main$2 } from './Button-b4a346b5.mjs';
import { $ as $api } from './useFetcher-bfa391cb.mjs';
import { u as useDestinationStore } from './destination-7a1b9a3b.mjs';
import '../server.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/vue/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/dom/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/ssr/dist/index.mjs';
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
import './Preloader-bddb5d1e.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const destinationStore = useDestinationStore();
    const link = computed(() => {
      var _a, _b;
      return [
        {
          title: "attractions",
          link: `/`
        },
        {
          title: (_a = country == null ? void 0 : country.value) == null ? void 0 : _a.title,
          link: `/country/${route.params.id}`
        },
        {
          title: (_b = religionActive == null ? void 0 : religionActive.value) == null ? void 0 : _b.title,
          link: `/`
        }
      ];
    });
    const route = useRoute();
    const religionData = ref([]);
    const nextData = ref(void 0);
    const activeTab = ref(1);
    const limit = ref(12);
    const loading = ref(false);
    const religionList = computed(() => destinationStore.religionList);
    const religionActive = computed(
      () => {
        var _a;
        return (_a = destinationStore.religionList) == null ? void 0 : _a.find((el) => (el == null ? void 0 : el.id) === (activeTab == null ? void 0 : activeTab.value));
      }
    );
    const country = computed(
      () => {
        var _a;
        return (_a = destinationStore == null ? void 0 : destinationStore.countryList) == null ? void 0 : _a.find((el) => {
          var _a2;
          return (el == null ? void 0 : el.id) === +((_a2 = route == null ? void 0 : route.params) == null ? void 0 : _a2.id);
        });
      }
    );
    function fetchReligionSingle() {
      loading.value = true;
      return new Promise((resolve, reject) => {
        $api.$get("/destination/CountryAttractionListByReligion", {
          params: {
            religion__id: activeTab.value,
            destination_country__id: route.params.id,
            limit: limit.value
          }
        }).then((response) => {
          religionData.value = response.results;
          nextData.value = response == null ? void 0 : response.next;
          resolve(response);
        }).catch((error) => {
          reject(error);
        }).finally(() => {
          setTimeout(() => {
            loading.value = false;
          }, 300);
        });
      });
    }
    const handleUpdateTab = (target) => {
      activeTab.value = target;
    };
    const loadMoreDestination = () => {
      limit.value += 12;
      fetchReligionSingle();
    };
    async function fetchData() {
      var _a;
      return await Promise.all([
        destinationStore.fetchReligionList((_a = route == null ? void 0 : route.params) == null ? void 0 : _a.id)
      ]);
    }
    fetchData();
    watch(
      () => activeTab.value,
      () => {
        fetchReligionSingle();
      }
    );
    function countParser(key, count) {
      if (count && key) {
        if (count === 0) {
          return key;
        } else if (count === 1) {
          return key;
        } else {
          return key == null ? void 0 : key.replace("{ n }", count);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_CommonAttractionTab = _sfc_main$1$1;
      const _component_CardSingleAttractions = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-239px)]" }, _attrs))}><div class="pt-20 md:pt-[120px]">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        menu: link.value,
        class: "container px-0"
      }, null, _parent));
      _push(`<div class="container pt-5 md:pt-9 pb-5 md:pb-[74px]"><div class="flex items-start md:items-center justify-between mb-7 md:flex-row flex-col md:space-y-0 space-y-3"><div class="space-y-2"><h1 class="font-bold leading-130 text-3xl md:text-40 text-white font-playfair">${ssrInterpolate(_ctx.$t("attractions"))}</h1><p class="text-sm text-white/60 font-semibold leading-130">${ssrInterpolate(countParser(_ctx.$t("all_attract", (_a = country.value) == null ? void 0 : _a.title), (_b = country.value) == null ? void 0 : _b.title))}</p></div>`);
      if ((_c = religionData.value) == null ? void 0 : _c.length) {
        _push(ssrRenderComponent(_component_CommonAttractionTab, {
          list: religionList.value,
          "model-value": activeTab.value,
          "onUpdate:modelValue": handleUpdateTab,
          class: "!w-auto"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-6"><!--[-->`);
      ssrRenderList(religionData.value, (item, i) => {
        _push(ssrRenderComponent(_component_CardSingleAttractions, {
          data: item,
          "card-loading": loading.value,
          "title-class": "!text-base !font-semibold !leading-130",
          "text-class": "!text-sm !font-medium !leading-130",
          key: i,
          "card-class": "w-full sm:!w-[178px] !h-[200px]"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (nextData.value) {
        _push(ssrRenderComponent(_sfc_main$2, {
          onClick: loadMoreDestination,
          variant: "secondary",
          loading: loading.value,
          "button-class": "lg:!px-7 lg:!px-3",
          class: "mx-auto mt-9"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex-center space-x-1"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("load_more"))}</span><span class="icon-arrow-right text-2xl rotate-90"${_scopeId}></span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex-center space-x-1" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("load_more")), 1),
                  createVNode("span", { class: "icon-arrow-right text-2xl rotate-90" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/attractions/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-861e06e9.mjs.map
