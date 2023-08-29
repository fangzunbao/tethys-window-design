<template>
  <div class="container">
    <div class="tabbar" ref="tabbarRef">
      <div class="tab-menu-toggle" @click="handleClick">
        <span class="iconfont icon-plus"></span>
      </div>
      <div class="menu-circular circularbg1"></div>
      <div class="menu-circular circularbg2"></div>
      <div class="menu-circular circular">
        <div class="circle">
          <span class="iconfont icon-camera"></span>
          <span class="iconfont icon-qrcode"></span>
          <span class="iconfont icon-video"></span>
        </div>
      </div>
      <div class="tabbar-wrapper">
        <div class="tabbar-item">
          <span class="iconfont icon-home-fill"></span>
        </div>
        <div class="tabbar-item">
          <span class="iconfont icon-fire-fill"></span>
        </div>
        <div class="tabbar-item">
          <span class="iconfont"></span>
        </div>
        <div class="tabbar-item">
          <span class="iconfont icon-message-fill"></span>
        </div>
        <div class="tabbar-item">
          <span class="iconfont icon-setting-fill"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tabbar29',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
const tabbarRef = ref()

const handleClick = () => {
  tabbarRef.value.classList.toggle('active')
}
</script>
<style scoped lang="scss">
@use './font/iconfont.css' as *;
.container {
  width: 100%;
  height: 100%;
  background-color: #1f96f4;
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    user-select: none;

    .tab-menu-toggle {
      box-sizing: border-box;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
      background-color: #ff3b7e;
      border-radius: 50%;
      line-height: 50px;
      text-align: center;
      transition: 1s ease-in-out;
      z-index: 100;
      .iconfont {
        font-size: 30px;
        color: #ffffff;
      }
    }
    .menu-circular {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 180px;
      height: 90px;
      background-color: #ffffff;
      border-bottom-left-radius: 90px;
      border-bottom-right-radius: 90px;
      transform-origin: top center;
      transition: 1s ease-in-out;
      z-index: 1;
      .circle {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        inset: 0;
        .iconfont {
          display: flex;
          position: absolute;
          transform: rotate(180deg);
          transform-origin: center;
          font-size: 1.75em;
          color: #bbbbbb;
          &:hover {
            color: #ff3b7e;
          }
          &:nth-child(1) {
            transform: rotate(180deg) translate(50px, 15px);
          }
          &:nth-child(2) {
            transform: rotate(180deg) translate(0, -20px);
          }
          &:nth-child(3) {
            transform: rotate(180deg) translate(-50px, 15px);
          }
        }
      }
    }

    .circularbg1 {
      background-color: #8bc34a;
      transition: 0.6s ease-in-out;
      transition-delay: 0.4s;
    }
    .circularbg2 {
      background-color: #ffeb3b;
      transition: 0.8s ease-in-out;
      transition-delay: 0.2s;
    }

    .tabbar-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 99;
      background-color: #ffffff;
      .tabbar-item {
        flex: 1;
        text-align: center;
        line-height: 100%;
        .iconfont {
          font-size: 1.5em;
          color: #bbbbbb;
          &:hover {
            color: #1f96f4;
          }
        }
      }
    }
  }

  .active {
    .tab-menu-toggle {
      transform: translateX(-50%) rotate(225deg);
    }
    .menu-circular {
      transform: translateX(-50%) rotate(180deg);
    }
    .circularbg1 {
      transition-delay: 0s;
    }
    .circularbg2 {
      transition-delay: 0s;
    }
  }
}
</style>
