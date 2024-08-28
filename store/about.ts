import { defineStore } from 'pinia'

import { $api } from '~/composables/useFetcher'
import { TCommonFetcher } from '~/types/common'

export const useAboutStore = defineStore('aboutStore', {
  state: () => ({
    aboutData: [],
    statistics: {},
    contacts: {},
    statements: [],
  }),
  actions: {
    fetchAboutData() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/about/AboutGet')
          .then((response) => {
            this.aboutData = response
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchStatistics() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/about/StatisticsGet')
          .then((response) => {
            this.statistics = response
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchStatements() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/about/StatementList')
          .then((response) => {
            this.statements = response.results
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchContacts() {
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher>('/contact/ContactGet')
          .then((response) => {
            this.contacts = response
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
