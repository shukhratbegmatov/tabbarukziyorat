import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './Preloader-bddb5d1e.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, ref } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { Autoplay } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/swiper/swiper.esm.js';
import { Swiper, SwiperSlide } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/swiper/vue/swiper-vue.js';
import { QRCanvas } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/qrcanvas-vue/dist/qrcanvas-vue.common.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_1 } from '../server.mjs';

function formatMoneyDecimal(number, fix = 0, option = "decimal") {
  let style;
  if (["USD", "RUB"].includes(option)) {
    style = "currency";
  } else if (["kilogram", "meter", "percent"].includes(option)) {
    style = "unit";
  } else {
    style = "";
  }
  const newStyle = style;
  const option2 = {
    newStyle,
    //  unit currency percent decimal
    [newStyle]: option,
    maximumFractionDigits: fix,
    minimumFractionDigits: fix
  };
  return number ? new Intl.NumberFormat("ru-RU", option2).format(number) : "";
}
function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k +" },
    { value: 1e6, symbol: " mln" },
    { value: 1e9, symbol: " B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /.0+$|(.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find(function(item2) {
    return num >= item2.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InstagramPost",
  __ssrInlineRender: true,
  props: {
    image: {},
    likes: { default: 26763 },
    text: {},
    created_at: { default: "2 days ago" },
    url: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0;
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.url,
        target: "_blank",
        class: "relative block bg-white/5 border w-full border-solid border-white/10 p-2 rounded-xl group w-full"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "100%",
        height: "184px",
        "border-radius": "8px",
        "preloader-class": "mb-1",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden rounded-lg shrink-0 !h-[184px] relative"${_scopeId}><img${ssrRenderAttr("src", _ctx.image)}${ssrRenderAttr("alt", _ctx.name)} class="w-full h-full object-cover"${_scopeId}><div class="absolute w-full h-full opacity-0 top-0 lef-0 transition-300 group-hover:opacity-40 bg-dark/80 group-hover:bg-dark flex flex-col items-center justify-center hover:!opacity-100 hover:!bg-dark/80"${_scopeId}><i class="icon-external-link text-white text-2xl"${_scopeId}></i><span class="text-white text-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("view_post"))}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden rounded-lg shrink-0 !h-[184px] relative" }, [
                createVNode("img", {
                  src: _ctx.image,
                  alt: _ctx.name,
                  class: "w-full h-full object-cover"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute w-full h-full opacity-0 top-0 lef-0 transition-300 group-hover:opacity-40 bg-dark/80 group-hover:bg-dark flex flex-col items-center justify-center hover:!opacity-100 hover:!bg-dark/80" }, [
                  createVNode("i", { class: "icon-external-link text-white text-2xl" }),
                  createVNode("span", { class: "text-white text-xs" }, toDisplayString(_ctx.$t("view_post")), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-1 mt-2">`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "74px",
        height: "16px",
        "border-radius": "8px",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white text-xs font-medium leading-130 space-x-1"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(formatMoneyDecimal)(_ctx.likes))}</span><span${_scopeId}>${ssrInterpolate(_ctx.$t("likes"))}</span></p>`);
          } else {
            return [
              createVNode("p", { class: "text-white text-xs font-medium leading-130 space-x-1" }, [
                createVNode("span", null, toDisplayString(unref(formatMoneyDecimal)(_ctx.likes)), 1),
                createVNode("span", null, toDisplayString(_ctx.$t("likes")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "74px",
        height: "16px",
        "border-radius": "8px",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white text-xs font-normal leading-130 line-clamp-2 my-1"${_scopeId}>${ssrInterpolate(_ctx.text)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-white text-xs font-normal leading-130 line-clamp-2 my-1" }, toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "52px",
        height: "13px",
        "border-radius": "8px",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white text-[10px] font-medium leading-130"${_scopeId}>${ssrInterpolate(_ctx.created_at)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-white text-[10px] font-medium leading-130" }, toDisplayString(_ctx.created_at), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></a>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/InstagramPost.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InstagramPosts",
  __ssrInlineRender: true,
  props: {
    posts: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const settings = {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 2e3
      },
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 16
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 24
        }
      },
      modules: [Autoplay]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardInstagramPost = _sfc_main$3;
      _push(ssrRenderComponent(unref(Swiper), mergeProps(settings, { class: "instagram-slider" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.loading ? 10 : _ctx.posts, (post, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: index,
                class: "!w-[200px] !h-[277px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardInstagramPost, {
                      image: post == null ? void 0 : post.image,
                      created_at: post == null ? void 0 : post.created_at,
                      text: post == null ? void 0 : post.text,
                      url: post == null ? void 0 : post.link,
                      likes: post == null ? void 0 : post.likes,
                      loading: _ctx.loading
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardInstagramPost, {
                        image: post == null ? void 0 : post.image,
                        created_at: post == null ? void 0 : post.created_at,
                        text: post == null ? void 0 : post.text,
                        url: post == null ? void 0 : post.link,
                        likes: post == null ? void 0 : post.likes,
                        loading: _ctx.loading
                      }, null, 8, ["image", "created_at", "text", "url", "likes", "loading"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.loading ? 10 : _ctx.posts, (post, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: index,
                  class: "!w-[200px] !h-[277px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardInstagramPost, {
                      image: post == null ? void 0 : post.image,
                      created_at: post == null ? void 0 : post.created_at,
                      text: post == null ? void 0 : post.text,
                      url: post == null ? void 0 : post.link,
                      likes: post == null ? void 0 : post.likes,
                      loading: _ctx.loading
                    }, null, 8, ["image", "created_at", "text", "url", "likes", "loading"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider/InstagramPosts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InstagramShare",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean }
  },
  setup(__props) {
    const options = ref({
      cellSize: 10,
      correctLevel: "H",
      padding: 12,
      data: "https://www.instagram.com/@ziyorati_tabarruk"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[265px] hidden lg:block absolute right-[124px] -top-8 bg-white/5 border border-solid border-white/10 p-3 rounded-3xl instagram-backdrop-blur z-20" }, _attrs))} data-v-61ce9357><div class="space-y-1 mb-[10px] text-center" data-v-61ce9357>`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "155px",
        height: "34px",
        "border-radius": "8px",
        "preloader-class": "mb-1 mx-auto",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white text-2xl font-bold leading-140" data-v-61ce9357${_scopeId}>${ssrInterpolate(_ctx.$t("scan"))}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-white text-2xl font-bold leading-140" }, toDisplayString(_ctx.$t("scan")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "155px",
        height: "28px",
        "border-radius": "8px",
        "preloader-class": "mb-1 mx-auto",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white/60 text-xl font-bold leading-140" data-v-61ce9357${_scopeId}> @ziyorati_tabarruk </p>`);
          } else {
            return [
              createVNode("p", { class: "text-white/60 text-xl font-bold leading-140" }, " @ziyorati_tabarruk ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CommonPreloader, {
        width: "240px",
        height: "240px",
        "border-radius": "8px",
        "preloader-class": "mx-auto",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden rounded-lg shrink-0 h-[240px] w-[240px] relative overflow-hidden" data-v-61ce9357${_scopeId}>`);
            _push2(ssrRenderComponent(unref(QRCanvas), {
              id: "capture",
              options: options.value,
              class: "relative z-10 w-full h-full"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden rounded-lg shrink-0 h-[240px] w-[240px] relative overflow-hidden" }, [
                createVNode(unref(QRCanvas), {
                  id: "capture",
                  options: options.value,
                  class: "relative z-10 w-full h-full"
                }, null, 8, ["options"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/InstagramShare.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-61ce9357"]]);
const _imports_0 = "" + publicAssetsURL("svg/icons_instagram.svg");
const _imports_1 = "" + publicAssetsURL("islam.webp");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: _ctx.localePath(_ctx.url),
    class: "relative inline-flex lg:hidden items-stretch justify-between space-x-7 bg-white/5 border w-full sm:w-auto border-solid border-white/10 p-2 rounded-xl group mt-3"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="space-y-3 text-left" data-v-b991e91d${_scopeId}><p class="text-white text-lg font-bold leading-140" data-v-b991e91d${_scopeId}>${ssrInterpolate(_ctx.$t("subscribe"))}</p><p class="flex items-center space-x-1" data-v-b991e91d${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="icons_instagram" data-v-b991e91d${_scopeId}><span class="text-white/60 text-lg font-bold leading-140" data-v-b991e91d${_scopeId}> @ziyorati_tabarruk </span></p></div><div class="overflow-hidden rounded-lg shrink-0 !w-[102px] relative" data-v-b991e91d${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="religion" class="w-full h-full object-cover" data-v-b991e91d${_scopeId}><div class="absolute w-full h-full top-0 lef-0 transition-300 subscribe-gradient flex flex-col items-center justify-center" data-v-b991e91d${_scopeId}><i class="icon-moon-circle text-white text-2xl" data-v-b991e91d${_scopeId}></i></div></div>`);
      } else {
        return [
          createVNode("div", { class: "space-y-3 text-left" }, [
            createVNode("p", { class: "text-white text-lg font-bold leading-140" }, toDisplayString(_ctx.$t("subscribe")), 1),
            createVNode("p", { class: "flex items-center space-x-1" }, [
              createVNode("img", {
                src: _imports_0,
                alt: "icons_instagram"
              }),
              createVNode("span", { class: "text-white/60 text-lg font-bold leading-140" }, " @ziyorati_tabarruk ")
            ])
          ]),
          createVNode("div", { class: "overflow-hidden rounded-lg shrink-0 !w-[102px] relative" }, [
            createVNode("img", {
              src: _imports_1,
              alt: "religion",
              class: "w-full h-full object-cover"
            }),
            createVNode("div", { class: "absolute w-full h-full top-0 lef-0 transition-300 subscribe-gradient flex flex-col items-center justify-center" }, [
              createVNode("i", { class: "icon-moon-circle text-white text-2xl" })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Subscribe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b991e91d"]]);

export { _sfc_main$2 as _, __nuxt_component_7 as a, __nuxt_component_8 as b, nFormatter as n };
//# sourceMappingURL=Subscribe-2780a86b.mjs.map
