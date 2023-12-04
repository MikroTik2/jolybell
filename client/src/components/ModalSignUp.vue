<template>
     <div class="modal-registered" :class="{ 'active-register': isVisibleSignUp }">
          <div class="registered">

               <span class="registered-title">
                    Реєстрація
               </span>

               <form class="registered-form" @submit.prevent="handleFormRegistered">

                    <div class="registered-form-field">
                         <label for="registeredin-in" class="registered-form-field__label">ЕЛ. АДРЕСА</label>
                         <input v-model="registered.email" class="registered-form-field__input" id="registered-in" type="email" maxlength="200" name="email" autocomplete="email" required>
                    </div>

                    <div class="registered-form-field">
                         <label for="registered-in-password" class="registered-form-field__label">ПАРОЛЬ</label>
                         <input v-model="registered.password" class="registered-form-field__input" id="registered-in-password" type="password" maxlength="200" name="password" autocomplete="new-password">
                    </div>

                    <div class="registered-form-field">
                         <label for="registeredin-in-confirm-password" class="registered-form-field__label">ПІДТВЕРДІТЬ ПАРОЛЬ</label>
                         <input v-model="registered.repeatPassword" class="registered-form-field__input" id="registeredin-in-confirm-password" type="password" maxlength="200" name="password" autocomplete="new-password">
                    </div>

                    <button class="registered-form-submit" type="submit">Зареєструватися</button>
               </form>

               <div class="registered-socials">
                    <span class="registered-socials-title">Зареєструватися за допомогою:</span>

                    <div class="registered-socials-list">
                         <span @click="handleFormWithGoogle">
                              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M20.4 16.4v7.4h11c-.5 3.1-3.3 8.4-11 8.4-6.6 0-12-5.5-12-12.2s5.4-12.2 12-12.2c3.7 0 6.3 1.6 7.7 3l5.7-5.5C30.3 2 25.8 0 20.4 0c-11 0-20 9-20 20s9 20 20 20c11.5 0 19.2-8.1 19.2-19.5 0-1.7-.2-2.8-.5-4.1H20.4z"></path>
                              </svg>
                         </span>
                    </div>
               </div>

               <div class="registered-or">
                    або
               </div>

               <span class="registered-up" @click="toggleOpenLogin">УВІЙТИ</span>

               <!-- close -->
               <div class="registered-close" @click="toggleCloseRegistered">
                    <svg width="15" height="15" class="cross" xmlns="http://www.w3.org/2000/svg" viewBox="">
                         <polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon>
                    </svg>
               </div>
          </div>
     </div>

     <div class="login" :class="{ 'active-login': isVisibleSignIn }">
          
          <form class="login-form" @submit.prevent="handleFromLogin">
               <div class="login-form-field">
                    <label for="login-in" class="login-form-field__label">ЕЛ. АДРЕСА</label>
                    <input v-model="login.email" class="login-form-field__input" id="login-in" name="email" autocomplete="email" type="email" maxlength="200" required>
               </div>
               <div class="login-form-field">
                    <label for="login-in-password" class="login-form-field__label">ПАРОЛЬ</label>
                    <input v-model="login.password" class="login-form-field__input" id="login-in-password" type="password" maxlength="200" name="password" autocomplete="current-password">
               </div>

               <span class="login-form-forgot-password" @click="openResetModal">Забули пароль?</span>

               <button class="login-form-submit" type="submit">Увійти</button>
          </form>

          <div class="login-socials">
               <span class="login-socials-title">Увійти за допомогою:</span>

               <div class="login-socials-list">
                    <div @click="handleFormWithGoogle"> 
                         <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.4 16.4v7.4h11c-.5 3.1-3.3 8.4-11 8.4-6.6 0-12-5.5-12-12.2s5.4-12.2 12-12.2c3.7 0 6.3 1.6 7.7 3l5.7-5.5C30.3 2 25.8 0 20.4 0c-11 0-20 9-20 20s9 20 20 20c11.5 0 19.2-8.1 19.2-19.5 0-1.7-.2-2.8-.5-4.1H20.4z"></path>
                         </svg>
                    </div>
               </div>
          </div>

          <div class="login-or">
               або
          </div>

          <span class="login-up" @click="toggleOpenRegistered">Швидка реєстрація</span>

          <!-- close -->
          <div class="login-close" @click="toggleCloseLogin">
               <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="">
                    <polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon>
               </svg>
          </div>
     </div>

     <div class="modal-reset" :class="{ 'active-reset': isVisibleReset }">
          <div class="modal-reset-inside">
               <div class="modal-reset-inside-blackout"></div>
               <div class="modal-reset-inside-close" @click="closeResetModal"></div>

               <div class="modal-reset-inside-content">
                    <span class="modal-reset-inside-content-title">Відновлення паролю</span>

                    <span class="modal-reset-inside-content-description">
                         Введіть електронну адресу, на яку ми надішлемо посилання для відновлення паролю.
                    </span>

                    <form class="modal-reset-inside-content-form" @submit.prevent="handleForgotPassword">
                         <div class="modal-reset-inside-content-form-field">
                              <label for="reset-modal-email" class="modal-reset-inside-content-form-field__label">Ел. адреса</label>
                              <input v-model="resetPassword.email" id="reset-modal-email" class="modal-reset-inside-content-form-field__input" name="email" autocomplete="email" type="email" maxlength="200" required>
                         </div>

                         <span class="modal-reset-inside-content-form-message">{{ successMessage }}</span>
                         <span class="modal-reset-inside-content-form-message">{{ errorMessage }}</span>

                         <button type="submit" class="modal-reset-inside-content-form-btn">Відновити пароль</button>
                         <span class="modal-reset-inside-content-form-cancel" @click="prevResetModal">Відміна</span>
                    </form>

                    <div class="modal-reset-inside-content-close" @click="closeResetModal">
                         <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                              <polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon>
                         </svg>
                    </div>
               </div>
          </div>
     </div> 

     <div class="modal-confirmation" :class="{ 'active-confirm': isVisbleConfirmation }" @click="closeConfirmationModal">
          <div class="modal-confirmation-inside">
               <div class="modal-confirmation-inside-content">
                    <span class="modal-confirmation-inside-content-description">
                         Посилання для підтвердження акаунту було надіслано на вашу електронну адресу
                    </span>

                    <div class="modal-confirmation-inside-content-close" @click="closeConfirmationModal">
                         <svg fill="#808392" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg>
                    </div>

                    <button type="button" class="modal-confirmation-inside-content-btn" @click="closeConfirmationModal">ДОБРЕ</button>
               </div>
          </div>
     </div>
