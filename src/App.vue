<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container class="d-flex">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('./assets/unnamed.png')"
            transition="scale-transition"
            width="40"
          />
        </div>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$vuetify.lang.current = 'ru'">
              <v-list-item-title>RU</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$vuetify.lang.current = 'en'">
              <v-list-item-title>EN</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col>
                <InputCity @get-weather="setWeather" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6">
            <WeatherCard :weather="weather" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import InputCity from "@/components/InputCity.vue";
import WeatherCard from "@/components/WeatherCard/WeatherCard";

export default {
  name: "App",

  components: { WeatherCard, InputCity },
  data() {
    return {
      /**
       * @type {WeatherResponse | null}
       */
      weather: null,
    };
  },
  methods: {
    setWeather(value) {
      this.weather = value;
    },
  },
};
</script>
