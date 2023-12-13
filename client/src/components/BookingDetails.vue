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
                         Введіть дані для доставки
                    </div>

                    <form class="booking-page-content__details-form" @submit.prevent="handlePayment">
                         <div class="booking-page-content__details-form__item">
                              <p class="booking-page-content__details-form__item-title">ІМ'Я</p>
                              <input v-model="booking.first_name" class="booking-page-content__details-form__item-input" name="first_name" maxlength="30" type="text" required>
                         </div>
                         <div class="booking-page-content__details-form__item">
                              <p class="booking-page-content__details-form__item-title">ПРІЗВИЩЕ</p>
                              <input v-model.trim="booking.last_name" class="booking-page-content__details-form__item-input" name="last_name" maxlength="30" type="text" required>
                         </div>
                         <div class="booking-page-content__details-form__item">
                              <p class="booking-page-content__details-form__item-title">ПО БАТЬКОВІ</p>
                              <input v-model.trim="booking.middle_name" class="booking-page-content__details-form__item-input" name="middle_name" maxlength="30" type="text" required>
                         </div>

                         <div class="booking-page-content__details-form__grid">
                              <p class="booking-page-content__details-form__item-title">ТЕЛЕФОН</p>
                              <input
                                   v-model.trim="booking.mobile"
                                   class="booking-page-content__details-form__item-input"
                                   name="number"
                                   @input="functionNumberPhone"
                                   maxlength="30"
                                   placeholder="+380"
                                   type="tel"
                                   required
                              />
                         </div>

                         <div class="booking-page-content__details-form__grid">
                              <p class="booking-page-content__details-form__item-title">ЕЛ. АДРЕСА</p>
                              <input v-model.trim="booking.email" class="booking-page-content__details-form__item-input" name="email" maxlength="30" type="email" required>
                         </div>
                         <div class="booking-page-content__details-form__item">
                              <p class="booking-page-content__details-form__item-title">МІСТО</p>
                              <input v-model.trim="booking.city" class="booking-page-content__details-form__item-input" name="city" maxlength="30" type="text" required>
                         </div>
                         <div class="booking-page-content__details-form__item">
                              <p class="booking-page-content__details-form__item-title">КРАЙ/ОБЛАСТЬ/РЕГІОН</p>
                              <input v-model.trim="booking.region" class="booking-page-content__details-form__item-input" name="region" maxlength="30" type="text" required>
                         </div>
                         <div class="booking-page-content__details-form__item">
                              <p class="booking-page-content__details-form__item-title">ВУЛИЦЯ, БУДИНОК, КВАРТИРА</p>
                              <input v-model.trim="booking.address" class="booking-page-content__details-form__item-input" name="address" maxlength="30" type="text" required>
                         </div>
                         <div class="booking-page-content__details-form__item">
                              <p class="booking-page-content__details-form__item-title">ВІДДІЛЕННЯ НОВОЇ ПОШТИ</p>
                              <input v-model.trim="booking.zip_code" class="booking-page-content__details-form__item-input" name="zip_code" maxlength="30" type="text" required>
                         </div>
                         <div class="booking-page-content__details-form__item">
                              <p class="booking-page-content__details-form__item-title">ПРИМІТКА</p>
                              <input v-model.trim="booking.note" class="booking-page-content__details-form__item-input" name="note" maxlength="30" type="text">
                         </div>

                         <div class="booking-page-content__details-form__item">
                              <div class="booking-page-content__details-form__item-content">
                                   <button type="submit" class="booking-page-content__details-form__btn">
                                        Далі 
                                        
                                        <svg width="12" height="7" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M12 3.7v-.1-.1-.1c0-.1-.1-.1-.1-.2l-3-3C8.7 0 8.3 0 8.1.1s-.1.6 0 .8L10.3 3H.5c-.3 0-.5.2-.5.5s.2.5.5.5h9.8L8.1 6.1c-.1.2-.1.6 0 .8.2.1.6.1.8 0l3-3c0-.1 0-.1.1-.2z"></path>
                                        </svg>
                                   </button>

                                   <div class="booking-page-content__details-form_step">
                                        Етап 1

                                        <span>з 2</span>
                                   </div>
                              </div>
                         </div>
                    </form>
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
     import { useRoute, useRouter } from 'vue-router';
     import api from '@/config/api';

     const route = useRoute();
     const router = useRouter();

     const booking = ref({
          first_name: "",
          last_name: "",
          middle_name: "",
          mobile: "",
          email: "",
          city: "",
          region: "",
          address: "",
          zip_code: "",
          note: "",
     });

     const bookingProduct = ref([]);
     const orderId = ref(null);

     const handlePayment = async () => {
          try {

               const bookingInfoUser = {
                    first_name: booking.value.first_name,
                    last_name: booking.value.last_name,
                    middle_name: booking.value.middle_name,
                    mobile: booking.value.mobile,
                    email: booking.value.email,
                    city: booking.value.city,
                    region: booking.value.region,
                    zip_code: booking.value.zip_code,
                    note: booking.value.note,
               }

               const response = await api.userInfoDelivery(bookingInfoUser);

               router.push(`/booking/${route.params.orderId}/payment`);

          } catch (error) {
               console.log(error);
          };
     };

     const functionNumberPhone = (e) => {
          var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
          e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
     } 

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

                    &-form {

                         display: flex;
                         flex-wrap: wrap;
                         justify-content: space-between;

                         &__item {

                              display: flex;
                              flex-direction: column;
                              width: 100%;

                              &:not(:first-child) {
                                   margin-top: 30px;
                              }

                              &-content {
                                   display: flex;
                                   align-items: flex-end;
                              }

                              &-title {
                                   color: #818d92;
                                   font-size: 15px;
                                   line-height: 25px;
                                   text-transform: uppercase;
                              }

                              &-input {
                                   background: #f4f6f8;
                                   border: none;
                                   border-radius: 1000px;
                                   font-size: 18px;
                                   font-weight: 500;
                                   height: 36px;
                                   padding: 0 15px;
                                   width: 100%;
                              }
                         }

                         &_step {
                              font-size: 17px;
                              font-weight: 500;
                              margin-left: 25px;
                              
                              @media only screen and (min-width: 1024px) {
                                   margin-top: 25px;
                              }

                              span {
                                   color: #818d92;
                                   font-weight: 300;
                              }
                         }

                         &__btn {
                              align-items: center;
                              background: var(--black);
                              border-radius: 1000px;
                              color: var(--white);
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

                         &__grid {
                              width: 220px;
                              margin-top: 30px;

                              @media only screen and (max-width: 1024px) {
                                   width: 100%;
                              }
                         }
                    }
               }
          }
     }
</style>