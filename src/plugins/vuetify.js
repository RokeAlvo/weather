import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

import en from "../locales/en";
import ru from "../locales/ru";

export default new Vuetify({
  lang: {
    locales: { en, ru },
    current: "ru",
  },
});
