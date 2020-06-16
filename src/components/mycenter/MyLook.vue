<template>
  <div>
    <van-nav-bar title="订阅信息" left-text="返回" left-arrow @click-left="onClickLeft" />
    <h3>订阅列表</h3>
    <span @click="addMyLook(item)" v-for="(item,index) in unSubScribeList" :key="index">
      <van-tag type="danger" size="large" color="#f2826a">{{item.name}}</van-tag>
    </span>
    <h3>我的订阅</h3>
    <span v-for="(item,index) in subScribeList" :key="item.id" @click="cancel(index)">
      <van-tag type="danger" size="large" color="#7232dd">{{item.name}}</van-tag>
    </span>
  </div>
</template>
<script>
import { getTypeList,subScribe, getSubScribeList } from "../../api/httpObj.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      show: {
        primary: true,
        success: true
      },
      //分类
      categoryList: [],
      //订阅列表
      subScribeList: []
    };
  },
  computed: {
    unSubScribeList() {
      //filter 返回的结果为true就添加到新数组里
      //遍历数组有一个为true则返回true
      return this.categoryList.filter(
        item =>
          !this.subScribeList.some(
            subItem => item.categoryId == subItem.categoryId
          )
      );
    },
    subScribeIdList(){
      return this.subScribeList.map(item=>item.categoryId)
    },
    look(){
      return this.$store.state.look
    }
  },
  created() {
    //新闻 订阅列表
    getTypeList(0, 10)
      .then(res => {
        console.log(res);
        // eslint-disable-next-line no-debugger
        // debugger
        this.categoryList = res.rows;
      })
      .catch();

    //订阅列表
    getSubScribeList()
      .then(res => {
        console.log(res);
        this.subScribeList = res.rows;
      })
      .catch();
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    //点击添加订阅
    addMyLook(item) {
      this.subScribeList.push(item);
      subScribe(this.subScribeIdList.join(','))
      .then(res=>{
        console.log(res)
        this.$store.commit('changeLook',{look:this.subScribeList})
        Toast.success("订阅成功");
      })
    },

    //点击取消订阅
    cancel(index){
      // console.log(111)
      this.subScribeList.pop(index)
      subScribe(this.subScribeIdList.join(','))
      .then(res=>{
        console.log(res)
        Toast.success("取消订阅");
      })
    }
  }
};
</script>
<style lang="less" scoped>
</style>