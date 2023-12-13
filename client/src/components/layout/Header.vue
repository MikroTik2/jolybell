<template>
     <header class="header">
          <div class="header-top">
               <div class="header-top-left">
               </div>

               <a href="/" class="header-top-logo">
                    <svg class="combined-logo" height="72" viewBox="0 0 225 72" xmlns="http://www.w3.org/2000/svg">
                         <path fill="white" d="M0 0v72h113V0H0zm24 48.46c0 2.52-.31 4.58-.93 6.2-.62 1.61-1.45 2.88-2.49 3.81a8.99 8.99 0 01-3.6 1.96c-1.35 .38-2.76 .57-4.23 .57h-1.92c-.57 0-1.19-.05-1.85-.14v-7.12c.43 .05.88 .07 1.35 .07h1.35c1.23 0 2.29-.31 3.17-.93s1.32-1.9 1.32-3.85V11H24v37.46zm28 .25c0 3.96-.99 7-2.96 9.11C47.06 59.94 44.22 61 40.5 61c-3.72 0-6.57-1.06-8.54-3.18C29.99 55.7 29 52.67 29 48.71V23.29c0-3.96 .99-6.99 2.96-9.11C33.93 12.06 36.78 11 40.5 11c3.72 0 6.56 1.06 8.54 3.18C51.01 16.3 52 19.33 52 23.29v25.42zM78 61H57V11h7.86v42.86H78V61zm12.93 0h-7.86V44.43L73.14 11h8.21l6 22.79 6-22.79h7.5l-9.92 33.43V61zm12.64 0H96v-7.57h7.57V61zM43.36 19.06c.71 .73 1.07 1.97 1.07 3.74v26.4c0 1.77-.36 3.02-1.07 3.74-.71 .72-1.67 1.08-2.86 1.08-1.2 0-2.15-.36-2.86-1.08-.71-.73-1.07-1.97-1.07-3.74V22.8c0-1.77 .36-3.02 1.07-3.74.71-.72 1.67-1.08 2.86-1.08s2.15 .36 2.86 1.08z"></path>
                         <path fill="white" d="M134.11 11c4.18 0 7.21 .95 9.08 2.86c1.87 1.91 2.81 4.79 2.81 8.64v1.79c0 2.57-.41 4.69-1.24 6.36c-0.83 1.67-2.14 2.91-3.94 3.71c2.19 0.81 3.73 2.13 4.63 3.96c0.9 1.83 1.35 4.08 1.35 6.75v4.07c0 3.86-1.02 6.8-3.06 8.82c-2.04 2.02-5.08 3.04-9.12 3.04H122V11H134.11z M130.01 18.14v13.21h3.13c1.5 0 2.68-.38 3.53-1.14c0.85-.76 1.27-2.14 1.27-4.14v-2.79c0-1.81-.33-3.12-.98-3.93c-0.66-0.81-1.69-1.21-3.09-1.21H130.01z M130.01 38.5v15.36h4.59c1.36 0 2.39-.36 3.09-1.07c0.7-0.71 1.06-2.06 1.06-3.86v-4.36c0-2.33-.4-3.93-1.2-4.79c-0.8-0.86-2.12-1.29-3.97-1.29H130.01z M158.86 32.07H170v7.14h-11.14v14.64H173V61h-22V11h22v7.14h-14.14V32.07z M204 11h7.86v42.86H225V61h-21V11z M178 11h7.86v42.86H199V61h-21V11z"></path>

                         <rect fill="white" x="122" y="0" width="90" height="2"></rect>
                         <rect fill="white" x="122" y="70" width="103" height="2"></rect>
                    </svg>
               </a>

               <div class="header-top-right">
               </div>
          </div>

          <div class="header-top-mobile">
               <div class="header-top-mobile-first">
                    <a href="/" class="header-top-mobile-first-logo">
                         <svg class="combined-logo" height="36" viewBox="0 0 225 72" xmlns="http://www.w3.org/2000/svg">
                              <path fill="white" d="M0 0v72h113V0H0zm24 48.46c0 2.52-.31 4.58-.93 6.2-.62 1.61-1.45 2.88-2.49 3.81a8.99 8.99 0 01-3.6 1.96c-1.35 .38-2.76 .57-4.23 .57h-1.92c-.57 0-1.19-.05-1.85-.14v-7.12c.43 .05.88 .07 1.35 .07h1.35c1.23 0 2.29-.31 3.17-.93s1.32-1.9 1.32-3.85V11H24v37.46zm28 .25c0 3.96-.99 7-2.96 9.11C47.06 59.94 44.22 61 40.5 61c-3.72 0-6.57-1.06-8.54-3.18C29.99 55.7 29 52.67 29 48.71V23.29c0-3.96 .99-6.99 2.96-9.11C33.93 12.06 36.78 11 40.5 11c3.72 0 6.56 1.06 8.54 3.18C51.01 16.3 52 19.33 52 23.29v25.42zM78 61H57V11h7.86v42.86H78V61zm12.93 0h-7.86V44.43L73.14 11h8.21l6 22.79 6-22.79h7.5l-9.92 33.43V61zm12.64 0H96v-7.57h7.57V61zM43.36 19.06c.71 .73 1.07 1.97 1.07 3.74v26.4c0 1.77-.36 3.02-1.07 3.74-.71 .72-1.67 1.08-2.86 1.08-1.2 0-2.15-.36-2.86-1.08-.71-.73-1.07-1.97-1.07-3.74V22.8c0-1.77 .36-3.02 1.07-3.74.71-.72 1.67-1.08 2.86-1.08s2.15 .36 2.86 1.08z"></path>
                              <path fill="white" d="M134.11 11c4.18 0 7.21 .95 9.08 2.86c1.87 1.91 2.81 4.79 2.81 8.64v1.79c0 2.57-.41 4.69-1.24 6.36c-0.83 1.67-2.14 2.91-3.94 3.71c2.19 0.81 3.73 2.13 4.63 3.96c0.9 1.83 1.35 4.08 1.35 6.75v4.07c0 3.86-1.02 6.8-3.06 8.82c-2.04 2.02-5.08 3.04-9.12 3.04H122V11H134.11z M130.01 18.14v13.21h3.13c1.5 0 2.68-.38 3.53-1.14c0.85-.76 1.27-2.14 1.27-4.14v-2.79c0-1.81-.33-3.12-.98-3.93c-0.66-0.81-1.69-1.21-3.09-1.21H130.01z M130.01 38.5v15.36h4.59c1.36 0 2.39-.36 3.09-1.07c0.7-0.71 1.06-2.06 1.06-3.86v-4.36c0-2.33-.4-3.93-1.2-4.79c-0.8-0.86-2.12-1.29-3.97-1.29H130.01z M158.86 32.07H170v7.14h-11.14v14.64H173V61h-22V11h22v7.14h-14.14V32.07z M204 11h7.86v42.86H225V61h-21V11z M178 11h7.86v42.86H199V61h-21V11z"></path>

                              <rect fill="white" x="122" y="0" width="90" height="2"></rect>
                              <rect fill="white" x="122" y="70" width="103" height="2"></rect>
                         </svg>
                    </a>
               </div>

               <div class="header-top-mobile-second">

                    <div class="header-top-mobile-second-other">
                         
                         <div @click="toggleSignIn" v-if="isUserInfo">
                              <svg width="21" height="21" class="account" xmlns="http://www.w3.org/2000/svg">
                                   <path fill="white" d="M10.5 0C6.82 0 3.82 3 3.82 6.68c0 2.29 1.16 4.31 2.92 5.52A9.534 9.534 0 00.95 21h1.91c0-4.26 3.37-7.64 7.64-7.64s7.64 3.37 7.64 7.64h1.91c0-3.95-2.37-7.35-5.79-8.8a6.68 6.68 0 002.92-5.52C17.18 3 14.18 0 10.5 0zm0 1.91c2.65 0 4.77 2.13 4.77 4.77s-2.13 4.77-4.77 4.77-4.77-2.12-4.77-4.77 2.12-4.77 4.77-4.77z"></path>
                              </svg>
                         </div>

                         <a href="/account" v-else>
                              <svg width="21" height="21" class="account" xmlns="http://www.w3.org/2000/svg">
                                   <path fill="white" d="M10.5 0C6.82 0 3.82 3 3.82 6.68c0 2.29 1.16 4.31 2.92 5.52A9.534 9.534 0 00.95 21h1.91c0-4.26 3.37-7.64 7.64-7.64s7.64 3.37 7.64 7.64h1.91c0-3.95-2.37-7.35-5.79-8.8a6.68 6.68 0 002.92-5.52C17.18 3 14.18 0 10.5 0zm0 1.91c2.65 0 4.77 2.13 4.77 4.77s-2.13 4.77-4.77 4.77-4.77-2.12-4.77-4.77 2.12-4.77 4.77-4.77z"></path>
                              </svg>
                         </a>

                         <div @click="toggleCart">
                              <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
                                   <path fill="white" d="M6.02 7L4.27 0H.11v1.75h2.84l3.5 14h11.81L20.89 7H6.02zm10.93 7H7.77L6.45 8.75h12.03L16.95 14zM9.3 16.63c1.21 0 2.19.98 2.19 2.19S10.5 21 9.3 21s-2.19-.98-2.19-2.19.98-2.18 2.19-2.18zm3.93 2.18a2.19 2.19 0 104.379.001 2.19 2.19 0 00-4.379-.001z"></path>
                              </svg>
                         </div>
                    </div>

                    <div class="header-top-mobile-second-menu" @click="toggleMenu">
                         <svg width="36" height="20" xmlns="http://www.w3.org/2000/svg">
                              <path fill="white" d="M36,2H0V0h36V2z M36,18H0v2h36V18z M36,9H0v2h36V9z"></path>
                         </svg>
                    </div>
               </div>
          </div>

          <div class="header-bottom">
               <div class="header-bottom-menu">
                    <div class="header-bottom-menu-item" v-for="(element, i) of menuItems" :key="i">
                         <a class="header-bottom-menu__link" :href="element.path"> {{ element.name }} </a>
                    </div>
               </div>

               <div class="header-bottom-other">
                    <div class="header-bottom-other-account" @click="toggleSignIn" v-if="isUserInfo">
                         <div style="width: 21px; height: 21px">
                              <svg width="21" height="21" class="account" xmlns="http://www.w3.org/2000/svg" viewBox="">
                                   <path fill="white" d="M10.5 0C6.82 0 3.82 3 3.82 6.68c0 2.29 1.16 4.31 2.92 5.52A9.534 9.534 0 00.95 21h1.91c0-4.26 3.37-7.64 7.64-7.64s7.64 3.37 7.64 7.64h1.91c0-3.95-2.37-7.35-5.79-8.8a6.68 6.68 0 002.92-5.52C17.18 3 14.18 0 10.5 0zm0 1.91c2.65 0 4.77 2.13 4.77 4.77s-2.13 4.77-4.77 4.77-4.77-2.12-4.77-4.77 2.12-4.77 4.77-4.77z"></path>
                              </svg>
                         </div>
                    </div>

                    <a href="/account" class="header-bottom-other-account" v-else>
                         <div style="width: 21px; height: 21px">
                              <svg width="21" height="21" class="account" xmlns="http://www.w3.org/2000/svg" viewBox="">
                                   <path fill="white" d="M10.5 0C6.82 0 3.82 3 3.82 6.68c0 2.29 1.16 4.31 2.92 5.52A9.534 9.534 0 00.95 21h1.91c0-4.26 3.37-7.64 7.64-7.64s7.64 3.37 7.64 7.64h1.91c0-3.95-2.37-7.35-5.79-8.8a6.68 6.68 0 002.92-5.52C17.18 3 14.18 0 10.5 0zm0 1.91c2.65 0 4.77 2.13 4.77 4.77s-2.13 4.77-4.77 4.77-4.77-2.12-4.77-4.77 2.12-4.77 4.77-4.77z"></path>
                              </svg>
                         </div>
                    </a>

                    <div class="header-bottom-other-cart">
                         <div class="header-bottom-other-cart-left" @click="toggleCart">
                              <svg style="width: 21px; height: 21px;" class="cart" xmlns="http://www.w3.org/2000/svg" viewBox="">
                                   <path fill="white" d="M6.02 7L4.27 0H.11v1.75h2.84l3.5 14h11.81L20.89 7H6.02zm10.93 7H7.77L6.45 8.75h12.03L16.95 14zM9.3 16.63c1.21 0 2.19.98 2.19 2.19S10.5 21 9.3 21s-2.19-.98-2.19-2.19.98-2.18 2.19-2.18zm3.93 2.18a2.19 2.19 0 104.379.001 2.19 2.19 0 00-4.379-.001z"></path>
                              </svg>
                         </div>

                         <div class="header-bottom-other-cart-total">
                              {{ cartTotal }} UAH
                         </div>
                    </div>
               </div>
          </div>

          <SidebarMenu :isVisibleMenu="isVisibleMenu" @close-menu="toggleMenu"/>
          <div :class="{ 'show': isVisibleMenu }" class="sidebar-overlay" @click="toggleMenuClose"></div>

          <SidebarCart :isVisibleCart="isVisibleCart" @close-cart="toggleCart"/>
          <div :class="{ 'show': isVisibleCart }" class="sidebar-overlay" @click="toogleCartClose"></div>

          <ModalSignUp 
               :isVisibleSignIn="isVisibleSignIn"
               :isVisbleConfirmation="isVisbleConfirmation"
               :isVisibleSignUp="isVisibleSignUp" 
               @update-visibility="isVisibleSignUp = !isVisibleSignUp" 
               @open-login="toggleSignIn" 
               @open-registered="toggleSignUp" 
               @close-login="toggleSignInClose" 
               @close-registered="toggleSignUpClose"
          />

          <div :class="{ 'show': isVisibleSignUp }" class="sidebar-overlay" @click="toggleSignUp"></div>
          <div :class="{ 'show': isVisibleSignIn }" class="sidebar-overlay" @click="toggleSignIn"></div>
          
     </header>
