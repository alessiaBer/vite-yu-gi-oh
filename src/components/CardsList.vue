<script>
import CardItem from './CardItem.vue'
export default {
    name: 'CardsList',
    components: {
        CardItem
    }
};
</script>
<template>
  <div class="cardlist_container">
    <div class="found">
      <span class="d-block p-3">Found .. cards</span>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <CardItem />
    </div>
  </div>
  
    
</template>

<style lang="scss" scoped></style>
