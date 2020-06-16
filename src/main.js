import Vue from 'vue'
import App from '../src/page/Home.vue'


//引入路由
import router from './router/router.js'
import VueRouter from 'vue-router'

Vue.use(router)

Vue.use(VueRouter)

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from './api/http.js'
Vue.prototype.$axios = axios

Vue.use(VueAxios, http)

//引入vant库


import { PullRefresh,List,Toast,NavBar,Icon,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,Tab, Tabs,Search,Tag,Form,Field,Button,Uploader,Divider,Dialog,Cell,CellGroup  } from 'vant';
// 全局注册
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Uploader);
Vue.use(Divider);
Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(Tag);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(NavBar);




//引入mint-ui库
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);




//引入less
import less from 'less'
Vue.use(less)



Vue.config.productionTip = false




// 引入mint-ui
// import Mint from 'mint-ui';
// Vue.use(Mint);
// import { Field } from 'mint-ui';
// Vue.component(Field.name, Field);
import store from './store/index.js'



// 'mint-ui
// import { Field ,Button, MessageBox } from 'mint-ui';
import Mint from 'mint-ui';
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css'




new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
