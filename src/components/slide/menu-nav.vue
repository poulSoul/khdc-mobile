<style lang="less" scoped>
  .slide-nav{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    overflow: auto;
    .nav{
      width: 65%;
      min-height: 100%;
      background: #33363f;
      &>li>.link{
        background: #2e3039;
      }
      .link{
        display: block;
        height: 2rem;
        border-bottom: 1px solid #3c3f49;
        color: #fff;
        line-height: 2rem;
        font-size: 0.7rem;
        padding-left: 0.75rem;
      }
    }
  }
  .slide-enter-active {
    animation: slide .5s ease-in-out;
  }
  .slide-leave-active {
    animation: slide .5s reverse ease-out;
  }
  @keyframes slide {
    0% {
      transform: translate(-100%,0);
    }
    100% {
      transform: translate(0,0);
    }
  }
</style>
<template>
  <transition
    name="slide"
    enter-active-class="slide-enter-active"
    leave-active-class="slide-leave-active"
  >
    <div id="slide-nav" class="slide-nav" v-if="show" v-on:click="hideSlide()">
      <ul class="nav">
        <li v-for="item in navData">
          <a href="javscript:;" class="link">{{ item.text }}</a>
          <ul class="child-nav">
            <li v-for="li in item.children">
              <router-link :to="li.url" class="link" exact>{{ li.text }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
  import {navData} from '../../service/slide/nav'
  export default {
    props: ['show'],
    data () {
      return {
        navData
      }
    },
    methods: {
      hideSlide () {
        this.$emit('hideSlideMenu')
      }
    }
  }
</script>
