import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies';

import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueCookies);

app.mount('#app');
