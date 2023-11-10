<template>
     <div class="faq app-page">
          <div class="faq-list">
               <div class="faq-item">
                    
                    <header class="faq-item-header" @click="toggleFaqOne">
                         <span>ЗАГАЛЬНІ ПИТАННЯ</span>

                         <div class="faq-item-header-arrow" :style="{ transform: blockOne ? 'rotate(90deg)' : 'rotate(-90deg)' }">
                              <svg width="12" height="7" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M12 3.7v-.1-.1-.1c0-.1-.1-.1-.1-.2l-3-3C8.7 0 8.3 0 8.1.1s-.1.6 0 .8L10.3 3H.5c-.3 0-.5.2-.5.5s.2.5.5.5h9.8L8.1 6.1c-.1.2-.1.6 0 .8.2.1.6.1.8 0l3-3c0-.1 0-.1.1-.2z"></path>
                              </svg>
                         </div>
                    </header>

                    <div class="faq-item-wrapper" :class="{ 'active': blockOne }">
                         <div class="faq-item-wrapper-content">
                              <div class="faq-item-wrapper-content-block" v-for="(element, i) of faqBlockOne" :key="i">
                                   <p> {{ element.title }} </p>
                                   <p> {{ element.description }} </p>
                              </div>
                         </div>
                    </div>

               </div>
               <div class="faq-item">

                    <header class="faq-item-header" @click="toggleFaqTwo">
                         <span class="faq-item-header-title">ДОСТАВКА ТА ОПЛАТА</span>

                         <div class="faq-item-header-arrow" :style="{ transform: blockTwo ? 'rotate(90deg)' : 'rotate(-90deg)' }">
                              <svg width="12" height="7" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M12 3.7v-.1-.1-.1c0-.1-.1-.1-.1-.2l-3-3C8.7 0 8.3 0 8.1.1s-.1.6 0 .8L10.3 3H.5c-.3 0-.5.2-.5.5s.2.5.5.5h9.8L8.1 6.1c-.1.2-.1.6 0 .8.2.1.6.1.8 0l3-3c0-.1 0-.1.1-.2z"></path>
                              </svg>
                         </div>
                    </header>

                    <div class="faq-item-wrapper" :class="{ 'active': blockTwo }">
                         <div class="faq-item-wrapper-content">
                              <div class="faq-item-wrapper-content-block" v-for="(element, i) of faqBlockTwo" :key="i">
                                   <p> {{ element.title }} </p>
                                   <p> {{ element.description }} </p>
                              </div>
                         </div>
                    </div>
               
               </div>
          </div>
     </div>
</template>

