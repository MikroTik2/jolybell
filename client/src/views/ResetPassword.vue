<template>
     <div class="reset">

          <h2 class="reset-title">Скинути пароль</h2>

          <div class="reset-content">
               <form class="reset-form" @submit.prevent="resetPassword">

                    <div class="reset-form-grid">
                         <label class="reset-form-grid__label" for="new-password">ПАРОЛЬ</label>
                         <input id="new-password" class="reset-form-grid__input" name="password" type="text" v-model="newPassword" required />
                    </div>

                    <div class="reset-form-grid">
                         <label class="reset-form-grid__label" for="repeat-password">ПОВТОРЕННЯ ПАРОЛЬ</label>
                         <input id="repeat-password" class="reset-form-grid__input" name="password" type="text" v-model="repeatPassword" required />
                    </div>

                    {{ errorPassword }}

                    <div class="reset-form-btn__container">
                         <button class="reset-form-btn" type="submit">ОБНОВИТИ</button>
                    </div>
               </form>
          </div>

     </div>
</template>

<script setup>
     import { ref } from 'vue';
     import { useRoute, useRouter } from 'vue-router';
     import api from '@/config/api';

     const route = useRoute();
     const router = useRouter();

     const newPassword = ref("");
     const repeatPassword = ref("");
     const errorPassword = ref("");

     const resetPassword = async () => {
          try {

               const token = route.params.token;

               const response = await api.resetPassword(token, newPassword.value, repeatPassword.value);

               router.push("/");


          } catch (error) {
               if (error.response) {
                    errorPassword.value = error.response.data.message;
               };
          };
     };
 
</script>

<style lang="scss" scoped>
     .reset {
          background: var(--white);
          display: flex;
          align-items: center;
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
               font-weight: 500;
          }

          &-content {
               padding: 50px;
               margin-top: 30px;
               border-radius: 20px;
               box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);

               @media only screen and (min-width: 650px) {
                    width: 450px;
               }

               @media only screen and (max-width: 650px) {
                    width: 100%;
                    padding: 30px;
                    max-width: calc(100% - 40px);
               }
          }

          &-form {

               &-grid {
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

               &-btn__container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 40px;
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
                    transition: all 0.2s;

                    &:hover {
                         opacity: 0.8;
                    }
               }
          }
     }
</style>