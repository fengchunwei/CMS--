<template>
  <div>
    <h3>用户登录</h3>
    <van-form @submit="onSubmit">
      <van-field 
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">快速登录</van-button>
        <router-link to="/register">
          <span class="span2">还没有账号？点击注册</span>
        </router-link>
        <router-link to="/removepassword">
          <span class="span2 span3">忘记密码</span>
        </router-link>
      </div>
    </van-form>
  </div>
</template>
<script>
import { getLogin } from "../../api/login.js";
export default {
  data() {
    return {
      username: "",
      password: "",

      loginList: []
    };
  },
  created() {},
  computed:{
    isLogin(){return this.$store.state.isLogin}
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      getLogin(this.username, this.password)
        .then(res => {
          console.log(res);
          if(res.code == 0){
            this.$router.push("/HomeContainer");
            this.$store.commit('changeIsLogin',{ isLogin:!this.isLogin })
          }else{
            alert('用户名或密码错误')
          }
        })
        .catch();
      // 
      
    }
  }
};
</script>
<style scoped>
.van-field {
  padding: 20px;
  color: rgb(49, 40, 35);
}
h3 {
  text-align: center;
}
.span2 {
  display: inline-block;
  padding: 10px;
  font-size: 13px;
}
.span3 {
 float: right;
}
</style>