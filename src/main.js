import { createApp } from 'vue';
// Import default css
import './scss/style.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import { router } from './router';

import store from './store';

import App from './App.vue';

createApp(App).use(router).mount('#app');
