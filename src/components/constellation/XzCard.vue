<template>
  <div>
    <router-link :to="'/xzson/'+this.astroid">
      <h3>星座运势:</h3>
      <div id="div">
        <h4>今日运势:</h4>
        <p id="allP">{{this.luck.presummary}}</p>
        <h4>今日幸运色:{{this.luck.color}}</h4>
        <h4>今日新运指数:{{this.luck.career}}</h4>
      </div>
    </router-link>
    <router-link :to="'/xzson/:'+this.astroid">
      <div id="div">
        <h4>明日运势:</h4>
        <p id="allP">{{this.tomorrow.presummary}}</p>
        <h4>幸运色：{{this.tomorrow.color}}</h4>
        <h4>幸运指数：{{this.tomorrow.career}}</h4>
      </div>
    </router-link>
    <router-link :to="'/xzson/:'+this.astroid">
      <div id="div" class="div3">
        <h4>本周运势:</h4>
        <p id="allP">{{this.week.presummary}}</p>
        <h4>财运指数：:</h4>
        <p id="allP">{{this.week.money}}</p>
        <h4>桃花指数：:</h4>
        <p id="allP">{{this.week.love}}</p>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // father:[]
      luck: {},
      tomorrow: {},
      week: {}
    };
  },
  created() {
    this.getCardList();
  },
  methods: {
    getCardList() {
      const url = `/astro/fortune?astroid=${this.astroid}&appkey=4611be01cc440879`;
      this.$axios.get(url).then(res => {
        console.log(res);
        this.luck = res.data.result.today;
        this.tomorrow = res.data.result.tomorrow;
        this.week = res.data.result.week;
        console.log(this.luck);
        console.log(this.tomorrow);
        console.log(this.tomorrow);
      });
    }
  },
  props: {
    astroid: [String, Number]
  }
};
</script>
<style scoped>
h4 {
  color: #fff;
}
h3 {
  color: #7b419c;
}
#div {
  margin-top: 10px;
  padding: 5px;
  background-color: #dca8fa;
}
#allP {
  color: #fff;
}
.div3 {
  padding-bottom: 50px !important;
}
</style>