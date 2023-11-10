<template>     
  <section class="category">
    <h2 class="category-title"> {{ getCategoryTitle(route.params.category) }} </h2>

    <div class="category-list" v-if="!isLoading && products.length > 0">
      <div class="category-list-content">
        <a :href="`/product/${element._id}`" class="category-list-content-product" v-for="element in products" :key="element._id">
          <div class="category-list-content-product-cover">
            <picture>
              <source :srcset="element.images[0]" type="imame/webp">
              <img loading="lazy" class="category-list-content-product-cover-image" :src="element.images[0]" :alt="element.slug">
            </picture>

            <div class="category-list-content-product-cover-blackout"></div>
            <div class="category-list-content-product-cover-content-price category-list-content-product-cover-price">
              <div class="category-list-content-product-cover-price-current">
                <span> {{ element.price }} UAH </span>
              </div>
            </div>

            <button @mouseenter="onButtonHover(true)" @mouseleave="onButtonHover(false)" type="button" class="hovered category-list-content-product-cover-more"> 
              Детальнише 
              
              <svg style="margin-left: 12px;" width="12" height="7" class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="">
                <path d="M12 3.7v-.1-.1-.1c0-.1-.1-.1-.1-.2l-3-3C8.7 0 8.3 0 8.1.1s-.1.6 0 .8L10.3 3H.5c-.3 0-.5.2-.5.5s.2.5.5.5h9.8L8.1 6.1c-.1.2-.1.6 0 .8.2.1.6.1.8 0l3-3c0-.1 0-.1.1-.2z"></path>
              </svg> 
            </button>
          </div> 
          <button type="button" class="category-list-content-product-name">
            <span> {{ element.title }} </span>
          </button>
        </a>
      </div>
    </div>

    <Loader v-if="isLoading"/>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import api from '@/config/api';
import Loader from '@/components/Loader.vue';

const route = useRoute();
const products = ref([]);
const isLoading = ref(true);

const isButtonHovered = ref(false);

const onButtonHover = (hovered) => {
  isButtonHovered.value = hovered;
};

const getCategoryTitle = (category) => {
  if (category === 't-shirts') {
    return 'Футболка';
  }
  else if (category === 'sweatshirts') {
    return 'Світшоти';
  }
  else if (category === "hoodies") {
      return 'Худi';
  }
  else if (category === "bags") {
      return 'Рюкзаки';
  }
  else if (category === "pants-shorts") {
      return 'Штани/шорти';
  }
  else if (category === "polo") {
      return 'Поло';
  }
  else if (category === "shirts") {
      return 'Сорочки';
  }
  else if (category === "pajamas") {
      return 'Піжама';
  }
  else if (category === "hats") {
      return 'Шапки';
  }
  else if (category === "caps") {
      return 'Кепки';
  }  
  else if (category === "shirts") {
      return 'Сорочки';
  }
};

onMounted(async () => {
  try {

    products.value = await api.getAllProduct(route.params.category);
    isLoading.value = false;

  } catch (error) {
    console.log(error);
  };
});

</script>

