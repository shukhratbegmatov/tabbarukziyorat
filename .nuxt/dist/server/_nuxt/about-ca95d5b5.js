import { d as defineStore } from "../server.mjs";
import { $ as $api } from "./useFetcher-bfa391cb.js";
const useAboutStore = defineStore("aboutStore", {
  state: () => ({
    aboutData: [],
    statistics: {},
    contacts: {},
    statements: []
  }),
  actions: {
    fetchAboutData() {
      return new Promise((resolve, reject) => {
        $api.$get("/about/AboutGet").then((response) => {
          this.aboutData = response;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchStatistics() {
      return new Promise((resolve, reject) => {
        $api.$get("/about/StatisticsGet").then((response) => {
          this.statistics = response;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchStatements() {
      return new Promise((resolve, reject) => {
        $api.$get("/about/StatementList").then((response) => {
          this.statements = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchContacts() {
      return new Promise((resolve, reject) => {
        $api.$get("/contact/ContactGet").then((response) => {
          this.contacts = response;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  },
  getters: {}
});
export {
  useAboutStore as u
};
//# sourceMappingURL=about-ca95d5b5.js.map
