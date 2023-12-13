import '@/assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from "firebase/app";

import App from '@/App.vue';
import router from '@/router';

const firebaseConfig = {
  apiKey: "AIzaSyD6N0u0AkV54yjR89qqERHVreldD78na7I",
  authDomain: "jolygolf-f2b5b.firebaseapp.com",
  projectId: "jolygolf-f2b5b",
  storageBucket: "jolygolf-f2b5b.appspot.com",
  messagingSenderId: "949704191208",
  appId: "1:949704191208:web:d24c1ab3670a879324ad5d",
  measurementId: "G-M9YLN34BN0"
};

const app = createApp(App)

app.use(createPinia());
initializeApp(firebaseConfig);


app
  .use(router)
  .mount('#app');