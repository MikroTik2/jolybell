<template>
     <div class="cart" :class="{ 'active': isVisibleCart }">
          <button type="button" class="cart-continue-shopping">
               <div @click="closeCart">
                    <svg width="17" height="32" xmlns="http://www.w3.org/2000/svg">
                         <path fill="black" d="M2.2 16L16.7 1.5c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L.3 15.4c-.4.4-.4.9 0 1.3l15.2 15.1c.2.2.4.3.6.3.2 0 .5-.1.6-.3.4-.4.4-.9 0-1.3L2.2 16z"></path>
                    </svg>
               </div>

               <span>Продовжити покупки</span>
          </button>

          <div class="cart-title">
               Мої покупки
          </div>

          <div class="cart-list">
               <div v-for="element in cartProduct" :key="element._id" class="cart-list-product">
                    <div class="cart-list-product-content">
                         <span class="cart-list-product-content-preview">
                              <picture v-if="element.product.images">
                                   <source :srcset="element.product.images[0]">
                                   <img :src="element.product.images[0]" :alt="element.product.slug">
                              </picture>

                              <div class="cart-list-product-content-preview-loader" v-else></div>
                         </span>

                         <div class="cart-list-product-content-info">
                              <span class="cart-list-product-content-info-name" v-if="element.product.title"> {{ element.product.title }} </span>
                              <span class="cart-list-product-content-info-name" v-else>Name</span>

                              <div class="cart-list-product-content-info-sizes">
                                   <div class="cart-list-product-content-info-sizes-title"> Розмір: </div>

                                   <div class="cart-list-product-content-info-sizes-list">
                                        <div class="cart-list-product-content-info-sizes-list-content">
                                             <button class="cart-list-product-content-info-sizes-list-content-btn" :class="{ 'cart-list-product-content-info-sizes-list-content-active': element.size === 'XS' }" @click="changeSizeUpdate('XS', element)">XS</button>
                                             <button class="cart-list-product-content-info-sizes-list-content-btn" :class="{ 'cart-list-product-content-info-sizes-list-content-active': element.size === 'S' }" @click="changeSizeUpdate('S', element)">S</button>
                                             <button class="cart-list-product-content-info-sizes-list-content-btn" :class="{ 'cart-list-product-content-info-sizes-list-content-active': element.size === 'M' }" @click="changeSizeUpdate('M', element)">M</button>
                                             <button class="cart-list-product-content-info-sizes-list-content-btn" :class="{ 'cart-list-product-content-info-sizes-list-content-active': element.size === 'L' }" @click="changeSizeUpdate('L', element)">L</button>
                                             <button class="cart-list-product-content-info-sizes-list-content-btn" :class="{ 'cart-list-product-content-info-sizes-list-content-active': element.size === 'XL' }" @click="changeSizeUpdate('XL', element)">XL</button>
                                             <button class="cart-list-product-content-info-sizes-list-content-btn" :class="{ 'cart-list-product-content-info-sizes-list-content-active': element.size === '2XL' }" @click="changeSizeUpdate('2XL', element)">2XL</button>
                                             <button class="cart-list-product-content-info-sizes-list-content-btn" :class="{ 'cart-list-product-content-info-sizes-list-content-active': element.size === '3XL' }" @click="changeSizeUpdate('3XL', element)">3XL</button>
                                        </div>
                                   </div>

                              </div>

                              <div class="cart-list-product-content-info-count">
                                   <div class="cart-list-product-content-info-count-title">Кількість:</div>

                                   <div class="cart-list-product-content-info-count-counter">
                                        <input class="cart-list-product-content-info-count-value" type="text" :value="element.quantity">

                                        <button class="cart-list-product-content-info-count-btn" @click="changeQuantityUpdate('plus', element)">
                                             <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M9 4H5V0H4v4H0v1h4v4h1V5h4z"></path>
                                             </svg>
                                        </button>

                                        <button class="cart-list-product-content-info-count-btn" @click="changeQuantityUpdate('minus', element)">
                                             <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M9 4v1H0V4z"></path>
                                             </svg>
                                        </button>
                                   </div>
                              </div>

                              <div class="cart-list-product-content-info-price">
                                   <span class="cart-list-product-content-info-price__actual"> {{ element.priceTotal }} UAH </span>
                              </div>
                         </div>

                         <div class="cart-list-product-content-remove" @click="deleteProductFromCart(element.product._id)">
                              <svg width="7" height="7" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M7 .6L6.4 0 3.5 2.9.6 0 0 .6l2.9 2.9L0 6.4l.6.6 2.9-2.9L6.4 7l.6-.6-2.9-2.9z"></path>
                              </svg>
                         </div>
                    </div>
               </div>
          </div>

          <div class="cart-bottom">
               <div class="cart-bottom-content">

                    <div class="cart-bottom-content-code"> 
                         <div class="cart-bottom-content-code-title">Промокод</div>

                         <form class="cart-bottom-content-code-form">
                              <input 
                                   v-model="coupon"
                                   type="text"  
                                   maxlength="10" 
                                   class="cart-bottom-content-code-form__input" 
                                   required
                              >

                              <button class="cart-bottom-content-code-form__btn" type="submit">Застосувати</button>
                         </form>
                    </div>

                    <div class="cart-bottom-content-cost">
                         <span class="cart-bottom-content-cost-title">В сумі:</span>
                         <span class="cart-bottom-content-cost-total"> {{ cartTotal }} UAH </span>
                    </div>

                    <button type="submit" class="cart-bottom-content-checkout">Оформити замовлення</button>
               
               </div>
          </div>
     </div>      
