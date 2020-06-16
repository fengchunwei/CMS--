<template>
  <div>
    <!-- <h1>111</h1> -->
    <div id="img" @click="change">
      <!-- 单击返回上一页 -->
    </div>

    <div id="backGround">
      <div id="today">
        <img src="http://ww4.sinaimg.cn/bmiddle/6910ab7bgw1egloghsfi3j20b40b40t6.jpg" alt />
        <span>今日运势</span>
        <p>{{today.presummary}}</p>
        <p>最佳配对星座： {{today.star}}</p>
      </div>

      <div id="week">
        <img src="http://ww4.sinaimg.cn/bmiddle/6910ab7bgw1egloghsfi3j20b40b40t6.jpg" alt />
        <span>本周运势</span>

        <p>事业规划：</p>
        <p>{{week.career}}</p>
        <p>桃花运：</p>
        <p>{{week.career}}</p>
        <p>财运：</p>
        <p>{{week.money}}</p>
        <p>{{week.data}}</p>
      </div>

      <div id="month">
        <img src="http://ww4.sinaimg.cn/bmiddle/6910ab7bgw1egloghsfi3j20b40b40t6.jpg" alt />
        <span>本月运势</span>
        <p>{{month.data}}</p>
        <p>{{month.summary}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // father:[]
      today: {},
      week: {},
      month: {}
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    getContent() {
      const url = `/astro/fortune?astroid=${this.$route.params.astroid}&appkey=4611be01cc440879`;
      this.$axios.get(url).then(res => {
        console.log(res);
        this.today = res.data.result.today;
        this.week = res.data.result.week;
        this.month = res.data.result.month;
        // this.year = res.data.result.year
      });
    },
    change(){
         this.$router.go(-1)
    }
  }
};
</script>
<style lang="less" scoped>
#img {
  width: 100%;
  height: 180px;
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590140946821&di=57f51fe29fc71009bd7ce45ff082779f&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3576797578%2C2663633445%26fm%3D214%26gp%3D0.jpg);
  background-size: 100%;
  img {
    width: 100%;
  }
}
#backGround {
  width: 100%;
  // background-color: #5D80EE;
  // padding: 5px;
  div {
    margin-top: 30px;
    border: 1px solid #7b419c;
    padding: 5px;
    img {
      width: 10%;
      // height: 80px;
      padding: 5px;
      vertical-align: middle;
      border-radius: 10px;
    }
    span {
      font-size: 20px;
      color: #7b419c;
    }
    p {
      text-indent: 2em;
      color: #7b419c;
      font-family: STXingkai;
    }
  }
}
</style>