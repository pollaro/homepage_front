import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: useStorage('token', ''),
  }),
  getters: {
    loggedIn(state) {
      return state.token !== '';
    },
  },
  actions: {
    login(user) {
      return axios
        .post('/hbl/login/', {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          let win = window.open(response.data);
          let checkWin = setInterval(() => {
            if (!win || !win.closed) {
              return;
            }
            clearInterval(checkWin);
            window.location.reload();
          });
        });
    },
    logout() {
      localStorage.removeItem('token');
    },
  },
});
