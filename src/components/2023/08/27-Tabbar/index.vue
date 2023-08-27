<template>
  <div class="container">
    <div class="tabbar-container">
      <div
        :class="active === 0 ? 'tabbar-item active' : 'tabbar-item'"
        @click="active = 0"
      >
        <span class="iconfont icon-home"></span>
        <span class="text">首页</span>
      </div>
      <div
        :class="active === 1 ? 'tabbar-item active' : 'tabbar-item'"
        @click="active = 1"
      >
        <span class="iconfont icon-camera"></span>
        <span class="text">相片</span>
      </div>
      <div
        :class="active === 2 ? 'tabbar-item active' : 'tabbar-item'"
        @click="active = 2"
      >
        <span class="iconfont icon-barchart"></span>
        <span class="text">数据</span>
      </div>
      <div
        :class="active === 3 ? 'tabbar-item active' : 'tabbar-item'"
        @click="active = 3"
      >
        <span class="iconfont icon-message"></span>
        <span class="text">发现</span>
      </div>
      <div
        :class="active === 4 ? 'tabbar-item active' : 'tabbar-item'"
        @click="active = 4"
      >
        <span class="iconfont icon-user"></span>
        <span class="text">我的</span>
      </div>
      <div class="indicator"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'index',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>
<style scoped lang="scss">
@use './font/iconfont.css' as *;

$primary-color: #f3218b;

@media screen and (max-width: 375px) {
  /* 这里是针对移动设备的css样式设置 */
  .indicator {
    left: 14px;
    top: -25px;
    width: 50px;
    height: 50px;
    &::before {
      top: 5px;
      left: -18px;
      width: 20px;
      height: 20px;
      box-shadow: 10px 15px #ffffff;
    }
    &::after {
      top: 5px;
      right: -18px;
      width: 20px;
      height: 20px;
      box-shadow: -10px 15px #ffffff;
    }
  }
}

@media screen and (min-width: 376px) and (max-width: 767px) {
  /* 这里是针对移动设备的css样式设置 */
  .indicator {
    left: 20px;
    top: -25px;
    width: 50px;
    height: 50px;
    &::before {
      top: 5px;
      left: -20px;
      width: 20px;
      height: 20px;
      box-shadow: 10px 12px #ffffff;
    }
    &::after {
      top: 5px;
      right: -20px;
      width: 20px;
      height: 20px;
      box-shadow: -10px 12px #ffffff;
    }
  }
}
@media screen and (min-width: 768px) {
  /* 这里是针对电脑设备的css样式设置 */

  .indicator {
    left: 26px;
    top: -35px;
    width: 70px;
    height: 70px;
    &::before {
      top: 5px;
      left: -28px;
      width: 30px;
      height: 30px;
      box-shadow: 15px 18px #ffffff;
    }
    &::after {
      top: 5px;
      right: -28px;
      width: 30px;
      height: 30px;
      box-shadow: -15px 18px #ffffff;
    }
  }
}

.container {
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.1);
  .tabbar-container {
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    width: 95%;
    max-width: 400px;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    filter: drop-shadow(0 15px 35px rgba($color: #ffffff, $alpha: 0.5));
    .tabbar-item {
      position: relative;
      width: 70px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-weight: 500;
      z-index: 2;
      .iconfont {
        position: relative;
        display: block;
        line-height: 65px;
        font-size: 1.5em;
        translate: 0.5s;
        color: #666666;
      }
      .text {
        position: absolute;
        padding: 2px 7px;
        border-radius: 12px;
        font-size: 0.75em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        transform: translateY(15px);
        opacity: 0;
        color: #ffffff;
      }
    }
    .active {
      .iconfont {
        transform: translateY(-32px);
        color: $primary-color;
      }
      .text {
        transform: translateY(-4px);
        background-color: $primary-color;
        opacity: 1;
      }
    }
    .indicator {
      position: absolute;
      background-color: #ffffff;
      border-radius: 50%;
      transition: 0.5s;
      z-index: 1;
      &::before {
        content: '';
        position: absolute;
        background-color: transparent;
        border-radius: 50%;
      }
      &::after {
        content: '';
        position: absolute;
        background-color: transparent;
        border-radius: 50%;
      }
    }
  }
}

.tabbar-container .tabbar-item:nth-child(1).active ~ .indicator {
  transform: translateX(calc(70px * 0));
}
.tabbar-container .tabbar-item:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1));
}
.tabbar-container .tabbar-item:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}
.tabbar-container .tabbar-item:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3));
}
.tabbar-container .tabbar-item:nth-child(5).active ~ .indicator {
  transform: translateX(calc(70px * 4));
}
</style>
