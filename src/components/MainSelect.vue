<script>
import { store } from '../store';
export default {
  name: "MainSelect",
  data() {
    return {
      store,
      ARCH_API: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
      archetypesList: []
    }
  },
  computed: {
    getArchetypes() {
      for (let i = 0; i < store.cards.length; i++) {
        const archetypes = store.cards[i].archetype

        if (!this.archetypesList.includes(archetypes) && archetypes !== undefined) {
          this.archetypesList.push(archetypes)
        } else {
          continue
        }
      }

      return this.archetypesList
    }
  },
  mounted() {
  }
};
</script>
<template>
  <div class="select_archetype">
    <select class="form-select" v-if="!store.loading">
      <option selected>--Select archetype--</option>
      <option v-for="archetype in getArchetypes">{{ archetype }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
