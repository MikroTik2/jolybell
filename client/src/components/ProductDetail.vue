<template>
     <section class="product" v-if="product" :style="productStyle">
          <h2 class="product-title" v-if="product.title">{{ product.title }}</h2>

          <div class="product-content">
               <div class="product-content-slider">
                    <div class="product-content-slider-center">
                         <div>
                              <Swiper :loop="true" :navigation="{ prevEl: prevButton, nextEl: nextButton }" :modules="[Navigation]" class="product-content-slider-shadow">
                                   <SwiperSlide v-for="(element, i) in product.images" :key="i">
                                        <img :src="element" />
                                   </SwiperSlide>
                              </Swiper>
                         </div>
                    </div>
               </div>

               <div class="product-content-info">
                    <hr>
                    <div class="product-content-info-price" :style="productPrice">
                         <div class="product-content-info-price-current">
                              <span> {{ product.price }} UAH </span>
                         </div>
                    </div>
                    <hr>

                    <div class="product-content-info-description">
                         <p> {{ product.description[0] }} </p>
                         <p> {{ product.description[1] }} </p>
                         <p> {{ product.description[2] }} </p>
                         <p> {{ product.description[3] }} </p>
                    </div>

                    <hr>

                    <div class="product-content-info-buttons">
                         <button @click="toggleModalSize" type="button" :style="colorBtn" class="product-content-info-size-chart">Розмірна сітка</button>
                         <button @click="toggleModal" type="button" :style="colorBtn" class="product-content-info-size-chart">Догляд за річчю</button>
                    </div>

                    <hr>

                    <div class="product-content-info-sizes">
                         <div class="product-content-info-sizes-title" :style="colorTitle">Виберіть розмір: {{ chooseSize }} </div>

                         <div class="product-content-info-sizes-list">
                              <div class="product-content-info-sizes-list-content">
                                   <button
                                        v-for="(size, index) in ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']"
                                        :key="index"
                                        class="product-content-info-sizes-list-content-btn"
                                        :style="colorBtnSize"
                                        @click="chooseSizeProduct(size)"
                                   >
                                   {{ size }}
                                   </button>
                              </div>
                         </div>
                    </div>

                    <hr>

                    <div class="product-content-info-count">
                         <div class="product-content-info-sizes-title" :style="colorTitle">Кількість:</div>
                         
                         <div class="product-content-info-count-content">
                              <div class="product-content-info-count-content-counter">
                                   <button @click="changeQuantity('minus')" :style="colorBtnCount" class="product-content-info-count-content-counter-minus" type="button">
                                        <div>
                                             <svg width="9" height="9" class="minus" xmlns="http://www.w3.org/2000/svg" viewBox="">
                                                  <path :style="colorMinusAndPlus" d="M9 4v1H0V4z"></path>
                                             </svg>
                                        </div>
                                   </button>
                              
                                   <span class="product-content-info-count-content-counter-input" :style="borderInputStyle"> {{ quantity }} </span>
                                        
                                   <button @click="changeQuantity('plus')" :style="colorBtnCount" class="product-content-info-count-content-counter-plus" type="button">
                                        <div>
                                             <svg width="9" height="9" class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="">
                                                  <path :style="colorMinusAndPlus" d="M9 4H5V0H4v4H0v1h4v4h1V5h4z"></path>
                                             </svg>
                                        </div>
                                   </button>
                              </div>

                              <button @click="handleToCart" :style="productPrice" class="product-content-info-count-content-cart">
                                   Додати до кошику

                                   <svg style="margin-left: 12px;" width="12" height="7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3.7v-.1-.1-.1c0-.1-.1-.1-.1-.2l-3-3C8.7 0 8.3 0 8.1.1s-.1.6 0 .8L10.3 3H.5c-.3 0-.5.2-.5.5s.2.5.5.5h9.8L8.1 6.1c-.1.2-.1.6 0 .8.2.1.6.1.8 0l3-3c0-.1 0-.1.1-.2z"></path>
                                   </svg>
                              </button>
                         </div>
                    </div>

               </div>
          </div>

          <ProductRecs :colorTitle="productPrice" :categoryProduct="product.category"/>

          <div class="modal" :class="{ show: modalInstruction }">
               <div class="modal-inside">
                    <div class="modal-inside-blackout"></div>
                    <div class="modal-inside-close-area" @click="toggleModal"></div>
                    <div class="modal-inside-care-title">
                         <div>
                              <h4 id="стандартні-правила-догляду">Стандартні правила догляду:</h4>

                              <p> {{ product.careInstructions }} </p>
                         </div>

                         <div class="modal-inside-care-title-close" @click="toggleModal">
                              <svg width="15" height="15" class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg>
                         </div>
                    </div>
               </div>
          </div>

          <div class="modal-size" :class="{ 'show': modalSizeInstruction }">
               <div class="modal-size-inside">
                    <div class="modal-size-inside-blackout"></div>
                    <div class="modal-size-inside-close" @click="toggleModalSize"></div>
                    <div class="modal-size-inside-title" :style="colorTitle">
                         <div :style="colorModal">
                              <p class="modal-size-inside-title-text"> {{ product.sizesText[0] }} </p>
                              <p class="modal-size-inside-title-text"> {{ product.sizesText[1] }} </p>
                              <p class="modal-size-inside-title-text"> {{ product.sizesText[2] }} </p>
                              <p class="modal-size-inside-title-text"> {{ product.sizesText[3] }} </p>
                              <p class="modal-size-inside-title-text"> {{ product.sizesText[4] }} </p>
                              <p>
                                   <img class="modal-size-inside-title-image" :src="product.careInstructionsImage" v-if="product.careInstructionsImage">
                                   <p v-else></p>
                              </p>

                              <table>
                                   <thead>
                                        <tr>
                                             <th>(см)</th>
                                             <th>A</th>
                                             <th>B</th>
                                             <th>C</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr v-for="(size, key) in product.sizes" :key="key">
                                             <td>{{ key }}</td>
                                             <td>{{ size.A }}</td>
                                             <td>{{ size.B }}</td>
                                             <td>{{ size.C }}</td>
                                        </tr>
                                   </tbody>
                              </table>
                         </div>

                         <div class="modal-size-inside-title-close" @click="toggleModalSize">
                              <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                   <polygon fill="#808392" points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon>
                              </svg>
                         </div>
                    </div>
               </div>
          </div>
     </section>
