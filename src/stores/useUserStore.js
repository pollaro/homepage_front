import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';

export const useUserStore = defineStore('user', {
  state: () => ({ email: '', loggedIn: false }),
  getters: {},
  actions: {
    login(user) {
      return axios
        .post('/hbl/login/', {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          console.log(response);
          window.open(response.data);
        })
        .then((responseTwo) => {
          console.log(responseTwo);
        });
    },
    logout() {
      localStorage.removeItem('token');
      this.email = '';
      this.loggedIn = false;
    },
  },
});
