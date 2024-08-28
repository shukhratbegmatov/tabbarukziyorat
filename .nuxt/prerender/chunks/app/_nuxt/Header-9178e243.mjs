import { p as publicAssetsURL } from '../../renderer.mjs';
import { a as useHomeStore, b as useI18n, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as _sfc_main$c } from './Logo-a89e0c66.mjs';
import { _ as __nuxt_component_0$1 } from './Preloader-bddb5d1e.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, mergeProps, withCtx, openBlock, createBlock, unref, createVNode, toDisplayString, Fragment, renderList, createTextVNode, createCommentVNode } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { useRoute, useRouter } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as __nuxt_component_0$2 } from './Input-5e85d57a.mjs';
import Highlighter from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/vue-highlight-words/dist/vue-highlight-words.cjs';
import { d as debounce } from './useFetcher-bfa391cb.mjs';
import { u as useDestinationStore } from './destination-7a1b9a3b.mjs';
import { useWindowScroll } from 'file://C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/@vueuse/core/index.mjs';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    position: { default: "right" },
    dropdownStyle: { default: "" },
    size: { default: "32px" },
    loading: { type: Boolean, default: false }
  },
  emits: ["on-open", "close"],
  setup(__props, { emit: __emit }) {
    const isOpened = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["s-dropdown inline-flex relative", { "pointer-events-none": _ctx.loading }]
      }, _attrs))} data-v-628b3135><div class="inline-block" data-v-628b3135>`);
      ssrRenderSlot(_ctx.$slots, "button", { isOpen: unref(isOpened) }, null, _push, _parent);
      _push(`</div>`);
      if (unref(isOpened)) {
        _push(`<div class="${ssrRenderClass([[
          {
            "right-0": _ctx.position === "right",
            "-left-[120px]": _ctx.position === "left"
          },
          _ctx.dropdownStyle
        ], "w-fit absolute top-10 z-50 min-w-[200px] border border-solid border-white/20 rounded-lg w-auto h-auto z-50 backdrop-blur"])}" data-v-628b3135>`);
        ssrRenderSlot(_ctx.$slots, "items", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dropdown/Dropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-628b3135"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NavigationLink",
  __ssrInlineRender: true,
  props: {
    icon: { default: "/svg/countries/azerbaijan.svg" },
    type: {},
    title: { default: "Uzbekistan" },
    count: { default: 32 },
    id: {}
  },
  setup(__props) {
    const props = __props;
    const checkType = computed(() => {
      return (props == null ? void 0 : props.type) == "countries" ? "/country/" : "/religions/";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.localePath(checkType.value + _ctx.id),
        class: "w-full flex items-center space-x-[10px] py-2 pl-2 pr-8 rounded-xl transition-300 group hover:bg-white/5"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0"${_scopeId}><img${ssrRenderAttr("src", _ctx.icon)} class="w-full h-full !flex-shrink-0" alt="Navigation Icon"${_scopeId}></div><div${_scopeId}><p class="text-base text-white font-medium leading-130 whitespace-nowrap transition-300 group-hover:text-red"${_scopeId}>${ssrInterpolate(_ctx.title)}</p><p class="text-sm text-white/60 font-normal leading-130 whitespace-nowrap"${_scopeId}>${ssrInterpolate(_ctx.count)} ${ssrInterpolate(_ctx.$t("destinations"))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "w-7 h-7 rounded-lg overflow-hidden flex-shrink-0" }, [
                createVNode("img", {
                  src: _ctx.icon,
                  class: "w-full h-full !flex-shrink-0",
                  alt: "Navigation Icon"
                }, null, 8, ["src"])
              ]),
              createVNode("div", null, [
                createVNode("p", { class: "text-base text-white font-medium leading-130 whitespace-nowrap transition-300 group-hover:text-red" }, toDisplayString(_ctx.title), 1),
                createVNode("p", { class: "text-sm text-white/60 font-normal leading-130 whitespace-nowrap" }, toDisplayString(_ctx.count) + " " + toDisplayString(_ctx.$t("destinations")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/NavigationLink.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NavigationWrapper",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean },
    navigations: {}
  },
  setup(__props) {
    const route = useRoute();
    const checkCurrentRoute = (target) => {
      if ((route == null ? void 0 : route.fullPath.includes("country")) && target === "countries" || (route == null ? void 0 : route.fullPath.includes("religions")) && target === "religions") {
        return true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPreloader = __nuxt_component_0$1;
      const _component_Dropdown = __nuxt_component_1;
      const _component_NavigationLink = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "relative flex items-center space-x-6" }, _attrs))} data-v-c90377e2><!--[-->`);
      ssrRenderList(_ctx.navigations, (item, idx) => {
        _push(`<li class="relative text-white flex" data-v-c90377e2>`);
        _push(ssrRenderComponent(_component_CommonPreloader, {
          width: "67px",
          height: "21px",
          "border-radius": "4px",
          class: "!inline-block",
          loading: _ctx.loading
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item == null ? void 0 : item.action) {
                _push2(ssrRenderComponent(_component_Dropdown, { position: "left" }, {
                  button: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<button class="${ssrRenderClass([{ "!text-red": checkCurrentRoute(item == null ? void 0 : item.action) }, "text-base font-bold leading-130 transition-all duration-150 hover:text-white/40"])}" data-v-c90377e2${_scopeId2}>${ssrInterpolate((item == null ? void 0 : item.title) ? _ctx.$t(item == null ? void 0 : item.title) : "foo")}</button>`);
                    } else {
                      return [
                        createVNode("button", {
                          class: ["text-base font-bold leading-130 transition-all duration-150 hover:text-white/40", { "!text-red": checkCurrentRoute(item == null ? void 0 : item.action) }]
                        }, toDisplayString((item == null ? void 0 : item.title) ? _ctx.$t(item == null ? void 0 : item.title) : "foo"), 3)
                      ];
                    }
                  }),
                  items: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<ul class="${ssrRenderClass([[
                        (item == null ? void 0 : item.action) === "countries" ? "w-max grid-cols-2" : " w-full grid-cols-1"
                      ], "relative block grid p-4"])}" data-v-c90377e2${_scopeId2}><!--[-->`);
                      ssrRenderList(item == null ? void 0 : item.content, (link, i) => {
                        _push3(`<li class="flex-shrink-0" data-v-c90377e2${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_NavigationLink, {
                          type: item == null ? void 0 : item.action,
                          id: link == null ? void 0 : link.id,
                          title: link == null ? void 0 : link.title,
                          icon: link == null ? void 0 : link.flag,
                          count: link == null ? void 0 : link.destination_count
                        }, null, _parent3, _scopeId2));
                        _push3(`</li>`);
                      });
                      _push3(`<!--]--></ul>`);
                    } else {
                      return [
                        createVNode("ul", {
                          class: ["relative block grid p-4", [
                            (item == null ? void 0 : item.action) === "countries" ? "w-max grid-cols-2" : " w-full grid-cols-1"
                          ]]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item == null ? void 0 : item.content, (link, i) => {
                            return openBlock(), createBlock("li", {
                              key: i,
                              class: "flex-shrink-0"
                            }, [
                              createVNode(_component_NavigationLink, {
                                type: item == null ? void 0 : item.action,
                                id: link == null ? void 0 : link.id,
                                title: link == null ? void 0 : link.title,
                                icon: link == null ? void 0 : link.flag,
                                count: link == null ? void 0 : link.destination_count
                              }, null, 8, ["type", "id", "title", "icon", "count"])
                            ]);
                          }), 128))
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: _ctx.localePath(item == null ? void 0 : item.url),
                  class: "text-base font-bold leading-130 transition-all duration-150 hover:text-white/40"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t(item == null ? void 0 : item.title))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t(item == null ? void 0 : item.title)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
            } else {
              return [
                (item == null ? void 0 : item.action) ? (openBlock(), createBlock(_component_Dropdown, {
                  key: 0,
                  position: "left"
                }, {
                  button: withCtx(() => [
                    createVNode("button", {
                      class: ["text-base font-bold leading-130 transition-all duration-150 hover:text-white/40", { "!text-red": checkCurrentRoute(item == null ? void 0 : item.action) }]
                    }, toDisplayString((item == null ? void 0 : item.title) ? _ctx.$t(item == null ? void 0 : item.title) : "foo"), 3)
                  ]),
                  items: withCtx(() => [
                    createVNode("ul", {
                      class: ["relative block grid p-4", [
                        (item == null ? void 0 : item.action) === "countries" ? "w-max grid-cols-2" : " w-full grid-cols-1"
                      ]]
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item == null ? void 0 : item.content, (link, i) => {
                        return openBlock(), createBlock("li", {
                          key: i,
                          class: "flex-shrink-0"
                        }, [
                          createVNode(_component_NavigationLink, {
                            type: item == null ? void 0 : item.action,
                            id: link == null ? void 0 : link.id,
                            title: link == null ? void 0 : link.title,
                            icon: link == null ? void 0 : link.flag,
                            count: link == null ? void 0 : link.destination_count
                          }, null, 8, ["type", "id", "title", "icon", "count"])
                        ]);
                      }), 128))
                    ], 2)
                  ]),
                  _: 2
                }, 1024)) : (openBlock(), createBlock(_component_NuxtLink, {
                  key: 1,
                  to: _ctx.localePath(item == null ? void 0 : item.url),
                  class: "text-base font-bold leading-130 transition-all duration-150 hover:text-white/40"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t(item == null ? void 0 : item.title)), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/NavigationWrapper.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c90377e2"]]);
const homeStore = useHomeStore();
const _sfc_main$8 = {
  name: "FormSelect",
  emits: ["on-toggle", "input"],
  props: {
    addInfo: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Object],
      default: ""
    },
    options: {
      type: Array,
      required: true
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    labelKey: {
      type: String,
      default: "name"
    },
    infoKey: {
      type: String,
      default: "info"
    },
    valueKey: {
      type: String,
      default: "value"
    },
    selectedOptionStyles: {
      type: String,
      default: ""
    },
    defaultIconStyle: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Select"
    },
    optionsStyle: {
      type: String,
      default: ""
    },
    optionStyle: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledOption: {
      type: String,
      default: "disabled"
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showOptions: false,
      targetIsVisible: false,
      selectedValue: void 0
    };
  },
  watch: {
    value: {
      handler() {
        this.updateValueByProp();
      },
      deep: true,
      immediate: true
    },
    options() {
      this.updateValueByProp();
    }
  },
  computed: {
    languageSwitch() {
      return homeStore.languageSwitch;
    }
  },
  methods: {
    focusOut() {
      homeStore.languageTrigger(false);
      this.showOptions = false;
    },
    toggleSelect() {
      if (!this.disabled) {
        this.showOptions = !this.showOptions;
        homeStore.languageTrigger(this.showOptions);
        this.$emit("on-toggle", this.showOptions);
      }
    },
    findOption(option) {
      var _a;
      return (_a = this.options) == null ? void 0 : _a.find(
        (o) => (
          // eslint-disable-next-line
          o == option || // eslint-disable-next-line
          o[this.valueKey] == option[this.valueKey] || // eslint-disable-next-line
          o[this.valueKey] == option
        )
      );
    },
    onSelect(option) {
      this.selectedValue = option;
      this.toggleSelect();
      this.$emit("input", option[this == null ? void 0 : this.valueKey] || option);
    },
    isActive(option) {
      return this.selectedValue === option || this.selectedValue && this.selectedValue[this.valueKey] === option[this.valueKey];
    },
    updateValueByProp() {
      this.selectedValue = ![void 0, null, ""].includes(this.value) && this.valueKey ? this.findOption(this.value) : void 0;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    tabindex: "0",
    class: "relative flex items-center"
  }, _attrs))} data-v-48e234da><div class="${ssrRenderClass([[
    { "!cursor-not-allowed": $props.disabled },
    $props.error ? "border-red" : "border-gray-500",
    $props.selectedOptionStyles,
    $props.dark ? "bg-white/[0.06] border-white/[0.12]" : "bg-gray-100 border-gray-500"
  ], "rounded-md inline-flex items-center border cursor-pointer"])}" data-v-48e234da>`);
  ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "selectedOption", { value: $data.selectedValue }, () => {
    var _a;
    _push(`<div class="${ssrRenderClass([[
      { "text-gray/40": $props.disabled },
      { "text-red": $props.error },
      $props.dark ? "text-white" : "text-black"
    ], "text-sm leading-130 flex items-center gap-2"])}" data-v-48e234da>${ssrInterpolate($data.selectedValue ? $data.selectedValue[$props.labelKey] || $data.selectedValue : $props.placeholder)} `);
    if ($props.addInfo) {
      _push(`<p class="text-gray font-normal" data-v-48e234da>${ssrInterpolate((_a = $data.selectedValue) == null ? void 0 : _a.info)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  }, _push, _parent);
  _push(`</div>`);
  if ($data.showOptions || $options.languageSwitch) {
    _push(`<div class="${ssrRenderClass([[$props.optionsStyle], "grid grid-cols-3 w-fit absolute top-10 z-50 p-4 min-w-[200px] border border-solid border-white/20 rounded-xl w-auto h-auto z-50 backdrop-blur"])}" data-v-48e234da>`);
    ssrRenderSlot(_ctx.$slots, "options", {}, () => {
      _push(`<!--[-->`);
      ssrRenderList($props.options, (option, idx) => {
        _push(`<button type="button" class="${ssrRenderClass([[
          $props.optionStyle,
          $props.dark ? $options.isActive(option) ? "text-white" : "text-white" : $options.isActive(option) ? "" : "text-black"
        ], "flex items-center space-x-2 transition-200 relative cursor-pointer max-w-full w-full p-2 hover:bg-white/[4%] rounded-lg"])}"${ssrIncludeBooleanAttr(option[$props.disabledOption]) ? " disabled" : ""} data-v-48e234da>`);
        ssrRenderSlot(_ctx.$slots, "option", {
          option,
          index: idx
        }, () => {
          _push(`<div data-v-48e234da>${ssrInterpolate(option[$props.labelKey])}</div>`);
        }, _push, _parent);
        _push(`<i class="${ssrRenderClass([{
          "opacity-0": !$options.isActive(option)
        }, "transition-200 icon-check text-lg text-white inline-block"])}" data-v-48e234da></i></button>`);
      });
      _push(`<!--]-->`);
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Select.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-48e234da"]]);
const _imports_0 = "" + publicAssetsURL("svg/flags/uz.svg");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  props: {
    optionStyles: {},
    isMobile: { type: Boolean, default: false }
  },
  setup(__props) {
    useI18n();
    const router = useRouter();
    const languageList = ref([
      { value: "ru", name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", img: "/svg/flags/ru.svg" },
      { value: "kk", name: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430", img: "/svg/flags/kk.svg" },
      { value: "tk", name: "T\xFCrkmen", img: "/svg/flags/tk.svg" },
      { value: "en", name: "English", img: "/svg/flags/en.svg" },
      { value: "ky", name: "\u049A\u044B\u0440\u0433\u044B\u0437\u0447\u0430", img: "/svg/flags/ky.svg" },
      { value: "az", name: "Az\u0259rbaycan", img: "/svg/flags/az.svg" },
      { value: "uz", name: "O\u2019zbekcha", img: "/svg/flags/uz.svg" },
      { value: "tr", name: "T\xFCrk", img: "/svg/flags/tr.svg" },
      { value: "hu", name: "Magyar", img: "/svg/flags/hu.svg" }
    ]);
    const activeLang = ref();
    const switchLanguage = async (value) => {
      localStorage.setItem("locale", value);
      router.go(0);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormSelect = __nuxt_component_0;
      _push(ssrRenderComponent(_component_FormSelect, mergeProps({
        onFocusout: _ctx.languageTrigger,
        value: activeLang.value,
        options: languageList.value,
        "label-key": "name",
        "value-key": "value",
        "selected-option-styles": "!bg-transparent select-none border-none",
        "option-style": "hover:bg-gray-500 cursor-pointer select-none p-2",
        "options-style": `right-0 min-w-max ${_ctx.optionStyles}`,
        onInput: switchLanguage
      }, _attrs), {
        selectedOption: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g;
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", (_a = activeLang.value) == null ? void 0 : _a.img)}${ssrRenderAttr("alt", (_b = activeLang.value) == null ? void 0 : _b.name)} class="${ssrRenderClass([{ "mr-[10px]": _ctx.isMobile }, "mr-[10px] w-6 h-6"])}"${_scopeId}>`);
            if (_ctx.isMobile) {
              _push2(`<span class="text-white text-base font-medium leading-130"${_scopeId}>${ssrInterpolate((_c = activeLang.value) == null ? void 0 : _c.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock("img", {
                src: (_d = activeLang.value) == null ? void 0 : _d.img,
                alt: (_e = activeLang.value) == null ? void 0 : _e.name,
                key: (_f = activeLang.value) == null ? void 0 : _f.img,
                class: ["mr-[10px] w-6 h-6", { "mr-[10px]": _ctx.isMobile }]
              }, null, 10, ["src", "alt"])),
              _ctx.isMobile ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-white text-base font-medium leading-130"
              }, toDisplayString((_g = activeLang.value) == null ? void 0 : _g.name), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        option: withCtx(({ option }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (option) {
              _push2(`<div class="flex items-center space-x-2"${_scopeId}>`);
              if (option == null ? void 0 : option.value) {
                _push2(`<img${ssrRenderAttr("src", `/svg/flags/${option == null ? void 0 : option.value}.svg`)}${ssrRenderAttr("alt", option == null ? void 0 : option.name)} class="w-[22px] h-[22px]"${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="locale icon"${_scopeId}>`);
              }
              _push2(`<span class="text-white text-sm font-medium leading-130"${_scopeId}>${ssrInterpolate(option == null ? void 0 : option.name)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              option ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center space-x-2"
              }, [
                (option == null ? void 0 : option.value) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: `/svg/flags/${option == null ? void 0 : option.value}.svg`,
                  alt: option == null ? void 0 : option.name,
                  class: "w-[22px] h-[22px]"
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: _imports_0,
                  alt: "locale icon"
                })),
                createVNode("span", { class: "text-white text-sm font-medium leading-130" }, toDisplayString(option == null ? void 0 : option.name), 1)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguageSwitcher/LanguageSwitcher.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Value",
  __ssrInlineRender: true,
  props: {
    title: {},
    search: {},
    slug: {},
    breadcrumb: {}
  },
  setup(__props) {
    useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "text-white space-y-0.5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath(`/destination/${_ctx.slug}`),
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(ssrRenderComponent(unref(Highlighter), {
              class: "text-base text-white font-medium leading-130",
              "highlight-class-name": "bg-[#E54545] text-white rounded",
              "search-words": [(_a2 = _ctx.search) != null ? _a2 : ""],
              "text-to-highlight": _ctx.title
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-xs text-white/80 font-normal leading-130"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("countries"))}</span><span class="mx-0.5"${_scopeId}> / </span><span${_scopeId}>${ssrInterpolate((_b = (_a = _ctx.breadcrumb) == null ? void 0 : _a.country) == null ? void 0 : _b.title)}</span>`);
            if ((_c = _ctx.breadcrumb) == null ? void 0 : _c.title) {
              _push2(`<span class="mx-0.5"${_scopeId}> / </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>${ssrInterpolate((_d = _ctx.breadcrumb) == null ? void 0 : _d.title)}</span></p>`);
          } else {
            return [
              createVNode(unref(Highlighter), {
                class: "text-base text-white font-medium leading-130",
                "highlight-class-name": "bg-[#E54545] text-white rounded",
                "search-words": [(_b2 = _ctx.search) != null ? _b2 : ""],
                "text-to-highlight": _ctx.title
              }, null, 8, ["search-words", "text-to-highlight"]),
              createVNode("p", { class: "text-xs text-white/80 font-normal leading-130" }, [
                createVNode("span", null, toDisplayString(_ctx.$t("countries")), 1),
                createVNode("span", { class: "mx-0.5" }, " / "),
                createVNode("span", null, toDisplayString((_f = (_e = _ctx.breadcrumb) == null ? void 0 : _e.country) == null ? void 0 : _f.title), 1),
                ((_g = _ctx.breadcrumb) == null ? void 0 : _g.title) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "mx-0.5"
                }, " / ")) : createCommentVNode("", true),
                createVNode("span", null, toDisplayString((_h = _ctx.breadcrumb) == null ? void 0 : _h.title), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/Value.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center flex-col space-y-4 py-10 px-[124px]" }, _attrs))}><p class="text-xl text-white font-medium leading-130">${ssrInterpolate(_ctx.$t("empty_title"))}</p><p class="text-center text-base text-white/60 font-medium leading-130">${ssrInterpolate(_ctx.$t("empty_subtitle"))}</p></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/Empty.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Wrapper",
  __ssrInlineRender: true,
  props: {
    search: {},
    searchTrigger: { type: Boolean },
    searchContent: {},
    wrapperClass: {}
  },
  emits: ["handleUpdateSearch", "clear"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function clear() {
      emit("clear");
    }
    const handleUpdateSearch = (value) => {
      debounce("search", () => {
        emit("handleUpdateSearch", value);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_FormInput = __nuxt_component_0$2;
      const _component_SearchValue = _sfc_main$6;
      const _component_SearchEmpty = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["absolute w-[93%] right-12 transition-all duration-300", _ctx.wrapperClass]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FormInput, {
        "model-value": _ctx.search,
        class: ["transition-300", [_ctx.searchTrigger ? "opacity-100" : "opacity-0"]],
        placeholder: _ctx.$t("search"),
        "onUpdate:modelValue": handleUpdateSearch,
        "input-class": "pl-2 mt-0.5",
        "prefix-class": "leading-130",
        focus: _ctx.searchTrigger
      }, {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.search) {
              _push2(`<button class="py-1.5 px-2 text-sm leading-120 rounded-md bg-white/[0.06] hover:bg-white/20 text-white transition-300"${_scopeId}>${ssrInterpolate(_ctx.$t("clear"))}</button>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.search ? (openBlock(), createBlock("button", {
                key: 0,
                onClick: clear,
                class: "py-1.5 px-2 text-sm leading-120 rounded-md bg-white/[0.06] hover:bg-white/20 text-white transition-300"
              }, toDisplayString(_ctx.$t("clear")), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.searchTrigger && _ctx.search) {
        _push(`<div class="relative w-full"><div class="absolute top-3 left-0 w-full border border-solid border-white/20 rounded-lg w-auto h-auto z-50 backdrop-blur z-50 shadow-md">`);
        if (((_a = _ctx.searchContent) == null ? void 0 : _a.length) > 0) {
          _push(`<ul class="list"><!--[-->`);
          ssrRenderList(_ctx.searchContent, (value, index) => {
            _push(ssrRenderComponent(_component_SearchValue, {
              key: index,
              search: _ctx.search,
              slug: value == null ? void 0 : value.slug,
              title: value == null ? void 0 : value.title,
              breadcrumb: value == null ? void 0 : value.region
            }, null, _parent));
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(ssrRenderComponent(_component_SearchEmpty, null, null, _parent));
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/Wrapper.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const destinationStore = useDestinationStore();
    const search = ref("");
    const searchTrigger = ref(false);
    const destinations = computed(() => destinationStore.destinationsSearch);
    const clear = () => {
      search.value = "";
    };
    const handleUpdateSearch = async (value) => {
      search.value = value;
      await destinationStore.fetchDestinations(search.value, void 0, void 0);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchWrapper = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))} data-v-74188a73>`);
      _push(ssrRenderComponent(_component_SearchWrapper, {
        class: [searchTrigger.value ? "max-w-full" : "max-w-0"],
        search: search.value,
        "search-trigger": searchTrigger.value,
        "search-content": destinations.value,
        onHandleUpdateSearch: handleUpdateSearch,
        onClear: clear
      }, null, _parent));
      _push(`<button class="${ssrRenderClass([[searchTrigger.value ? "icon-xmark" : "icon-search"], "text-2xl text-white transition-all duration-150 hover:text-white/40"])}" data-v-74188a73></button></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/Search.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-74188a73"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "https://uic.group",
    target: "_blank",
    class: "cursor-pointer flex items-center footer-logo transition-all duration-500 group",
    "aria-label": "link"
  }, _attrs))} data-v-3eb63d49><svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3eb63d49><path d="M14.8212 5.76238C8.7411 4.30268 4.49212 7.77144 1.87856 3.87105C1.87073 3.85533 1.86291 3.84749 1.85508 3.8318C1.78466 3.72193 1.87856 3.56497 2.00375 3.59636C7.38738 4.88342 8.26379 4.08293 10.5252 4.3576C12.6145 4.60873 14.8212 5.76238 14.8212 5.76238Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M15.8933 6.74255C10.5409 5.94992 6.74573 9.96017 3.88176 6.87597C3.87394 6.86812 3.86611 6.85243 3.85046 6.84458C3.77222 6.75826 3.82699 6.6013 3.94436 6.60914C8.83502 6.97014 9.98529 6.10688 11.9964 6.02055C13.8743 5.94207 15.8933 6.74255 15.8933 6.74255Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M16.887 8.00643C12.2154 7.37076 10.2123 11.5772 6.42494 9.00311C6.41711 8.99526 6.40929 8.98742 6.39364 8.97173C6.31539 8.90109 6.33887 8.69706 6.44841 8.69706C10.5879 8.7049 11.6677 7.7396 13.4128 7.52772C15.776 7.24518 16.887 8.00643 16.887 8.00643Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M18.9919 9.39589C16.5505 9.65487 16.934 11.6168 14.2579 11.1774C13.9058 11.1224 13.984 10.8713 14.1405 10.8242C16.3863 10.1807 16.3863 9.74904 17.1923 9.42727C17.9591 9.13691 18.9919 9.39589 18.9919 9.39589Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M17.8885 8.79159C14.3673 8.86222 13.4675 11.3971 10.5017 10.5731C10.0479 10.4475 10.2044 10.1022 10.447 10.0708C13.8431 9.52929 14.0073 9.02703 15.2671 8.7288C16.4487 8.44628 17.8885 8.79159 17.8885 8.79159Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M15.8775 5.75447C15.854 5.7937 15.7992 5.80155 15.7601 5.78585C15.0324 5.36991 14.3517 4.88334 13.5693 4.34969C12.8336 3.85527 11.2529 3.18035 7.96643 3.33732C6.40142 3.4158 4.02262 3.73756 1.56555 2.05027C0.970846 1.65002 0.368316 0.967258 0.055314 0.331591C0.024016 0.276648 0.00836717 0.206014 0.000542654 0.135379C-0.00728186 0.064745 0.0709627 0.00982383 0.141405 0.0333615C6.22146 2.4819 7.95861 1.52447 11.785 2.41127C13.3578 2.78013 15.3063 5.07171 15.8698 5.64458C15.901 5.66814 15.901 5.71522 15.8775 5.75447Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M21.1674 19.1743C21.0968 19.3938 21.1124 19.6529 20.9717 19.8413C20.7994 20.0925 20.377 20.116 20.1735 19.8883C20.0405 19.7707 20.0405 19.5824 19.9935 19.4332C19.6884 18.0912 19.391 16.7491 19.0936 15.3993C19.0624 15.3052 19.0936 15.2423 19.1875 15.2032C19.3363 15.1639 19.3519 15.3287 19.3987 15.423C19.7352 16.3412 20.0482 17.2671 20.3926 18.1853C20.5021 18.4994 20.87 18.3972 21.1124 18.4758C21.3707 18.6405 21.2142 18.9466 21.1674 19.1743Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M21.5663 15.4697C21.5977 15.5561 21.5507 15.6581 21.4568 15.6737C21.4021 15.6816 21.3551 15.6737 21.3394 15.5952C21.1124 15.1401 20.9168 14.6614 20.6821 14.2063C20.377 13.9472 20.0561 13.6804 19.8684 13.3115C19.5319 12.7151 19.5631 11.9382 19.9387 11.3653C19.9699 11.326 19.9935 11.2789 20.0249 11.2397C20.0796 11.1612 20.197 11.1769 20.2282 11.2711C20.2517 11.3417 20.2673 11.4123 20.2987 11.4751C20.7212 12.8014 21.1282 14.1434 21.5663 15.4697Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M21.6289 9.15201C21.6133 9.50516 21.4803 9.83477 21.3942 10.1722C21.3863 10.1958 21.3786 10.2115 21.3551 10.2193C21.3003 10.2429 21.2456 10.2036 21.2456 10.1487C21.2533 9.68566 21.4177 9.23049 21.3003 8.7753C21.1282 8.15532 20.7056 7.61383 20.6744 6.9546C20.6585 6.6093 20.7447 6.27184 20.8153 5.93438C20.5647 5.40858 20.4473 4.80427 20.5803 4.23139C20.6038 4.16076 20.6117 4.16076 20.6509 4.21568C20.8935 4.56885 21.2142 4.922 21.2142 5.38502C21.183 6.04424 20.8229 6.70347 21.0656 7.36269C21.2612 7.95129 21.6836 8.50063 21.6289 9.15201Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M23.6947 6.87666C23.6791 7.73992 22.9279 8.43053 23.014 9.3095C23.014 9.64696 23.1 9.99227 23.0608 10.3297C23.0061 10.6279 22.6696 10.675 22.4272 10.7457C22.2863 10.8085 22.1298 10.6436 22.1689 10.5024C22.1689 9.48215 22.1689 8.45409 22.1689 7.43386C22.1845 7.01008 22.2863 6.56273 22.5758 6.24099C22.7558 6.02908 22.9435 5.8172 23.1391 5.6053C23.1782 5.5582 23.2017 5.50328 23.194 5.44834C23.1782 5.26 23.1391 5.09519 23.2252 4.87544C23.3582 4.60077 23.5305 4.43596 23.7103 4.25546C23.7418 4.22408 23.7886 4.23977 23.7965 4.279C23.9218 4.83621 23.7965 5.44049 23.5382 5.94276C23.6009 6.24099 23.6947 6.55489 23.6947 6.87666Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M33.5778 3.72176C32.5136 4.01996 32.0206 4.38096 31.5981 4.71842C31.5981 4.71842 32.5606 4.38096 33.9455 4.23187C37.8738 3.80024 38.1006 5.26778 42.4984 3.5648C42.647 3.54126 42.6861 3.65897 42.647 3.72176C42.0601 4.74198 41.4106 5.87206 38.9536 5.97408C36.2775 6.08397 34.8847 5.0088 32.3727 5.33057C30.7687 5.53461 29.9392 6.03687 29.4774 6.34295C34.955 5.29132 34.5011 7.70847 39.869 6.42143C39.9317 6.40571 40.0022 6.39002 40.0649 6.39787C40.2055 6.41356 40.2605 6.58623 40.1743 6.68041C40.1352 6.72748 40.0805 6.77458 40.0413 6.82165C39.3371 7.5829 38.5936 8.41477 36.0895 8.22643C33.1474 8.00668 32.9597 6.17814 27.3413 7.57505C32.7874 7.55151 32.6936 9.34082 36.794 8.80718C36.9348 8.79148 37.0208 8.96414 36.9113 9.05831C36.8487 9.11323 36.7781 9.16033 36.7234 9.20742C36.1054 9.69398 35.2053 10.2904 33.5152 9.94511C29.9939 9.20742 30.4401 7.7477 25.9093 8.5482C29.4383 8.64237 29.1958 10.0157 32.8189 10.3532C32.8189 10.3532 32.8189 10.3532 32.8265 10.3532C33.0222 10.3767 33.0771 10.6357 32.9127 10.7456C32.7874 10.8319 32.6465 10.8947 32.5136 10.9496C29.8688 11.9777 28.6402 8.65022 25.3928 9.39577C27.7169 9.5998 27.529 10.3846 29.6262 10.9575C29.853 11.0203 29.8297 11.3263 29.5792 11.3499C27.0909 11.601 27.3101 9.92157 25.7841 9.85878C25.3772 9.84309 25.0016 10.0628 24.7981 10.4238C24.1956 11.4754 24.4381 12.4721 24.399 13.0136C24.5398 13.5787 24.7513 14.1281 24.759 14.7244C24.7669 15.1404 24.7278 15.572 24.5946 15.9722C24.3442 16.8041 24.0939 17.6361 23.8356 18.4759C23.7809 18.6484 23.7886 18.8367 23.8512 19.0016C23.9451 19.2528 24.0392 19.496 24.0783 19.7628C24.1721 20.2101 24.1095 20.6731 23.953 21.1048C23.6244 21.9131 23.2956 22.7214 22.967 23.5376C22.9044 23.6866 22.8576 23.8438 22.7479 23.9693C22.5837 24.0007 22.5993 23.7888 22.6149 23.6866C22.9358 20.6652 23.2409 17.6438 23.5539 14.6224L23.8044 13.9004C23.3114 14.3242 23.0923 14.9127 22.7714 15.4386C22.7323 15.5641 22.5446 15.5876 22.5055 15.4465C22.5367 14.9206 22.607 14.3949 22.6228 13.869C22.6696 13.3354 22.662 12.7939 22.842 12.2838C23.0453 11.7658 23.4365 11.3499 23.7418 10.9026C24.2425 10.259 24.6181 9.52917 24.8763 8.76008C25.0328 8.28922 25.3616 7.87328 25.7841 7.6143C27.2474 6.68825 28.1002 5.88776 29.4853 4.83615C30.7608 3.87085 31.7467 3.11745 32.3103 2.88988C34.8847 1.8304 40.057 2.96836 44.4859 0.0803438C44.5954 0.0175552 44.7363 0.143111 44.6503 0.323609C44.2356 1.37524 43.7426 2.05015 42.5687 2.6309C39.1883 4.3025 35.3071 3.23518 33.5778 3.72176Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M23.3114 5.53435C23.3114 5.53435 23.0217 5.02423 22.3175 4.96145C21.7854 4.91437 21.543 5.09487 21.543 5.09487C21.543 5.09487 22.1846 4.90652 22.6855 5.35385C23.1861 5.80117 22.9123 6.18573 22.9123 6.18573C22.9123 6.18573 23.46 5.86396 23.3114 5.53435Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M23.28 5.46431C23.28 5.46431 22.9123 5.07193 22.161 5.04053C22.161 5.04053 22.607 5.15039 22.6619 5.39368C22.7558 5.85671 22.349 6.47669 22.2707 6.77492C22.2081 7.04174 23.28 5.46431 23.28 5.46431Z" fill="#EFEFEF" data-v-3eb63d49></path></svg><svg class="opacity-0 invisible w-0 ml-2 footer-text transition-all duration-500" data-v-82c499f6="" width="91" height="21" viewBox="0 0 91 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3eb63d49><path data-v-82c499f6="" d="M47.8634 16.1741C46.4974 16.3996 45.1145 16.5041 43.7305 16.4867C41.1347 16.4867 38.3511 14.7773 38.3511 10.0045V7.21105C38.3511 2.15027 41.2692 0.710917 43.9145 0.710917C45.2366 0.699117 46.5573 0.7966 47.8634 1.00234C48.0474 1.02368 48.2175 1.10542 48.2175 1.3151V2.35638C48.2175 2.50209 48.136 2.56609 47.9482 2.56609H47.8668C46.6413 2.463 45.6854 2.42035 43.918 2.42035C41.988 2.42035 40.2421 3.46166 40.2421 7.21105V10.0045C40.2421 13.4448 41.8005 14.7988 43.7339 14.7988C44.9984 14.7988 45.8588 14.717 46.3474 14.6742V8.71438C46.3431 8.66178 46.3494 8.60881 46.3664 8.55878C46.383 8.50876 46.4099 8.46267 46.4449 8.42342C46.4802 8.38413 46.5229 8.35248 46.5708 8.33042C46.6187 8.30833 46.6703 8.29628 46.7228 8.29502H47.8456C47.9522 8.30051 48.0529 8.34722 48.126 8.42539C48.1994 8.50353 48.2395 8.6071 48.2387 8.71438V15.7156C48.2418 15.8247 48.2054 15.9313 48.1366 16.0156C48.0675 16.0999 47.9703 16.1561 47.8634 16.1741Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M55.9801 6.33666C55.0132 6.29817 54.0452 6.36851 53.0939 6.54633V15.9252C53.099 16.0269 53.0652 16.1266 52.9992 16.2037C52.9333 16.2811 52.8407 16.3303 52.7397 16.3409H51.6596C51.555 16.3354 51.4569 16.2886 51.3864 16.2109C51.3161 16.1329 51.2794 16.0303 51.2843 15.9252V5.79644C51.2903 5.69179 51.3279 5.59142 51.3915 5.50839C51.4555 5.42537 51.5426 5.36351 51.6419 5.33089C52.8246 4.80847 54.2591 4.74805 55.9801 4.74805C56.2527 4.74805 56.4193 4.76936 56.4193 5.06078V6.01681C56.4193 6.2336 56.3769 6.33666 55.9801 6.33666Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M62.8716 16.4866C59.8191 16.4866 58.2679 14.4647 58.2679 11.4011V9.81601C58.2679 6.75254 59.826 4.73389 62.8716 4.73389C65.9172 4.73389 67.4756 6.75254 67.4756 9.81601V11.4011C67.4756 14.4647 65.9066 16.4866 62.8716 16.4866ZM65.6764 9.81601C65.6764 7.68365 64.8231 6.33672 62.8716 6.33672C60.9204 6.33672 60.088 7.67299 60.088 9.81601V11.4011C60.088 13.5333 60.9204 14.8838 62.8716 14.8838C64.8231 14.8838 65.6764 13.5476 65.6764 11.4011V9.81601Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M74.4024 16.4864H74.2043C72.7875 16.4864 69.9263 15.6939 69.9263 11.5892V5.29521C69.9217 5.24218 69.9283 5.18881 69.9455 5.1385C69.9627 5.08816 69.9902 5.04199 70.0263 5.00288C70.0622 4.96379 70.1058 4.93262 70.1545 4.91137C70.2033 4.89011 70.2557 4.87923 70.3085 4.8794H71.3889C71.4411 4.8802 71.493 4.8918 71.5406 4.91348C71.5885 4.93517 71.6312 4.96648 71.6664 5.00548C71.7017 5.04448 71.7284 5.09033 71.7453 5.14016C71.7622 5.19001 71.7685 5.24278 71.7642 5.29521V11.5892C71.7642 14.0771 72.8266 14.8836 74.2149 14.8836H74.4024C75.7908 14.8836 76.8531 14.0911 76.8531 11.5892V5.29521C76.8488 5.24307 76.8551 5.19059 76.8717 5.14099C76.8884 5.09139 76.9147 5.04571 76.9497 5.00676C76.9844 4.96782 77.0268 4.93642 77.0742 4.91454C77.1215 4.89262 77.1728 4.88068 77.225 4.8794H78.3051C78.3575 4.8802 78.4092 4.8918 78.457 4.91348C78.5046 4.93517 78.5476 4.96648 78.5829 5.00548C78.6179 5.04448 78.6448 5.09033 78.6618 5.14016C78.6784 5.19001 78.685 5.24278 78.6804 5.29521V11.5892C78.6804 15.6939 75.812 16.4864 74.4024 16.4864Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M85.7597 16.4868C84.9451 16.4759 84.1328 16.3999 83.3303 16.2593V20.0301C83.3303 20.0821 83.3202 20.1332 83.3004 20.1812C83.2807 20.2289 83.2517 20.2724 83.2153 20.3092C83.1786 20.3458 83.1353 20.3749 83.0877 20.3946C83.0398 20.4143 82.9888 20.4246 82.9372 20.4246H81.8748C81.8241 20.4241 81.7739 20.4135 81.7275 20.3935C81.681 20.3732 81.6392 20.3438 81.6042 20.3069C81.5689 20.2703 81.5417 20.2266 81.5239 20.1792C81.5058 20.1318 81.4975 20.0809 81.4995 20.0301V5.68647C81.4995 5.41639 81.5632 5.29199 81.9351 5.21025C83.1866 4.90572 84.4686 4.74478 85.7563 4.73047C88.8512 4.73047 90.2857 6.74909 90.2857 9.87656V11.3728C90.2892 14.6531 88.791 16.4868 85.7597 16.4868ZM88.4581 9.88011C88.4581 7.69089 87.8173 6.27642 85.7597 6.27642C84.9457 6.28116 84.1334 6.35007 83.3303 6.48256V14.7348C84.1337 14.8671 84.9457 14.9374 85.7597 14.9445C87.7961 14.9445 88.4581 13.6117 88.4581 11.3905V9.88011Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M11.7163 16.3161C10.7813 16.4619 8.17466 16.6467 7.27175 16.6467C3.263 16.6467 0.543091 15.6373 0.543091 10.5838V1.37196C0.543951 1.31859 0.555423 1.26596 0.576928 1.21711C0.598433 1.16828 0.629109 1.1242 0.667817 1.08748C0.706239 1.05074 0.75183 1.02209 0.801434 1.0032C0.851324 0.984315 0.904371 0.975573 0.957416 0.977459H4.3431C4.39615 0.975087 4.44948 0.983487 4.49937 1.0022C4.54926 1.02091 4.59514 1.04951 4.63385 1.08634C4.67227 1.12317 4.70324 1.16745 4.72446 1.21651C4.74567 1.26559 4.75685 1.31845 4.75743 1.37196V10.5838C4.75743 12.4602 5.38078 13.0715 6.85743 13.0715C7.52407 13.0694 8.18986 13.0266 8.85134 12.9436V1.37196C8.85163 1.31845 8.86281 1.26559 8.88403 1.21651C8.90524 1.16745 8.93621 1.12317 8.97492 1.08634C9.01363 1.04951 9.05922 1.02091 9.10911 1.0022C9.159 0.983487 9.21233 0.975087 9.26566 0.977459H12.6298C12.7397 0.972602 12.8466 1.01129 12.9283 1.08508C13.0098 1.15891 13.0591 1.26196 13.0654 1.37196V14.7099C13.0654 15.8756 12.7113 16.1704 11.7163 16.3161Z" fill="#EFEFEF" data-v-3eb63d49></path><path data-v-82c499f6="" d="M19.5853 16.4618H16.1784C16.0694 16.4592 15.9659 16.4138 15.8896 16.3353C15.8137 16.257 15.7709 16.1518 15.7709 16.0427V1.37193C15.7721 1.31918 15.7833 1.26716 15.8042 1.21879C15.8251 1.17042 15.8555 1.12665 15.8934 1.09002C15.9312 1.05339 15.9757 1.02459 16.0247 1.00528C16.0734 0.985966 16.1259 0.976509 16.1784 0.977451H19.5853C19.6383 0.975051 19.6917 0.983452 19.7415 1.00217C19.7914 1.02088 19.8373 1.04951 19.8757 1.08633C19.9144 1.12313 19.9454 1.16742 19.9666 1.2165C19.9878 1.26556 19.999 1.31844 19.9996 1.37193V16.0427C19.9999 16.0975 19.9896 16.1518 19.9689 16.2027C19.9483 16.2535 19.9179 16.2998 19.8795 16.339C19.8407 16.3778 19.7952 16.4087 19.7444 16.4298C19.6939 16.451 19.6398 16.4618 19.5853 16.4618Z" fill="#EFEFEF" data-v-3eb63d49></path><path data-v-82c499f6="" d="M31.6294 16.2734C30.6846 16.5436 29.7043 16.6696 28.7219 16.6465C24.9007 16.6465 22.3262 14.564 22.3262 9.79103V7.65867C22.3262 2.8715 24.9007 0.78891 28.7219 0.78891C29.7043 0.76774 30.684 0.893507 31.6294 1.16207C31.9623 1.26869 32.0864 1.32909 32.0864 1.62054V4.28954C32.0864 4.55962 31.9623 4.68402 31.7323 4.68402H31.6684C30.7032 4.57085 29.7327 4.50917 28.7609 4.49922C27.6384 4.49922 26.636 4.99678 26.636 7.64444V9.7768C26.636 12.4031 27.6347 12.9256 28.7609 12.9256C29.7327 12.9146 30.7032 12.8518 31.6684 12.7372H31.7074C31.9554 12.7372 32.0615 12.8616 32.0615 13.1317V15.8148C32.0864 16.0851 31.9623 16.1702 31.6294 16.2734Z" fill="#EFEFEF" data-v-3eb63d49></path></svg></a>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/UICLogo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UICLogo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3eb63d49"]]);
const mobileLinks = [
  {
    text: "about_us_title",
    url: "/#about"
  },
  {
    text: "countries",
    url: "/#country"
  },
  {
    text: "religions",
    url: "/#religion"
  },
  {
    text: "heritage_map",
    url: "/map"
  },
  {
    text: "help",
    url: "/help"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Mobile",
  __ssrInlineRender: true,
  emits: ["handleMenu"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const destinationStore = useDestinationStore();
    const destinations = computed(() => destinationStore.destinationsSearch);
    const search = ref("");
    const handleSearch = async (value) => {
      search.value = value;
      await destinationStore.fetchDestinations(search.value, void 0, void 0);
    };
    const handleMenu = () => {
      emit("handleMenu");
    };
    const clear = () => {
      search.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchWrapper = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_LanguageSwitcher = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-0 left-0 pt-20 pb-6 h-screen w-full bg-dark text-white z-30" }, _attrs))}><div class="container h-full flex flex-col justify-between overflow-y-auto"><div>`);
      _push(ssrRenderComponent(_component_SearchWrapper, {
        class: "max-w-full",
        "wrapper-class": "relative left-0 w-full",
        search: search.value,
        "search-trigger": true,
        "search-content": destinations.value,
        onHandleUpdateSearch: handleSearch,
        onClear: clear
      }, null, _parent));
      _push(`<ul class="mt-6 space-y-6"><!--[-->`);
      ssrRenderList(unref(mobileLinks), (link, i) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: handleMenu,
          to: link == null ? void 0 : link.url,
          class: "text-white text-2xl font-bold leading-130"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(link == null ? void 0 : link.text))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(link == null ? void 0 : link.text)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_LanguageSwitcher, {
        isMobile: "",
        class: "inline-flex mt-6 border border-solid border-white/[8%] rounded-lg p-2",
        "option-styles": "!grid-cols-2 left-0 !-top-[250px] !p-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between mt-10"><span class="text-white text-sm font-normal leading-130"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}, ${ssrInterpolate(_ctx.$t("naming"))}</span>`);
      _push(ssrRenderComponent(UICLogo, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile/Mobile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean }
  },
  emits: ["handleShowMobile"],
  setup(__props, { emit: __emit }) {
    const mobileTrigger = ref(false);
    const destinationStore = useDestinationStore();
    const homeStore2 = useHomeStore();
    const countryList = computed(() => destinationStore.countryList);
    computed(
      () => destinationStore.religionListWithDestination
    );
    const mobile = computed(() => homeStore2.showMobile);
    const navigationLinks = ref([
      {
        title: "about_us_title",
        url: "/about"
      },
      {
        title: "countries",
        action: "countries",
        content: countryList
      },
      // {
      //   title: 'religions',
      //   action: 'religions',
      //   content: religionList,
      // },
      {
        title: "heritage_map",
        url: "/map"
      },
      {
        title: "help",
        url: "/help"
      },
      {
        title: "FAQ",
        url: "/faq"
      }
    ]);
    const scroll = useWindowScroll();
    const scrollTop = scroll.y;
    const windowIsScrolled = ref(false);
    const handleShowMobile = () => {
      mobileTrigger.value = !mobileTrigger.value;
      homeStore2.mobileTrigger(mobileTrigger.value);
    };
    watch(
      () => scrollTop,
      (value) => {
        if (value.value) {
          windowIsScrolled.value = true;
        } else {
          windowIsScrolled.value = false;
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_CommonLogo = _sfc_main$c;
      const _component_NavigationWrapper = __nuxt_component_2$1;
      const _component_LanguageSwitcher = _sfc_main$7;
      const _component_Search = __nuxt_component_4;
      const _component_Mobile = _sfc_main$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 w-full z-[51] !border-b !border-b-transparent transition-all duration-300", [
          { "!bg-dark/90 !border-b-white/20": windowIsScrolled.value },
          { "bg-dark": mobileTrigger.value }
        ]]
      }, _attrs))}><div class="lg:py-8 py-4 header-gradient relative z-40"><div class="container flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/"),
        class: "inline-block lg:w-[381px] w-[265px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonLogo, { key: _ctx.loading }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(_component_CommonLogo, { key: _ctx.loading }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative lg:flex items-center space-x-6 hidden">`);
      _push(ssrRenderComponent(_component_NavigationWrapper, {
        loading: _ctx.loading,
        navigations: navigationLinks.value
      }, null, _parent));
      _push(`<hr class="relative w-0.5 h-5 bg-white/10 border-none rounded-[10px]">`);
      _push(ssrRenderComponent(_component_LanguageSwitcher, null, null, _parent));
      _push(`<hr class="relative w-0.5 h-5 bg-white/10 border-none rounded-[10px]">`);
      _push(ssrRenderComponent(_component_Search, null, null, _parent));
      _push(`</div><button class="text-white text-[32px] leading-22 block lg:hidden"><template><span class="${ssrRenderClass([[mobileTrigger.value && mobile.value ? "icon-xmark" : "icon-menu"], "transition-all duration-300"])}"></span></template></button></div></div>`);
      if (mobileTrigger.value && mobile.value) {
        _push(ssrRenderComponent(_component_Mobile, { onHandleMenu: handleShowMobile }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { UICLogo as U, _sfc_main as _ };
//# sourceMappingURL=Header-9178e243.mjs.map
