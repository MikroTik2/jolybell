<template>
     <div class="notification-transtion">
          {{ title }}
     </div>
</template>

<script setup>

     const props = defineProps({
          title: {
               type: Boolean,
               required: true,
          },
     });

</script>

<style lang="scss" scoped>
     .notification-transition {
          position: fixed;
          bottom: 0;
          right: 0;
          width: 200px;
          height: 100px;
          background-color: #f9f9f9;
          color: #fff;
          text-align: center;
          padding: 10px;
     }
</style>