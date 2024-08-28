import { defineStore } from 'pinia'

import { $api } from '~/composables/useFetcher'
import { TCommonFetcher } from '~/types/common'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    partners: [],
    faq: [],
    popularAttractions: [],
    instagramPosts: [],
    mainData: {},
    contact: {},
    socials: {},
    staticFields: {},
  }),
  actions: {
    fetchPartners() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/common/PartnerList')
          .then((response) => {
            this.partners = response.results
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchFaq() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/about/FAQList')
          .then((response) => {
            this.faq = response.results
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchPopularAttractions() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/destination/DestinationListPopular')
          .then((response) => {
            this.popularAttractions = response.results
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchInstagramPost() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/instagram/InstagramPostList')
          .then((response) => {
            this.instagramPosts = response.results
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchMainData() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/about/MainGet')
          .then((response) => {
            this.mainData = response.results
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchContactData() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/contact/ContactGet')
          .then((response) => {
            this.contact = response
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchSocials() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/contact/ContactGet')
          .then((response) => {
            this.socials = response
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchStaticFields() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/common/StaticFieldsGet')
          .then((response) => {
            this.staticFields = response
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
  getters: {},
})
