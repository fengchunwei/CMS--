<template>
  <div>
    <!-- <h2>网易云热门MV</h2> -->
    <ul>
      
        <li v-for="item in muisicList" :key="item.id">

          <router-link :to="'/playmusic/'+item.id" tag="span">
          <div class="div1">
            <img :src="item.cover" alt />
          </div>

          <div class="div2">
            <span>{{item.name}}</span>
            <span class="span3">歌手:{{item.artistName}}</span>
          </div>
          </router-link>
        </li>
        <Footer></Footer>
    </ul>
  </div>
</template>
<script>
import Footer from '../homecontainer/Footer.vue'
import { getHotList } from '../../api/videoList.js'
export default {
  components: {
    Footer
  },
  data() {
    return {
      muisicList:[]
    };
  },
  created() {
    getHotList().then(res=>{
      console.log(res)
      this.muisicList = res.data;
    }).catch()
    // this.getHotList();
  },
  methods: {
    // getHotList() {
    //   const hotUrl = "http://59.111.92.205:8089/mv/all";
    //   this.$axios.get(hotUrl).then(res => {
    //     console.log(res);
    //     this.muisicList = res.data.data;
    //   });
    // }
  }
};
</script>
<style scoped>
li {
  height: 80px;
  padding: 10px;
  /* line-height: 80px; */
}
img {
  width: 100%;
}
li .div1 {
  width: 50%;
  float: left;
}
li .div2 {
  width: 50%;
  float: right;
}
span {
  display: inline-block;
  font-size: 12px;
  margin-left: 14px;
}
.span3 {
  color: black;
  display: block;
  margin-top: 10px;
}
h2 {
  text-align: center;
}
</style>