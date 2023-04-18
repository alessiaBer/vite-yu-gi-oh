<script>
import MainSelect from "./MainSelect.vue";
import CounterComponent from "./CounterComponent.vue"
import CardsList from "./CardsList.vue";
import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    MainSelect,
    CounterComponent,
    CardsList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    performSelection() {
      const url = store.YUGI_API + `?archetype={{store.selectArch}}`
      store.fetchCard(url) 
    }
  },
  mounted() {
    store.fetchCard(store.YUGI_API + store.maxCardDisplay)
  }
};
</script>
<template>
  <main>
    <div class="main_container">
      <MainSelect @makeSelection="performSelection(archetype)"/>
      <CounterComponent :cards="store.cards" v-if="store.cards"/>
      <CardsList />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
