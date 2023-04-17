<script>
export default {
    name: 'LoaderComponent'
};
</script>
<template>
    <div class="loader d-flex flex-column align-items-center justify-content-center">
       <img class="rounded-circle" height="200" src="https://i.pinimg.com/originals/78/56/0f/78560f1998097c570eafc8cf9e30f8a3.gif" alt="Loading Gif">
        <span>Loading..</span>  
    </div>
    
</template>

<style lang="scss" scoped>
.loader {
    img {
        object-fit: cover;
        aspect-ratio: 1 / 1;
    }
}
</style>
