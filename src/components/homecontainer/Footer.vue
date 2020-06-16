<template>
  <div>
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
      <van-tabbar-item name="setting" icon="setting-o">联系我们</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    data(){
        return {
            active: "home"
        }
    }
};
</script>
<style lang="less" scoped>
.van-nav-bar {
  background: #e09841;
}
.van-icon {
  color: #fff;
}
</style>