</template>

<script setup>
     import { Swiper, SwiperSlide } from 'swiper/vue';
     import { Navigation } from 'swiper/modules';
     import { ref, onMounted } from 'vue';
     import { useRoute } from 'vue-router';
     import { useCartStore } from '@/store/cartStore';
     import api from '@/config/api';
     import ProductRecs from '@/components/ProductRecs.vue';

     import 'swiper/css';
     import 'swiper/css/navigation';
     import 'swiper/css/pagination';

     const route = useRoute();
     const emit = defineEmits();

     const { addToCart } = useCartStore();

     const quantity = ref(1);
     const chooseSize = ref(null);
     const productId = ref(null);
     const product = ref(null);
     const modalInstruction = ref(false);
     const modalSizeInstruction = ref(false);
     const productStyle = ref({
          backgroundColor: '', 
     });
     const productPrice = ref({
          backgroundColor: '', 
          color: '',
     });
     const colorBtn = ref({
          border: '', 
          color: '',
     });
     const colorTitle = ref({
          color: ''
     });
     const colorModal = ref({
          color: '',
     });
     const colorBtnSize = ref({
          color: '',
          backgroundColor: '',
     });
     const borderInputStyle = ref({
          borderTop: '',
          borderBottom: '',
          backgroundColor: '',
     });
     const colorMinusAndPlus = ref({
          fill: '',
     });
     const colorBtnCount = ref({
          backgroundColor: '',
          border: '',
     });

     const chooseSizeProduct = (size) => {
          chooseSize.value = size
     }

     const changeQuantity = (type) => {
          if (type === 'minus') {
               quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
          };

          if (type === 'plus') {
               quantity.value === 20 ? (quantity.value = 20) : quantity.value++;
          };
     };

     const toggleModal = () => {
          modalInstruction.value = !modalInstruction.value;

          if (modalInstruction.value) {
               document.body.style.overflow = "hidden";
          } else {
               document.body.style.overflow = "";
          }
     };

     const handleToCart = async () => {
          try {

               await addToCart(productId.value, chooseSize.value, quantity.value);

               emit("open-cart");

          } catch (error) {
               console.log(error);
          };
     };

     const toggleModalSize = () => {
          modalSizeInstruction.value = !modalSizeInstruction.value;

          if (modalSizeInstruction.value) {
               document.body.style.overflow = "hidden";
          } else {
               document.body.style.overflow = "";
          };
     };

     onMounted(async () => {

          try {

               productId.value = route.params.productId;
               product.value = await api.getProduct(productId.value);

          } catch (error) {
               console.log(error);
          };
 
          if (product.value.color === "black") {
               document.body.style.backgroundColor = "#111113";
               document.body.style.color = "#ffffff";

               document.styleSheets[0].addRule(".swiper-button-prev::after", "color: white");
               document.styleSheets[0].addRule(".swiper-button-next::after", "color: white");

               productPrice.value.backgroundColor = "#ffffff";
               productPrice.value.color = "#111113";

               colorBtn.value.border = "2px solid #474852";
               colorBtn.value.color = "#636573";

               colorTitle.value.color = "#636573";

               colorBtnSize.value.color = "#797b8c";
               colorBtnSize.value.backgroundColor = "#474852";

               colorBtnCount.value.border = "2px solid #ffffff";
               colorBtnCount.value.backgroundColor = "#111113";

               borderInputStyle.value.borderTop = '2px solid #fff';
               borderInputStyle.value.borderBottom = '2px solid #fff';
               borderInputStyle.value.backgroundColor = '#fff'

               colorMinusAndPlus.value.fill = '#fff';
               colorModal.value.color = "#000";

          } else if (product.value.color === "white") {

               productStyle.value.backgroundColor = "#ebe6e8";
               document.body.style.color = "#000000";

               document.styleSheets[0].addRule(".swiper-button-prev::after", "color: black");
               document.styleSheets[0].addRule(".swiper-button-next::after", "color: black");

               productPrice.value.backgroundColor = "#000000";
               productPrice.value.color = "#ffffff";

               colorBtn.value.border = "2px solid #9c9eaf";
               colorBtn.value.color = "#808392";

               colorTitle.value.color = "#808392";

               colorBtnSize.value.color = "#d7d5d6";

               colorBtnCount.value.border = "2px solid #000000";
               colorBtnCount.value.backgroundColor = "#ebe6e8";

               borderInputStyle.value.borderTop = '2px solid #000';
               borderInputStyle.value.borderBottom = '2px solid #000';
               borderInputStyle.value.backgroundColor = 'transparent';

               colorMinusAndPlus.value.fill = '#000';
               colorModal.value.color = "#000";
          };

     });
