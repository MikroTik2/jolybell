<template>
     <div class="account app-page">
          <h1 class="account-title">Мій акаунт</h1>

          <div class="account-content">
               <div class="account-content-left">
                    <ul class="account-content-left-menu">
                         <li class="account-content-left-menu__item"><a href="/account">Особисті дані</a></li>
                         <li class="account-content-left-menu__order"><a href="/account/order">Мої замовлення</a></li>
                    </ul>

                    <button @click="handleLogout" type="button" class="account-content-left__logout">Вийти з акаунту</button>
               </div>

               <div class="account-content-right">
                    <div class="account-content-right__details">
                    
                         <!-- socials -->
                         <div class="account-content-right__details-socials">

                              <div class="account-content-right__details-socials-google">
                                   <div class="account-content-right__details-socials-google-icon">
                                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M20.4 16.4v7.4h11c-.5 3.1-3.3 8.4-11 8.4-6.6 0-12-5.5-12-12.2s5.4-12.2 12-12.2c3.7 0 6.3 1.6 7.7 3l5.7-5.5C30.3 2 25.8 0 20.4 0c-11 0-20 9-20 20s9 20 20 20c11.5 0 19.2-8.1 19.2-19.5 0-1.7-.2-2.8-.5-4.1H20.4z"></path>
                                        </svg>
                                   </div>
                              </div>

                              <div class="account-content-right__details-socials-vk">
                                   <div class="account-content-right__details-socials-google-icon">
                                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm10.15 22.16c.93.91 1.92 1.77 2.76 2.77.37.44.72.9.99 1.42.38.74.04 1.55-.62 1.59h-4.1c-1.06.09-1.9-.34-2.61-1.06-.57-.58-1.09-1.19-1.64-1.79-.22-.24-.46-.48-.74-.66-.56-.36-1.04-.25-1.36.33-.33.59-.4 1.25-.43 1.91-.04.97-.34 1.22-1.31 1.26-2.07.1-4.04-.22-5.86-1.26-1.61-.92-2.86-2.22-3.95-3.69-2.12-2.87-3.74-6.02-5.19-9.26-.34-.72-.1-1.11.7-1.12 1.34-.03 2.67-.02 4.01 0 .54.01.9.32 1.11.83.72 1.78 1.61 3.47 2.72 5.04.3.42.6.83 1.03 1.13.47.33.84.22 1.06-.31.14-.34.21-.7.24-1.06.11-1.24.12-2.47-.07-3.7-.11-.77-.55-1.27-1.32-1.41-.39-.07-.33-.22-.14-.44.33-.39.64-.63 1.26-.63h4.63c.73.14.89.47.99 1.21v5.14c-.01.28.14 1.13.65 1.31.41.14.68-.19.92-.45 1.11-1.18 1.9-2.57 2.61-4.01.31-.63.58-1.29.84-1.95.19-.49.5-.73 1.05-.72l4.46.01c.13 0 .26 0 .39.02.75.13.96.45.72 1.18-.37 1.15-1.08 2.11-1.77 3.07-.74 1.03-1.54 2.02-2.28 3.06-.65.95-.6 1.42.25 2.24z"></path>
                                        </svg>
                                   </div>
                              </div>

                         </div>

                         <!-- personal data -->
                         <form class="account-content-right__details-personal" @submit.prevent="handleUpdateUser">
                              <header class="account-content-right__details-personal-header">
                                   <span class="account-content-right__details-personal-header-title">Особисті дані</span>
                                   <span class="account-content-right__details-personal-header-update" @click="(toggleUpdate('personal'))">{{ isVisiblePersonal ? 'Відмінити' : 'Редагувати' }}</span>
                              </header>

                              <div class="account-content-right__details-personal-list">
                                   <div class="account-content-right__details-personal-list-content">

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">Ім'я</p>
                                             <input maxlength="30" :value="getUserFirstName" class="account-content-right__details-personal-list-content-item__input"  v-if="!isVisiblePersonal" type="text">
                                             <input v-model="personalInfo.firstname" autocomplete="given-name" class="account-content-right__details-personal-list-content-item__input-active" type="text" v-else>
                                        </div>

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">ПРІЗВИЩЕ</p>
                                             <input :value="getUserLastName" maxlength="30" class="account-content-right__details-personal-list-content-item__input" type="text" v-if="!isVisiblePersonal">
                                             <input v-model="personalInfo.lastname" autocomplete="family-name" maxlength="30" class="account-content-right__details-personal-list-content-item__input-active" type="text" v-else>
                                        </div>

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">ПО БАТЬКОВІ</p>
                                             <input :value="getUserParentName" maxlength="30" class="account-content-right__details-personal-list-content-item__input" type="text" v-if="!isVisiblePersonal">
                                             <input v-model="personalInfo.parentname" autocomplete="family-name" maxlength="30" class="account-content-right__details-personal-list-content-item__input-active" type="text" v-else>
                                        </div>

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">ЕЛ. АДРЕСА</p>
                                             <input :value="getUserEmail" maxlength="30" class="account-content-right__details-personal-list-content-item__input" type="text">
                                        </div>
                                   </div>
                              </div>

                              <button type="submit" v-if="isVisiblePersonal" class="account-content-right__details-personal-btnUpdate">Зберегти зміни</button>
                         </form>

                         <!-- user address -->
                         <form class="account-content-right__details-delivery" @submit.prevent="handleUpdateAddress">
                              <header class="account-content-right__details-personal-header">
                                   <span class="account-content-right__details-personal-header-title">Адреса доставки</span>
                                   <span class="account-content-right__details-personal-header-update" @click="(toggleUpdate('address'))">{{ isVisibleAddress ? 'Відмінити' : 'Редагувати' }}</span>
                              </header>

                              <div class="account-content-right__details-personal-list">
                                   <div class="account-content-right__details-personal-list-content">

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">КРАЇНА</p>
                                             <input :value="getUserAddressCountry" maxlength="30" class="account-content-right__details-personal-list-content-item__input" type="text" v-if="!isVisibleAddress">
                                             <input v-model="addressInfo.country" autocomplete="family-name" maxlength="30" class="account-content-right__details-personal-list-content-item__input-active" type="text" v-else>
                                        </div>

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">КРАЙ/ОБЛАСТЬ/РЕГІОН</p>
                                             <input :value="getUserAddressRegion" maxlength="30" class="account-content-right__details-personal-list-content-item__input" type="text" v-if="!isVisibleAddress">
                                             <input v-model="addressInfo.region" autocomplete="family-name" maxlength="30" class="account-content-right__details-personal-list-content-item__input-active" type="text" v-else>
                                        </div>

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">ПОШТОВИЙ ІНДЕКС</p>
                                             <input :value="getUserAddressZip" maxlength="30" class="account-content-right__details-personal-list-content-item__input" type="text" v-if="!isVisibleAddress">
                                             <input v-model="addressInfo.zip" autocomplete="family-name" maxlength="30" class="account-content-right__details-personal-list-content-item__input-active" type="text" v-else>
                                        </div>

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">МІСТО</p>
                                             <input :value="getUserAddressCity" maxlength="30" class="account-content-right__details-personal-list-content-item__input" type="text" v-if="!isVisibleAddress">
                                             <input v-model="addressInfo.city" autocomplete="family-name" maxlength="30" class="account-content-right__details-personal-list-content-item__input-active" type="text" v-else>
                                        </div>

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">ВУЛИЦЯ, БУДИНОК, КВАРТИРА</p>
                                             <input :value="getUserAddressStreet" maxlength="30" class="account-content-right__details-personal-list-content-item__input" type="text" v-if="!isVisibleAddress">
                                             <input v-model="addressInfo.street" autocomplete="family-name" maxlength="30" class="account-content-right__details-personal-list-content-item__input-active" type="text" v-else>
                                        </div>
                                   </div>
                              </div>

                              <button type="submit" v-if="isVisibleAddress" class="account-content-right__details-personal-btnUpdate">Зберегти зміни</button>
                         </form>

                         <!-- update password -->
                         <form class="account-content-right__details-password" @submit.prevent="handleUpdatePassword">
                              <header class="account-content-right__details-personal-header">
                                   <span class="account-content-right__details-personal-header-title">Пароль</span>
                                   <span class="account-content-right__details-personal-header-update" @click="(toggleUpdate('password'))">{{ isVisiblePassword ? 'Відмінити' : 'Редагувати' }}</span>
                              </header>

                              <div class="account-content-right__details-personal-list">
                                   <div class="account-content-right__details-personal-list-content">

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">НОВИЙ ПАРОЛЬ</p>
                                             <input maxlength="30" class="account-content-right__details-personal-list-content-item__input" v-if="!isVisiblePassword" type="password">
                                             <input v-model="passwordUpdate.password"  class="account-content-right__details-personal-list-content-item__input-active" type="password" v-else>
                                        </div>

                                        <div class="account-content-right__details-personal-list-content-item">
                                             <p class="account-content-right__details-personal-list-content-item__text">ПОВТОРІТЬ ПАРОЛЬ</p>
                                             <input maxlength="30" class="account-content-right__details-personal-list-content-item__input" v-if="!isVisiblePassword" type="password">
                                             <input v-model="passwordUpdate.repeatPassword"  class="account-content-right__details-personal-list-content-item__input-active" type="password" v-else>
                                        </div>

                                   </div>
                              </div>

                              <button type="submit" v-if="isVisiblePassword" class="account-content-right__details-personal-btnUpdate">Зберегти зміни</button>
                         </form>

                    </div>
               </div>
          </div>
     </div>