<script setup>
     import { ref } from 'vue';

     const blockOne = ref(false);
     const blockTwo = ref(false);

     const toggleFaqOne = () => {
          blockOne.value = !blockOne.value
     }

     const toggleFaqTwo = () => {
          blockTwo.value = !blockTwo.value
     }

     const faqBlockOne = ref([
          { title: "Навіщо це все?", description: "Зухвало, дорого, престижно — це поняття, якими керуються раби моди. Наша продукція є жестом неповаги до людей гламурного розуму." },
          { title: "Чому так дорого?", description: "Ми використовуємо одні з найдорожчих тканин та матеріалів у наших виробах, в той час, як весь ринок націлений на дешеве виробництво." },
          { title: "Чи буде ще товар, окрім футболок, світшотів і т.д?", description: "Все залежить від попиту. Виробництво якісних речей дороге, тому ми спочатку розмірковуємо чи потрібна ця нова річ. Зараз ми плануємо запустити виробництво нових рюкзаків." },
          { title: "Що саме відрізняє ваш товар від інших?", description: "Сміливість, в першу чергу. Нам чхати, що написано на футболці. Головне - зручність. Ми прискіпливі до всіх дрібниць і наші ярлики тому підтвердження. Також, до товарів додається оригінальний підпис Олексія Шевцова, що відображає нашу небайдужість до покупця." },
          { title: "Що з якістю?", description: "Ми не робимо те, чого самі б не використовували." },
          { title: "Що таке «трек-номер» і де його шукати?", description: "Трек-номер - це номер, за допомогою якого ви можете відстежувати місце розташування ваших речей. Знайти його ви можете в особистому кабінеті на сайті, у вашій електронній скриньці, а також у повідомленні на телефоні після відправки посилки." },
     ]);

     const faqBlockTwo = ref([
          { title: "Інформація", description: ` 
               Оплатити своє замовлення ви можете у розділі «кошик», вибравши відповідний товар. Слідуйте за інструкціями.

               Оплата здійснюється банківськими картами Visa або MasterСard.

               Після оплати ваш товар проходить перевірку, потім ваше замовлення оформлює адміністрація та протягом 48 годин запит буде оброблений зі статусом «замовлення прийнято»

               Відправлення замовлень здійснюється протягом 1 - 3 робочих днів після прийняття їх адміністратором.

               Доставка по Україні здійснюється компанією «Нова Пошта». Посилка приходить протягом 1-2 робочих днів з дати відправлення замовлення. Пакунок слід забрати протягом 5-ти днів з моменту доставки. Після 5-ти днів компанія «Нова Пошта» відправляє посилку назад до відправника. Доставку за межі України здійснює компанія «УкрПошта», посилка приходить протягом 7-21 робочих днів з дати відвантаження замовлення.

               *Термін відправлення посилки залежать від обраних товарів.
               `
          },
          { title: "Як формується ціна доставки?", description: ` 
                    Наше виробництво і склад розташовується в Україні. Відправляючи посилки за кордон «УкрПоштою» та іншими поштовими службами, вартість посилки залежить від її ваги. Габарити (розміри) не мають значення. Кожний товар має свою вагу: футболки від 170 до 260 грам, світшоти від 400 до 700, худі до 850 і так далі. Це залежить від розміру XS-3XL. Тому при замовленні футболки, якщо додати світшот, ціна доставки збільшиться (через вагу посилки). До 500 грам одна ціна, до 1000 друга, до 2000 грам третя, і вище. По Україні ціна доставки від 70 гривень.
     
                    Доставка за кордон компанією «УкрПошта» оплачується одразу на сайті.

                    Доставка по Україні компанією «Нова Пошта» оплачується при отриманні. (На сайті ви платите лише за товар).
               `
          },
          { title: "Які комісії платіжних систем?", description: `У платіжної системи Wayforpay комісія 0%, але при оплаті відбувається конвертація, якщо оплата відбувається в доларах, або в будь-якій іншій валюті. Так як ми розташовуємося в Україні, то валюта з якою ми працюємо - гривня. Для клієнтів з України комісій та конвертацій немає. В платіжній системі Interkassa присутня комісія від 3 до 5.5%.`
          },
     ])
</script>

<style lang="scss" scoped>
     .faq {
          background: var(--white);
          display: flex;
          justify-content: center;
          padding: 60px 20px;
          position: relative;
          min-height: calc(100vh - 179px);
          min-height: calc(var(--vh,1vh)*100 - 179px);
          width: 100%;

          &-list {
               max-width: 90vw;
               width: 1300px;
               gap: 30px;
               margin-bottom: 100px;
               display: flex;
               flex-direction: column;
          }

          &-item {
               display: flex;
               flex-direction: column;

               &-header {
                    align-items: center;
                    border: 2px solid #000;
                    border-radius: 1000px;
                    cursor: pointer;
                    display: flex;
                    font-size: 13px;
                    font-weight: 400;
                    height: 50px;
                    justify-content: space-between;
                    letter-spacing: 2px;
                    max-width: 100%;
                    padding: 0 30px;
                    position: relative;
                    text-transform: uppercase;

                    @media only screen and (min-width: 600px) {
                         width: 330px;
                         font-size: 15px;
                    }

                    &-arrow {
                         transition: all .5s;
                    }
               }

               &-wrapper {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    transition: height .8s cubic-bezier(.25,.04,0,1);
                    width: 100%;
                    margin-top: 20px;
                    height: 0;

                    &-content {
                         flex-shrink: 0;

                         &-block {
                              margin-bottom: 32px; 
                              max-width: 760px;

                              p:nth-child(1) {
                                   font-size: 25px;
                                   font-weight: 500;
                              }

                              p:nth-child(2) {
                                   font-size: 18px;
                                   font-weight: 300;
                                   white-space: pre-line;
                              }
                         }
                    }
               }
          }
     }

     .active {
          
          height: auto;
          
     }
</style>