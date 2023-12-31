import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import CategoryPage from '@/views/CategoryPage.vue';
import ProductDetail from '@/views/ProductPage.vue';
import FAQPage from '@/views/FAQPage.vue';
import Account from '@/views/Account.vue';
import ResetPassword from '@/views/ResetPassword.vue';
import BookingDetails from '@/views/Booking.vue';
import BookingPayment from '@/views/BookingPayment.vue';
import AccountOrder from '@/views/AccountOrder.vue';

function getRoleFromLocalStorage(key) {
     const data = localStorage.getItem(key);
     return data ? JSON.parse(data).role : null;
};

const router = createRouter({
     history: createWebHistory(),

     routes: [
          { path: "/", name: "Index", component: Index },

          { 
               path: "/account", 
               name: "Account", 
               component: Account,
               beforeEnter: (to, from, next) => {

                    const userRole = getRoleFromLocalStorage("userData");

                    if (userRole === "user") {
                         next();
                    } else {
                         next("/");
                    };
               },
          },
          
          { path: "/account/order", name: "AccountOrder", component: AccountOrder },
          { path: "/category/:category", name: "CategoryPage", component: CategoryPage },
          { path: "/product/:productId", name: "ProductDetail", component: ProductDetail },
          { path: "/faq", name: "FAQPage", component: FAQPage },
          { path: "/booking/:orderId/details", name: "BookingDetails", component: BookingDetails },
          { path: "/booking/:orderId/payment", name: "BookingPayment", component: BookingPayment },
          { path: "/reset-password/:token", name: "ResetPassword", component: ResetPassword },
     ],
});

export default router;