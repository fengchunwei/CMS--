<template>
  <div>
    <h3>用户注册</h3>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="nicheng"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写用昵称' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="email"
        name="email"
        label="email"
        placeholder="email"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field
        v-model="phoneNum"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="test"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />


      <button  class="but1" @click="getTestNum"><span>点击获取验证码</span></button>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">点击注册</van-button>
      </div>
    </van-form>
    <router-link to="/login">
      <span class="span3">已有账号，快速登录！</span>
    </router-link>
  </div>
</template>
<script>
import { getRegister } from '../../api/login.js'
import { getTest } from '../../api/login.js'
export default {
  data() {
    return {
      username: "",
      password: "",
      phoneNum: "",
      
      test: "",
      nicheng:'',
      email:"",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      getRegister(this.username,this.password,this.phoneNum,this.test,this.email,this.nicheng)
      .then(res=>{
        console.log(res)
      })
      .catch()
    },
    getTestNum() {
      getTest(this.phoneNum)
      .then(res=>{
        console.log(res)
      })
      .catch()
    },
  }
};
</script>
<style scoped>
.but1 {
  padding: 10px;
  font-size: 14px;
  border: none;
  background-color:#fff;
  color: blue;
  float: right;
}
.span3{
  font-size: 13px;
  padding: 20px;
}
span :hover{
  color: black;
}
h3 {
  text-align: center;
}
</style>