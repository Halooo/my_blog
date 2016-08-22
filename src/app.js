import Vue from 'vue';

import Router from 'vue-router';
Vue.use(Router);

import VueAjax from 'vue-resource';
Vue.use(VueAjax);

import './filter/index';

import httpConfig from './config/http.config.js';
Vue.http.options.root = httpConfig[process.env]; // ENV from webpack plugins DefinePlugin

import App from './app.vue';
import { routeConfig } from './config/route.config.js';

import '../routes';

const router = new Router({
	saveScrollPosition: false,
	linkActiveClass: 'active'
});

routeConfig(router);

router.start(App, '#app');