</template>

<script setup>
     import { ref, onMounted } from 'vue';
     import { useRouter } from 'vue-router';
     import api from '@/config/api';

     const isVisiblePersonal = ref(false);
     const isVisibleAddress = ref(false);
     const isVisiblePassword = ref(false);
     const userInformation = ref({});

     const router = useRouter();

     const personalInfo = ref({
          firstname: "",
          lastname: "",
          parentname: "",
     });

     const addressInfo = ref({
          country: "",
          city: "",
          region: "",
          street: "",
          zip: "",

     });

     const passwordUpdate = ref({
          password: "",
          repeatPassword: "",
     });

     const getUser = JSON.parse(localStorage.getItem("userData"));
     const getUserEmail = getUser.email;
     const getUserFirstName = getUser.firstname;
     const getUserLastName = getUser.lastname;
     const getUserParentName = getUser.parentname;
     const getUserAddressCountry = getUser.deliveryAddress.country;
     const getUserAddressRegion = getUser.deliveryAddress.region;
     const getUserAddressCity = getUser.deliveryAddress.city;
     const getUserAddressStreet = getUser.deliveryAddress.street;
     const getUserAddressZip = getUser.deliveryAddress.zip;

     const toggleUpdate = (type) => {
          if (type === 'personal') {
               isVisiblePersonal.value = !isVisiblePersonal.value;
          };

          if (type === 'address') {
               isVisibleAddress.value = !isVisibleAddress.value;
          };

          if (type === 'password') {
               isVisiblePassword.value = !isVisiblePassword.value;
          };
     };

     const handleUpdateUser = async () => {
          try {

               const updateUser = {
                    firstname: personalInfo.value.firstname,
                    lastname: personalInfo.value.lastname,
                    parentname: personalInfo.value.parentname,
               };

               const response = await api.updateUser(updateUser);

               localStorage.setItem("userData", JSON.stringify(response));

          } catch (error) {
               console.log(error);
          };
     };

     const handleUpdateAddress = async () => {
          try {

               const updateAddress = {
                    country: addressInfo.value.country,
                    region: addressInfo.value.region,
                    city: addressInfo.value.city,
                    zip: addressInfo.value.zip,
                    street: addressInfo.value.street,
               };

               const response = await api.updateAddress(updateAddress);
               localStorage.setItem("userData", JSON.stringify(response));

          } catch (error) {
               console.log(error);
          };
     };

     const handleUpdatePassword = async () => {
          try {

               const updatePassword = {
                    password: passwordUpdate.value.password,
                    repeatPassword: passwordUpdate.value.repeatPassword,
               };

               const response = await api.updatePassword(updatePassword);

          } catch (error) {
               console.log(error);
          };
     };

     const handleLogout = async () => {
          try {

               localStorage.removeItem("userData");
               router.push('/');

               setTimeout(() => {
                    window.location.reload();
               }, 100); 

          } catch (error) {
               console.log(error);
          };
     };

