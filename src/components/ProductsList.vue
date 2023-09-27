<template>
    <div v-if="products.length > 0">
    <ProductsListItem v-for="product in products" :key="product.id" :product="product" />
</div>
<div v-else>
    <p class="font-bold">You haven't added any item yet</p>
</div>
</template>

<script>
import ProductsListItem from './ProductsListItem.vue'
    export default {
        props: ['products'],
        components: { ProductsListItem },
        
    }

</script>

<style scoped>

</style>