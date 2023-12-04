<template>
     <section class="booking-page app-page">
          <header class="booking-page-header">
               <h1 class="booking-page-header__title">Оформлення замовлення</h1>

               <div class="booking-page-header__id">
                    Номен замовлення: {{ bookingProduct.orderNumber }}
               </div>
          </header>

          <div class="booking-page-content">

               <div class="booking-page-content__details">
                    <div class="booking-page-content__details-title">
                         Платіжна система
                    </div>

                    <form v-if="!generateForms" class="booking-page-content__details-payment_form" @submit.prevent="handlePayment">
                         <div class="booking-page-content__details-payments">
                              <div class="booking-page-content__details-payments__title">ГОТІВКОВІ</div>

                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.privat }" @click="toggleActivePayment('privat')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/privatterminal_color.png" alt="privat terminal">
                              </div>

                              <div class="booking-page-content__details-payments__title">БЕЗГОТІВКОВІ</div>

                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.visa }" @click="toggleActivePayment('visa')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/visa_color.svg" alt="visa color">
                              </div>
                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.card }" @click="toggleActivePayment('card')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/mastercard_color.svg" alt="mastercard color">
                              </div>
                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.privat24 }" @click="toggleActivePayment('privat24')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/privat24_color.svg" alt="privat 24">
                              </div>
                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.googlepay }" @click="toggleActivePayment('googlepay')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/googlepay_color.svg" alt="google pay">
                              </div>
                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.applepay }" @click="toggleActivePayment('applepay')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/applepay_color.svg" alt="apple pay">
                              </div>
                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.visacheckout }" @click="toggleActivePayment('visacheckout')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/visacheckout_color.svg" alt="visacheckout pay">
                              </div>
                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.masterpass }" @click="toggleActivePayment('masterpass')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/masterpass_color.svg" alt="masterpass pay">
                              </div>
                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.qrcode }" @click="toggleActivePayment('qrcode')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/qrcode_black.svg" alt="qrcode black">
                              </div>

                              <div class="booking-page-content__details-payments__title">ЕЛЕКТРОННІ ГРОШІ</div>

                              <div class="booking-page-content__details-payments__direction" :class="{ 'active': borderPayments.webmoney }" @click="toggleActivePayment('webmoney')">
                                   <img class="booking-page-content__details-payments__direction_image" src="/img/payments/webmoney_color.svg" alt="webmoney pay">
                              </div>
                         </div>

                         <div class="booking-page-content__details-bottom">
                              <a :href="`/booking/${route.params.orderId}/details`" class="booking-page-content__details-bottom_back">Назад</a>

                              <button type="submit" @click="submitPayment" class="booking-page-content__details-bottom_btn">ОПЛАТИТИ</button>
                              <div v-html="generateForms" ></div>

                              <div class="booking-page-content__details-bottom_step">
                                   Етап 2

                                   <span>з 2</span>
                              </div>
                         </div>
                    </form>

                    <div v-if="generateForms" v-html="generateForms"></div>
                
               </div>
               
               <div class="booking-page-content__products">
                    <div class="booking-page-content__products-title">Ваше замовлення</div>

                    <div class="booking-page-content__products-block">

                         <div class="booking-page-content__products-block-list">
                              <div class="booking-page-content__products-block-product" v-for="(element, index) in bookingProduct.products" :key="index">
                                   <div class="booking-page-content__products-block-product-content">
                                        <span class="booking-page-content__products-block-product-content__name"> {{ element.product.title }} </span>
                                        <div class="booking-page-content__products-block-product-content__info">
                                             <span> Розмір: </span>
                                             <span> {{ element.size }} </span>
                                        </div>
                                        <div class="booking-page-content__products-block-product-content__info">
                                             <span> Кількість: </span>
                                             <span> {{ element.quantity }} </span>
                                        </div>
                                        <div class="booking-page-content__products-block-product-content__price">
                                             {{ element.priceTotal }} UAH
                                        </div>

                                   </div>
                              </div>
                         </div>

                         <div class="booking-page-content__products-block-cost">
                              <div class="booking-page-content__products-block-product-content__info">
                                   <span> Вартість товарів: </span>
                                   <span> {{ bookingProduct.cartTotal }} UAH </span>
                              </div>
                         </div>  

                         <div class="booking-page-content__products-block-coste">
                              <div class="booking-page-content__products-block-product-content__info">
                                   <span> Вартість доставки: </span>
                                   <span>&minus;</span>
                              </div>
                         </div>  
                    </div>

                    <div class="booking-page-content__products-total">
                         <span class="booking-page-content__products-total__title">Всього до оплати:</span>
                         <span class="booking-page-content__products-total__value"> {{ bookingProduct.cartTotal }} UAH </span>
                    </div>
               </div>

          </div>
     </section>
