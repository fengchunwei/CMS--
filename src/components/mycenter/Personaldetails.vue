<template>
  <div class="person-box">
    <div class="van-hairline">
      <van-nav-bar title="我的信息" left-text="返回" @click-left="onClickLeft" />
    </div>
    <div class="adatar">
      <!-- <van-uploader :after-read="afterRead"> -->
      <img :src="avatar" alt />
      <!-- </van-uploader> -->
      <!-- <p style="font-size:12px; margin:0;">点击图片更换头像</p> -->
    </div>
    <div>
      <ul>
        <li>
          <p>昵称：</p>
          <span>{{userName}}</span>
        </li>
        <li>
          <p>电话：</p>
          <span>{{phonenumber}}</span>
        </li>
        <li>
          <p>邮箱：</p>
          <span>{{email}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { changeImg } from "../../api/httpObj.js";
import { getInfo } from "../../api/httpObj.js";
export default {
  components: {},
  data() {
    return {
      avatar: "",
      userName: "",
      phonenumber: "",
      email: ""
    };
  },
  created() {
    getInfo()
      .then(res => {
        console.log(res);
        this.userName = res.data.userName;
        this.phonenumber = res.data.phonenumber;
        this.email = res.data.email;
        this.avatar = res.data.avatar;
      })
      .catch();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>


<style scoped lang="less">
.person-box {
    
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590213946130&di=54e580ef7cdc878f018934b5f44eb116&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F31%2F20150531211947_tn4hB.jpeg);
    background-size: 100% 100%;
    height: 500px;
  .adatar {
    position: relative;
    margin: auto;
    margin-top: 8%;
    border-radius: 50%;
    width: 100px;
    img {
      object-fit: cover;
      object-position: center;
      width: 100px;
      height: 100px;
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
}
ul {
  width: 100%;
  // padding: 10% 25%;
  li {
    width: 100%;
    text-align: center;
    list-style: none;
    font-size: 20px;
    color: rgb(32, 32, 32);
    color:#fff;
    p {
      font-size: 16px;
      display: inline-block;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    span {
      font-family: "黑体";
      font-size: 15px;
      display: inline-block;
      width: 40%;
      border-bottom: 1px solid rgb(32, 32, 32);
    }
  }
}
.van-hairline {
  width: 100%;
  height: 40px;
  background: darkturquoise;
} 
</style>