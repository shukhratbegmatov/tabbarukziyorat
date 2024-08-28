import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_0$2 } from './Modal-0cbe818d.mjs';
import { a as __nuxt_component_0$1 } from './Preloader-bddb5d1e.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/swiper/vue/swiper-vue.js';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    function generateItem(arr) {
      if (arr) {
        let index = 0;
        const generatedArray = [];
        const checkResponseLength = arr == null ? void 0 : arr.length;
        const checkAdditionalItems = 100 - checkResponseLength;
        for (let i = 0; i <= checkAdditionalItems; i++) {
          generatedArray.push(arr[index]);
          if (index + 1 === checkResponseLength) {
            index = 0;
          } else {
            index++;
          }
        }
        return generatedArray;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "marquee-wrapper relative z-[3] overflow-hidden" }, _attrs))} data-v-6e53c7c2><div class="marquee-carousel marquee-carousel-1 mb-4 md:mb-6" data-v-6e53c7c2><div class="marquee-items marquee__group_left" data-v-6e53c7c2><!--[-->`);
      ssrRenderList(generateItem(_ctx.images), (item, index) => {
        _push(`<div class="w-[220px] md:w-[280px] h-[180px] md:h-[200px] rounded-xl overflow-hidden mr-4 md:mr-6 group cursor-pointer shrink-0" data-v-6e53c7c2><img${ssrRenderAttr("src", item == null ? void 0 : item.image)} alt="marquee-image" class="w-full h-full object-cover group-hover:scale-110 transition-300" data-v-6e53c7c2></div>`);
      });
      _push(`<!--]--></div></div><div class="marquee-carousel marquee-carousel-2" data-v-6e53c7c2><div class="marquee-items marquee__group_right" data-v-6e53c7c2><!--[-->`);
      ssrRenderList(generateItem(_ctx.images), (item, index) => {
        _push(`<div class="w-[220px] md:w-[280px] h-[180px] md:h-[200px] rounded-xl overflow-hidden mr-4 md:mr-6 group cursor-pointer shrink-0" data-v-6e53c7c2><img${ssrRenderAttr("src", item == null ? void 0 : item.image)} alt="marquee-image" class="w-full h-full object-cover group-hover:scale-110 transition-300" data-v-6e53c7c2></div>`);
      });
      _push(`<!--]--></div></div><div class="linear-bg-marquee w-[75px] sm:w-[100px] md:w-[300px] h-full absolute left-0 top-0 pointer-events-none" data-v-6e53c7c2></div><div class="linear-bg-marquee w-[75px] sm:w-[100px] md:w-[300px] h-full absolute right-0 top-0 rotate-180 pointer-events-none" data-v-6e53c7c2></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Destination/Marquee.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6e53c7c2"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MainSlider",
  __ssrInlineRender: true,
  props: {
    images: {},
    active: {},
    thumbsSwiper: {}
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-34d51af6><div class="slide-prev flex-center absolute top-1/2 -left-[30%] group transition-200 cursor-pointer" data-v-34d51af6><div class="w-12 h-12 rounded-lg border border-solid border-white/10 bg-white/20 flex-center hover:bg-white/30" data-v-34d51af6><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-34d51af6><path d="M12.5 15L7.5 10L12.5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-34d51af6></path></svg></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="slide-next flex-center absolute top-1/2 -right-[30%] group transition-200 cursor-pointer" data-v-34d51af6><div class="w-12 h-12 rounded-lg border border-solid border-white/10 bg-white/20 flex-center hover:bg-white/30 transition-300" data-v-34d51af6><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-34d51af6><path d="M7.5 5L12.5 10L7.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-34d51af6></path></svg></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/MainSlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-34d51af6"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SThumbnail",
  __ssrInlineRender: true,
  props: {
    images: {},
    active: {}
  },
  emits: ["change", "init"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const settings = {
      spaceBetween: 20,
      slidesPerView: 3,
      breakpoints: {
        200: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 5
        }
      }
    };
    const imageSlider = ref();
    function onInit(swiper) {
      imageSlider.value = swiper;
      emit("swiper", swiper);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(settings, {
        "watch-slides-progress": true,
        "prevent-clicks": false,
        "prevent-clicks-propagation": false,
        onSwiper: onInit
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.images, (image, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full cursor-pointer overflow-hidden transition-300 aspect-video relative overflow-hidden rounded-xl border-[2px] border-solid border-white/20"${_scopeId2}><div class="${ssrRenderClass([{ "opacity-0": _ctx.active === index }, "w-full h-full bg-[#07091CA3] absolute inset-0 transition-300"])}"${_scopeId2}></div><img${ssrRenderAttr("src", image == null ? void 0 : image.image)} alt="images" class="w-full h-full object-cover"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full cursor-pointer overflow-hidden transition-300 aspect-video relative overflow-hidden rounded-xl border-[2px] border-solid border-white/20" }, [
                        createVNode("div", {
                          class: ["w-full h-full bg-[#07091CA3] absolute inset-0 transition-300", { "opacity-0": _ctx.active === index }]
                        }, null, 2),
                        createVNode("img", {
                          src: image == null ? void 0 : image.image,
                          alt: "images",
                          class: "w-full h-full object-cover"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.images, (image, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full cursor-pointer overflow-hidden transition-300 aspect-video relative overflow-hidden rounded-xl border-[2px] border-solid border-white/20" }, [
                      createVNode("div", {
                        class: ["w-full h-full bg-[#07091CA3] absolute inset-0 transition-300", { "opacity-0": _ctx.active === index }]
                      }, null, 2),
                      createVNode("img", {
                        src: image == null ? void 0 : image.image,
                        alt: "images",
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/SThumbnail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    images: {},
    active: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const innerActive = ref(0);
    const thumbsSwiper = ref();
    const initSwiper = (value) => {
      thumbsSwiper.value = value;
    };
    watch(
      () => props.show,
      () => {
        var _a;
        if (!props.show) {
          innerActive.value = 0;
        } else {
          innerActive.value = (_a = props.images) == null ? void 0 : _a.findIndex((el) => el === props.active);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonModal = __nuxt_component_0$2;
      const _component_GalleryMainSlider = __nuxt_component_1;
      const _component_GallerySThumbnail = _sfc_main$2;
      _push(ssrRenderComponent(_component_CommonModal, mergeProps({ "max-width": "" }, { show: _ctx.show }, {
        title: "",
        "body-style": "!max-w-[786px] !bg-transparent !overflow-visible relative",
        "button-class": "absolute text-xl !text-white -top-2 lg:-top-6 right-0 lg:-right-6 hover:!text-red",
        "header-style": "!border-[0px]",
        "close-on-backdrop": "",
        onClose: ($event) => _ctx.$emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_GalleryMainSlider, mergeProps({ images: _ctx.images, thumbsSwiper: unref(thumbsSwiper) }, {
              active: unref(innerActive),
              onChange: ($event) => innerActive.value = $event
            }), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_GallerySThumbnail, mergeProps({ class: "mt-4" }, { images: _ctx.images }, {
              active: unref(innerActive),
              onSwiper: initSwiper
            }), null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              (openBlock(), createBlock("div", {
                class: "text-white",
                key: _ctx.show
              }, [
                createVNode(_component_GalleryMainSlider, mergeProps({ images: _ctx.images, thumbsSwiper: unref(thumbsSwiper) }, {
                  active: unref(innerActive),
                  onChange: ($event) => innerActive.value = $event
                }), null, 16, ["active", "onChange"]),
                createVNode(_component_GallerySThumbnail, mergeProps({ class: "mt-4" }, { images: _ctx.images }, {
                  active: unref(innerActive),
                  onSwiper: initSwiper
                }), null, 16, ["active"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Media",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    const activeIndex = ref(0);
    const show = ref(false);
    function openModal(index) {
      activeIndex.value = index;
      show.value = true;
    }
    watch(
      () => show.value,
      (newValue) => {
        if (!newValue) {
          document.body.style.overflowY = "auto";
        } else {
          document.body.style.overflowY = "hidden";
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DestinationMarquee = __nuxt_component_0;
      const _component_GalleryModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container max-w-[1101px]">`);
      ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_DestinationMarquee, mergeProps({ images: _ctx.images }, { onOpen: openModal }), null, _parent));
      _push(ssrRenderComponent(_component_GalleryModal, mergeProps({ images: _ctx.images, show: unref(show) }, {
        active: unref(activeIndex),
        onClose: ($event) => show.value = false
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Media.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Media-6d683094.mjs.map
