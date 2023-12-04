<template>
     <div class="main app-page">
          <div class="main-content">
               <img class="main-content_image" src="/img/hero/hero-content_image.webp" alt="hero">
               <img class="main-content_image__mobile" src="/img/hero/hero-content_mobile-image.webp" alt="hero-mobile">
          </div>

          <div class="main-phrase">
               <div class="main-phrase-content">
                    <div class="main-phrase-content-text">
                         Є тільки <span>білий</span> та чорний. <br/> все інше - відтінки.
                    </div>
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
     .main {
          margin-top: -230px;
          z-index: -5;

          &-content {
               contain: strict;
               height: calc(90vh - 90px);
               height: calc(var(14px, 1vh) * 100 - 90px);
               -webkit-mask-image: -webkit-radial-gradient(#fff,#000);
               overflow: hidden;
               pointer-events: none;
               position: relative;
               width: 100%;

               @media only screen and (min-width: 1024px) {
                    min-height: 750px;
               }

               @media only screen and (max-width: 1024px) {
                    height: calc(100vh - -20px);
               }

               @media only screen and (min-width: 1024px) and (max-width: 1760px) { 
                    max-height: calc(100vh - 110px);
               }

               &_image {
                    width: 100%;
                    height: 120%;
                    object-fit: cover;

                    @media only screen and (max-width: 1375px) {
                         display: none;
                    }
               }

               &_image__mobile {
                    width: 100%;
                    height: 120%;
                    object-fit: cover;
                    display: none;

                    @media only screen and (max-width: 1375px) {
                         display: block;
                    }    
               }
          }

          &-phrase {
               align-items: center;
               contain: strict;
               display: flex;
               height: 140px;
               justify-content: center;
               overflow: hidden;
               position: relative;
               text-transform: uppercase;
               -webkit-mask-image: -webkit-radial-gradient(#fff,#000);
               background: var(--white);

               &-content {
                    align-items: center;
                    display: flex;
                    flex-direction: column;

                    &-text {
                         font-weight: 500;
                         text-align: center;

                         @media only screen and (min-width: 540px) {
                              font-size: 21px;
                              line-height: 43px;
                              word-spacing: 8px;
                         }
                         
                         @media only screen and (max-width: 540px) {
                              line-height: 34.5px;
                         }

                         br {

                              @media only screen and (min-width: 1024px) {
                                   display: none;
                              }

                              @media only screen and (max-width: 1024px) {
                                   display: block;
                              }
                         }

                         span {
                              background: var(--black);
                              color: var(--white);
                              padding: 9px 15px;
                         }
                    }
               }

          }
     }
</style>