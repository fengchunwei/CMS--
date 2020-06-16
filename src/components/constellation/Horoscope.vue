<template>
  <div>
    <van-tabs class="tabbar">
        <!-- :title="item.astroname" -->
      <van-tab v-for="item in picList"  :key="item.id">
          <template #title> <img :src="item.pic"> 
          <p>{{ item.astroname }}</p></template>
         <!-- {{ item.astroname }} -->
         <Xz-card :astroid="item.astroid"></Xz-card>
        <!-- <img :src="item.pic"> -->
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import XzCard from './XzCard.vue'
export default {
    components:{
        XzCard
    },
  data() {
    return {
      active: 0,
      picList: [],
    };
  },
  created() {
    this.getHor();
  },
  methods: {
    getHor() {
      const url = "/astro/all?appkey=4611be01cc440879&astroid";
      this.$axios
        .get(url)
        .then(res => {
          console.log(res);
          this.picList = res.data.result;
        })
        .catch();
    }
  }
};
</script>
<style lang="less" scoped>
.tabbar {
    height: 100px;
    margin: 5px;
    text-align: center;
    p{
        font-size: 10px;
        margin: 0 !important;
        text-align: center;
    }
}
img {
    // display: block;
    width: 50%;
    border-radius: 50%;
    
}
.tabs__wrap  {
    
    height: 70px !important;
}
</style>