</script>

<style lang="scss" scoped>
     .account {
          align-items: center;
          background: var(--white);
          display: flex;
          flex-direction: column;
          padding-bottom: 95px;
          position: relative;
          width: 100%;

          &-title {
               font-weight: 400;
               margin-top: 40px;

               @media only screen and (min-width: 480px) {
                    font-size: 42px;
               }

               @media only screen and (max-width: 480px) {
                    font-size: 8vw;
                    font-weight: 400;
               }
          }

          &-content {
               display: flex;
               flex-wrap: wrap;
               width: 100%;
               padding: 0 15px;
               margin-top: 40px;

               @media only screen and (min-width: 1368px) { 
                    width: 1300px;
               }

               @media only screen and (min-width: 420px) and (max-width: 1024px) {
                    width: 380px;
               }

               &-left {
                    display: flex;
                    flex-direction: column;

                    @media only screen and (min-width: 1024px) { 
                         width: 266px;
                    }

                    @media only screen and (max-width: 1024px) { 
                         margin-top: 80px;
                         order: 2;
                         width: 100%;
                    }

                    &-menu {
                         background: var(--black);
                         border-radius: 15px;
                         color: var(--white);
                         display: flex;
                         flex-direction: column;
                         height: 164px;
                         justify-content: center;
                         padding: 25px;
                         width: 100%;

                         &__item {
                              font-size: 19px;
                              font-weight: 500;
                              transition: all 0.3s;

                              &:hover {
                                   opacity: 0.7;
                              }

                              a {
                                   align-items: center;
                                   display: flex;

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

                         &__order {
                              margin-top: 15px;
                              font-size: 17px;
                              font-weight: 400;
                              transition: all 0.3s;

                              &:hover {
                                   opacity: 0.7;
                              }
                         }
                    }

                    &__logout {
                         background: var(--black);
                         color: var(--white);
                         font-size: 15px;
                         font-weight: 400;
                         height: 50px;
                         justify-content: center;
                         display: flex;
                         align-items: center;
                         letter-spacing: 2px;
                         margin-top: 35px;
                         position: relative;
                         text-transform: uppercase;
                         width: 100%;
                         border-radius: 100px;
                         transition: all .3s;
                         cursor: pointer;

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

                    &__details {
                         display: flex;
                         flex-wrap: wrap;

                         @media only screen and (min-width: 1024px) and (max-width: 1368px) {
                              display: grid;
                         }

                         @media only screen and (max-width: 1024px) {
                              justify-content: center;
                         }

                         &-socials {
                              display: flex;
                              
                              @media only screen and (min-width: 1368px) {
                                   flex-direction: column;
                                   margin-left: auto;
                                   order: 2;
                              }

                              @media only screen and (max-width: 1368px) {
                                   margin-bottom: 40px;
                              }

                              &-google {
                                   align-items: center;
                                   display: flex;
                                   font-size: 17px;
                                   font-weight: 400;

                                   &-icon {
                                        fill: #e8ecef;
                                        margin: 0 15px;
                                        transition: all .3s;
                                        cursor: pointer;

                                        &:hover {
                                             fill: #000 
                                        }
                                   }
                              }

                              &-vk {
                                   align-items: center;
                                   display: flex;
                                   font-size: 17px;
                                   font-weight: 400;
                                   margin-top: 25px;

                                   @media only screen and (max-width: 1368px) {
                                        margin-top: 0;
                                   }
                              }
                         }

                         &-personal {
                              max-width: 100%;
                              width: 600px;

                              @media only screen and (min-width: 1368px) {
                                   order: 1;
                              }

                              &-header {
                                   display: flex;
                                   margin-bottom: 30px;
                                   width: 100%;

                                   @media only screen and (min-width: 1024px) {
                                        align-items: baseline;
                                   }

                                   @media only screen and (max-width: 1024px) {
                                        align-items: center;
                                        flex-direction: column;
                                   }

                                   &-title {
                                        font-size: 25px;
                                        font-weight: 400;
                                        line-height: 100%;

                                        @media only screen and (max-width: 1024px) {
                                             text-align: center;
                                        }
                                   }

                                   &-update {
                                        border-bottom: 1px dashed #818d92;
                                        color: #818d92;
                                        cursor: pointer;
                                        font-size: 15px;
                                        margin-left: 10px;
                                        line-height: 100%;

                                        @media only screen and (max-width: 1024px) {
                                             margin-top: 10px;
                                        }
                                   }
                              }

                              &-list {

                                   width: 100%;

                                   &-content {
                                        align-items: flex-end;
                                        display: flex;
                                        flex-wrap: wrap;
                                        margin: -15px -5px;

                                        @media only screen and (min-width: 1024px) {
                                             justify-content: space-between;
                                        }

                                        @media only screen and (max-width: 1024px) {
                                             justify-content: center;
                                        }

                                        &-item {
                                             display: flex;
                                             flex-direction: column;
                                             margin: 15px 0;
                                             width: 35%;

                                             @media only screen and (min-width: 1024px) {
                                                  margin-right: 0;
                                             }

                                             @media only screen and (max-width: 1024px) {
                                                  width: 100%;
                                             }

                                             &__text {
                                                  color: #818d92;
                                                  font-size: 15px;
                                                  line-height: 25px;
                                                  text-transform: uppercase;
                                             }

                                             &__input {
                                                  border-bottom: 1px solid #e8ecef;
                                                  pointer-events: none;
                                                  height: 36px;
                                                  min-width: 200px;
                                                  width: 100%;

                                                  &-active {
                                                       pointer-events: all;
                                                       border-bottom: none;
                                                       background: #f4f6f8;
                                                       border-radius: 1000px;
                                                       padding: 0 15px;
                                                       height: 36px;
                                                       min-width: 200px;
                                                       width: 100%;
                                                  }
                                             }

                                        }
                                   }
                              }

                              &-btnUpdate {
                                   align-items: center;
                                   background: var(--black);
                                   color: var(--white);
                                   display: flex;
                                   justify-content: center;
                                   width: 300px;
                                   text-transform: uppercase;
                                   position: relative;
                                   font-size: 15px;
                                   font-weight: 400;
                                   height: 40px;
                                   border-radius: 100px;
                                   margin-top: 20px;
                                   cursor: pointer;
                                   transition: all .3s;

                                   &:hover {
                                        opacity: 0.7;
                                   }
                              }
                         }

                         &-delivery {
                              margin-top: 60px;
                              width: 100%;

                              @media only screen and (min-width: 1368px) { 
                                   order: 4;
                              }
                         }

                         &-password {
                              margin-top: 60px;
                              width: 100%;

                              @media only screen and (min-width: 1368px) {
                                   order: 5;
                              }
                         }
                    }

               }
          }
     }
</style>