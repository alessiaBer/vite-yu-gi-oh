<script>
import { store } from "../store";
export default {
  name: "MainSelect",
  emits: ["makeSelection"],
  data() {
    return {
      store,
      archetypesList: [],
    };
  },
  computed: {
    getArchetypes() {
      for (let i = 0; i < store.cards.length; i++) {
        const archetypes = store.cards[i].archetype;

        if (
          !this.archetypesList.includes(archetypes) &&
          archetypes !== undefined
        ) {
          this.archetypesList.push(archetypes);
        } else {
          continue;
        }
      }
      return this.archetypesList;
    },
  },
};
</script>
<template>
  <div class="select_archetype">
    <select class="form-select" v-if="!store.loading" @change="$emit('makeSelection')">
      <option selected>-- Select archetype --</option>
      <option
      v-for="archetype in getArchetypes"
      >
        {{ archetype }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
