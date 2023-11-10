<template>      
     <div class="header-mobile-menu-side" :class="{ 'active': isVisibleMenu }">
          <div class="header-mobile-menu-side-hide" @click="closeMenu">приховати</div>
          <div class="header-mobile-menu-side-close" @click="closeMenu">
               <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon>
               </svg>
          </div>

          <ul class="header-mobile-menu-side-list">
               <li class="header-mobile-menu-side-list-item" v-for="(element, i) of menuItems" :key="i"> 
                    <a :href="element.path"> {{ element.name }} </a>
               </li>
          </ul>
     </div>
</template>

<script setup>
     import { ref } from 'vue';
     
     const emit = defineEmits();

     const menuItems = ref([
          { name: "Футболки", path: "/category/t-shirts" },
          { name: "Світшоти", path: "/category/sweatshirts" },
          { name: "Худі", path: "/category/hoodies" },
          { name: "Рюкзаки", path: "/category/bags" },
          { name: "Штани/Шорти", path: "/category/pants-shorts" },
          { name: "Поло", path: "/category/polo" },
          { name: "Сорочки", path: "/category/shirts" },
          { name: "Піжама", path: "/category/pajamas" },
          { name: "Шапки", path: "/category/hats" },
          { name: "Кепки", path: "/category/caps" },
          { name: "FAQ", path: "/faq" },
          { name: "Ваше замовлення", path: "/" },
     ]);

     const closeMenu = () => {
          emit("close-menu");
     };

     const props = defineProps({
          isVisibleMenu: {
               type: Boolean,
               required: false,
          },
     });
</script>

<style lang="scss">
     .header-mobile-menu-side {

          display: none;

          @media only screen and (max-width: 1024px) {
               background: var(--white);
               height: 100vh;
               display: block;
               overflow-y: auto;
               position: fixed;
               transition: all .5s;
               right: 0;
               top: 0;
               transform: translateX(100%);
               width: 280px;
               z-index: 30;

               @media only screen and (max-width: 320px) {
                    width: 100%;
               }

               &-hide {
                    align-items: center;
                    color: rgba(0,0,0,.15);
                    display: flex;
                    font-size: 15px;
                    height: 15px;
                    position: absolute;
                    right: 40px;
                    cursor: pointer;
                    top: 12px;
               }

               &-close {
                    fill: #d9d9d9;
                    cursor: pointer;
                    position: absolute;
                    right: 14px;
                    top: 12px;
               }

               &-list {
                    margin-bottom: 50px;
                    margin-top: 25px;

                    &-item {
                         border-bottom: 1px solid #f3f3f3;
                         box-sizing: border-box;
                         cursor: pointer;
                         font-size: 15px;
                         font-weight: 400;
                         width: 100%;
                         height: 50px;
                         max-height: 8vh;

                         &:hover {
                              cursor: pointer;
                              transition: opacity .2s;
                         }

                         a {
                              align-items: center;
                              display: flex;
                              height: 100%;
                              padding: 0 11px;
                              width: 100%;
                              color: var(--black);
                         }
                    }
               }
          }
     }

     .active {
          transform: translateX(0);
     }

</style>