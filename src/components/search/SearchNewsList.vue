<template>
  <div>
    <Header></Header>
    <router-link
      :to="{name:'toTypeInfo',params:{title:item.title,articleId:item.articleId}}"
      class="container"
      v-for="item in newsList"
      :key="item.id"
      tag="div"
    >
      <div class="left">
        <img :src="item.bannerImgUrl" alt="加载失败" />
      </div>
      <div class="right">
        <div>{{item.title}}</div>
        <div style="float:right;margin-top:12px;font-size:12px;color:#bbb">来源:{{item.articleSource}}</div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { getSearchList } from "../../api/httpObj.js";
import Header from '../homecontainer/Header.vue'
export default {
  components:{
    Header
  },
  data() {
    return {
      newsList: [],
      historyList: []
    };
  },
  created() {
    console.log(this.$route.params.value);
    getSearchList(1, 5, this.$route.params.value)
      .then(res => {
        console.log(res);
        this.newsList = res.rows;
      })
      .catch();
  }
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  padding: 0 20px;
}
.left {
  flex: 4;
  width: 100%;
}
.left > img {
  width: 100%;
  height: 80px;
}
.right {
  flex: 8;
  margin-left: 10px;
  font-size: 14px;
}
</style>