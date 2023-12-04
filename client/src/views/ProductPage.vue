<template>
     <ProductDetail @open-cart="openCart" :isVisibleCart="isCartVisible"/>
     <SidebarCart :isVisibleCart="isCartVisible" @close-cart="closeCart"/>

     <div :class="{ 'show': isCartVisible }" class="sidebar-overlay" @click="closeCart"></div>

</template>

<script setup>
     import { ref } from 'vue';

     import ProductDetail from '@/components/ProductDetail.vue';
     import SidebarCart from '@/components/SidebarCart.vue';

     const isCartVisible = ref(false);

     const openCart = () => {
          isCartVisible.value = true;
     };

     const closeCart = () => {
          isCartVisible.value = false;
     };
</script>