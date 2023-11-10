<template>
     <footer class="footer"> 
          <div class="footer-content">
               <!-- list link -->
               <ul class="footer-content-menu">
                    <li class="footer-content-menu__item" v-for="(element, i) of menuItems" :key="i"> 
                         <router-link class="" :to="element.path"> {{ element.name }} </router-link>
                    </li>
               </ul>

               <!-- logo -->
               <div class="footer-content-jolybell footer-content_animated">
                    <svg width="127" height="46" xmlns="http://www.w3.org/2000/svg" viewBox="">
                         <path d="M0 0v40h65V0H0zm13.42 26.98c0 1.41-.17 2.57-.52 3.47-.35.9-.81 1.62-1.4 2.13-.59.52-1.26.88-2.01 1.1-.76.21-1.55.32-2.38.32H6.03c-.31 0-.66-.03-1.03-.08v-3.99c.24.03.49.04.76.04h.76c.69 0 1.28-.17 1.77-.52s.74-1.06.74-2.15V6h4.39v20.98zm16.58.14c0 2.22-.56 3.92-1.67 5.1C27.21 33.41 25.6 34 23.5 34s-3.71-.59-4.83-1.78S17 29.33 17 27.12V12.88c0-2.22.56-3.92 1.67-5.1C19.79 6.59 21.4 6 23.5 6s3.71.59 4.83 1.78S30 10.67 30 12.88v14.24zM44.76 34H33V6h4.4v24h7.36v4zm7.94 0h-4.4v-9.28L42.74 6h4.6l3.36 12.76L54.06 6h4.2L52.7 24.72V34zm7.54 0H56v-4.24h4.24V34zM25.12 10.52c.4.4.6 1.1.6 2.09v14.78c0 .99-.2 1.69-.6 2.09-.4.4-.94.61-1.62.61-.67 0-1.21-.2-1.62-.61-.4-.4-.6-1.1-.6-2.09V12.61c0-.99.2-1.69.6-2.09.4-.4.94-.61 1.62-.61.67 0 1.21.2 1.62.61zM76.78 6c2.34 0 4.04.53 5.08 1.6 1.05 1.07 1.57 2.68 1.57 4.84v1c0 1.44-.23 2.63-.69 3.56-.46.93-1.2 1.63-2.21 2.08 1.23.45 2.09 1.19 2.59 2.22.5 1.03.76 2.29.76 3.78v2.28c0 2.16-.57 3.81-1.72 4.94-1.14 1.13-2.85 1.7-5.11 1.7H70V6h6.78zm-2.3 4v7.4h1.75c.84 0 1.5-.21 1.98-.64.47-.43.71-1.2.71-2.32v-1.56c0-1.01-.18-1.75-.55-2.2-.36-.45-.94-.68-1.73-.68h-2.16zm0 11.4V30h2.57c.76 0 1.34-.2 1.73-.6.39-.4.59-1.12.59-2.16V24.8c0-1.31-.22-2.2-.67-2.68-.45-.48-1.19-.72-2.22-.72h-2zm15.92-3.6h6.24v4H90.4V30h7.92v4H86V6h12.32v4H90.4v7.8zM115 6h4.4v24h7.6v4h-12V6zm-14 0h4.4v24h7.36v4H101V6zM70 38h57v2H70v-2zm0-38h50v2H70V0z"></path>
                    </svg>
               </div>

               <!-- social instagram -->
               <div class="footer-content-social">
                    <a class="footer-content-social__icon" href="https://www.instagram.com/artur.dosent28/">
                         <div class="footer-content_animated">
                              <svg width="40" height="40" class="instagram" xmlns="http://www.w3.org/2000/svg" viewBox=""><path d="M23.83 20a3.83 3.83 0 11-7.66 0 3.83 3.83 0 017.66 0zm5.12-6.77c-.18-.5-.48-.95-.86-1.32-.37-.38-.82-.68-1.32-.86-.4-.16-1.01-.34-2.13-.4-1.21-.06-1.57-.07-4.64-.07-3.07 0-3.43.01-4.64.07-1.12.05-1.73.24-2.13.4-.5.18-.95.48-1.32.86-.38.37-.68.82-.86 1.32-.16.4-.34 1.01-.4 2.13-.06 1.21-.07 1.57-.07 4.64 0 3.07.01 3.43.07 4.64.05 1.12.24 1.73.4 2.13.18.5.48.95.86 1.32.37.38.82.68 1.32.86.4.16 1.01.34 2.13.4 1.21.06 1.57.07 4.64.07 3.07 0 3.43-.01 4.64-.07 1.12-.05 1.73-.24 2.13-.4 1-.39 1.79-1.18 2.18-2.18.16-.4.34-1.01.4-2.13.06-1.21.07-1.57.07-4.64 0-3.07-.01-3.43-.07-4.64-.05-1.12-.24-1.73-.4-2.13zM20 25.9c-3.26 0-5.9-2.64-5.9-5.9s2.64-5.9 5.9-5.9c3.26 0 5.9 2.64 5.9 5.9s-2.64 5.9-5.9 5.9zm6.13-10.65c-.76 0-1.38-.62-1.38-1.38s.62-1.38 1.38-1.38 1.38.62 1.38 1.38c0 .76-.62 1.38-1.38 1.38zM20 0C8.96 0 0 8.96 0 20s8.96 20 20 20 20-8.96 20-20S31.04 0 20 0zm11.42 24.73c-.06 1.22-.25 2.06-.53 2.79a5.91 5.91 0 01-3.36 3.36c-.73.28-1.57.48-2.79.53-1.22.06-1.62.07-4.73.07-3.12 0-3.51-.01-4.74-.07-1.22-.06-2.06-.25-2.79-.53-.77-.29-1.46-.74-2.03-1.32a5.57 5.57 0 01-1.32-2.03c-.28-.73-.48-1.57-.53-2.79-.07-1.23-.08-1.62-.08-4.74s.01-3.51.07-4.73c.06-1.22.25-2.06.53-2.79.29-.77.74-1.46 1.33-2.03a5.57 5.57 0 012.03-1.32c.73-.28 1.57-.48 2.79-.53 1.22-.06 1.62-.07 4.73-.07s3.51.01 4.73.07c1.22.06 2.06.25 2.79.53.77.29 1.46.74 2.03 1.33a5.57 5.57 0 011.32 2.03c.28.73.48 1.57.53 2.79.06 1.22.07 1.62.07 4.73s0 3.5-.05 4.72z"></path></svg>
                         </div>
                    </a>
               </div>

               <!-- copyright -->
               <div class="footer-content-copyright">
                    © 2023, JolyBell.com
               </div>

               <!-- public offer -->
               <a class="footer-content-public_offer" href="https://jolybell.com/public_offer_2.pdf">Публічна оферта</a>

               <!-- email support -->
               <div class="footer-content-email">
                    <div class="footer-content-email-prefix">e-email:</div>
                    <div class="footer-content-email-content">support@jolybell.com</div>
               </div>

               <!-- working hours -->
               <div class="footer-content-working_hours">
                    <div class="footer-content-email-prefix">час роботи служби підтримки:</div>
                    <div class="footer-content-email-content">ПН-ПТ: 9:00 - 21:00</div>
               </div>

               <!-- payments option -->
               <div class="footer-content-payments_option">
                    <div class="footer-content-email-prefix">Приймаємо для оплати:</div>

                    <div class="footer-content-payments_option-list">
                         <img class="footer-content-payments_option-visa" loading="lazy" src="/img/footer/visa.png" alt="visa">
                         <img class="footer-content-payments_option-wayforpay" loading="lazy" src="/img/footer/wayforpay.png" alt="wayforpay">
                         <img class="footer-content-payments_option-mastercard" loading="lazy" src="/img/footer/mastercard.png" alt="mastercard">
                         <img class="footer-content-payments_option-privat" loading="lazy" src="/img/footer/privat24.png" alt="privat24">
                    </div>
                    
               </div>

               <!-- delivery -->
               <div class="footer-content-delivery">
                    Доставка по Україні здійснюється службою доставки: Нова Пошта.
                    <br>
                    Доставляємо по всьому світу службою доставки: Укр Пошта, Нова Пошта.
               </div>
          </div>
     </footer>
