<template>
  <div class="content">
    <!-- 导航 -->
    <van-nav-bar :title="this.$route.params.title" left-arrow @click-left="onClickLeft">
      <template #left>
        <span style="color:blue;">&lt;返回</span>
      </template>
    </van-nav-bar>
    <h3>{{this.$route.params.title}}</h3>

    <div v-html="newsInfo.content">{{newsInfo.articleId}}</div>
    <van-icon
      class="icon"
      name="like"
      style="position: fixed; right: 35px;bottom: 80px;"
      :color="flag?'red':'blue'"
      @click="collect"
      ref="changeColor"
    />
  </div>
</template>
<script>
import { collectState, getNewsInfo } from "../../api/httpObj.js";
import { Toast } from "vant";
export default {
  props: {
    title: String,
    content: String
  },
  data() {
    return {
      flag: false,
      newsInfo: {}
    };
  },
  created() {
    getNewsInfo(this.$route.params.articleId)
      .then(res => {
        console.log(res);
        this.newsInfo = res.data;
        this.flag = this.newsInfo.isCollect;
      })
      .catch();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    collect() {
      if (this.flag) {
        collectState(this.$route.params.articleId)
          .then(res => {
            console.log(res);
            if (res.code == 0) {
              this.flag = false;
              Toast.success("取消收藏");
            }
          })
          .catch();
      } else {
        collectState(this.$route.params.articleId)
          .then(res => {
            console.log(res);
            if (res.code == 0) {
              this.flag = true;
              Toast.success("收藏成功");
            }
          })
          .catch();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.content /deep/ {
  font-size: 14px;
  text-align: center;
  padding: 0 20px;
  .icon {
    font-size: 30px;
  }
  /deep/ img {
    width: 100%;
  }
}
</style>