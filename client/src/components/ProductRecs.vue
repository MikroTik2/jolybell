<template>
     <div class="product-recs">
          <div class="product-recs-title">
               Рекомендуємо 
               <span :style="colorTitle">придбати</span>
          </div>

          <div class="product-recs-content">
               <swiper 
                    class="product-recs-content-slider" 
                    :navigation="{ prevEl: prevButton, nextEl: nextButton }" 
                    :modules="[Navigation]" 
                    :space-between="20" 
                    :slides-per-view="1"        
                    :breakpoints="{
                         700: {
                              slidesPerView: 1,
                         },
                         800: {
                              slidesPerView: 2,
                         },
                         1200: {
                              slidesPerView: 3,
                    }}">
                    <swiper-slide v-for="(product, index) in productSlide" :key="index">
                         <a :href="`/product/${product._id}`" class="product-recs-content-slider__content">
                              <picture>
                                   <source :srcset="product.images[0]">
                                   <img class="product-recs-content-slider__content-image" :src="product.images[0]" :alt="product.slug">
                              </picture>

                              <div class="product-recs-content-slider__content-price">
                                   <div class="product-recs-content-slider__content-price-padd" :style="colorTitle">
                                        <span> {{ product.price }} UAH </span>
                                   </div>
                              </div>

                              <div class="product-recs-content-slider__content-name"> {{ product.title }} </div>

                         </a>
                    </swiper-slide>
               </swiper>
          </div>
     </div>
</template>

<script setup>
     import { ref, onMounted } from 'vue';
     import { Swiper, SwiperSlide } from 'swiper/vue';
     import { Navigation } from 'swiper/modules';
     import api from '@/config/api';

     const props = defineProps({
          categoryProduct: Boolean,
          colorTitle: Boolean,
     });

     const productSlide = ref([]);

     onMounted(async () => {
          productSlide.value = await api.getAllProduct(props.categoryProduct);
          console.log(productSlide.value);
     });
</script>

<style lang="scss" scoped>
     .product-recs {
          align-items: center;
          display: flex;
          flex-direction: column;
          margin-top: 100px;
          position: relative;
          user-select: none;
          -webkit-user-select: none;
          z-index: 1;

          &-title {
               font-weight: 500;
               text-transform: uppercase;

               @media only screen and (min-width: 472px) {
                    font-size: 26px;
               }

               @media only screen and (max-width: 472px) {
                    font-size: 5.5vw;
               }

               span {

                    @media only screen and (min-width: 472px) {
                         margin-left: 7px;
                         padding: 9px 15px;
                    }
               }
          }

          &-content {
               align-items: center;
               display: flex;
               justify-content: space-between;
               position: relative;
               z-index: 11;
               max-width: 850px;

               @media only screen and (max-width: 1200px) {
                    max-width: 550px;
               }

               @media only screen and (max-width: 700px) {
                    max-width: 300px;
               }

               @media only screen and (min-width: 1024px) {
                    margin-top: 70px;
               }

               @media only screen and (max-width: 1024px) {
                    margin-top: 35px;
               }

               &-slider {

                    width: 100vw;

                    &__content {
                         align-items: center;
                         cursor: pointer;
                         display: flex;
                         flex-direction: column;
                         height: 100%;
                         justify-content: space-between;
                         gap: 8px;

                         &-image {
                              height: 142px;
                         }

                         &-price {
                              display: flex;
                              font-size: 24px;
                              font-weight: 600;
                              position: relative;
                              font-size: 13px;

                              &-padd {
                                   padding: 0 1em;
                                   z-index: 1;
                                   align-items: center;
                                   border-radius: 100px;
                                   display: flex;
                                   height: 2em;
                                   position: relative;
                                   white-space: nowrap;
                              }
                         }

                         &-name {
                              font-size: 15px;
                              font-weight: 400;
                              line-height: 100%;
                         }
                    }
               }
          }
     }
</style>