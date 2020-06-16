<template>
  <div class="person-box">
    <van-nav-bar title="修改信息" left-text="返回" @click-left="onClickLeft" />
    <div class="adatar">
      <van-uploader :after-read="afterRead">
        <img :src="avatar" alt />
      </van-uploader>
              <p style="text-align: center;font-size: 12px;">点击上方上传修改图片</p>
    </div>
    <div class="change-info">
      <van-form @submit="onSubmit">
        <van-field
          v-model="userName"
          name="昵称"
          label="昵称："
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写用户昵称' }]"
        />
        <van-field
          v-model="phone"
          type="phone"
          name="手机号码"
          label="手机号码："
          placeholder="手机号码"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="email"
          type="email"
          name="我的邮箱"
          label="我的邮箱："
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click.native="handleClick">点击修改</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { changeinfo } from "../../api/httpObj.js";
import { changeImg } from "../../api/httpObj.js";
import { getInfo } from "../../api/httpObj.js";
import { Toast } from 'vant'
export default {
  data() {
    return {
      userName: "",
      phone: "",
      email: "",
      avatar: ""
    };
  },
  created() {
    getInfo()
      .then(res => {
        console.log(res);
        this.avatar = res.data.avatar;
        if (this.code === 0) {
          this.$toast({
            avatar: "../../asstes/1.jpg"
          });
        }
      })
      .catch();
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      changeImg(file.file)
        .then(res => {
          console.log(res);
        })
        .then(getInfo)
        .then(res => {
          this.avatar = res.data.avatar;
        })
        .catch();
    },
    changeAvatar(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      changeImg(file.file)
        .then(res => {
          console.log(res);
        })
        .then(getInfo)
        .then(res => {
          this.avatar = res.data.avatar;
        })
        .catch();
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    handleClick() {
      changeinfo(this.userName, this.phone, this.email)
        .then(res => {
          console.log(res);
          Toast('修改成功')
        })
        .catch();
      // this.$router.push("/personaldetails");
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style >
.van-uploader__input-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
}
</style>
<style scoped lang="less">
.person-box {
  .change-info {
  width: 100%;
  height: 100px;
  text-align: center;
}
  .adatar {
    position: relative;
    margin: auto;
    text-align: center;
    margin-top: 8%;
    width: 100%;
    img {
      object-fit: cover;
      object-position: center;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    input {
      position: absolute;
      top: 0;
      right: 0;
      width: 80px;
      height: 80px;
      outline: none;
      opacity: 1;
      cursor: pointer;
      &:focus {
        box-shadow: none;
      }
    }
  }
}
ul {
  width: 90%;
  padding: 5%;
  li {
    list-style: none;
    font-size: 20px;
    color: rgb(53, 51, 50);
    margin: 10% 0;
    border-bottom: 1px solid #ccc;
  }
}

</style>