</template>

<script setup>
     import { ref, watch } from 'vue';
     import { useCartStore } from '@/store/cartStore';

     const emit = defineEmits();
     const cartStore = useCartStore(); 

     const cartProduct = ref([]);
     const cartTotal = ref(0); 

     const closeCart = () => {
          emit("close-cart");
     };

     const props = defineProps({
          isVisibleCart: {
               type: Boolean,
               required: false,
          },
     });

     const changeQuantityUpdate = async (type, element) => {
          if (type === 'minus') {
               element.quantity === 1 ? (element.quantity = 1) : element.quantity--;
          } else if (type === 'plus') {
               element.quantity === 20 ? (element.quantity = 20) : element.quantity++;
          }

          await cartStore.updateQuantityCart(element.product._id, element.quantity);
          await getCart(); 
     };

     const changeSizeUpdate = async (updateSize, element) => {
          try {

               await cartStore.updateSizeCart(element.product._id, updateSize);

               element.size = updateSize;

               await getCart();

          } catch (error) {
               console.log(error);
          };
     };

     const deleteProductFromCart = async (productId) => {
          try {

               await cartStore.deleteProductCart(productId);

          } catch (error) {
               console.log(error);
          };
     };

     const getCart = async () => {
          try {
               await cartStore.fetchCart();
          } catch (error) {
               console.error(error);
          }
     };

     watch(() => cartStore.cart, () => {
          cartProduct.value = cartStore.cart;
     });

     watch(() => cartStore.cartTotal, () => {
          cartTotal.value = cartStore.cartTotal;
     });

     getCart();
</script>