</template>

<script setup>
     import { ref } from 'vue';
     import { useRouter } from 'vue-router';
     import { getAuth, signInWithPopup } from 'firebase/auth';
     import { GoogleAuthProvider } from 'firebase/auth';
     import api from '@/config/api';

     const router = useRouter();
     const emit = defineEmits();

     const props = defineProps({
          isVisibleSignIn: Boolean,
          isVisibleSignUp: Boolean,
     });

     const isVisibleReset = ref(false);
     const isVisbleConfirmation = ref(false);

     const registered = ref({
          email: "",
          password: "",
          repeatPassword: "",
     });

     const login = ref({
          email: "",
          password: "",
     });

     const resetPassword = ref({
          email: "",
     });

     const successMessage = ref("");
     const errorMessage = ref("");
     
     const openResetModal = () => {
          isVisibleReset.value = true;

          toggleCloseLogin();
     };

     const prevResetModal = () => {
          isVisibleReset.value = false;

          toggleOpenLogin();
     }


     const closeResetModal = () => {
          isVisibleReset.value = false;
     };

     const closeConfirmationModal = () => {
          isVisbleConfirmation.value = false;
     }

     const openConfirmationModal = () => {
          isVisbleConfirmation.value = true;


     };

     const handleForgotPassword =  async () => {
          try {

               const userEmail = {
                    email: resetPassword.value.email,
               };

               const response = await api.forgotPasswort(userEmail);

               successMessage.value = response.message;


          } catch (error) {
               if (error.response) {
                    errorMessage.value = error.response.data.message;
               }
          };
     };

     const handleFormRegistered = async () => {
          try {

               const createUser = {
                    email: registered.value.email,
                    password: registered.value.password,
                    repeatPassword: registered.value.repeatPassword,
               };
               
               const response = await api.registeredForm(createUser);

               localStorage.setItem('userData', JSON.stringify(response));
               router.push("/account");

               
               openConfirmationModal();
               updateVisibility();

          } catch (error) {
               console.log(error);
          };
     };

     const handleFromLogin = async () => {
          try {

               const loginUser = {
                    email: login.value.email,
                    password: login.value.password,
               };

               const response = await api.loginForm(loginUser);

               localStorage.setItem('userData', JSON.stringify(response));
               router.push("/account");

               toggleCloseLogin();
               openConfirmationModal();

          } catch (error) {
               console.log(error);
          };
     };
     
     const handleFormWithGoogle = async () => {
          try {

               const auth = getAuth();
               const response = await signInWithPopup(auth, new GoogleAuthProvider());

               const userInfo = {
                    displayName: response.user.displayName,
                    email: response.user.email,
               };

               const responseUser = await api.googleAuthFirebase(userInfo);

               router.push("/account");

               toggleCloseLogin();
               openConfirmationModal();


          } catch (error) {
               console.log(error);
          };
     };

     const toggleCloseRegistered = () => {
          emit("close-registered");
     };

     const toggleCloseLogin = () => {
          emit("close-login");
     };

     const toggleOpenRegistered = () => {
          emit("open-registered");
     };

     const toggleOpenLogin = () => {
          emit("open-login");
     };

     const updateVisibility = () => {
          emit('update-visibility');
     };

