import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
Vue.use(Router)


import HomeContainer from '../components/homecontainer/HomeContainer.vue'
import TypeInfo from '../components/homeChildren/TypeInfo.vue'
import SearchContainer from '../components/search/SearchContainer.vue'
import SearchNewsList from '../components/search/SearchNewsList.vue'
import MyLook from '../components/mycenter/MyLook.vue'

import Login from '../components/login-register/Login.vue'
import Register from '../components/login-register/Register.vue'
import RemovePassword from '../components/login-register/RemovePassword.vue'
import MusicList from '../components/hotMusic/MusicList.vue'
import PlayMusic from '../components/hotMusic/PlayMusic.vue'
import Horoscope from '../components/constellation/Horoscope.vue'
import XzSon from '../components/constellation/XzSon.vue'

import Mycontaner from '../components/imgupload/Mycontaner.vue'
import MyCollect from '../components/mycenter/MyCollect.vue'
import personaldetails from '../components/mycenter/Personaldetails.vue'
import changedetails from '../components/mycenter/Changedetails.vue'


const router = new Router({
    routes: [
        { path: '/', redirect: '/HomeContainer' },
        { path: '/HomeContainer', component: HomeContainer },
        { path: '/TypeInfo/:title/:articleId', component: TypeInfo, name: 'toTypeInfo' },
        { path: '/SearchContainer', component: SearchContainer },
        { path: '/SearchNewsList/:newsList', component: SearchNewsList },
        { path: '/SearchNewsList/:value', component: SearchNewsList, name: 'toSearch' },
        { path: '/MyLook', component: MyLook },

        { path: '/login', component: Login, },
        { path: '/removepassword', component: RemovePassword },
        { path: '/register', component: Register, },
        { path: '/hotmusic', component: MusicList, },
        { path: '/playmusic/:id', component: PlayMusic, },
        { path: '/horoscope', component: Horoscope, },
        { path: '/xzson/:astroid', component: XzSon, },

        { path: '/Mycontaner', component: Mycontaner, meta: { isLogin: true } },
        { path: '/MyCollect', component: MyCollect },
        { path: '/personaldetails', component: personaldetails },
        { path: '/changedetails', component: changedetails },
    ],

})

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        // debugger
        if (store.state.isLogin) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }

})

export default router