</template>

<script setup>
     import { ref, computed, watch } from 'vue';
     import { useCartStore } from '@/store/cartStore';
     import SidebarMenu from '@/components/SidebarMenu.vue';
     import SidebarCart from '@/components/SidebarCart.vue';
     import ModalSignUp from '@/components/ModalSignUp.vue';

     const cartStore = useCartStore(); 

     const cartTotal = ref(0);
     const isVisibleMenu = ref(false);
     const isVisibleCart = ref(false);
     const isVisibleSignIn = ref(false);
     const isVisibleSignUp = ref(false);

     const userLocalStorage = JSON.parse(localStorage.getItem("userData"));
     const isUserInfo = computed(() => !userLocalStorage);

     const toggleMenu = () => {
          isVisibleMenu.value = !isVisibleMenu.value

          if (isVisibleMenu.value) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = '';
          }
     };

     const toggleMenuClose = () => {
          isVisibleMenu.value = false;
          document.body.style.overflow = '';
     };

     const toggleSignIn = () => {
          isVisibleSignIn.value = !isVisibleSignIn.value;
          isVisibleSignUp.value = false;
     };

     const toggleSignInClose = () => {
          isVisibleSignIn.value = false;
          document.body.style.overflow = '';
     };

     const toggleSignUp = () => {
          isVisibleSignUp.value = !isVisibleSignUp.value;
          isVisibleSignIn.value = false;
     };

     const toggleSignUpClose = () => {
          isVisibleSignUp.value = false;
          document.body.style.overflow = '';
     }

     const toggleCart = () => {
          isVisibleCart.value = !isVisibleCart.value;

          if (isVisibleCart.value) {
               document.body.style.overflow = "hidden";
          } else {
               document.body.style.overflow = "";
          };
     };

     const toogleCartClose = () => {
          isVisibleCart.value = false;
          document.body.style.overflow = '';
     };

     const getCart = async () => {
          try {
               await cartStore.fetchCart();
          } catch (error) {
               console.error(error);
          }
     };

     getCart();

     watch(() => cartStore.cartTotal, () => {
          cartTotal.value = cartStore.cartTotal;
     });

     const menuItems = ref([
          { name: "ФУТБОЛКИ", path: "/category/t-shirts" },
          { name: "СВІТШОТИ", path: "/category/sweatshirts" },
          { name: "ХУДI", path: "/category/hoodies" },
          { name: "РЮКЗАКИ", path: "/category/bags" },
          { name: "ШТАНИ/ШОРТИ", path: "/category/pants-shorts" },
          { name: "ПОЛО", path: "/category/polo" },
          { name: "СОРОЧКИ", path: "/category/shirts" },
          { name: "МЕМИ", path: "/category/memes" },
          { name: "ШАПКИ", path: "/category/hats" },
          { name: "КЕПКИ", path: "/category/caps" },
          { name: "FAQ", path: "/faq" },
          { name: "ВАШЕ ЗАМОВЛЕННЯ", path: "/" },
     ]);

