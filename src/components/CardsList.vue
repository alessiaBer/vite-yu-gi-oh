<script>
import { store } from "../store";
import CardItem from "./CardItem.vue";
import LoaderComponent from "./LoaderComponent.vue";
export default {
  name: "CardsList",
  components: {
    CardItem,
    LoaderComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="cardlist_container">
    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5"
      v-if="!store.loading"
    >
      <CardItem v-for="card in store.cards" :card="card" />
    </div>
    <LoaderComponent v-else />
  </div>
</template>

<style lang="scss" scoped></style>
