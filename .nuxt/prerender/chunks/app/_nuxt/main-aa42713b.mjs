import { d as defineStore } from '../server.mjs';
import { $ as $api } from './useFetcher-bfa391cb.mjs';

const useMainStore = defineStore("mainStore", {
  state: () => ({
    partners: [],
    faq: [],
    popularAttractions: [],
    instagramPosts: [],
    mainData: {},
    contact: {},
    socials: {},
    staticFields: {}
  }),
  actions: {
    fetchPartners() {
      return new Promise((resolve, reject) => {
        $api.$get("/common/PartnerList").then((response) => {
          this.partners = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchFaq() {
      return new Promise((resolve, reject) => {
        $api.$get("/about/FAQList").then((response) => {
          this.faq = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchPopularAttractions() {
      return new Promise((resolve, reject) => {
        $api.$get("/destination/DestinationListPopular").then((response) => {
          this.popularAttractions = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchInstagramPost() {
      return new Promise((resolve, reject) => {
        $api.$get("/instagram/InstagramPostList").then((response) => {
          this.instagramPosts = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchMainData() {
      return new Promise((resolve, reject) => {
        $api.$get("/about/MainGet").then((response) => {
          this.mainData = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchContactData() {
      return new Promise((resolve, reject) => {
        $api.$get("/contact/ContactGet").then((response) => {
          this.contact = response;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchSocials() {
      return new Promise((resolve, reject) => {
        $api.$get("/contact/ContactGet").then((response) => {
          this.socials = response;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchStaticFields() {
      return new Promise((resolve, reject) => {
        $api.$get("/common/StaticFieldsGet").then((response) => {
          this.staticFields = response;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  },
  getters: {}
});

export { useMainStore as u };
//# sourceMappingURL=main-aa42713b.mjs.map
