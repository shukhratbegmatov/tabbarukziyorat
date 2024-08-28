import { d as defineStore } from '../server.mjs';
import { $ as $api } from './useFetcher-bfa391cb.mjs';

const useDestinationStore = defineStore("destinationStore", {
  state: () => ({
    popularDestination: [],
    destinations: [],
    destinationsSearch: [],
    religionList: [],
    religionListWithDestination: [],
    countryList: [],
    attractionList: [],
    mediaList: [],
    destinationSingle: {},
    countryMediaList: [],
    next: null
  }),
  actions: {
    fetchDestinations(search, limit, religion, country) {
      return new Promise((resolve, reject) => {
        $api.$get("/destination/DestinationList", {
          params: {
            search,
            limit,
            destination_country__in: country,
            religion__in: religion
          }
        }).then((response) => {
          if (search) {
            this.destinationsSearch = response.results;
          } else {
            this.destinations = response.results;
          }
          this.next = response.next;
          resolve(response.results);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchPopularDestination() {
      return new Promise((resolve, reject) => {
        $api.$get("/destination/DestinationListPopular").then((response) => {
          this.popularDestination = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchSingleDestinations(id) {
      return new Promise((resolve, reject) => {
        $api.$get(`/destination/DestinationDetail/${id}`).then((response) => {
          this.destinationSingle = response;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchAttractions(id, route) {
      return new Promise((resolve, reject) => {
        $api.$get(
          `/destination/AttractionListRecommended/${id}/${route}`
        ).then((response) => {
          this.attractionList = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchDestinationMediaList(id, limit) {
      return new Promise((resolve, reject) => {
        $api.$get(`/destination/DestinationMediaList/${id}`, {
          params: {
            limit
          }
        }).then((response) => {
          this.mediaList = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchCountryMediaList(id, limit) {
      return new Promise((resolve, reject) => {
        $api.$get(`/destination/CountryMediaList/${id}`, {
          params: {
            limit
          }
        }).then((response) => {
          this.countryMediaList = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchReligionList(destination_country) {
      return new Promise((resolve, reject) => {
        $api.$get(`/destination/ReligionList`, {
          params: {
            destination_country
          }
        }).then((response) => {
          this.religionList = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchReligionListWithDestination() {
      return new Promise((resolve, reject) => {
        $api.$get("/destination/ReligionListWithDestinationCount").then((response) => {
          this.religionListWithDestination = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    fetchCountryList() {
      return new Promise((resolve, reject) => {
        $api.$get("/destination/CountryListWithDestinationCount").then((response) => {
          this.countryList = response.results;
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  },
  getters: {}
});

export { useDestinationStore as u };
//# sourceMappingURL=destination-7a1b9a3b.mjs.map