</script>

<style lang="scss">

     .product {

          display: flex;
          align-items: center;
          flex-direction: column;
          position: relative;
          z-index: 11;

          @media only screen and (min-width: 1024px) { 
               padding: 50px 0 155px;
          }

          @media only screen and (max-width: 1024px) { 
               padding: 30px 0 100px;
          }

          &-title {

               font-weight: 400;
               position: relative;
               text-align: center;
               z-index: 2;

               @media only screen and (min-width: 480px) { 
                    font-size: 38px;
               }

               @media only screen and (max-width: 480px) { 
                    font-size: 7.9vw;
               }
          }

          &-content {
               display: flex;
               max-width: 1500px;
               position: relative;
               width: 90vw;
               z-index: 1;

               @media only screen and (min-width: 1024px) {
                    align-items: flex-start;
                    justify-content: space-between;
                    margin-top: 75px;
               }

               @media only screen and (max-width: 1024px) {
                    align-items: center;
                    flex-direction: column;
                    margin-top: 40px;
               }

               &-info {
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;

                    @media only screen and (min-width: 1024px) { 
                         align-items: flex-end;
                         margin-left: 5.5%;
                         min-width: 435px;
                         width: 43.5%;
                    }

                    @media only screen and (max-width: 1024px) { 
                         justify-content: center;
                         margin-top: 25px;
                         width: 90vw;
                    }

                    hr {
                         flex-basis: 100%;
                    }

                    &-price {
                         display: flex;
                         font-size: 24px;
                         font-weight: 500;
                         position: relative;
                         border-radius: 100px;

                         @media only screen and (max-width: 720px) {
                              margin-bottom: 20px;
                         }

                         @media only screen and (max-width: 420px) {
                              font-size: 5.7142857143vw;
                         }

                         &-current {
                              align-items: center;
                              display: flex;
                              height: 2em;
                              position: relative;
                              white-space: nowrap;
                              padding: 0 1em;
                              z-index: 1;
                         }
                    }

                    &-description {
                         font-size: 18px;
                         margin-top: 20px;
                         font-weight: 300;

                         @media only screen and (max-width: 1024px) {
                              text-align: center;
                         }

                         p {
                              margin-bottom: 20px;
                         }
                    }

                    &-buttons {
                         display: flex;
                         align-items: center;
                         gap: 20px;
                         margin-top: 30px;

                         @media only screen and (max-width: 1024px) {
                              margin-top: 0;
                         }

                         @media only screen and (max-width: 430px) {
                              display: grid;
                         }
                    }

                    &-size-chart {
                         align-items: center;
                         border-radius: 100px;
                         cursor: pointer;
                         display: flex;
                         align-items: center;
                         justify-content: center;
                         font-size: 13px;
                         font-weight: 500;
                         height: 46px;
                         background: transparent;
                         letter-spacing: 2px;
                         padding: 0 30px;
                         position: relative;
                         text-transform: uppercase;
                         transition: opacity .5s,color .5s,border .5s;
                    }

                    &-sizes {
                         display: flex;
                         flex-direction: column;
                         position: relative;

                         @media only screen and (min-width: 1024px) { 
                              margin-top: 30px;
                         }

                         @media only screen and (max-width: 1024px) { 
                              margin-top: 20px;
                              text-align: center;
                         }

                         &-title {
                              font-size: 16px;
                              font-weight: 400;
                         }

                         &-list {

                              margin-top: 10px;
                              position: relative;

                              &-content {

                                   display: flex;
                                   flex-wrap: wrap;
                                   margin: -4px;

                                   &-btn {
                                        align-items: center;
                                        border-radius: 50%;
                                        cursor: pointer;
                                        display: flex;
                                        font-size: 18px;
                                        height: 38px;
                                        justify-content: center;
                                        letter-spacing: 0;
                                        margin: 4px;
                                        transition: all .5s;
                                        user-select: none;
                                        -moz-user-select: none;
                                        -webkit-user-select: none;
                                        width: 38px;
                                   }
                              }
                         }
                    }

                    &-count {
                         display: flex;
                         flex-direction: column;
                         position: relative;

                         @media only screen and (min-width: 1024px) {
                              margin-top: 25px;
                         }

                         @media only screen and (max-width: 1024px) {
                              text-align: center;
                              margin-top: 20px;
                         }

                         &-content {
                              display: flex;
                              gap: 20px;
                              margin-top: 10px;

                              @media only screen and (max-width: 1024px) {
                                   display: grid;
                                   gap: 30px;
                              }

                              &-counter {

                                   display: flex;

                                   @media only screen and (max-width: 1024px) {
                                        justify-content: center;
                                   }

                                   &-minus {
                                        align-items: center;
                                        cursor: pointer;
                                        border-radius: 50% 0 0 50%;
                                        border-right: none;
                                        display: flex;
                                        height: 50px;
                                        justify-content: center;
                                        width: 50px;
                                   }

                                   &-input {
                                        color: var(--black);
                                        align-items: center;
                                        display: flex;
                                        text-align: center;
                                        height: 50px;
                                        font-weight: 500;
                                        font-size: 15px;
                                        justify-content: center;
                                        width: 50px;
                                   }

                                   &-plus {
                                        align-items: center;
                                        display: flex;
                                        height: 50px;
                                        border-radius: 0 50% 50% 0;
                                        border-left: none;
                                        cursor: pointer;
                                        justify-content: center;
                                        width: 50px;
                                   }
                              }

                              &-cart {
                                   align-items: center;
                                   border-radius: 100px;
                                   display: flex;
                                   font-size: 15px;
                                   font-weight: 400;
                                   height: 50px;
                                   justify-content: center;
                                   cursor: pointer;
                                   letter-spacing: 2px;
                                   position: relative;
                                   text-transform: uppercase;
                                   transition: all .5s;
                                   width: 302px;
                                   width: 277px;
                                   transition: all 0.3s;

                                   &:hover {
                                        opacity: 0.8;
                                   }

                                   @media only screen and (max-width: 1200px) {
                                        width: 262px;
                                   }
                              }
                         }
                    }
               }

               &-slider {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    user-select: none;
                    -moz-user-select: none;
                    -webkit-user-select: none;

                    @media only screen and (min-width: 1024px) {
                         flex: 1 1;
                    }

                    @media only screen and (max-width: 1024px) {
                         max-width: 90vw;
                         width: 550px;
                    }

                    &-center {
                         align-items: center;
                         display: flex;
                         justify-content: space-between;
                         position: relative;
                         width: 750px;

                         @media only screen and (max-width: 1500px) {
                              width: 100%;
                              justify-content: center;
                         }

                    }

                    &-shadow {
                         width: 765px;
                         height: 765px;
                         align-items: center;
                         color: #000;
                         display: flex;
                         justify-content: center;

                         img {
                              width: 100%;
                              height: 90%;
                              object-fit: contain;
                         }

                         @media only screen and (max-width: 1500px) {
                              width: 45vw;
                              height: 45vw;
                         }

                         @media only screen and (max-width: 1024px) {
                              width: 75vw;
                              height: 75vw;
                         }
                    }
               }
          }
     }

     .modal.show {
          opacity: 1;
          display: flex;
          transition: opacity .5s ;
     }

     .modal {
          transition: opacity .5s ;
          opacity: 0;
          align-items: center;
          display: none;
          justify-content: center;
          left: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          pointer-events: auto;
          position: fixed;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;

          &-inside {
               align-items: center;
               display: flex;
               justify-content: center;
               margin: auto;
               position: relative;
               width: 100%;

               &-blackout {
                    background: rgba(0,0,0,.43);
                    left: 0;
                    pointer-events: none;
                    position: fixed;
                    top: 0;
                    height: 100%;
                    min-height: 100vh;
                    min-width: 100vw;
                    width: 100%;
                    z-index: 100;
               }

               &-close-area {
                    position: absolute;
                    height: 100%;
                    overflow: scroll;
                    min-height: 100vh;
                    min-width: 100vw;
                    width: 100%;
               }

               &-care-title {
                    background: #fff;
                    color: #000;
                    z-index: 1000;
                    border-radius: 20px;
                    margin: 5vw 0;
                    position: relative;
                    font-size: 18px;
                    max-width: 90vw;
                    text-align: center;
                    width: 600px;

                    @media only screen and (min-width: 1024px) {
                         padding: 50px;
                    }

                    @media only screen and (max-width: 1024px) {
                         padding: 5vw;
                    }

                    &-close {
                         position: absolute;
                         right: 20px;
                         top: 20px;
                         cursor: pointer;
                    }

                    h4 {
                         font-size: 24px;
                         margin-bottom: 20px;
                    }
               }
          }
     }

     .modal-size.show {
          opacity: 1;
          display: flex;
          transition: opacity .5s;;
     }

     .modal-size {
          align-items: center;
          display: none;
          height: 100%;
          justify-content: center;
          left: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          pointer-events: auto;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 10000;

          &-inside {
               align-items: center;
               display: flex;
               justify-content: center;
               margin: auto;
               position: relative;
               width: 100%;

               &-blackout {
                    background: rgba(0,0,0,.43);
                    left: 0;
                    pointer-events: none;
                    position: fixed;
                    top: 0;
                    z-index: 100;
                    height: 100%;
                    min-height: 100vh;
                    min-width: 100vw;
                    width: 100%;
               }

               &-close {
                    position: absolute;
                    height: 100%;
                    min-height: 100vh;
                    min-width: 100vw;
                    width: 100%;
               }

               &-title {
                    background: var(--white);
                    border-radius: 20px;
                    margin: 5vw 0;
                    position: relative;
                    font-size: 18px;
                    z-index: 100;
                    max-width: 90vw;
                    text-align: center;
                    width: 600px;

                    @media only screen and (min-width: 1024px) {
                         padding: 50px;
                    }

                    @media only screen and (max-width: 1024px) {
                         padding: 30px;
                    }

                    &-image {
                         object-fit: cover;
                         width: 100%;
                         height: 100%;
                    }

                    &-close {
                         position: absolute;
                         right: 20px;
                         top: 20px;
                         cursor: pointer;
                    }

                    &-text {
                         margin-bottom: 20px;
                    }

                    table {
                         background: #f4f6f8;
                         width: 100%;
                    }

                    td {
                         height: 40px;
                         line-height: 40px;
                    }

               }
          }
     }

</style>