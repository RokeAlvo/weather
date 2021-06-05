<template>
  <v-card>
    <v-card-title>
      {{ $vuetify.lang.t("$vuetify.inputCity") }}
    </v-card-title>
    <v-card-text align="center">
      <v-row>
        <v-col>
          <v-form v-model="valid" ref="form" @submit.prevent="onSubmit">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="searchText"
                  :label="$vuetify.lang.t('$vuetify.inputCity')"
                  :rules="validateRules.city"
                  @input="onInput"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn type="submit" :disabled="isDisabledButton">
                  {{ $vuetify.lang.t("$vuetify.getWeather") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <history-bar :items="history" @city-selected="selectCity" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-snackbar v-model="snackbar" color="error">
      {{ $vuetify.lang.t("$vuetify.notFoundLocation") }}
    </v-snackbar>
  </v-card>
</template>
<script>
import { api } from "@/services/api/api";
import HistoryBar from "@/components/HistoryBar";
import { requestHistoryService } from "@/services/storageServices/requestHistory.service";

export default {
  name: "InputCity",
  components: { HistoryBar },
  data() {
    return {
      isLoading: false,
      history: [],
      snackbar: false,
      valid: true,
      searchText: "",
      isDisabledButton: true,
      validateRules: {
        city: [(v) => !!v || this.errors.required],
      },
    };
  },
  computed: {
    errors() {
      return {
        required: this.$vuetify.lang.t("$vuetify.required"),
      };
    },
  },
  mounted() {
    this.history = requestHistoryService.get();
  },
  methods: {
    onInput(v) {
      if (v?.length > 1) this.isDisabledButton = false;
    },
    async selectCity(city) {
      if (!this.isLoading) {
        this.isLoading = true;
        await this.loadWeather(city);
        this.isLoading = false;
      }
    },
    async loadWeather(city) {
      try {
        const result = await api.find(city, this.$vuetify.lang.current);
        if (result.cod === 200) {
          this.$emit("get-weather", result);
          requestHistoryService.add(city);
        } else {
          this.snackbar = true;
        }
      } catch (e) {
        this.snackbar = true;
      } finally {
        this.$refs.form.reset();
        this.searchText = "";
      }
    },
    async onSubmit() {
      this.$refs.form.validate();
      this.isDisabledButton = true;
      await this.loadWeather(this.searchText);
    },
  },
};
</script>
