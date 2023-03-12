import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
  }),
  getters: {
    loggedIn: (state) => state.email !== '',
  },
  actions: {
    login(user) {
      this.email = user;
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
          }, 500);
        });
    },
    logout() {
      this.email = false;
    },
  },
});
