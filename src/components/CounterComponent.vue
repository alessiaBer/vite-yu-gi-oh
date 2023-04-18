<script>
export default {
  name: 'CounterComponent',
  props: {
    cards: Array
  }
};
</script>
<template>
  <div class="counter">
    <span class="d-block p-3">Found {{ cards.length }} cards</span>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/common' as *;
    span {
      background-color: $dark;
      color: $light;
    }
</style>
