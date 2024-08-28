import { _ as _sfc_main$1 } from './Breadcrumb-90707320.mjs';
import { _ as __nuxt_component_0 } from './Preloader-bddb5d1e.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { $ as $api } from './useFetcher-bfa391cb.mjs';
import { s as showError } from '../server.mjs';
import { u as useAsyncData } from './asyncData-10e4973a.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-router/dist/vue-router.node.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/vue/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/dom/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@unhead/ssr/dist/index.mjs';
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
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/pathe/dist/index.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=_slug_-17e7dfd7.mjs.map
