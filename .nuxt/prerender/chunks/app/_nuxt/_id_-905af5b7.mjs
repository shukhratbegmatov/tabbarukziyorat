import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>Single posts/ <b>ID: ${ssrInterpolate(_ctx.$route.params.id)}</b></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-905af5b7.mjs.map
