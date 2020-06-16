<template>
  <div>
    <Header></Header>
    <!-- 轮播图 -->
    <div class="loop">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in loopListrows" :key="index">
          <img v-lazy="item.imgList" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- typeList -->
    <van-tabs class="container">
        <van-tab v-for="item in typeListrows" :title="item.name" :key="item.categoryId">
        <!-- 分类内容 -->
        <TypeContainer :categoryId="item.categoryId"></TypeContainer>
        </van-tab>
    </van-tabs>

    <!-- <Footer></Footer> -->
    
  </div>
</template>
<script>
import Header from './Header.vue'
// import Footer from './Footer.vue'
import TypeContainer from "../homeChildren/TypeContainer.vue";
import { getSubScribeList } from "../../api/httpObj.js";
import { getLoopList } from "../../api/httpObj.js";
import { getTypeList } from "../../api/httpObj.js";
export default {
  components: {
    Header,
    // Footer,
    TypeContainer,
  },
  data() {
    return {
      loopListrows: [],
      typeListrows: [],
    };
  },

  //监听订阅列表
  computed:{
    look(){
        return this.$store.state.look
    }
  },
  //获取轮播图
  created() {
    // this.getCategoryId();
    getLoopList(1, 4)
      .then(res => {
        // console.log(res);
        this.loopListrows = res.rows;
        this.$store.commit('changeLook',{look:this.loopListrows})
      })
      .catch();
       //订阅列表
       // eslint-disable-next-line no-debugger
      //  debugger
    this.$store.state.loginPromise.then(()=>{
      if(this.$store.state.isLogin == false){
        getTypeList()
      .then(res => {
        console.log(res)
        this.typeListrows = res.rows;
      })
      .catch();
    }
    else{
      getSubScribeList()
      .then(res => {
        console.log(res);
          this.typeListrows = res.rows;
      })
      .catch();
    }
    })
    
  },

  
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
.van-swipe-item {
  width: 100%;
  height: 150px;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}

</style>