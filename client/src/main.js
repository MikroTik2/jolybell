import '@/assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from "firebase/app";

import App from '@/App.vue';
import router from '@/router';

const firebaseConfig = {
  apiKey: "AIzaSyDtmMt2Z6dXLS1ZbUbkwDN3-qMZWyCCztQ",
  authDomain: "jolybell-402209.firebaseapp.com",
  projectId: "jolybell-402209",
  storageBucket: "jolybell-402209.appspot.com",
  messagingSenderId: "282914921093",
  appId: "1:282914921093:web:86d05fb11c423655e7e7ec",
  measurementId: "G-3QC8LZSP8J"
};

const app = createApp(App)

app.use(createPinia());
initializeApp(firebaseConfig);


app
  .use(router)
  .mount('#app');