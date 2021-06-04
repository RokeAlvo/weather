<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />
      </div>

      <v-spacer></v-spacer>
      <v-menu
          bottom
          left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              @click="$vuetify.lang.current = 'ru'"
          >
            <v-list-item-title>RU</v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="$vuetify.lang.current = 'en'"
          >
            <v-list-item-title>EN</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col>
                <InputCity />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card class="pa-3">his</v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card class="pa-3">res</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
