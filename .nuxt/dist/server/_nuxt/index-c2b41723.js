import { _ as _sfc_main$2 } from "./Breadcrumb-90707320.js";
import { _ as __nuxt_component_5 } from "./Wrapper-ba6738ca.js";
import { _ as __nuxt_component_0 } from "./Preloader-bddb5d1e.js";
import { defineComponent, ref, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext, computed as computed$1, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { C as CollapseTransition } from "./CollapseTransition-fb7ca217.js";
import { computed } from "@vue/reactivity";
import { u as useForm, _ as _sfc_main$3 } from "./useForm-0edd66a5.js";
import { b as useI18n } from "../server.mjs";
import { u as useSeoMeta } from "./composables-ffbf1183.js";
import "destr";
import { required, email } from "@vuelidate/validators";
import "vue-toastification";
import { u as useMainStore } from "./main-aa42713b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/components";
import "./Attractions-171c95f6.js";
import "@vuelidate/core";
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
import "./useFetcher-bfa391cb.js";
import "ohash";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FAQ",
  __ssrInlineRender: true,
  props: {
    faqList: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const activeItem = ref((_a = props.faqList[0]) == null ? void 0 : _a.id);
    const firstList = computed(
      () => props.faqList.slice(0, props.faqList.length / 2)
    );
    const secondList = computed(
      () => props.faqList.slice(props.faqList.length / 2, props.faqList.length)
    );
    const openItem = (id) => {
      if (activeItem.value === id) {
        activeItem.value = 0;
        return;
      }
      activeItem.value = id;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWrapper = __nuxt_component_5;
      const _component_CommonPreloader = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}> dsadsa `);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        title: "frequently_given_questions",
        line: false,
        class: "pt-9 pb-14",
        loading: _ctx.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid md:grid-cols-2 items-start gap-6 mt-6"${_scopeId}><!--[-->`);
            ssrRenderList(2, (i) => {
              _push2(`<div class="flex flex-col gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.loading ? 1 : i === 1 ? unref(firstList) : unref(secondList), (item, index2) => {
                _push2(`<div class="pl-2 py-2 lg:pl-4 lg:py-4 bg-white/5 rounded-xl border border-white/20"${_scopeId}><div class="flex-y-center gap-4 pr-2 lg:pr-4 cursor-pointer group"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_CommonPreloader, {
                  width: "40px",
                  height: "40px",
                  "border-radius": "4px",
                  "preloader-class": "mb-2",
                  loading: _ctx.loading
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="bg-red-100 border border-white/20 w-10 h-10 flex-center rounded-lg shrink-0 faq-item__icon"${_scopeId2}><img class="w-6 h-6 object-contain"${ssrRenderAttr("src", item == null ? void 0 : item.logo)}${ssrRenderAttr("alt", item == null ? void 0 : item.question)}${_scopeId2}></span>`);
                    } else {
                      return [
                        createVNode("span", { class: "bg-red-100 border border-white/20 w-10 h-10 flex-center rounded-lg shrink-0 faq-item__icon" }, [
                          createVNode("img", {
                            class: "w-6 h-6 object-contain",
                            src: item == null ? void 0 : item.logo,
                            alt: item == null ? void 0 : item.question
                          }, null, 8, ["src", "alt"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_CommonPreloader, {
                  width: "100%",
                  height: "26px",
                  class: "w-full",
                  "border-radius": "4px",
                  "preloader-class": "mb-2",
                  loading: _ctx.loading
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p class="font-semibold text-lg lg:text-xl leading-130 text-white group-hover:text-red-100 transition-300 w-full"${_scopeId2}>${ssrInterpolate(item == null ? void 0 : item.question)}</p>`);
                    } else {
                      return [
                        createVNode("p", { class: "font-semibold text-lg lg:text-xl leading-130 text-white group-hover:text-red-100 transition-300 w-full" }, toDisplayString(item == null ? void 0 : item.question), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_CommonPreloader, {
                  width: "40px",
                  height: "40px",
                  "border-radius": "4px",
                  "preloader-class": "mb-2",
                  loading: _ctx.loading
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="w-10 h-10 bg-white/10 border border-white/10 flex-center shrink-0 rounded-lg"${_scopeId2}><i class="${ssrRenderClass([{ "rotate-180": unref(activeItem) === (item == null ? void 0 : item.id) }, "icon-chevron-bottom text-2xl text-white transition-300"])}"${_scopeId2}></i></span>`);
                    } else {
                      return [
                        createVNode("span", { class: "w-10 h-10 bg-white/10 border border-white/10 flex-center shrink-0 rounded-lg" }, [
                          createVNode("i", {
                            class: ["icon-chevron-bottom text-2xl text-white transition-300", { "rotate-180": unref(activeItem) === (item == null ? void 0 : item.id) }]
                          }, null, 2)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_CommonPreloader, {
                  width: "90%",
                  height: "40px",
                  "border-radius": "4px",
                  class: "relative",
                  loading: _ctx.loading
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(CollapseTransition, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (unref(activeItem) === (item == null ? void 0 : item.id)) {
                              _push4(`<div class="pt-3"${_scopeId3}><div class="pl-1.5 pr-4 pt-3 border-t border-white/20 text-base leading-130 text-white"${_scopeId3}>${item == null ? void 0 : item.answer}</div></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              unref(activeItem) === (item == null ? void 0 : item.id) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "pt-3"
                              }, [
                                createVNode("div", {
                                  innerHTML: item == null ? void 0 : item.answer,
                                  class: "pl-1.5 pr-4 pt-3 border-t border-white/20 text-base leading-130 text-white"
                                }, null, 8, ["innerHTML"])
                              ])) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(CollapseTransition, null, {
                          default: withCtx(() => [
                            unref(activeItem) === (item == null ? void 0 : item.id) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pt-3"
                            }, [
                              createVNode("div", {
                                innerHTML: item == null ? void 0 : item.answer,
                                class: "pl-1.5 pr-4 pt-3 border-t border-white/20 text-base leading-130 text-white"
                              }, null, 8, ["innerHTML"])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid md:grid-cols-2 items-start gap-6 mt-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(2, (i) => {
                  return createVNode("div", {
                    class: "flex flex-col gap-6",
                    key: i
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.loading ? 1 : i === 1 ? unref(firstList) : unref(secondList), (item, index2) => {
                      return openBlock(), createBlock("div", {
                        key: index2,
                        class: "pl-2 py-2 lg:pl-4 lg:py-4 bg-white/5 rounded-xl border border-white/20"
                      }, [
                        createVNode("div", {
                          class: "flex-y-center gap-4 pr-2 lg:pr-4 cursor-pointer group",
                          onClick: ($event) => openItem(item.id)
                        }, [
                          createVNode(_component_CommonPreloader, {
                            width: "40px",
                            height: "40px",
                            "border-radius": "4px",
                            "preloader-class": "mb-2",
                            loading: _ctx.loading
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "bg-red-100 border border-white/20 w-10 h-10 flex-center rounded-lg shrink-0 faq-item__icon" }, [
                                createVNode("img", {
                                  class: "w-6 h-6 object-contain",
                                  src: item == null ? void 0 : item.logo,
                                  alt: item == null ? void 0 : item.question
                                }, null, 8, ["src", "alt"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["loading"]),
                          createVNode(_component_CommonPreloader, {
                            width: "100%",
                            height: "26px",
                            class: "w-full",
                            "border-radius": "4px",
                            "preloader-class": "mb-2",
                            loading: _ctx.loading
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "font-semibold text-lg lg:text-xl leading-130 text-white group-hover:text-red-100 transition-300 w-full" }, toDisplayString(item == null ? void 0 : item.question), 1)
                            ]),
                            _: 2
                          }, 1032, ["loading"]),
                          createVNode(_component_CommonPreloader, {
                            width: "40px",
                            height: "40px",
                            "border-radius": "4px",
                            "preloader-class": "mb-2",
                            loading: _ctx.loading
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "w-10 h-10 bg-white/10 border border-white/10 flex-center shrink-0 rounded-lg" }, [
                                createVNode("i", {
                                  class: ["icon-chevron-bottom text-2xl text-white transition-300", { "rotate-180": unref(activeItem) === (item == null ? void 0 : item.id) }]
                                }, null, 2)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["loading"])
                        ], 8, ["onClick"]),
                        createVNode(_component_CommonPreloader, {
                          width: "90%",
                          height: "40px",
                          "border-radius": "4px",
                          class: "relative",
                          loading: _ctx.loading
                        }, {
                          default: withCtx(() => [
                            createVNode(CollapseTransition, null, {
                              default: withCtx(() => [
                                unref(activeItem) === (item == null ? void 0 : item.id) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "pt-3"
                                }, [
                                  createVNode("div", {
                                    innerHTML: item == null ? void 0 : item.answer,
                                    class: "pl-1.5 pr-4 pt-3 border-t border-white/20 text-base leading-130 text-white"
                                  }, null, 8, ["innerHTML"])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["loading"])
                      ]);
                    }), 128))
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/FAQ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const { t } = useI18n();
    const loading = ref(false);
    ref();
    const faqList = computed$1(() => mainStore.faq);
    const popularAttractions = computed$1(() => mainStore.popularAttractions);
    computed$1(() => mainStore.contact);
    async function fetchData() {
      loading.value = true;
      return await Promise.all([
        mainStore.fetchFaq(),
        mainStore.fetchPopularAttractions(),
        mainStore.fetchContactData()
      ]);
    }
    fetchData().finally(() => {
      loading.value = false;
    });
    useSeoMeta({
      title: t("help")
    });
    const menu = [
      {
        title: "FAQ",
        link: "/faq"
      }
    ];
    useForm(
      {
        full_name: "",
        email: "",
        message: ""
      },
      {
        full_name: {
          required
        },
        email: {
          email,
          required
        },
        message: {
          required
        }
      }
    );
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBreadcrumb = _sfc_main$2;
      const _component_SectionFAQ = _sfc_main$1;
      const _component_SectionPopularAttractions = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark" }, _attrs))} data-v-6fa3a0ca><div class="faq-section pt-[90px] lg:pt-[136px]" data-v-6fa3a0ca>`);
      _push(ssrRenderComponent(_component_CommonBreadcrumb, mergeProps({ menu }, { class: "" }), null, _parent));
      _push(ssrRenderComponent(_component_SectionFAQ, { faqList: faqList.value, loading: loading.value }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SectionPopularAttractions, { popularAttractions: popularAttractions.value, loading: loading.value }, null, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_6fa3a0ca_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fa3a0ca"]]);
export {
  index as default
};
//# sourceMappingURL=index-c2b41723.js.map