<style lang="scss" scoped>
     .cart {
          align-items: center;
          border-radius: 0;
          display: flex;
          flex-direction: column;
          margin: auto 0 auto auto;
          height: 100vh;
          overflow-y: auto;
          padding: 0 0 120px;
          width: 380px;
          transition: all .5s;
          transform: translateX(100%);
          z-index: 100;
          background: var(--white);
          color: var(--black);
          top: 0;
          right: 0;
          position: fixed;

          @media only screen and (max-width: 390px) {
               width: 100%;
          }

          &-continue-shopping {
               align-items: center;
               border-bottom: 2px solid #ebeef1;
               display: flex;
               font-size: 15px;
               justify-content: center;
               letter-spacing: 2px;
               position: relative;
               background: transparent;
               text-transform: uppercase;
               width: 100%;
               padding: 19px 0 19px 0;

               span {
                    margin-left: 24px;
               }
          }

          &-title {

               display: flex;
               align-items: center;
               font-size: 38px;
               font-weight: 400;
               line-height: 108px;
               padding: 0 18px;
               width: 100%;

               &::after {
                    background: var(--black);
                    content: "";
                    flex: 1 1;
                    height: 2px;
                    margin-left: 18px;
                    margin-top: 6px;
               }
          }

          &-list {
               align-items: center;
               display: flex;
               flex-direction: column;
               margin-bottom: 30px;
               max-width: 90vw;
               width: 305px;

               &-product {
                    position: relative;
                    width: 100%;

                    &:not(:last-child) {
                         border-bottom: 1px solid #e0e3e6;
                         padding-bottom: 22px;
                    }

                    &:not(:first-child) {
                         padding-top: 24px;
                    }

                    &-content {
                         display: flex;
                         position: relative;
                         width: 100%;

                         &-preview {
                              align-items: center;
                              border: 1px solid #e2e7ec;
                              border-radius: 10px;
                              display: flex;
                              flex-shrink: 0;
                              height: 144px;
                              justify-content: center;
                              padding: 11px;
                              position: relative;
                              width: 120px;
                              transition: all .2s;
                              cursor: pointer;

                              picture {
                                   height: 100%;
                                   width: 100%;
                                   position: relative;
                              }

                              img {
                                   height: 100%;
                                   width: 100%;
                                   object-fit: contain;
                                   position: absolute;
                              }

                              &:hover {
                                   opacity: 0.8;
                              }

                              &-loader {
                                   width: 100%;
                                   height: 100%;
                                   background: #f9f9f9;
                              }
                         }

                         &-info {
                              flex: 1 1;
                              margin-left: 20px;

                              &-name {
                                   display: block;
                                   font-size: 16px;
                                   font-weight: 400;
                                   margin: 10px 0 8px;
                              }

                              &-sizes {
                                   align-items: flex-start;
                                   display: flex;
                                   flex-direction: column;
                                   position: relative;

                                   &-title {
                                        color: #818d92;
                                        font-size: 16px;
                                        line-height: 1.2;
                                   }

                                   &-list {

                                        &-content {
                                             align-items: center;
                                             display: flex;
                                             flex-wrap: wrap;
                                             margin: -3px;

                                             &-btn {
                                                  align-items: center;
                                                  display: flex;
                                                  font-size: 15px;
                                                  background: transparent;
                                                  font-weight: 300;
                                                  height: 15px;
                                                  line-height: 15px;
                                                  margin: 3px;
                                                  transition: all .5s;
                                                  cursor: pointer;
                                             }

                                             &-active {
                                                  border-left: 1px solid #c1c1c1;
                                                  border-right: 1px solid #c1c1c1;
                                                  font-weight: 500;
                                                  padding: 0 6px;
                                             }
                                        }
                                   }
                              }

                              &-count {
                                   align-items: flex-start;
                                   display: flex;
                                   flex-direction: column;
                                   margin-top: 3px;
                                   position: relative;

                                   &-title {
                                        color: #818d92;
                                        font-size: 16px;
                                        line-height: 1.4;
                                   }

                                   &-counter {
                                        align-items: center;
                                        display: flex;
                                   }

                                   &-value {
                                        border-right: 1px solid #c1c1c1;
                                        font-size: 15px;
                                        font-weight: 400;
                                        height: 15px;
                                        line-height: 15px;
                                        padding-right: 12px;
                                        text-align: center;
                                        width: 40px;
                                   }

                                   &-btn {
                                        margin-left: 12px;
                                        background: transparent;
                                        cursor: pointer;
                                   }
                              }

                              &-price {
                                   display: flex;
                                   font-size: 16px;
                                   font-weight: 400;
                                   justify-content: flex-end;
                              }
                         }

                         &-remove {
                              align-items: center;
                              background: #fff;
                              border: 1px solid #9ca4ab;
                              border-radius: 50%;
                              cursor: pointer;
                              display: flex;
                              height: 23px;
                              justify-content: center;
                              left: -8px;
                              position: absolute;
                              top: -8px;
                              transition: all .5s;
                              width: 23px;
                         }
                    }
               }
          }

          &-bottom {
               align-items: center;
               border-top: 2px solid #484848;
               display: flex;
               justify-content: center;
               padding-top: 30px;
               width: 100%;

               &-content {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    max-width: 90vw;
                    width: 305px;

                    &-code {
                         border-bottom: 2px solid #ebeef1;
                         display: flex;
                         flex-direction: column;
                         margin-bottom: 33px;
                         padding-bottom: 33px;
                         position: relative;
                         width: 100%;

                         &-title {
                              color: #818d92;
                              font-size: 13px;
                              font-weight: 400;
                              line-height: 1.6ex;
                              margin-bottom: 9px;
                              text-transform: uppercase;
                         }

                         &-form {
                              display: flex;
                              height: 36px;
                              position: relative;

                              &__input {
                                   align-items: center;
                                   border-radius: 100px;
                                   display: flex;
                                   height: 100%;
                                   background: #f4f6f8;
                                   flex: 1 1;
                                   padding-left: 15px;
                                   padding-right: 51px;
                                   width: 100%;
                              }

                              &__btn {
                                   background: var(--black);
                                   color: var(--white);
                                   flex-shrink: 0;
                                   font-size: 13px;
                                   font-weight: 400;
                                   justify-content: center;
                                   letter-spacing: 2px;
                                   margin-left: -35px;
                                   position: relative;
                                   text-transform: uppercase;
                                   transition: all .5s;
                                   width: 137px;
                                   border-radius: 100px;
                                   cursor: pointer;

                                   &:hover {
                                        opacity: 0.7;
                                   }
                              }
                         }
                    }

                    &-cost {
                         align-items: center;
                         display: flex;
                         justify-content: space-between;
                         width: 100%;

                         &-title {
                              color: #818d92;
                              font-size: 13px;
                              font-weight: 400;
                              text-transform: uppercase;
                         }

                         &-total {
                              font-size: 25px;
                              font-weight: 500;
                         }
                    }

                    &-checkout {
                         background: var(--black);
                         color: var(--white);
                         align-items: center;
                         border-radius: 1000px;
                         display: flex;
                         font-size: 15px;
                         font-weight: 400;
                         height: 50px;
                         justify-content: center;
                         letter-spacing: 2px;
                         margin-top: 33px;
                         position: relative;
                         text-transform: uppercase;
                         transition: all .5s;
                         width: 277px;
                         cursor: pointer;

                         &:hover {
                              opacity: 0.7;
                         }
                    }
               }
          }
     }

     .active {
          transform: translateX(0);
     }
</style>