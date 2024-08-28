import { defineStore } from 'pinia'
import { $api } from '~/composables/useFetcher'
import { TCommonFetcher } from '~/types/common'
import { TNews } from '~/types/news'

export const useNewsStore = defineStore('newsStre', {
  state: () => ({
    newsList: [] as TNews[],
    newsLoading: false,
    newsCount: 0,
  }),
  actions: {
    fetchNewsList(offset: number = 0, limit: number = 12) {
      this.newsLoading = true
      return new Promise((resolve, reject) => {
        $api
          .$get<TCommonFetcher<TNews>>('/news/NewsList', {
            params: { offset, limit: limit },
          })
          .then((response) => {
            this.newsCount = response.count
            this.newsList = response.results
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
          .finally(() => {
            this.newsLoading = false
          })
      })
    },
  },
  getters: {},
})
