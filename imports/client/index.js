
import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import VueTracker from 'vue-meteor-tracker'
Vue.use(VueTracker);

import jQuery from 'jquery'
window.$ = jQuery

import './plugins.js'
import './routes.js'

// Import the router factory
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'
// Create router instance
const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior,
})

import App from '/imports/ui/App.vue';
Meteor.startup(() => {
    // Start the router
    const router = routerFactory.create();
    new Vue({
        router,
        render: h => h(App),
    }).$mount('app');
});


