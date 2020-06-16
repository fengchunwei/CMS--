<template>
  <div class="mycontaner">
    <van-nav-bar title="个人中心" />
    <!-- 头像上传 -->
    <van-cell-group>
      <div class="adatar">
      <img :src="avatar" alt />
      </div>
    </van-cell-group>
    <div class="middle-details">
      <!-- 我的喜欢 -->
      <router-link to="/MyCollect" tag="div">
        <van-cell title="我的喜欢" is-link />
      </router-link>

      <router-link to="/MyLook" tag="div">
        <van-cell title="我的订阅" is-link />
      </router-link>

      <!-- 查看个人信息 -->

      <router-link to="/personaldetails" tag="div">
        <van-cell title="我的信息" is-link />
      </router-link>
      <!-- 修改信息 -->
      <router-link to="/changedetails" tag="div">
        <van-cell title="修改信息" is-link />
      </router-link>
    </div>
    <div class="choos-button">
      <button  @click="exit">退出登录</button>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
// import { changeImg, logOut } from "../../api/httpObj.js";
import { logOut } from "../../api/httpObj.js";
import { getInfo } from "../../api/httpObj.js";
import Footer from "../homecontainer/Footer.vue";
import { Dialog } from "vant";
export default {
  name: "adatar",
  data() {
    return {
      avatar: "",
      show: false
    };
  },
  created() {
    getInfo()
      .then(res => {
        console.log(res);
        this.avatar = res.data.avatar;
      })
      .catch();
  },

  //路由守卫
  methods: {
    exit() {
      logOut().then(res => {
        console.log(res);
        this.$store.commit('changeIsLogin',{ isLogin:!this.isLogin })
        this.$router.push({
          path: "/login"
        })
      });
    }
    //确认 取消操作
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
    Footer
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    loginPromise() {
      return this.$store.state.loginPromise;
    }
  },
};
</script>
<style scoped lang="less">
.choos-button {
  margin-top: 10%;
  button {
    text-align: center;
    line-height: 30px;
    width: 100%;
    margin: auto;
    background: #3b74c7;
    border: 2px solid darkcyan;
  }
}
.adatar {
  position: relative;
  margin: auto;
  margin-top: 5%;
  width: 80px;
  height: 80px;
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  input {
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
    &:focus {
      box-shadow: none;
    }
  }
}
.mycontaner {
  padding: none;
  background: rgb(247, 247, 246);
  width: 100%;
  height: 100%;
  // background: blue;
}
.van-cell {
  margin-top: 10px;
}
</style>