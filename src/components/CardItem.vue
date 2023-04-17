<script>
export default {
    name: 'CardItem',
    props: {
        card: Object
    }
};
</script>
<template>
  <div class="card">
    <img :src="card.image" :alt="card.name">
    <h4>{{ card.name }}</h4>
    <span class="archetype">{{ card.archetype }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
