import { p as publicAssetsURL } from '../../renderer.mjs';
import { U as UICLogo, _ as _sfc_main$2 } from './Header-9178e243.mjs';
import { _ as __nuxt_component_1 } from '../server.mjs';
import { _ as _sfc_main$3 } from './Logo-a89e0c66.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, computed, resolveDirective, withCtx, openBlock, createBlock, unref, createTextVNode, toDisplayString } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { u as useMainStore } from './main-aa42713b.mjs';
import { u as useDestinationStore } from './destination-7a1b9a3b.mjs';
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
import './Preloader-bddb5d1e.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-router/dist/vue-router.node.mjs';
import './Input-5e85d57a.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-highlight-words/dist/vue-highlight-words.cjs';
import './useFetcher-bfa391cb.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@vueuse/core/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-devtools-stub/dist/index.mjs';
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

const _imports_0 = "" + publicAssetsURL("pattern/footer.png");
const links = [
  {
    to: "/",
    text: "main_page"
  },
  {
    to: "/help",
    text: "faq"
  },
  {
    to: "/page/privacy-agreement",
    text: "privacy"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const mainStore = useMainStore();
    const socials = computed(() => mainStore.staticFields);
    async function fetchData() {
      return await Promise.all([
        mainStore.fetchSocials(),
        mainStore.fetchStaticFields()
      ]);
    }
    fetchData().finally(() => {
      loading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonLogo = _sfc_main$3;
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="max-md:border-b-0 border-y-2 border-white/10 relative"><div class="container grid grid-cols-1 lg:grid-cols-3 items-start gap-10 md:gap-6 pt-6 md:py-9"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonLogo, { key: loading.value }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(_component_CommonLogo, { key: loading.value }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="font-normal text-sm leading-140 text-white mt-4">${ssrInterpolate(_ctx.$t("footer_text"))}</p></div><div class="flex items-end justify-center gap-3 max-lg:order-1 mt-auto">`);
      if ((_a = socials.value) == null ? void 0 : _a.telegram) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: (_b = socials.value) == null ? void 0 : _b.telegram,
          class: "icon-telegram text-4xl leading-9 relative group text-white hover:text-red-100 transition-300"
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Telegram")))}></a>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = socials.value) == null ? void 0 : _c.twitter) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: (_d = socials.value) == null ? void 0 : _d.twitter,
          class: "icon-twitter text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Twitter")))}></a>`);
      } else {
        _push(`<!---->`);
      }
      if ((_e = socials.value) == null ? void 0 : _e.youtube) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: (_f = socials.value) == null ? void 0 : _f.youtube,
          class: "icon-youtube text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Youtube")))}></a>`);
      } else {
        _push(`<!---->`);
      }
      if ((_g = socials.value) == null ? void 0 : _g.instagram) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: (_h = socials.value) == null ? void 0 : _h.instagram,
          class: "icon-instagram text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Instagram")))}></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-2 gap-x-6 gap-y-4 max-lg:order-0"><!--[-->`);
      ssrRenderList(unref(links), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-white text-base font-semibold leading-130 hover:text-white/40 transition-300",
          key: index,
          to: _ctx.localePath(item.to)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(item.text))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(item.text)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><img${ssrRenderAttr("src", _imports_0)} alt="footer patter" class="absolute left-0 top-0 h-full max-md:hidden"></div><div class="md:bg-dark-500 pt-4 pb-9 md:py-5"><div class="flex-center-between container"><p class="text-white text-sm leading-130">${ssrInterpolate(`\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()}, Tabarruk Ziyorat`)}</p>`);
      _push(ssrRenderComponent(UICLogo, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const destinationStore = useDestinationStore();
    const loading = ref(true);
    async function fetchData() {
      return await Promise.all([
        destinationStore.fetchReligionListWithDestination(),
        destinationStore.fetchCountryList()
      ]);
    }
    fetchData().finally(() => {
      loading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeader = _sfc_main$2;
      const _component_LayoutFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LayoutHeader, { loading: loading.value }, null, _parent));
      _push(`<div class="overflow-x-hidden">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-d303f9e9.mjs.map
