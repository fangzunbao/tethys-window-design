<template>
  <div class="tabbar-container">
    <div class="tabbar">
      <div class="tabbar-item">
        <span class="iconfont icon-home"></span>
        <span class="text">首页</span>
      </div>
      <div class="tabbar-item">
        <span class="iconfont icon-camera"></span>
        <span class="text">拍照</span>
      </div>
      <div class="tabbar-item active">
        <span class="iconfont icon-scan"></span>
        <span class="text">扫码</span>
      </div>
      <div class="tabbar-item">
        <span class="iconfont icon-barchart"></span>
        <span class="text">数据</span>
      </div>
      <div class="tabbar-item">
        <span class="iconfont icon-user"></span>
        <span class="text">我的</span>
      </div>
      <div class="indicator"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tabbar28',
}
</script>
<script setup lang="ts"></script>
<style scoped lang="scss">
@use './font/iconfont.css' as *;

.tabbar-container {
  width: 100%;
  height: 100%;
  background-color: #212327;
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tabbar-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70px;
      height: 70px;
      z-index: 2;
      .iconfont {
        position: relative;
        display: block;
        line-height: 75px;
        font-size: 1.5em;
        transition: 0.5s;
        color: #333333;
        transform: translateY(-15px);
      }
      .text {
        position: absolute;
        color: #333333;
        font-size: 0.75em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        transform: translateY(45px);
      }
    }
    .active {
      .iconfont {
        transform: translateY(-35px);
      }
      .text {
        transform: translateY(45px);
      }
    }
    .indicator {
      position: absolute;
      width: 70px;
      height: 70px;
      background-color: #2cfa54;
      top: -50%;
      border-radius: 50%;
      border: 6px solid #212327;
      &::before {
        position: absolute;
        top: 50%;
        left: -25px;
        content: '';
        width: 20px;
        height: 20px;
        background-color: transparent;
        border-top-right-radius: 10px;
        box-shadow: 0 -10px 0 0 #212327;
      }
      &::after {
        position: absolute;
        top: 50%;
        right: -25px;
        content: '';
        width: 20px;
        height: 20px;
        background-color: transparent;
        border-top-left-radius: 10px;
        box-shadow: 0 -10px 0 0 #212327;
      }
    }
  }
}
</style>
