<template>
  <WeatherCardBase
    v-if="weather"
    :city="weather.name"
    :temp-max="maxTemp"
    :temp-min="minTemp"
    :cloud="weather.clouds.all"
    :wind-speed="weather.wind.speed"
  />
</template>

<script>
import WeatherCardBase from "@/components/WeatherCard/WeatherCardBase";
export default {
  name: "WeatherCard",
  components: { WeatherCardBase },
  props: {
    /**
     * @type {WeatherResponse}
     */
    weather: {
      type: Object,
      default: null,
    },
  },
  computed: {
    maxTemp() {
      if (this.weather) {
        return Math.floor(this.weather.main.temp_max);
      }
      return undefined;
    },
    minTemp() {
      if (this.weather) {
        return Math.floor(this.weather.main.temp_min);
      }
      return undefined;
    },
  },
};
</script>
