<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="searchContainer">
      <span class="history" v-for="(item,index) in historyList" :key="item.id">
        <van-tag
          v-if="show.primary"
          closeable
          size="medium"
          type="primary"
          @close="close(index)"
        >{{item.content}}</van-tag>
      </span>

      <div style="text-align:center;margin-top:20px;font-size:14px;" @click="clearHistory">清空历史记录</div>

      <div class="hotSearch">
        <p>实时热搜</p>
        <router-link
          :to="{name:'toTypeInfo',params:{title:item.title,articleId:item.articleId}}"
          v-for="item in hotSearchList"
          :key="item.id"
          style="margin: 8px;color:#9c27b0"
          tag="p"
        >{{item.title}}</router-link>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { hotSearchList } from "../../api/httpObj.js";
import Footer from '../homecontainer/Footer.vue'   
export default {
  components:{
        Footer
    },
  data() {
    return {
      value: "",
      historyList: [],
      hotSearchList: [],
      //vant组件历史记录
      show: {
        primary: true,
        success: true
      }
    };
  },
  created() {
    //搜索记录

    this.historyList = JSON.parse(localStorage.getItem("news") || "[]");
    hotSearchList(1, 10)
      .then(res => {
        console.log(res);
        this.hotSearchList = res.rows;
      })
      .catch();
  },
  methods: {
    onSearch(val) {
      // this.$router.push({ name: "toSearch", params: { value: this.value } });
      this.$router.push({ name: "toSearch", params: { value: this.value } });

      var historyObj = { id: Date.now(), content: this.value };
      if (this.value == "") {
        return;
      }
      this.historyList.push(historyObj);
      localStorage.setItem("news", JSON.stringify(this.historyList));

      Toast(val);
    },
    onCancel() {
      this.$router.go(-1)
    },

    //历史记录关闭方法
    close(index) {
      // console.log(index)
      this.historyList.splice(index, 1);
      localStorage.setItem("news", JSON.stringify(this.historyList));
    },
    clearHistory() {
      localStorage.clear();
      this.historyList = [];
    }
  }
};
</script>
<style lang="less" scoped>
.searchContainer {
  padding: 10px;
}
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
.hotSearch {
  margin-top: 20px;
  font-size: 14px;
}
</style>