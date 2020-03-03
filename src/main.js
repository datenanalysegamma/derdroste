import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './router'
import Hammer from 'hammerjs'

Vue.use(VueRouter);


const  router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

Vue.directive('swipe-left', {
  bind: (el, binding) => {
    if (typeof binding.value === 'function') {
      const mc = new Hammer(el);
      mc.get('swipe').set({ direction: Hammer.DIRECTION_LEFT});
      mc.on('swipe', binding.value);
    }
  }
});

Vue.directive('swipe-right', {
  bind: (el, binding) => {
    if (typeof binding.value === 'function') {
      const mc = new Hammer(el);
      mc.get('swipe').set({ direction: Hammer.DIRECTION_RIGHT});
      mc.on('swipe', binding.value);
    }
  }
});

Vue.directive('swipe-up', {
  bind: (el, binding) => {
    if (typeof binding.value === 'function') {
      const mc = new Hammer(el);
      mc.get('swipe').set({ direction: Hammer.DIRECTION_UP});
      mc.on('swipe', binding.value);
    }
  }
});

Vue.directive('swipe-down', {
  bind: (el, binding) => {
    if (typeof binding.value === 'function') {
      const mc = new Hammer(el);
      mc.get('swipe').set({ direction: Hammer.DIRECTION_DOWN});
      mc.on('swipe', binding.value);
    }
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
