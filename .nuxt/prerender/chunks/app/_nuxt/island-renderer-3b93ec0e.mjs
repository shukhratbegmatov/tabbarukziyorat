import { defineComponent, createBlock, Teleport, h } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { f as createError } from '../server.mjs';
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
import 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
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

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  async setup(props) {
    var _a;
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    if (typeof component === "object") {
      await ((_a = component.__asyncLoader) == null ? void 0 : _a.call(component));
    }
    return () => [
      createBlock(Teleport, { to: "nuxt-island" }, [h(component || "span", props.context.props)])
    ];
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-3b93ec0e.mjs.map
