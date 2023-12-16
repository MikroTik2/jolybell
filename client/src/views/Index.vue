<template>     
     <Hero />
</template>

<script setup>
     import { onMounted } from 'vue';
     import Hero from '@/components/Hero.vue';
     import api from '@/config/api';

     onMounted(async () => {
          
          const userData = localStorage.getItem('userData');

          if (!userData) {

               const response = await api.createGuestUser();

               localStorage.setItem('userData', JSON.stringify(response));

          };
     });

</script>