</template>

<script setup>

     import { ref } from 'vue';

     const menuItems = ref([
          { name: "Футболки", path: "/category/t-shirts" },
          { name: "Світшоти", path: "/category/sweatshirts" },
          { name: "Худi", path: "/category/hoodies" },
          { name: "Рюкзаки", path: "/category/bags" },
          { name: "Штани/шорти", path: "/category/pants-shorts" },
          { name: "Поло", path: "/category/polo" },
          { name: "Сорочки", path: "/category/shirts" },
          { name: "Піжама", path: "/category/pajamas" },
          { name: "Шапки", path: "/category/hats" },
          { name: "Кепки", path: "/category/caps" },
          { name: "Сувеніри", path: "/category/souvenirs" },
          { name: "Меми", path: "/category/memes" },
          { name: "FAQ", path: "/faq" },
     ])

</script>

<style lang="scss" scoped>
     .footer {
          background: var(--black-secondary);
          color: var(--white);
          padding: 40px;
          width: 100%;
          z-index: 5;
          position: relative;

          @media only screen and (min-width: 1701px) {
               height: 270px;
          }

          @media only screen and (min-width: 1025px) and (max-width: 1700px) {
               height: 339px;
          }

          &-content {
               display: flex;
               -webkit-filter: sepia(100%) saturate(10%) hue-rotate(190deg) brightness(130%);
               filter: sepia(100%) saturate(10%) hue-rotate(190deg) brightness(130%);
               height: 100%;
               width: 100%;
               position: relative;

               @media only screen and (max-width: 1024px) {
                    align-items: center;
                    flex-direction: column;
               }

               &-menu {
                    align-items: center;
                    color: var(--gray-secondary);
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 18px;
                    justify-content: space-between;
                    line-height: 100%;
                    column-gap: 30px;
                    position: absolute;

                    @media only screen and (min-width: 1025px) and (max-width: 1700px) {
                         width: 100%;
                    }

                    @media only screen and (max-width: 1024px) { 
                         display: none;
                    }

                    @media only screen and (max-width: 1024px) { 
                         .footer-content > &:not(.footer-content-jolybell) {
                              margin-top: 20px;
                         }
                    }

                    &__item {
                         margin-top: 10px;
                         position: relative;

                         &:not(:hover)::after {
                              -webkit-transform: scalex(0);
                              transform: scalex(0);
                         }

                         &::after {
                              content: "";
                              background: var(--gray-secondary);
                              bottom: -3px;
                              height: 1px;
                              left: 0;
                              position: absolute;
                              transition: transform .5s,-webkit-transform .5s;
                              width: 100%;
                         }
                    }
               }

               &-jolybell {
                    fill: #888;

                    @media only screen and (min-width: 1025px) {
                         position: absolute;
                         top: 73px;
                    }

                    @media only screen and (max-width: 1024px) { 
                         margin-top: 20px;
                    }
               }

               &-icon {

               }

               &_animated {
                    transition: all .3s;
               }

               &-social {
                    display: flex;

                    @media only screen and (min-width: 1025px) {
                         left: 140px;
                         top: 73px;
                         position: absolute;
                    }

                    @media only screen and (max-width: 1024px) {
                         margin-top: 20px;
                    }

                    &__icon {
                         fill: #888;
                         margin-right: 10px;

                         &:last-child {
                              margin-right: 0;
                         }
                    }
               }

               &-copyright {
                    color: #c9c9c9;
                    font-size: 18px;
                    line-height: 100%;

                    @media only screen and (min-width: 1025px) {
                         position: absolute;
                         top: 170px;
                    }

                    @media only screen and (max-width: 1024px) {
                         order: 2;
                         margin-top: 20px;
                    }
               }

               &-public_offer {
                    color: #888;
                    border-bottom: 1px dashed #888;
                    font-size: 18px;
                    line-height: 100%;
                    opacity: 1;
                    transition: all 0.3s;

                    &:hover {
                         opacity: 0.7;
                    }

                    @media only screen and (min-width: 1025px) {
                         position: absolute;
                         left: 200px;
                         top: 170px;
                    }

                    @media only screen and (max-width: 1024px) {
                         margin-top: 20px;
                         order: 3;
                    }
               }

               &-email {
                    display: flex;
                    flex-direction: column;

                    @media only screen and (min-width: 1025px) {
                         align-items: flex-end;
                         bottom: 140px;
                         right: 210px;
                         position: absolute;
                    }

                    @media only screen and (max-width: 1024px) {
                         align-items: center;
                         margin-top: 20px;
                    }

                    &-prefix {
                         color: #616060;
                         font-size: 13px;
                         font-weight: 400;
                         text-transform: uppercase;
                    }

                    &-content {
                         color: #bfbfbf;
                         font-size: 18px;
                    }
               }

               &-working_hours {
                    display: flex;
                    flex-direction: column;

                    @media only screen and (min-width: 1025px) {
                         align-items: flex-end;
                         position: absolute;
                         bottom: 70px;
                         right: 210px;
                    }

                    @media only screen and (max-width: 1024px) {
                         margin-top: 20px;
                         text-align: center;
                    }
               }

               &-payments_option {

                    @media only screen and (min-width: 1025px) {
                         bottom: 62px;
                         right: 0;
                         position: absolute;
                    }

                    @media only screen and (max-width: 1024px) {
                         margin-top: 20px;
                         text-align: center;
                    }

                    &-list {
                         display: flex;
                         align-items: flex-end;
                         justify-content: center;
                         gap: 10px;
                         flex-wrap: wrap;
                         margin-top: 7px;

                         @media only screen and (min-width: 1025px) {
                              flex-wrap: wrap;
                              width: 155px;
                         }

                         @media only screen and (max-width: 1024px) {
                              max-width: 320px;
                              width: 95vw;
                         }
                    }

                    &-visa {
                         height: 17px;
                    }

                    &-wayforpay {
                         height: 17px;

                         @media only screen and (max-width: 1024px) {
                              order: 2;
                         }
                    }

                    &-mastercard {
                         height: 64px;

                         @media only screen and (min-width: 1025px) {
                              margin-top: 20px;
                         }
                    }

                    &-privat {
                         height: 64px;

                         @media only screen and (min-width: 1025px) {
                              margin-top: 20px;
                         }
                    }
               }

               &-delivery {
                    color: #676767;
                    font-size: 17px;
                    text-align: center;
                    margin-top: 20px;

                    @media only screen and (min-width: 1025px) {
                         bottom: -5px;
                         right: 0;
                         position: absolute;
                    }
               }
          }
     }
</style>