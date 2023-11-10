import axios from 'axios';
import config from '@/config/config.js';

function getTokenFromLocalStorage(key) {
     const data = localStorage.getItem(key);
     return data ? JSON.parse(data).token : null;
};

export const HTTP = axios.create({
     baseURL: config.API,
});

export default {

     async getAllProduct(productCategory) {
          try {

               const response = await HTTP.get(`/product?category=${productCategory}`);
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async getProduct(productId) {
          try {

               const response = await HTTP.get(`/product/${productId}`);
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async registeredForm(createUser) {
          try {

               const response = await HTTP.post(`/user/register`, createUser);
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async loginForm(loginUser) {
          try {

               const response = await HTTP.post(`/user/login`, loginUser);
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async logoutUser() {
          try {

               const response = await HTTP.get("/user/logout");
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async googleAuthFirebase(userInfo) {
          try {

               const response = await HTTP.post("/user/google", { userDataFromGoogleAuth: userInfo });

               localStorage.setItem("userData", JSON.stringify(response.data));
               return response.data;
                
          } catch (error) {
               throw error;
          };
     },

     async addToCart(productId, size, quantity) {
          try {

               const token = getTokenFromLocalStorage("userData");

               const cartItem = {
                    _id: productId,
                    quantity: quantity,
                    size: size
               };
     
               const response = await HTTP.put("/user/cart/add", { cart: [cartItem] }, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               return response.data;
    
          } catch (error) {
               throw error;
          };
     },

     async forgotPasswort(emailForm) {
          try {

               const response = await HTTP.post("/user/forgot-password", emailForm);
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async resetPassword(token, newPassword, repeatPassword) {
          try {

               const response = await HTTP.put(`/user/reset-password/${token}`, { password: newPassword, repeatPassword });
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async updateCartUser(productId, quantity) {
          try {

               const token = getTokenFromLocalStorage("userData");

               const updateDataQuantity = {
                    productId,
                    quantity,
               };

               const response = await HTTP.put(`/user/cart/update`, updateDataQuantity, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async updateSizeCartUser(productId, size) {
          try {

               const token = getTokenFromLocalStorage("userData");

               const updateDataSize = {
                    productId,
                    size,
               };

               const response = await HTTP.put("/user/cart/update/size", updateDataSize, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async deleteCartUser(productId) {
          try {

               const token = getTokenFromLocalStorage("userData");

               const response = await HTTP.delete(`/user/cart/remove/${productId}`, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async getCartUser() {
          try {

               const token = getTokenFromLocalStorage("userData");

               const response = await HTTP.get("/user/cart", {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async updateUser(updateUser) {
          try {

               const token = getTokenFromLocalStorage("userData");

               const response = await HTTP.put("/user/edit-user", updateUser, {
                    headers: {
                         Authorization: `Bearer ${token}`
                    },
               });

               window.location.reload();
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async updatePassword(updatePassword) {
          try {

               const token = getTokenFromLocalStorage("userData");

               const response = await HTTP.put("/user/update-password", updatePassword, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               window.location.reload();
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async updateAddress(updateAddress) {
          try {

               const token = getTokenFromLocalStorage("userData");

               const response = await HTTP.put("/user/update-address", updateAddress, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               window.location.reload();
               return response.data;

          } catch (error) {
               throw error;
          };
     },
};