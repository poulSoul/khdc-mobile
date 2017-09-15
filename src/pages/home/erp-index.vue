<style lang="less">
  .main{
    padding-top: 2.2rem;
  }
  .main-header{
    font-size: 0.9rem;
    .title{
      margin-bottom: 0.4rem;
      small{
        font-size: 0.7rem;
        color: #666;
      }
    }
    .date{
      color: #666;
      font-size: 0.6rem;
    }
  }
  .list{
    background: #fff;
    border-top:1px solid #ebebeb;
    .item{
      float: left;
      box-sizing: border-box;
      border:1px solid #ebebeb;
      border-left: 0;
      border-top-color: 0;
      width: 50%;
      padding: 0.75rem 0.5rem;
      height: 4.5rem;
      .title{
        font-size: 0.7rem;
        color: #666;
        margin-bottom: 0.6rem;
      }
      .data{
        font-size: 0.9rem;
        .rate{
          font-size: 0.6rem;
          color: red;
          margin-left: 0.4rem;
        }
      }
      .tag{
        font-size: 0.6rem;
        color: #666;
        line-height: 0;
      }
    }
  }
  .footer-tip .des-item{
    font-size: 0.6rem;
    margin-bottom: 0.2rem;
    color: #666;
    line-height: 1.4;
  }
</style>
<template>
  <div>
    <head-caption v-on:showSlideMenu='showSlideMenu'></head-caption>
    <sidebar-menu :show="show" v-on:hideSlideMenu='hideSlideMenu'></sidebar-menu>
    <div class="main">
      <div class="main-header pd">
        <h3 class="title">ERP官网整体数据<small>(第-名)</small></h3>
        <p class="date">
          <em>时间段：</em>
          <time>2017-09-10 00:00-24:00</time>
        </p>
      </div>
      <div class="main-body">
        <ul class="list clearfix">
          <li class="item">
            <h4 class="title">线上产品数</h4>
            <p class="data"><span class="count">15584</span><span class="rate">+2.21%</span></p>
            <span class="tag">(含二次确认产品数)</span>
          </li>
          <li class="item">
            <h4 class="title">400电话数</h4>
            <p class="data"><span class="count">15584</span><span class="rate">+2.21%</span></p>
          </li>
          <li class="item">
            <h4 class="title">提交订单金额</h4>
            <p class="data"><span class="count">15584</span><span class="rate">+2.21%</span></p>
          </li>
          <li class="item">
            <h4 class="title">支付订单金额</h4>
            <p class="data"><span class="count">15584</span><span class="rate">+2.21%</span></p>
          </li>
          <li class="item">
            <h4 class="title">提交订单数</h4>
            <p class="data"><span class="count">15584</span><span class="rate">+2.21%</span></p>
          </li>
          <li class="item">
            <h4 class="title">支付订单数</h4>
            <p class="data"><span class="count">15584</span><span class="rate">+2.21%</span></p>
          </li>
          <li class="item">
            <h4 class="title">已提交未支付订单数</h4>
            <p class="data"><span class="count">15584</span><span class="rate">+2.21%</span></p>
          </li>
          <li class="item">
            <h4 class="title">二次确认订单数</h4>
            <p class="data"><span class="count">15584</span><span class="rate">+2.21%</span></p>
          </li>
        </ul>
      </div>
      <div class="footer-tip pd">
        <p class="des-item">备注：%为上周同比</p>
        <p class="des-item">线上产品数：昨日线上的可销售产品数量。</p>
        <p class="des-item">400电话数：昨日呼入的客服电话总量。</p>
        <p class="des-item">提交订单金额：提交时间在昨日的订单总金额。</p>
        <p class="des-item">支付订单金额：支付时间在昨日的订单总金额。</p>
        <p class="des-item">提交订单数：提交时间在昨日的订单总数量。</p>
        <p class="des-item">支付订单数：支付时间在昨日的订单总数量。</p>
        <p class="des-item">已提交未支付订单数：截止到昨日24:00，已经提交订单但未支付的订单数量。</p>
        <p class="des-item">二次确认订单数：截止到昨日24:00，用户提交的订单产品需要二次确认，尚未处理的订单数。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import headCaption from '../../components/head/head-caption'
  import sidebarMenu from '../../components/slide/menu-nav'
  export default {
    data () {
      return {
        show: false
      }
    },
    components: {
      headCaption, sidebarMenu
    },
    methods: {
      showSlideMenu () {
        this.show = true
      },
      hideSlideMenu () {
        this.show = false
      }
    }
  }
</script>
