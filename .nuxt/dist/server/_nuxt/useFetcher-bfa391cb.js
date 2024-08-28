var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { c as useNuxtApp, e as useRequestEvent } from "../server.mjs";
import { ref } from "vue";
import { parse, serialize } from "cookie-es";
import { appendHeader } from "h3";
import destr from "destr";
import { isEqual } from "ohash";
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const toEmbed = (url) => {
  let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  let match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return "error";
  }
};
const formatPhoneNumber = (number) => {
  const format = number == null ? void 0 : number.replace(/\D/g, "").match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
  return `+${format && format[1] ? format[1] : ""}
          ${format && format[2] ? format[2] : ""}
          ${format && format[3] ? format[3] : ""} ${format && format[4] ? format[4] : ""}${format && format[5] ? format[5] : ""}`;
};
function generateUUID() {
  let d = new Date().getTime();
  let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
const timeouts = {};
const cTimeout = (key = "key") => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key]);
    timeouts[key] = void 0;
  }
};
const debounce = (key = "key", fn = () => {
}, timeout = 500) => {
  const sTimeout = (key2, fn2, timeout2) => {
    cTimeout(key2);
    timeouts[key2] = setTimeout(() => {
      try {
        fn2();
      } catch (e) {
        console.log(e);
      }
      timeouts[key2] = void 0;
    }, timeout2);
  };
  return sTimeout(key, fn, timeout);
};
function calculateNumberWithShortcuts(number) {
  const symbols = {
    B: 1e9,
    M: 1e6,
    K: 1e3
  };
  for (const symbol in symbols) {
    if (number >= symbols[symbol]) {
      const formattedNumber = number / symbols[symbol];
      return formattedNumber.toFixed(1) + symbol;
    }
  }
  return number.toString();
}
class ApiFetcher {
  constructor(baseUrl) {
    __publicField(this, "baseUrl");
    this.baseUrl = baseUrl;
  }
  generateFingerprint() {
    const cookie = useCookie("visitorId");
    if (!cookie.value) {
      cookie.value = generateUUID();
    }
    return cookie.value;
  }
  $service(options) {
    const locale = useCookie("locale");
    return $fetch.create({
      ...options,
      baseURL: this.baseUrl,
      headers: {
        Fingerprint: this.generateFingerprint(),
        ...options == null ? void 0 : options.headers,
        "Accept-Language": locale.value || "en"
      }
    });
  }
  $get(endpoint, options) {
    return new Promise((resolve, reject) => {
      this.$service(options)(endpoint).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error.response);
      });
    });
  }
  $post(endpoint, options) {
    return new Promise((resolve, reject) => {
      this.$service({ ...options, method: "POST" })(endpoint).then((response) => {
        resolve(response);
      }).catch((error) => reject(error.response));
    });
  }
  $put(endpoint, options) {
    return new Promise((resolve, reject) => {
      this.$service({ ...options, method: "PUT" })(endpoint).then((response) => {
        resolve(response);
      }).catch((error) => reject(error.response));
    });
  }
  $patch(endpoint, options) {
    return new Promise((resolve, reject) => {
      this.$service({ ...options, method: "PATCH" })(endpoint).then((response) => {
        resolve(response);
      }).catch((error) => reject(error.response));
    });
  }
  $delete(endpoint, options) {
    return new Promise((resolve, reject) => {
      this.$service({ ...options, method: "DELETE" })(endpoint).then((response) => {
        resolve(response);
      }).catch((error) => reject(error.response));
    });
  }
}
const $api = new ApiFetcher("https://tabarrukziyorat.uz/api/v1/");
export {
  $api as $,
  calculateNumberWithShortcuts as c,
  debounce as d,
  formatPhoneNumber as f,
  toEmbed as t
};
//# sourceMappingURL=useFetcher-bfa391cb.js.map