<style lang="scss" scoped>
  .category {
    align-items: center;
    background: var(--white);
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;

    @media only screen and (min-width: 1024px) {
      padding: 50px 0 155px;
    }

    @media only screen and (max-width: 1024px) {
      padding: 35px 0 100px;
    }

    &-title {
      font-size: 38px;
      font-weight: 400;
    }

    &-list {

      margin-top: 70px;

      @media only screen and (min-width: 1600px) { 
        width: 1360px;
      }

      @media only screen and (min-width: 1280px) and (max-width: 1600px) { 
        width: 85vw; 
      }

      @media only screen and (min-width: 1024px) and (max-width: 1280px) {  
        width: 895px;
      }

      @media only screen and (max-width: 1024px) { 
        margin-top: 40px;
      }

      @media only screen and (max-width: 480px) { 
        margin-top: 0px;
      }

      @media only screen and (min-width: 768px) and (max-width: 1024px) {  
        width: 87.5vw;
      }

      @media only screen and (min-width: 480px) and (max-width: 768px) { 
        width: 430px;
      }

      @media only screen and (max-width: 480px) { 
        width: 100%;
      }

      &-content {
        display: flex;
        flex-wrap: wrap;
        margin: -35px -17.5px;

        @media only screen and (max-width: 480px) {
          justify-content: center;
          margin: 0;
        }

        &-product {
          cursor: default;
          filter: drop-shadow(0 0 20px rgba(0,60,120,.06));
          -webkit-filter: drop-shadow(0 0 20px rgba(0,60,120,.06));
          display: flex;
          flex-direction: column;
          margin: 35px 17.5px;

          @media only screen and (min-width: 1600px) {
            width: 430px;
          }

          @media only screen and (min-width: 1280px) and (max-width: 1600px) {
            width: calc(28.33333vw - 23.33333px);
          }

          @media only screen and (min-width: 1024px) and (max-width: 1280px) { 
            width: 430px;
          }

          @media only screen and (min-width: 768px) and (max-width: 1024px) { 
            width: calc(43.75vw - 17.5px);
          }

          @media only screen and (min-width: 480px) and (max-width: 768px) { 
            width: 430px;
          }

          @media only screen and (max-width: 480px) { 
            width: 90vw;
          }

          &:hover {
            .category-list-content-product-name span {
              background: var(--black);
              color: var(--white);
            }

            .category-list-content-product-cover-more {
              opacity: 1;
            }

            .category-list-content-product-cover-blackout {
              opacity: 1;
              background-color: rgba(0, 0, 0, 0.5);
            }

          }

          &-cover {
            align-items: center;
            background: #fff;
            border-radius: 29px;
            contain: strict;
            display: flex;
            justify-content: center;
            -webkit-mask-image: -webkit-radial-gradient(#fff,#000);
            overflow: hidden;
            position: relative;

            @media only screen and (min-width: 1600px) { 
              height: 450px;
            }

            @media only screen and (min-width: 1280px) and (max-width: 1600px) {
              height: calc(29.65116vw - 24.4186px);
            }

            @media only screen and (min-width: 1024px) and (max-width: 1280px) { 
              height: 450px;
            }

            @media only screen and (min-width: 768px) and (max-width: 1024px) { 
              height: calc(45.78488vw - 18.31395px);
            }

            @media only screen and (min-width: 480px) and (max-width: 768px) {
              height: 450px;
            }

            @media only screen and (max-width: 480px) {
              height: 94.1860465116vw;
            }

            &-image {
              height: 80%;
              width: 90%;
              left: 5%;
              top: 15%;
              object-fit: contain;
              position: absolute;
            }

            &-blackout {
              height: 100%;
              position: absolute;
              transition: .5s;
              width: 100%;
            }

            &-content-price {
              display: flex;
              font-size: 24px;
              font-weight: 500;
              position: relative;
            }

            &-price {
              left: 0;
              position: absolute;
              top: 0;

              &-current {
                background: #000;
                color: #fff;
                padding: 0 1em;
                z-index: 1;
                border-radius: 0 0 1em 0;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 2em;
              }
            }

            &-more {
              align-items: center;
              background: #fff;
              border-radius: 100px;
              cursor: pointer;
              opacity: 0;
              display: flex;
              font-size: 15px;
              z-index: 10;
              font-weight: 400;
              height: 50px;
              justify-content: center;
              letter-spacing: 1px;
              position: relative;
              text-transform: uppercase;
              transition: opacity .5s;
              width: 220px;

              &.hovered {
                opacity: 0;

                &:hover {
                  opacity: 0.75;
                }
              }

            }
          }

          &-name {
            width: 100%;
            position: relative;
            overflow: hidden;
            -webkit-mask-image: -webkit-radial-gradient(#fff,#000);
            margin-top: 20px;
            height: 58px;
            cursor: pointer;
            contain: strict;
            border-radius: 100px;

            span {
              align-items: center;
              border-radius: inherit;
              display: flex;
              font-size: 18px;
              height: 100%;
              justify-content: center;
              left: 0;
              letter-spacing: 2px;
              position: absolute;
              top: 0;
              width: 100%;
              transition: .5s;

              &:first-child {
                background: var(--white);
                border: 2px solid #f1f3f5;
              }
            }
          }
        }
      }
    }
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 20px;
  }
</style>