<script>
import MainSelect from "./MainSelect.vue";
import CardsList from "./CardsList.vue";
import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    MainSelect,
    CardsList,
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    store.fetchCard(store.YUGI_API)
  }
};
</script>
<template>
  <main>
    <div class="main_container">
      <MainSelect />
      <CardsList />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
