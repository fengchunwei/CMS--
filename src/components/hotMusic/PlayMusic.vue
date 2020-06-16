<template>
  <div class="body">
    <video :src="this.mvList.url" controls="controls" ></video>

    <Footer></Footer>
  </div>
</template>
<script>
import { getMv } from '../../api/videoList.js'
// import { getHotList } from '../../api/videoList.js'

export default {
  
  data() {
    return {
      mvList:[],
      // list:[]
    };
  },
  created(){
    getMv(this.$route.params.id).then(res=>{
      console.log(res)
      this.mvList = res.data;
    }).catch()

    // getHotList().then(res=>{
    //   console.log(res)
    //   this.list = res.data
    // }).catch()

  },
  // +this.$route.params.artistId
  methods:{
    
  }
};
</script>
<style scoped>
.body {
  padding: 0 20px;
}
video{
  object-fit:fill;
  width: 100%;
  height: 180px;
}
p{
  font-size: 16px;
  float: right;
  margin-right: 30px;
  margin-top: 30px;
}
</style>