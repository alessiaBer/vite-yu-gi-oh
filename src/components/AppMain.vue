<script>
import MainSelect from "./MainSelect.vue";
import CounterComponent from "./CounterComponent.vue";
import CardsList from "./CardsList.vue";
import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    MainSelect,
    CounterComponent,
    CardsList,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    performSelection() {
      const url = store.YUGI_API + `?archetype=${store.selectArch}`;
      if (store.selectArch === "") {
        this.fetchLoadedCard();
      } else {
        store.fetchCard(url);
      }
    },
    fetchLoadedCard() {
      const url =
        store.YUGI_API + `?num=${store.cardLoaded}&offset=${store.offset}`;
      store.fetchCard(url);
    },
    performLoading() {
      store.cardLoaded += 20;
      this.fetchLoadedCard();
    },
  },
  mounted() {
    this.fetchLoadedCard();
  },
};
</script>
<template>
  <main>
    <div class="main_container">
      <MainSelect @makeSelection="performSelection()" />
      <CounterComponent :cards="store.cards" v-if="store.cards" />
      <CardsList @loadMoreCards="performLoading()" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
