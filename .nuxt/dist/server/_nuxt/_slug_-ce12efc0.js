import { _ as _sfc_main$3 } from "./Breadcrumb-90707320.js";
import { a as _sfc_main$2, _ as __nuxt_component_1$1 } from "./CopyUrl-5752d3e5.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext, ref, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { u as useRoute, s as showError } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-10e4973a.js";
import { u as useSeoMeta } from "./composables-ffbf1183.js";
import "destr";
import { $ as $api } from "./useFetcher-bfa391cb.js";
import dayjs from "dayjs";
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
import "ohash";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SingleDetail",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTooltip = _sfc_main$2;
      const _component_CommonCopyUrl = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-t border-dark-100 pt-3 md:pt-4" }, _attrs))} data-v-a392c551><div class="max-w-[584px] w-fit mx-auto flex items-stretch gap-4 p-3 md:p-4 max-sm:flex-col bg-dark/50 border border-white/20 rounded-xl" data-v-a392c551><div class="flex gap-3 sm:gap-4" data-v-a392c551><i class="icon-share text-white text-2xl sm:text-32 leading-6 sm:leading-8" data-v-a392c551></i><span class="w-px h-6 sm:h-8" style="${ssrRenderStyle({ "background": "linear-gradient(\n              180deg,\n              rgba(255, 255, 255, 0) 0%,\n              #ffffff 51.04%,\n              rgba(255, 255, 255, 0) 100%\n            )" })}" data-v-a392c551></span><button class="icon-telegram social-share group" data-v-a392c551>`);
      _push(ssrRenderComponent(_component_CommonTooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Telegram `);
          } else {
            return [
              createTextVNode(" Telegram ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button><button class="icon-twitter social-share group" data-v-a392c551>`);
      _push(ssrRenderComponent(_component_CommonTooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Twitter `);
          } else {
            return [
              createTextVNode(" Twitter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(_component_CommonCopyUrl, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const SingleDetail_vue_vue_type_style_index_0_scoped_a392c551_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/SingleDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a392c551"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d;
    const route = useRoute();
    const loading = ref(false);
    const { data: single } = useAsyncData(async () => {
      loading.value = true;
      return await $api.$get(`/news/NewsDetail/${route.params.slug}/`).catch(() => {
        showError({
          statusCode: 404
        });
      }).finally(() => {
        loading.value = false;
      });
    }, "$mN2gziXVDH");
    useSeoMeta({
      title: (_a = single == null ? void 0 : single.value) == null ? void 0 : _a.title,
      description: (_b = single == null ? void 0 : single.value) == null ? void 0 : _b.short_description,
      ogDescription: (_c = single.value) == null ? void 0 : _c.short_description,
      ogImage: (_d = single == null ? void 0 : single.value) == null ? void 0 : _d.image
    });
    const menu = computed(() => {
      var _a2;
      return [
        {
          title: "News",
          link: "/news"
        },
        {
          title: (_a2 = single == null ? void 0 : single.value) == null ? void 0 : _a2.title,
          link: "/news"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e, _f, _g;
      const _component_CommonBreadcrumb = _sfc_main$3;
      const _component_CommonSingleDetail = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-20 md:pt-[120px] pb-12 container min-h-[calc(100vh-239px)]" }, _attrs))}>`);
      if (!unref(loading)) {
        _push(ssrRenderComponent(_component_CommonBreadcrumb, { menu: unref(menu) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-3xl mx-auto"><h1 class="text-40 text-white font-semibold leading-130 text-white">${ssrInterpolate((_a2 = unref(single)) == null ? void 0 : _a2.title)}</h1><div class="flex-y-center gap-7 my-4 text-gray-100"><div class="flex-y-center gap-1"><i class="icon-calendar text-2xl leading-6"></i> ${ssrInterpolate(unref(dayjs)((_b2 = unref(single)) == null ? void 0 : _b2.published_at).format("DD.MM.YYYY"))}</div><div class="flex-y-center gap-1"><i class="icon-eye text-2xl leading-6"></i> ${ssrInterpolate((_c2 = unref(single)) == null ? void 0 : _c2.view_count)}</div></div><div class="aspect-video w-full rounded-xl overflow-hidden"><img class="w-full h-full object-cover"${ssrRenderAttr("src", (_d2 = unref(single)) == null ? void 0 : _d2.image)}${ssrRenderAttr("alt", (_e = unref(single)) == null ? void 0 : _e.title)}></div><div class="vhtml-text py-6">${(_f = unref(single)) == null ? void 0 : _f.description}</div>`);
      _push(ssrRenderComponent(_component_CommonSingleDetail, {
        title: (_g = unref(single)) == null ? void 0 : _g.title
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-ce12efc0.js.map
