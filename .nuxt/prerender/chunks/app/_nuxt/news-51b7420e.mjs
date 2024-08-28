import { d as defineStore } from '../server.mjs';
import { $ as $api } from './useFetcher-bfa391cb.mjs';

const useNewsStore = defineStore("newsStre", {
  state: () => ({
    newsList: [],
    newsLoading: false,
    newsCount: 0
  }),
  actions: {
    fetchNewsList(offset = 0, limit = 12) {
      this.newsLoading = true;
      return new Promise((resolve, reject) => {
        $api.$get("/news/NewsList", {
          params: { offset, limit }
        }).then((response) => {
          this.newsCount = response.count;
          this.newsList = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        }).finally(() => {
          this.newsLoading = false;
        });
      });
    }
  },
  getters: {}
});

export { useNewsStore as u };
//# sourceMappingURL=news-51b7420e.mjs.map
