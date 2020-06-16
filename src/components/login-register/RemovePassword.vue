<template>
  <div>
    <h2>修改密码</h2>
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
        name="新密码"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请输入新密码' }]"
      />
      <van-field
        v-model="phoneNumber"
        type="phoneNumber"
        name="电话号码"
        label="电话号码"
        placeholder="电话号码"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
        v-model="test"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <button class="but2" @click="getTestNum">
        <span>点击获取验证码</span>
      </button>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">修改密码</van-button>
      </div>

      <button class="but2" @click="goLog">
        <span>修改成功，去登陆</span>
      </button>
    </van-form>
  </div>
</template>
<script>
import { getRemove } from "../../api/login.js";
import { getTest } from "../../api/login.js";
export default {
  data() {
    return {
      username: "",
      phoneNumber: "",
      password: "",
      test: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      getRemove(this.username, this.password, this.phoneNumber, this.test)
        .then(res => {
          console.log(res);
          alert("修改成功！！！");
        })
        .catch();
    },
    getTestNum() {
      getTest(this.phoneNumber)
        .then(res => {
          console.log(res);
        })
        .catch();
    },
    goLog() {
    this.$router.push("/login");
  },
  
  }
};
</script>
<style lang="less" scoped>
h2 {
  text-align: center;
}
.but2 {
  padding: 10px;
  font-size: 14px;
  border: none;
  background-color: #fff;
  color: blue;
  float: right;
}
#all {
  margin-top: 20px;
}
.van-cell {
  margin-top: 20px;
}
</style>