</template>

<script setup>
     import { ref, onMounted } from 'vue';
     import { useRoute } from 'vue-router';
     import api from '@/config/api'

     const route = useRoute();
     
     const borderPayments = ref({
          privat: false,
          visa: false,
          mastercard: false,
          privat24: false,
          googlepay: false,
          applepay: false,
          visacheckout: false,
          masterpass: false,
          qrcode: false,
          webmoney: false,
     });

     const bookingProduct = ref([]);
     const generateForms = ref('');

     const orderId = ref(null);
     const paymentForm = ref(null);

     const submitPayment = () => {
     if (paymentForm.value) {
     paymentForm.value.submit();
     }
     };

     const toggleActivePayment = (paymentMethod) => {
          for (const method in borderPayments.value) {
               borderPayments.value[method] = false;
          };

          borderPayments.value[paymentMethod] = true;
     };

     const handlePayment = async () => {
          try {

               const response = await api.checkoutLiqPaySession();
               generateForms.value = response

          } catch (error) {
               console.log(error);
          };
     };

     onMounted(async () => {
          orderId.value = route.params.orderId
          bookingProduct.value = await api.getOrderUser(orderId.value);
     });

</script>

<style lang="scss" scoped>
     .booking-page {
          align-items: center;
          display: flex;
          flex-direction: column;
          background: var(--white);
          padding-bottom: 95px;
          position: relative;
          width: 100%;

          &-header {
               height: 120px;
               margin-top: 40px;
               align-items: center;
               display: flex;
               flex-direction: column;

               &__title {
                    font-weight: 400;
                    text-align: center;
                    font-size: 42px;

                    @media only screen and (max-width: 480px) {
                         font-weight: 8vw;
                    }
               }

               &__id {
                    color: #818d92;
                    text-transform: uppercase;
                    font-size: 15px;

                    @media only screen and (max-width: 480px) {
                         font-size: 3.5vw;
                    }
               }
          }

          &-content {
               
               align-items: flex-start;
               display: flex;
               flex-wrap: wrap;

               @media only screen and (min-width: 1024px) and (max-width: 1600px) {
                    width: 960px;
                    justify-content: space-between;
               }

               @media only screen and (max-width: 1024px) {
                    width: 90vw;
                    justify-content: center;
                    gap: 60px;
               }

               &__products {
                    border-bottom: 2px solid #e0e3e6;
                    display: flex;
                    flex-direction: column;
                    max-width: 100%;
                    position: relative;
                    width: 324px;

                    @media only screen and (max-width: 1024px) {
                         align-items: center;
                         margin-top: 60px;
                         order: 1;
                    }

                    &-title {
                         font-size: 28px;
                         font-weight: 400;
                         line-height: 120%;

                         @media only screen and (min-width: 1024px) {
                              margin-bottom: 50px;
                         }

                         @media only screen and (max-width: 1024px) {
                              margin-bottom: 30px;
                              text-align: center;
                         }
                    }

                    &-block {

                         display: flex;
                         flex-direction: column;
                         position: relative;
                         width: 100%;
                         align-items: center;
                         background: #f4f6f8;
                         border-radius: 25px;

                         &-cost {
                              color: #818d92;
                              font-size: 18px;
                              line-height: 30px;
                              width: 262px;
                              margin-top: 40px;
                         }

                         &-coste {
                              color: #818d92;
                              font-size: 18px;
                              line-height: 30px;
                              width: 262px;
                              margin-bottom: 40px;
                         }

                         &-list {

                              display: flex;
                              flex-direction: column;
                              position: relative;
                              width: 100%;

                         }

                         &-product {
                              border-bottom: 1px solid #e0e3e6;
                              display: flex;
                              justify-content: center;
                              padding: 25px 0;
                              position: relative;
                              width: 100%;

                              &-content {
                                   width: 262px;

                                   &__name {
                                        display: block;
                                        font-size: 16px;
                                        font-weight: 500;
                                        margin-bottom: 8px;
                                        transition: all 0.2s;

                                        &:hover {
                                             opacity: 0.9;
                                        }
                                   }

                                   &__info {
                                        position: relative;

                                        span {

                                             color: #818d92;
                                             font-size: 16px;
                                             line-height: 1.2;
                                        }

                                        span:nth-child(2) {
                                                  color: var(--black);
                                                  font-size: 16px;
                                                  font-weight: 500;
                                             }
                                   }

                                   &__price {
                                        position: relative;
                                        font-size: 16px;
                                        font-weight: 500;
                                        margin-top: 8px;
                                   }
                              }
                         }

                    }

                    &-total {
                         line-height: 75px;
                         width: 100%;
                         text-align: center;

                         &__title {
                              text-transform: uppercase;
                              letter-spacing: 1px;
                         }

                         &__value {
                              font-size: 26px;
                              font-weight: 400;
                              margin-left: 5px;
                         }
                    }
               }

               &__details {
                    display: flex;
                    flex-direction: column;
                    position: relative;

                    @media only screen and (min-width: 1024px) and (max-width: 1600px) { 
                         width: 480px;
                    }

                    @media only screen and (max-width: 1024px) { 
                         align-items: center;
                         order: 2;
                         width: 100%;
                    }

                    &-title {
                         font-size: 28px;
                         font-weight: 400;
                         line-height: 120%;

                         @media only screen and (min-width: 1024px) {
                              margin-bottom: 50px;
                         };

                         @media only screen and (max-width: 1024px) {
                              margin-bottom: 30px;
                              text-align: center;
                         }
                    }

                    &-payment_form {
                         display: flex;
                         flex-direction: column;
                         position: relative;
                         width: 100%;
                    }

                    &-payments {
                         grid-gap: 13px;
                         display: grid;
                         grid-template-columns: repeat(auto-fit,110px);
                         width: 100%;

                         &__title {
                              color: #818d92;
                              font-size: 15px;
                              grid-column-end: -1;
                              grid-column-start: 1;
                              line-height: 25px;
                              text-transform: uppercase;

                              &:not(:first-child) {
                                   margin-top: 20px;
                              }
                         }

                         &__direction {
                              align-items: center;
                              background: #f4f6f8;
                              border-radius: 15px;
                              cursor: pointer;
                              display: flex;
                              height: 114px;
                              justify-content: center;
                              transition: all .5s;
                              width: 114px;
                              transition: all .3s;

                              &:hover {
                                   background: #d6d6d7;
                              }

                              &_image {
                                   height: 86px;
                                   object-fit: contain;
                                   -webkit-user-select: none;
                                   user-select: none;
                                   width: 86px;
                              }
                         }
                    }

                    &-bottom {
                         display: flex;
                         position: relative;

                         @media only screen and (min-width: 1024px) {
                              align-items: flex-end;
                              margin-top: 40px;
                         }

                         &_back {
                              border-bottom: 1px dashed #585858;
                              color: #585858;
                              cursor: pointer;
                              font-size: 17px;
                              line-height: 15px;
                              transition: all .5s;

                              @media only screen and (min-width: 1024px) {
                                   margin-right: 25px;
                              }
                         } 

                         &_btn {
                              align-items: center;
                              background: #000;
                              border-radius: 1000px;
                              color: #fff;
                              display: flex;
                              font-size: 15px;
                              font-weight: 400;
                              height: 50px;
                              justify-content: center;
                              letter-spacing: 2px;
                              position: relative;
                              text-transform: uppercase;
                              transition: all .5s;
                              width: 276px;
                              cursor: pointer;
                         }

                         &_step {
                              font-size: 17px;
                              font-weight: 500;

                              @media only screen and (min-width: 1024px) {
                                   margin-left: 25px;
                              }

                              @media only screen and (max-width: 1024px) {
                                   margin-bottom: 25px;
                              }

                              span {
                                   color: #818d92;
                                   font-weight: 300;
                              }
                         }
                    }
               }
          }
     }

     .active {
          border: 1px solid var(--black);
          background: var(--white);
     }
</style>