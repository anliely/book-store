import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from "echarts"


Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let arr = [];
  Object.keys(to.meta).forEach(key => arr.push(to.meta[key]));
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
