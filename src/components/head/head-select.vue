<style lang="less" scoped>
  .header{
    position: fixed;
    width: 100%;
    height: 2.2rem;
    border-bottom:1px solid #ebebeb;
    background: #fff;
  }
  .menu-btn{
    float: left;
    width: 2.2rem;
    height: 2.2rem;
    text-align: center;
    line-height: 2.2rem;
    font-weight: bold;
    color: #666;
  }
  .title{
    position: relative;
    text-align: center;
    line-height: 2.2rem;
    margin:0 2.5rem;
    font-size: 17px;
  }
</style>
<template>
  <div class="header">
    <a href="javascript:;" class="menu-btn j_slidebar-btn" v-on:click="slideMenu()">
      <i class="iconfont icon-nav_list"></i>
    </a>
    <div class="title">康辉数据日报</div>
  </div>
</template>
<script>
  export default {
    methods: {
      slideMenu () {
        this.$emit('showSlideMenu')
      }
    }
  }
</script>
