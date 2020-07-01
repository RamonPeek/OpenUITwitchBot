import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

/* Global methods and constants */
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

router.beforeEach((to, from, next) => {
  if(from.name === "Register" && to.name !== "Register") {
    localStorage.removeItem("registerCredentialsMemory");
    localStorage.removeItem("twitchAuth");
    next();
  }else{
    next();
  }
});

/* Initialize app */
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
