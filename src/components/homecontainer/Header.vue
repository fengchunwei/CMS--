<template>
  <div>
    <div class="header">
      <van-nav-bar title="看天下">
        <template #left>
          <router-link to="/SearchContainer" tag="span" style="margin-top:8px">
            <van-icon name="search" size="26" />
          </router-link>
        </template>
        <template #right>
          <router-link to="/Login" tag="span" style="margin-top:8px">
            <van-icon name="manager" size="26" />
          </router-link>
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.van-nav-bar {
  background: #e09841;
}
.van-icon {
  color: #fff;
}
</style>