</script>

<style lang="scss">
     .header {
         
          &-top {
               height: 110px;
               display: flex;
               align-items: flex-end;
               justify-content: space-between;

               @media only screen and (max-width: 1024px) {
                    display: none;
               }

               &-logo {
                    display: flex;
               }

               &-left{
                    width: 0;
                    height: 2px;
                    background: #fff;
                    position: relative;
                    animation: expandLeft 10s cubic-bezier(0.165, 0.84, 0.44, -0.050) 1s backwards;
                    animation-fill-mode: forwards;
               }

               &-right {
                    width: 0;
                    height: 2px;
                    background: var(--white);
                    position: relative;
                    animation: expandRight 10s cubic-bezier(0.165, 0.84, 0.44, -0.050) 1s backwards;
                    animation-fill-mode: forwards;
               }
          }

          &-top-mobile {

               display: none;

               @media only screen and (max-width: 1024px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 76px;
                    padding: 0 15px;
                    border-bottom: 1px solid #616161;
               }

               &-first {

                    &-logo {
                         display: flex;
                    }
               }

               &-second {
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    &-other {
                         display: flex;
                         align-self: center;
                         gap: 20px;
                    }

                    &-menu {
                         cursor: pointer;
                    }
               }
          }

          &-bottom {
               display: flex;
               align-items: center;
               justify-content: center;
               position: relative;

               @media only screen and (min-width: 1025px) and (max-width: 1760px) { 
                    height: 120px;
               }

               @media only screen and (min-width: 1760px) {
                    height: 70px;
               }

               @media only screen and (min-width: 1760px) {
                    height: 70px;
               }

               @media only screen and (max-width: 1024px) {
                    display: none;
               }

               &-menu {
                    align-items: center;
                    color: var(--white);
                    display: flex;
                    font-size: 15px;
                    font-weight: 400;
                    height: 70px;
                    justify-content: space-between;
                    line-height: 100%;
                    text-transform: uppercase;

                    @media only screen and (min-width: 1760px) {
                         gap: 20px;
                    }

                    @media only screen and (min-width: 1025px) and (max-width: 1760px) { 
                         width: calc(100vw - 110px);
                         align-items: flex-start;
                    }

                    @media only screen and (min-width: 1025px) and (max-width: 1230px) { 
                         font-size: 13px;
                    }

                    @media only screen and (max-width: 1024px) {
                         display: none;
                    }

                    &-item {
                         position: relative;

                         &:not(:hover)::after {
                              -webkit-transform: scalex(0);
                              transform: scalex(0);
                         }

                         &::after {
                              background: #fff;
                              bottom: -3px;
                              content: "";
                              height: 1px;
                              left: 0;
                              position: absolute;
                              transition: -webkit-transform .5s;
                              transition: transform .5s;
                              transition: transform .5s,-webkit-transform .5s;
                              width: 100%;
                         }
                    }
               }

               &-other {
                    display: flex;
                    align-items: center;

                    @media only screen and (min-width: 1760px) {
                         right: 3vw;
                         top: 30px;
                    }

                    @media only screen and (min-width: 1025px) {
                         height: 10px;
                         position: absolute;
                    }

                    @media only screen and (min-width: 1025px) and (max-width: 1760px) {  
                         right: 55px;
                         top: 81px;
                    }

                    &-account {
                         align-items: flex-start;
                         cursor: pointer;
                         display: flex;
                         height: 27px;
                         margin-left: 10px;

                         @media only screen and (min-width: 1025px) {
                              margin-right: 20px;
                         }

                         @media only screen and (max-width: 1024px) {
                              margin-right: 5vh;
                         }
                    }

                    &-cart {
                         display: flex;
                         align-items: center;
                         cursor: pointer;

                         &-total {
                              color: var(--white);
                              font-size: 15px;
                              font-weight: 400;
                              line-height: 10px;
                              margin-left: 10px;
                              text-transform: uppercase;

                              @media only screen and (max-width: 1024px) {
                                   display: none;
                              }
                         }
                    }

               }
          }
     }
     
     .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 20;
          overflow-y: auto;
          display: none;
     }

     .sidebar-overlay.show {
          display: block;
     }

     @keyframes expandLeft {
         from {
             width: 0;
         }
         to {
             width: 100%;
         }
     }

     @keyframes expandRight {
         from {
             width: 0;
         }
         to {
             width: 100%;
         }
     }
</style>
