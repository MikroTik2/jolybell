<template>
     <section class="account-order app-page" id="order">
          <h1 class="account-order__title">Мій акаунт</h1>

          <div class="account-order__content">
               <div class="account-order__content-left">
                    <ul class="account-order__content-left-menu">
                         <li class="account-order__content-left-menu-account"> <a href="/account">Особисті дані</a> </li>
                         <li class="account-order__content-left-menu-order"> <a href="/account/order">Мої замовлення</a> </li>
                    </ul>

                    <button class="account-order__content-left-btn" type="button">Вийти з акаунту</button>
               </div>
               <div class="account-order__content-right">
                    <div>
                         
                         <div class="account-order__content-right__title">
                              Історія замовлень
                         </div>

                         <div class="account-order__content-right__list">
                              <span> Історія замовлень порожня </span>
                         </div>

                    </div>
               </div>
          </div>
     </section>
</template>

<script setup>
     import { ref, onMounted } from 'vue';


</script>

<style lang="scss" scoped>
     .account-order {
          align-items: center;
          background: var(--white);
          display: flex;
          flex-direction: column;
          padding-bottom: 95px;
          position: relative;
          width: 100%;

          &__title {
               font-weight: 400;
               margin-top: 40px;
               font-size: 42px;
          }

          &__content {
               display: flex;
               flex-wrap: wrap;
               margin-top: 40px;
               padding: 0 15px;
               width: 1300px;

               @media only screen and (max-width: 1368px) {
                    width: 936px;
               }

               @media only screen and (min-width: 420px) and (max-width: 1024px) {
                    width: 380px;
               }

               @media only screen and (max-width: 420px) {
                    width: 90vw;
                    padding: 0;
               }

               &-left {
                    display: flex;
                    flex-direction: column;

                    @media only screen and (min-width: 1024px) {
                         width: 266px;
                    }

                    @media only screen and (max-width: 1024px) {
                         margin-top: 80px;
                         width: 100%;
                         order: 2;
                    }

                    &-menu {
                         background: var(--black);
                         color: var(--white);
                         border-radius: 15px;
                         display: flex;
                         justify-content: center;
                         flex-direction: column;
                         height: 165px;
                         padding: 25px;
                         width: 100%;
                         
                         &-account {
                              font-size: 17px;

                              a {
                                   align-items: center;
                                   display: flex;
                              }
                         }

                         &-order {
                              font-size: 19px;
                              font-weight: 500;
                              margin-top: 15px;

                              a {
                                   display: flex;
                                   align-items: center;

                                   &::before {
                                        background: var(--white);
                                        content: "";
                                        display: block;
                                        height: 1px;
                                        margin-right: 10px;
                                        width: 10px;
                                   }
                              }

                         }
                    }

                    &-btn {
                         background: var(--black);
                         color: var(--white);
                         cursor: pointer;
                         width: 100%;
                         height: 50px;
                         text-transform: uppercase;
                         position: relative;
                         margin-top: 35px;
                         display: flex;
                         align-items: center;
                         justify-content: center;
                         letter-spacing: 2px;
                         font-size: 15px;
                         font-weight: 400;
                         border-radius: 100px;
                         transition: all .5s;

                         &:hover {
                              opacity: 0.7;
                         }
                    }
               }

               &-right {

                    @media only screen and (min-width: 1024px) {
                         flex: 1 1;
                         margin-left: 70px;
                    }

                    @media only screen and (max-width: 1024px) {
                         width: 100%;
                    }

                    &__title {
                         font-size: 25px;
                         font-weight: 400;
                         line-height: 100%;
                    }

                    &__list {
                         display: flex;
                         flex-direction: column;
                         margin-top: 40px;

                         span {
                              font-size: 22px;
                              font-weight: 400;
                              line-height: 100%;
                              opacity: .9;
                         }
                    }

               }
          }
     }
</style>