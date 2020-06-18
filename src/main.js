import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HappyScroll from "vue-happy-scroll";
//mockjs模拟后端接口和数据
// 引入mockjs
require("./mock.js");
// 组件

Vue.config.productionTip = false;
import ElementUI from "element-ui";
//滚动条
// 引入css
import "element-ui/lib/theme-chalk/index.css";
import "vue-happy-scroll/docs/happy-scroll.css";
import "./assets/fonts/iconfont.css";
Vue.use(HappyScroll);
// 按需引入(那个页面需要就在那个页面引用)
import echarts from "echarts";
import axios from "axios";
// 在根实例里面注册
Vue.use(ElementUI);
// css重置
import "@/assets/css/reset.css";
// 添加全局的属性
Vue.prototype.$echarts = echarts;
// 基于promise用于浏览器和node.js的http客户端
// eslint-disable-next-line no-undef
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
