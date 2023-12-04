import { defineStore } from 'pinia';
import api from '@/config/api';

export const useCartStore = defineStore('cartUser', {
     state: () => ({
          cart: [],
          cartTotal: 0,
     }),

     actions: {
          async addToCart(productId, size, quantity) {

               try {

                    const response = await api.addToCart(productId, size, quantity);
                    this.cart = response.cart;

                    this.fetchCart();

               } catch (error) {

                    console.log(error);

               };
          },
          
          async fetchCart() {

               try {

                    const cartData = await api.getCartUser();
                    this.cart = cartData.cart;
                    this.cartTotal = cartData.cartTotal;

               } catch (error) {
                    console.log(error);
               };
          },

          async updateQuantityCart(productId, quantity) {
               try {

                    const response = await api.updateCartUser(productId, quantity);
                    
                    this.cart = response.cart;
                    this.cartTotal = response.cartTotal;

               } catch (error) {
                    console.log(error);
               };
          },

          async updateSizeCart(productId, size) {
               try {

                    await api.updateSizeCartUser(productId, size);

                    this.fetchCart();

               } catch (error) {
                    console.log(error);
               };
          },

          async deleteProductCart(productId) {
               try {

                    await api.deleteCartUser(productId);

                    this.fetchCart();

               } catch (error) {
                    console.log(error);
               };
          },
     },
});
