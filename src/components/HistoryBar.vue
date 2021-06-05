<template>
  <v-slide-group multiple show-arrows>
    <v-slide-item v-for="city in items" :key="city">
      <v-btn
        class="mx-2"
        active-class="purple white--text"
        depressed
        rounded
        @click="$emit('city-selected', city)"
      >
        {{ city }}
      </v-btn>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "HistoryBar",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped></style>
