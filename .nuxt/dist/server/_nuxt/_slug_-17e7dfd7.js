import { _ as _sfc_main$1 } from "./Breadcrumb-90707320.js";
import { _ as __nuxt_component_0 } from "./Preloader-bddb5d1e.js";
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { $ as $api } from "./useFetcher-bfa391cb.js";
import { s as showError } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-10e4973a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "cookie-es";
import "h3";
import "ohash";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const loading = ref(false);
    const { data: single } = useAsyncData(async () => {
      loading.value = true;
      return await $api.$get(`/common/StaticPageGet/${route.params.slug}`).catch(() => {
        showError({
          statusCode: 404
        });
      }).finally(() => {
        loading.value = false;
      });
    }, "$fBwDv4OvFz");
    const menu = computed(() => {
      var _a;
      return [
        {
          title: (_a = single == null ? void 0 : single.value) == null ? void 0 : _a.title,
          link: "/news"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_CommonBreadcrumb = _sfc_main$1;
      const _component_CommonPreloader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark pt-[90px] md:pt-[120px] container pt-9 pb-[88px]" }, _attrs))}>`);
      if (!unref(loading)) {
        _push(ssrRenderComponent(_component_CommonBreadcrumb, { menu: unref(menu) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="font-bold text-40 leading-130 text-white font-playfair">${ssrInterpolate((_a = unref(single)) == null ? void 0 : _a.title)}</h1>`);
      if (unref(loading)) {
        _push(`<div class="flex flex-col gap-3"><!--[-->`);
        ssrRenderList(20, (i) => {
          _push(ssrRenderComponent(_component_CommonPreloader, {
            key: i,
            width: "100%",
            height: "20px",
            loading: ""
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="relative vhtml-text mt-6">${(_b = unref(single)) == null ? void 0 : _b.text}</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-17e7dfd7.js.map
