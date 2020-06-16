<template>
  <div id="app">
    <!-- 顶部header -->
    <!-- <div class="header">
      <van-nav-bar title="看天下">
        <template #left>
          <router-link to="/SearchContainer" tag="span" style="margin-top:8px">
            <van-icon name="search" size="26" />
          </router-link>
        </template>
        <template #right>
          <router-link to="/Login" tag="span" style="margin-top:8px">
            <van-icon name="manager" size="26" />
          </router-link>
        </template>
      </van-nav-bar>
    </div> -->

    <!-- 中间部分 -->
    <router-view></router-view>

    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">
        <router-link to="/HomeContainer" tag="span">首页</router-link>
      </van-tabbar-item>

      <van-tabbar-item name="search" icon="orders-o">
        <router-link to="/hotmusic" tag="span">热门音频</router-link>
        </van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">
        <router-link to="/Mycontaner" tag="span">我的</router-link>
      </van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">
        <router-link to="/horoscope" tag="span">星座运势</router-link>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { getInfo } from '../api/httpObj.js'
export default {
  name: "App",
  data() {
    return {
      active: "home"
    };
  },
  created(){
    let loginPromise = 
    getInfo()
    .then(res=>{
      // console.log(res)
      if(res.code == 0){
        this.$store.commit('changeIsLogin',{isLogin:true})
      }
    })
    .catch()
    this.$store.commit('changeLoginPromise',{loginPromise:loginPromise})
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#app {
  padding-bottom: 50px;
}
.van-nav-bar {
  background: #e09841;
}
.van-icon {
  color: #fff;
}
</style>
