<template>
    <div class="direction">
      <Header />
        <router-view />
      <Footer />
    </div>
</template>

<script setup>
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
</script>

<style lang="scss">
  .direction { 
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>