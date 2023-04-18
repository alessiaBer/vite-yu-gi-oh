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
  emits: ["loadMoreCards"],
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="cardlist_container">
    <div class="content" v-if="!store.loading">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
        <CardItem v-for="card in store.cards" :card="card" />
      </div>
      <button
        type="button"
        class="btn btn-dark text-center d-block mx-auto"
        @click="$emit('loadMoreCards')"
        v-if="store.selectArch === null || store.selectArch === ''"
      >
        Load More
      </button>
    </div>
    <LoaderComponent v-else />
  </div>
</template>

<style lang="scss" scoped></style>
