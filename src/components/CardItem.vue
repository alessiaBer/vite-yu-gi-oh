<script>
export default {
  name: "CardItem",
  props: {
    card: Object,
  },
};
</script>
<template>
  <div class="col">
    <div class="my_card">
      <img
        src="https://images.ygoprodeck.com/images/cards/34541863.jpg"
        :alt="card.name"
      />
      <div class="card_text text-center">
        <h4 class="text-uppercase text-white fs-6">{{ card.name }}</h4>
        <span class="archetype">{{ card.archetype }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
