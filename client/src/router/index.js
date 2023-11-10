import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import CategoryPage from '@/views/CategoryPage.vue';
import ProductDetail from '@/views/ProductPage.vue';
import FAQPage from '@/views/FAQPage.vue';
import Account from '@/views/Account.vue';
import ResetPassword from '@/views/ResetPassword.vue';

const router = createRouter({
     history: createWebHistory(),

     routes: [
          { path: "/", name: "Index", component: Index },
          { path: "/account", name: "Account", component: Account },
          { path: "/category/:category", name: "CategoryPage", component: CategoryPage },
          { path: "/product/:productId", name: "ProductDetail", component: ProductDetail },
          { path: "/faq", name: "FAQPage", component: FAQPage },
          { path: "/reset-password/:token", name: "ResetPassword", component: ResetPassword },
     ],
});

export default router;