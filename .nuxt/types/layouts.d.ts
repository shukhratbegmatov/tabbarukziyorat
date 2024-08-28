import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default" | "empty"
declare module "C:/Users/User/Desktop/web-tabarruk-ziyorat/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}