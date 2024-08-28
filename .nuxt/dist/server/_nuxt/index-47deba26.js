import { _ as _sfc_main$6 } from "./Breadcrumb-90707320.js";
import { _ as __nuxt_component_5 } from "./Wrapper-ba6738ca.js";
import { _ as _sfc_main$4 } from "./Label-05217919.js";
import { _ as __nuxt_component_0 } from "./Input-5e85d57a.js";
import { defineComponent, mergeProps, useSSRContext, ref, unref, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __nuxt_component_0$1 } from "./Preloader-bddb5d1e.js";
import { b as useI18n, _ as __nuxt_component_1 } from "../server.mjs";
import { _ as _sfc_main$5 } from "./Button-b4a346b5.js";
import { f as formatPhoneNumber, $ as $api } from "./useFetcher-bfa391cb.js";
import { VueRecaptcha } from "vue3-recaptcha-v2";
import { u as useForm, _ as _sfc_main$7 } from "./useForm-0edd66a5.js";
import { required, email } from "@vuelidate/validators";
import "vue-toastification";
import { u as useSeoMeta } from "./composables-ffbf1183.js";
import { u as useMainStore } from "./main-aa42713b.js";
import "@vueuse/components";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
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
import "ohash";
import "./Attractions-171c95f6.js";
import "@vuelidate/core";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Group",
  __ssrInlineRender: true,
  props: {
    label: { default: "Label" },
    forId: { default: "input" },
    required: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    dark: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormLabel = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2 flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FormLabel, { label: _ctx.label, forId: _ctx.forId, required: _ctx.required, info: _ctx.info, dark: _ctx.dark }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Group.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    type: { default: "text" },
    placeholder: {},
    modelValue: {},
    disabled: { type: Boolean },
    error: { type: Boolean },
    maxlength: { default: void 0 },
    minlength: { default: void 0 },
    max: { default: void 0 },
    min: { default: void 0 },
    inputClass: { default: void 0 },
    prefixClass: {},
    suffixClass: {},
    autocomplete: { type: Boolean, default: true },
    id: {},
    noResize: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const Input = ref();
    __expose({ Input });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "inline-flex items-stretch relative border rounded-lg border overflow-hidden w-full transition-300 bg-transparent border-white/20 min-h-[87px] focus-within:border-white/70",
          { "!border-red": _ctx.error }
        ]
      }, _attrs))} data-v-e2201289><textarea${ssrRenderAttrs(_temp0 = mergeProps({ value: _ctx.modelValue }, { type: _ctx.type, minlength: _ctx.minlength, maxlength: _ctx.maxlength, max: _ctx.max, min: _ctx.min, disabled: _ctx.disabled, placeholder: _ctx.placeholder }, {
        readonly: !_ctx.autocomplete,
        id: _ctx.id,
        class: [[
          _ctx.inputClass,
          "font-medium resize-none h-full leading-130 text-base placeholder:text-base placeholder:font-normal bg-transparent flex-grow px-4 py-3 outline-none text-white placeholder:text-white/20",
          { "resize-none": _ctx.noResize }
        ], "w-full"],
        placeholder: _ctx.$t(_ctx.placeholder),
        ref_key: "Input",
        ref: Input
      }), "textarea")} data-v-e2201289>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
      if (_ctx.maxlength) {
        _push(`<span class="absolute bottom-2 right-2 text-xs text-white/60 font-normal leading-130" data-v-e2201289>${ssrInterpolate(_ctx.modelValue.length + "/" + _ctx.maxlength)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Textarea_vue_vue_type_style_index_0_scoped_e2201289_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Textarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e2201289"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  props: {
    data: {},
    form: {},
    loading: { type: Boolean },
    stateLoading: { type: Boolean }
  },
  emits: ["submitForm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = unref(props.form);
    const captchaToken = ref("");
    useI18n();
    const callbackVerify = (token) => {
      captchaToken.value = token;
    };
    const callbackExpired = () => {
      captchaToken.value = "";
    };
    const emit = __emit;
    const submitForm = () => {
      var _a;
      form.$v.value.$touch();
      console.log(form);
      if (!form.$v.value.$invalid && captchaToken.value && ((_a = Object.values(form.values)) == null ? void 0 : _a.some((item) => item == null ? void 0 : item.length))) {
        emit("submitForm");
        form.$v.value.$reset();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWrapper = __nuxt_component_5;
      const _component_FormLabel = _sfc_main$4;
      const _component_FormInput = __nuxt_component_0;
      const _component_FormGroup = _sfc_main$3;
      const _component_FormTextarea = __nuxt_component_4;
      const _component_CommonPreloader = __nuxt_component_0$1;
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CommonButton = _sfc_main$5;
      _push(ssrRenderComponent(_component_SectionWrapper, mergeProps({
        title: "have_question_for_us",
        subtitle: "have_question_for_us_desc",
        loading: _ctx.stateLoading
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-9"${_scopeId}><div class="grid lg:grid-cols-2 gap-x-[70px] gap-y-2 max-xl:items-start"${_scopeId}><div class="flex-y-center gap-6 max-sm:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormLabel, {
              class: "w-full",
              label: _ctx.stateLoading ? "Name" : _ctx.$t("form.name"),
              "for-id": "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormLabel, {
              class: "w-full",
              label: _ctx.stateLoading ? "Email" : _ctx.$t("form.email"),
              "for-id": "email"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="max-lg:hidden"${_scopeId}></div><div class="grid grid-cols-2 gap-x-6 gap-y-5"${_scopeId}><div class="max-sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormLabel, {
              class: "w-full mb-2 sm:hidden",
              label: _ctx.stateLoading ? "Nmae" : _ctx.$t("form.name"),
              "for-id": "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormInput, {
              placeholder: "Samantha Smith",
              modelValue: unref(form).values.full_name,
              "onUpdate:modelValue": ($event) => unref(form).values.full_name = $event,
              error: unref(form).$v.value.full_name.$error
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="max-sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormLabel, {
              class: "w-full mb-2 sm:hidden",
              label: _ctx.stateLoading ? "Contact" : _ctx.$t("form.contact"),
              "for-id": "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormInput, {
              placeholder: "example@gmail.com",
              modelValue: unref(form).values.email,
              "onUpdate:modelValue": ($event) => unref(form).values.email = $event,
              error: unref(form).$v.value.email.$error
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_FormGroup, {
              class: "col-span-2",
              label: _ctx.stateLoading ? "Message" : _ctx.$t("form.message")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormTextarea, {
                    modelValue: unref(form).values.message,
                    "onUpdate:modelValue": ($event) => unref(form).values.message = $event,
                    error: unref(form).$v.value.message.$error,
                    placeholder: _ctx.stateLoading ? "Your message" : _ctx.$t("your_message"),
                    maxlength: "300"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormTextarea, {
                      modelValue: unref(form).values.message,
                      "onUpdate:modelValue": ($event) => unref(form).values.message = $event,
                      error: unref(form).$v.value.message.$error,
                      placeholder: _ctx.stateLoading ? "Your message" : _ctx.$t("your_message"),
                      maxlength: "300"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="border border-white/10 rounded-xl p-5 flex flex-col justify-between gap-4 max-lg:order-3 max-lg:mt-4"${_scopeId}><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "93px",
              height: "21px",
              "border-radius": "4px",
              "preloader-class": "mb-2",
              loading: _ctx.stateLoading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-y-center space-x-2 text-white/60"${_scopeId2}><i class="icon-location-pin text-xl leading-5"${_scopeId2}></i><p class="font-medium text-base leading-130"${_scopeId2}>${ssrInterpolate(_ctx.$t("location_contact"))}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-y-center space-x-2 text-white/60" }, [
                      createVNode("i", { class: "icon-location-pin text-xl leading-5" }),
                      createVNode("p", { class: "font-medium text-base leading-130" }, toDisplayString(_ctx.$t("location_contact")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "100%",
              height: "21px",
              "border-radius": "4px",
              loading: _ctx.stateLoading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<p class="mt-2 font-bold leading-130 text-white text-lg lg:text-xl"${_scopeId2}>${ssrInterpolate((_a = _ctx.data) == null ? void 0 : _a.location)}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "mt-2 font-bold leading-130 text-white text-lg lg:text-xl" }, toDisplayString((_b = _ctx.data) == null ? void 0 : _b.location), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><hr class="w-full border-0 h-px bg-white/10"${_scopeId}><div class="flex max-lg:flex-col"${_scopeId}><div class="w-full lg:w-1/2 max-lg:border-b lg:border-r border-white/10 max-lg:pb-4 lg:pr-5 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "93px",
              height: "21px",
              "border-radius": "4px",
              "preloader-class": "mb-2",
              loading: _ctx.stateLoading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-y-center space-x-2 text-white/60"${_scopeId2}><i class="icon-mail text-xl leading-5"${_scopeId2}></i><p class="font-medium text-base leading-130"${_scopeId2}>${ssrInterpolate(_ctx.$t("email_address"))}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-y-center space-x-2 text-white/60" }, [
                      createVNode("i", { class: "icon-mail text-xl leading-5" }),
                      createVNode("p", { class: "font-medium text-base leading-130" }, toDisplayString(_ctx.$t("email_address")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "100%",
              height: "21px",
              "border-radius": "4px",
              loading: _ctx.stateLoading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", `mailto:${(_a = _ctx.data) == null ? void 0 : _a.email}`)} target="_blank" class="inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"${_scopeId2}>${ssrInterpolate((_b = _ctx.data) == null ? void 0 : _b.email)}</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: `mailto:${(_c = _ctx.data) == null ? void 0 : _c.email}`,
                      target: "_blank",
                      class: "inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"
                    }, toDisplayString((_d = _ctx.data) == null ? void 0 : _d.email), 9, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full lg:w-1/2 max-lg:pt-4 lg:pl-5 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "93px",
              height: "21px",
              "border-radius": "4px",
              "preloader-class": "mb-2",
              loading: _ctx.stateLoading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-y-center gap-2 text-white/60"${_scopeId2}><i class="icon-phone text-xl leading-5"${_scopeId2}></i><p class="font-medium text-base leading-130"${_scopeId2}>${ssrInterpolate(_ctx.$t("phone_number"))}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-y-center gap-2 text-white/60" }, [
                      createVNode("i", { class: "icon-phone text-xl leading-5" }),
                      createVNode("p", { class: "font-medium text-base leading-130" }, toDisplayString(_ctx.$t("phone_number")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonPreloader, {
              width: "100%",
              height: "21px",
              "border-radius": "4px",
              loading: _ctx.stateLoading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", `tel:${(_a = _ctx.data) == null ? void 0 : _a.phone_number}`)} target="_blank" class="inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"${_scopeId2}>${ssrInterpolate(("formatPhoneNumber" in _ctx ? _ctx.formatPhoneNumber : unref(formatPhoneNumber))((_b = _ctx.data) == null ? void 0 : _b.phone_number))}</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: `tel:${(_c = _ctx.data) == null ? void 0 : _c.phone_number}`,
                      target: "_blank",
                      class: "inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"
                    }, toDisplayString(("formatPhoneNumber" in _ctx ? _ctx.formatPhoneNumber : unref(formatPhoneNumber))((_d = _ctx.data) == null ? void 0 : _d.phone_number)), 9, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-3 lg:mt-6 max-lg:order-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VueRecaptcha), {
              class: "mb-4",
              theme: "dark",
              onVerify: callbackVerify,
              onExpired: callbackExpired
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_i18n_t, {
              tag: "p",
              keypath: "by_sending_this_message_you_signing_privacy_agreement",
              class: "text-white/60 font-medium leading-130 text-base mb-4"
            }, {
              privacy_agreement: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: _ctx.localePath("/page/privacy-agreement"),
                    class: "text-white hover:text-red-100 font-semibold transition-300"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("privacy_agreement"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("privacy_agreement")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: _ctx.localePath("/page/privacy-agreement"),
                      class: "text-white hover:text-red-100 font-semibold transition-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("privacy_agreement")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonButton, {
              onClick: submitForm,
              loading: _ctx.loading,
              class: "group",
              "button-class": "min-w-full sm:min-w-[280px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex-y-center gap-2 text-base font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("send"))} <i class="icon-send text-2xl leading-6 text-white translate-x-0 group-hover:translate-x-2 transition-300"${_scopeId2}></i></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex-y-center gap-2 text-base font-semibold" }, [
                      createTextVNode(toDisplayString(_ctx.$t("send")) + " ", 1),
                      createVNode("i", { class: "icon-send text-2xl leading-6 text-white translate-x-0 group-hover:translate-x-2 transition-300" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-9" }, [
                createVNode("div", { class: "grid lg:grid-cols-2 gap-x-[70px] gap-y-2 max-xl:items-start" }, [
                  createVNode("div", { class: "flex-y-center gap-6 max-sm:hidden" }, [
                    createVNode(_component_FormLabel, {
                      class: "w-full",
                      label: _ctx.stateLoading ? "Name" : _ctx.$t("form.name"),
                      "for-id": "name"
                    }, null, 8, ["label"]),
                    createVNode(_component_FormLabel, {
                      class: "w-full",
                      label: _ctx.stateLoading ? "Email" : _ctx.$t("form.email"),
                      "for-id": "email"
                    }, null, 8, ["label"])
                  ]),
                  createVNode("div", { class: "max-lg:hidden" }),
                  createVNode("div", { class: "grid grid-cols-2 gap-x-6 gap-y-5" }, [
                    createVNode("div", { class: "max-sm:col-span-2" }, [
                      createVNode(_component_FormLabel, {
                        class: "w-full mb-2 sm:hidden",
                        label: _ctx.stateLoading ? "Nmae" : _ctx.$t("form.name"),
                        "for-id": "name"
                      }, null, 8, ["label"]),
                      createVNode(_component_FormInput, {
                        placeholder: "Samantha Smith",
                        modelValue: unref(form).values.full_name,
                        "onUpdate:modelValue": ($event) => unref(form).values.full_name = $event,
                        error: unref(form).$v.value.full_name.$error
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    createVNode("div", { class: "max-sm:col-span-2" }, [
                      createVNode(_component_FormLabel, {
                        class: "w-full mb-2 sm:hidden",
                        label: _ctx.stateLoading ? "Contact" : _ctx.$t("form.contact"),
                        "for-id": "email"
                      }, null, 8, ["label"]),
                      createVNode(_component_FormInput, {
                        placeholder: "example@gmail.com",
                        modelValue: unref(form).values.email,
                        "onUpdate:modelValue": ($event) => unref(form).values.email = $event,
                        error: unref(form).$v.value.email.$error
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    createVNode(_component_FormGroup, {
                      class: "col-span-2",
                      label: _ctx.stateLoading ? "Message" : _ctx.$t("form.message")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FormTextarea, {
                          modelValue: unref(form).values.message,
                          "onUpdate:modelValue": ($event) => unref(form).values.message = $event,
                          error: unref(form).$v.value.message.$error,
                          placeholder: _ctx.stateLoading ? "Your message" : _ctx.$t("your_message"),
                          maxlength: "300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  createVNode("div", { class: "border border-white/10 rounded-xl p-5 flex flex-col justify-between gap-4 max-lg:order-3 max-lg:mt-4" }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_CommonPreloader, {
                        width: "93px",
                        height: "21px",
                        "border-radius": "4px",
                        "preloader-class": "mb-2",
                        loading: _ctx.stateLoading
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex-y-center space-x-2 text-white/60" }, [
                            createVNode("i", { class: "icon-location-pin text-xl leading-5" }),
                            createVNode("p", { class: "font-medium text-base leading-130" }, toDisplayString(_ctx.$t("location_contact")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_CommonPreloader, {
                        width: "100%",
                        height: "21px",
                        "border-radius": "4px",
                        loading: _ctx.stateLoading
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("p", { class: "mt-2 font-bold leading-130 text-white text-lg lg:text-xl" }, toDisplayString((_a = _ctx.data) == null ? void 0 : _a.location), 1)
                          ];
                        }),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    createVNode("hr", { class: "w-full border-0 h-px bg-white/10" }),
                    createVNode("div", { class: "flex max-lg:flex-col" }, [
                      createVNode("div", { class: "w-full lg:w-1/2 max-lg:border-b lg:border-r border-white/10 max-lg:pb-4 lg:pr-5 space-y-2" }, [
                        createVNode(_component_CommonPreloader, {
                          width: "93px",
                          height: "21px",
                          "border-radius": "4px",
                          "preloader-class": "mb-2",
                          loading: _ctx.stateLoading
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex-y-center space-x-2 text-white/60" }, [
                              createVNode("i", { class: "icon-mail text-xl leading-5" }),
                              createVNode("p", { class: "font-medium text-base leading-130" }, toDisplayString(_ctx.$t("email_address")), 1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["loading"]),
                        createVNode(_component_CommonPreloader, {
                          width: "100%",
                          height: "21px",
                          "border-radius": "4px",
                          loading: _ctx.stateLoading
                        }, {
                          default: withCtx(() => {
                            var _a, _b;
                            return [
                              createVNode("a", {
                                href: `mailto:${(_a = _ctx.data) == null ? void 0 : _a.email}`,
                                target: "_blank",
                                class: "inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"
                              }, toDisplayString((_b = _ctx.data) == null ? void 0 : _b.email), 9, ["href"])
                            ];
                          }),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      createVNode("div", { class: "w-full lg:w-1/2 max-lg:pt-4 lg:pl-5 space-y-2" }, [
                        createVNode(_component_CommonPreloader, {
                          width: "93px",
                          height: "21px",
                          "border-radius": "4px",
                          "preloader-class": "mb-2",
                          loading: _ctx.stateLoading
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex-y-center gap-2 text-white/60" }, [
                              createVNode("i", { class: "icon-phone text-xl leading-5" }),
                              createVNode("p", { class: "font-medium text-base leading-130" }, toDisplayString(_ctx.$t("phone_number")), 1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["loading"]),
                        createVNode(_component_CommonPreloader, {
                          width: "100%",
                          height: "21px",
                          "border-radius": "4px",
                          loading: _ctx.stateLoading
                        }, {
                          default: withCtx(() => {
                            var _a, _b;
                            return [
                              createVNode("a", {
                                href: `tel:${(_a = _ctx.data) == null ? void 0 : _a.phone_number}`,
                                target: "_blank",
                                class: "inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"
                              }, toDisplayString(("formatPhoneNumber" in _ctx ? _ctx.formatPhoneNumber : unref(formatPhoneNumber))((_b = _ctx.data) == null ? void 0 : _b.phone_number)), 9, ["href"])
                            ];
                          }),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-3 lg:mt-6 max-lg:order-2" }, [
                    createVNode(unref(VueRecaptcha), {
                      class: "mb-4",
                      theme: "dark",
                      onVerify: callbackVerify,
                      onExpired: callbackExpired
                    }),
                    createVNode(_component_i18n_t, {
                      tag: "p",
                      keypath: "by_sending_this_message_you_signing_privacy_agreement",
                      class: "text-white/60 font-medium leading-130 text-base mb-4"
                    }, {
                      privacy_agreement: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: _ctx.localePath("/page/privacy-agreement"),
                          class: "text-white hover:text-red-100 font-semibold transition-300"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("privacy_agreement")), 1)
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CommonButton, {
                      onClick: submitForm,
                      loading: _ctx.loading,
                      class: "group",
                      "button-class": "min-w-full sm:min-w-[280px]"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "flex-y-center gap-2 text-base font-semibold" }, [
                          createTextVNode(toDisplayString(_ctx.$t("send")) + " ", 1),
                          createVNode("i", { class: "icon-send text-2xl leading-6 text-white translate-x-0 group-hover:translate-x-2 transition-300" })
                        ])
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const { t } = useI18n();
    const loading = ref(false);
    const toast = ref();
    computed(() => mainStore.faq);
    const popularAttractions = computed(() => mainStore.popularAttractions);
    const contactData = computed(() => mainStore.contact);
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
    const form = useForm(
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
    const formLoading = ref(false);
    function clearForm() {
      for (const key in form.values) {
        form.values[key] = "";
      }
    }
    function submit() {
      formLoading.value = true;
      $api.$post(`/about/UserQuestionCreate`, {
        body: form.values
      }).then(() => {
        toast.value.success(t("sent_successfully"));
        clearForm();
      }).catch((error) => {
        toast.value.error(`${error}`);
      }).finally(() => {
        setTimeout(() => {
          formLoading.value = false;
        }, 200);
        form.$v.value.$reset();
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBreadcrumb = _sfc_main$6;
      const _component_SectionContact = _sfc_main$1;
      const _component_SectionPopularAttractions = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark" }, _attrs))} data-v-c99fd94f><div class="faq-section pt-[90px] lg:pt-[136px]" data-v-c99fd94f>`);
      _push(ssrRenderComponent(_component_CommonBreadcrumb, mergeProps({ menu }, { class: "" }), null, _parent));
      _push(`</div><div class="bg-dark-200" data-v-c99fd94f>`);
      _push(ssrRenderComponent(_component_SectionContact, {
        data: contactData.value,
        form: unref(form),
        onSubmitForm: submit,
        loading: formLoading.value,
        "state-loading": loading.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SectionPopularAttractions, { popularAttractions: popularAttractions.value, loading: loading.value }, null, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_c99fd94f_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/help/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c99fd94f"]]);
export {
  index as default
};
//# sourceMappingURL=index-47deba26.js.map
