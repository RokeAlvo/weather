<template>
  <v-card class="pb-2">
    <v-card-subtitle>
      {{ $vuetify.lang.t("$vuetify.weatherNow") }}
    </v-card-subtitle>
    <v-card-title>
      {{ city }}
    </v-card-title>
    <v-card-text>
      {{ $vuetify.lang.t("$vuetify.temperature") }}: {{ tempText }}
    </v-card-text>
    <v-card-text>
      {{ $vuetify.lang.t("$vuetify.clouds") }}: {{ cloud }}%
    </v-card-text>
    <v-card-text>
      {{ $vuetify.lang.t("$vuetify.wind") }}: {{ windSpeed }}
      {{ $vuetify.lang.t("$vuetify.windMetric") }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "WeatherCardBase",
  props: {
    city: {
      type: String,
      required: true,
    },
    tempMin: {
      type: Number,
      required: true,
    },
    tempMax: {
      type: Number,
      required: true,
    },
    cloud: {
      type: Number,
      required: true,
    },
    windSpeed: {
      type: Number,
      required: true,
    },
  },
  computed: {
    tempText() {
      return `${this.getTempString(this.tempMin)}...${this.getTempString(
        this.tempMax
      )}`;
    },
  },
  methods: {
    getTempString(value) {
      if (value > 0) return "+" + value;
      return String(value);
    },
  },
};
</script>
