import { _ as _sfc_main$3, a as __nuxt_component_1 } from "./SingleAttractions-80b9d5da.js";
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _sfc_main$1 } from "./Breadcrumb-90707320.js";
import { _ as _sfc_main$2 } from "./Button-b4a346b5.js";
import { $ as $api } from "./useFetcher-bfa391cb.js";
import { u as useDestinationStore } from "./destination-7a1b9a3b.js";
import "../server.mjs";
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
import "./Preloader-bddb5d1e.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "ohash";
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
      const _component_CommonAttractionTab = _sfc_main$3;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-861e06e9.js.map