</script>

<style lang="scss" scoped>

     .modal-registered {
          position: absolute;
          top: 27%;
          left: 50%; 
          transform: translate(-50%, -50%); 
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center; 
          margin: 0;
          max-width: 90vw;
          padding: 30px;
          border-radius: 20px;
          background-color: var(--white);
          z-index: 25;

          @media only screen and (max-width: 1024px) {
               top: 31%;
          }
     }

     .registered {
          align-items: center;
          display: flex;
          flex-direction: column;
          margin: 0;
          max-width: 90vw;
          width: 366px;
          position: fixed;
          padding: 30px;
          border-radius: 20px;
          background-color: var(--white);
          z-index: 1000;

          &-title {
               align-items: center;
               display: flex;
               font-size: 40px;
               font-weight: 400;
               margin-bottom: 10px;
               color: #000;
               position: relative;
               width: 100%;

               &::after {
                    background: #000;
                    content: "";
                    display: block;
                    flex: 1 1;
                    height: 1px;
                    margin-top: 2px;
               }

               &::before {
                    background: #000;
                    content: "";
                    display: block;
                    flex: 1 1;
                    height: 1px;
                    margin-top: 2px;
               }
          }

          &-close {
               fill: #808392;
               cursor: pointer;
               height: 20px;
               right: 20px;
               top: 20px;
               width: 20px;
               position: absolute;
          }

          &-form {
               align-items: center;
               display: flex;
               flex-wrap: wrap;
               justify-content: center;
               width: 100%;

               &-forgot-password {
                    border-bottom: 1px dashed #818d92;
                    color: #818d92;
                    cursor: pointer;
                    font-size: 15px;
                    line-height: 100%;
                    margin-left: auto;
               }

               &-submit {
                    align-items: center;
                    background: #000;
                    border-radius: 1000px;
                    color: #fff;
                    display: flex;
                    font-size: 15px;
                    font-weight: 400;
                    height: 40px;
                    justify-content: center;
                    letter-spacing: 2px;
                    margin-top: 30px;
                    position: relative;
                    text-transform: uppercase;
                    transition: opacity .2s;
                    width: 100%;
                    cursor: pointer;

                    &:hover {
                         opacity: 0.7;
                    }
               }

               &-field {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin-bottom: 20px;

                    &__label {
                         color: #818d92;
                         font-size: 15px;
                         line-height: 25px;
                         text-transform: uppercase;
                    }

                    &__input {
                         background: #f4f6f8;
                         border-radius: 1000px;
                         height: 36px;
                         padding: 0 15px;
                         width: 100%;
                    }
               }
          }

          &-socials {
               align-items: center;
               display: flex;
               flex-direction: column;
               margin-top: 15px;

               &-title {
                    color: #818d92;
                    font-size: 15px;
               }

               &-list {
                    display: flex;
                    margin-top: 10px;
                    gap: 20px;

                    span {
                         cursor: pointer;
                         opacity: 1;
                         transition: all 0.5s;
                         
                         &:hover {
                              opacity: 0.7;
                         }
                    }
               }
          }

          &-or {
               color: #818d92;
               font-size: 17px;
               line-height: 1ex;
               margin-top: 25px;
               position: relative;

               &::before {
                    background: #818d92;
                    right: calc(100% + 2px);
                    content: "";
                    display: block;
                    height: 1px;
                    position: absolute;
                    top: 4px;
                    width: 12px;
               }

               &::after {
                    background: #818d92;
                    content: "";
                    display: block;
                    left: calc(100% + 2px);
                    height: 1px;
                    position: absolute;
                    top: 4px;
                    width: 12px;
               }
          }

          &-up {
               cursor: pointer;
               font-size: 15px;
               font-weight: 400;
               margin-top: 25px;
               color: #000;
               text-transform: uppercase;

               &:hover {
                    opacity: 0.7;
               }
          }
     }

     .login {
          align-items: center;
          display: none;
          flex-direction: column;
          margin: 0;
          right: 50px;
          max-width: 90vw;
          width: 366px;
          position: absolute;
          padding: 30px;
          border-radius: 20px;
          background-color: var(--white);
          z-index: 1000;

          @media only screen and (max-width: 1024px) {
               right: 15px;
          }

          &-title {
               align-items: center;
               display: flex;
               font-size: 40px;
               font-weight: 400;
               margin-bottom: 10px;
               position: relative;
               width: 100%;

               &::after {
                    background: #000;
                    content: "";
                    display: block;
                    flex: 1 1;
                    height: 1px;
                    margin-top: 2px;
               }

               &::before {
                    background: #000;
                    content: "";
                    display: block;
                    flex: 1 1;
                    height: 1px;
                    margin-top: 2px;
               }
          }

          &-close {
               fill: #808392;
               cursor: pointer;
               height: 20px;
               right: 20px;
               top: 20px;
               width: 20px;
               position: absolute;
          }

          &-form {
               align-items: center;
               display: flex;
               flex-wrap: wrap;
               justify-content: center;
               width: 100%;

               &-forgot-password {
                    border-bottom: 1px dashed #818d92;
                    color: #818d92;
                    cursor: pointer;
                    font-size: 15px;
                    line-height: 100%;
                    margin-left: auto;
               }

               &-submit {
                    align-items: center;
                    background: #000;
                    border-radius: 1000px;
                    color: #fff;
                    display: flex;
                    font-size: 15px;
                    font-weight: 400;
                    height: 40px;
                    justify-content: center;
                    letter-spacing: 2px;
                    margin-top: 30px;
                    position: relative;
                    text-transform: uppercase;
                    transition: opacity .2s;
                    width: 100%;
                    cursor: pointer;

                    &:hover {
                         opacity: 0.7;
                    }
               }

               &-field {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin-bottom: 20px;

                    &__label {
                         color: #818d92;
                         font-size: 15px;
                         line-height: 25px;
                         text-transform: uppercase;
                    }

                    &__input {
                         background: #f4f6f8;
                         border-radius: 1000px;
                         height: 36px;
                         padding: 0 15px;
                         width: 100%;
                    }
               }
          }

          &-socials {
               align-items: center;
               display: flex;
               flex-direction: column;
               margin-top: 15px;

               &-title {
                    color: #818d92;
                    font-size: 15px;
               }

               &-list {
                    display: flex;
                    margin-top: 10px;
                    gap: 20px;

                    span {
                         cursor: pointer;
                         opacity: 1;
                         transition: all 0.5s;
                         
                         &:hover {
                              opacity: 0.7;
                         }
                    }
               }
          }

          &-or {
               color: #818d92;
               font-size: 17px;
               line-height: 1ex;
               margin-top: 25px;
               position: relative;

               &::before {
                    background: #818d92;
                    right: calc(100% + 2px);
                    content: "";
                    display: block;
                    height: 1px;
                    position: absolute;
                    top: 4px;
                    width: 12px;
               }

               &::after {
                    background: #818d92;
                    content: "";
                    display: block;
                    left: calc(100% + 2px);
                    height: 1px;
                    position: absolute;
                    top: 4px;
                    width: 12px;
               }
          }

          &-up {
               cursor: pointer;
               font-size: 15px;
               font-weight: 400;
               color: #000;
               margin-top: 25px;
               text-transform: uppercase;

               &:hover {
                    opacity: 0.7;
               }
          }
     }

     .modal-confirmation {
          align-items: center;
          display: none;
          height: 100%;
          justify-content: center;
          left: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 100;
          pointer-events: auto;
          position: fixed;
          top: 0;
          width: 100%;

          &-inside {
               align-items: center;
               display: flex;
               justify-content: center;
               margin: auto;
               position: relative;
               width: 100%;
               color: var(--black);

               &-content {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    max-width: 90vw;
                    position: relative;
                    width: 366px;
                    padding: 30px;
                    border-radius: 20px;
                    background: var(--white);

                    &-close {
                         position: absolute;
                         right: 20px;
                         cursor: pointer;
                         top: 20px;
                    }

                    &-description {
                         font-size: 18px;
                         font-weight: 400;
                         margin-top: 20px;
                         text-align: center;
                    }

                    &-btn {
                         width: 270px;
                         text-transform: uppercase;
                         position: relative;
                         margin-top: 30px;
                         letter-spacing: 2px;
                         justify-content: center;
                         height: 40px;
                         font-weight: 400;
                         font-style: 15px;
                         display: flex;
                         color: var(--white);
                         background: var(--black);
                         align-items: center;
                         border-radius: 100px;
                         cursor: pointer;
                         transition: all 0.3s;

                         &:hover {
                              opacity: 0.7;
                         }
                    }
               }
          }
     }

     .modal-reset {
          align-items: center;
          display: none;
          height: 100%;
          justify-content: center;
          left: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          pointer-events: auto;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 10000;

          &-inside {
               align-items: center;
               display: flex;
               justify-content: center;
               position: relative;
               width: 100%;
               height: 100%;

               &-blackout {
                    height: 100%;
                    width: 100%;
                    min-width: 100vw;
                    min-height: 100vh;
                    background: #0000006e;
                    left: 0;
                    top: 0;
                    pointer-events: none;
                    position: fixed;
               }

               &-close {
                    height: 100%;
                    min-height: 100vh;
                    min-width: 100vw;
                    width: 100%;
                    position: absolute;
               }

               &-content {
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    max-width: 90vw;
                    position: absolute;
                    right: 5vw;
                    width: 380px;
                    background: var(--white);
                    border-radius: 20px;

                    @media only screen and (min-width: 1440px) {
                         top: 179px;
                    }

                    @media only screen and (min-width: 1024px) and (max-width: 1760px) { 
                         top: 230px;
                    }

                    @media only screen and (max-width: 1024px) {
                         top: 75px; 
                    }

                    @media only screen and (min-width: 360px) {
                         padding: 30px;
                    }

                    @media only screen and (max-width: 360px) {
                         padding: 8vw;
                    }

                    &-close {
                         fill: #808392;
                         position: absolute;
                         right: 20px;
                         top: 20px;
                         cursor: pointer;
                    }

                    &-title {
                         font-size: 25px;
                         font-weight: 400;
                    }

                    &-description {
                         color: #818d92;
                         font-size: 15px;
                    }

                    &-form {
                         
                         align-items: center;
                         display: flex;
                         margin-top: 10px;
                         right: 5vw;

                         @media only screen and (min-width: 420px) {
                              flex-wrap: wrap;
                              justify-content: space-between;
                         }

                         @media only screen and (max-width: 420px) {
                              flex-direction: column;
                         }

                         &-message {
                              margin-bottom: 20px;
                         }

                         &-field {
                              display: flex;
                              flex-direction: column;
                              margin-bottom: 20px;
                              width: 100%;

                              &__label {
                                   color: #818d92;
                                   font-size: 15px;
                                   line-height: 25px;
                                   text-transform: uppercase;
                              }

                              &__input {
                                   background: #f4f6f8;
                                   border-radius: 1000px;
                                   height: 36px;
                                   padding: 0 15px;
                                   width: 100%;
                              }
                         }

                         &-btn {
                              background: var(--black);
                              color: var(--white);
                              border-radius: 1000px;
                              display: flex;
                              font-size: 15px;
                              font-weight: 400;
                              height: 40px;
                              justify-content: center;
                              align-items: center;
                              text-transform: uppercase;
                              position: relative;
                              letter-spacing: 2px;
                              width: 240px;
                              cursor: pointer;
                              transition: all .2s;

                              &:hover {
                                   opacity: 0.7;
                              }

                              @media only screen and (max-width: 420px) {
                                   width: 100%;
                              }
                         }

                         &-cancel {
                              cursor: pointer;
                              border-bottom: 1px dashed #818d92;
                              color: #818d92;
                              font-size: 15px;
                              line-height: 100%;
                              margin-top: 15px;
                              margin-bottom: 15px;
                              transition: all .2s;

                              &:hover {
                                   opacity: 0.8;
                              }
                         }

                    }
               }
          }

     }

     .active-login {
          display: flex;
     }

     .active-register {
          display: flex;
     }

     .active-reset {
          display: flex;
     }

     .active-confirm {
          display: flex;
     }
</style>