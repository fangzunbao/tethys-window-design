<template>
  <div class="container">
    <div :class="toggle ? 'navbar active' : 'navbar'">
      <div class="logo">
        <i class="iconfont icon-send-fill"></i>
        <span class="text">Website Logo</span>
      </div>
      <div
        :class="current === 1 ? 'navbar-item active' : 'navbar-item'"
        style="--bg: #ffa117"
        @click="clickNavbarItem(1)"
      >
        <span class="iconfont icon-home-fill">
          <i></i>
        </span>
        <span class="text">首页</span>
      </div>
      <div
        :class="current === 2 ? 'navbar-item active' : 'navbar-item'"
        style="--bg: #0fc70f"
        @click="clickNavbarItem(2)"
      >
        <i class="iconfont icon-calculator-fill"></i>
        <span class="text">代码</span>
      </div>
      <div
        :class="current === 3 ? 'navbar-item active' : 'navbar-item'"
        style="--bg: #2196f3"
        @click="clickNavbarItem(3)"
      >
        <i class="iconfont icon-read-fill"></i>
        <span class="text">阅读</span>
      </div>
      <div
        :class="current === 4 ? 'navbar-item active' : 'navbar-item'"
        style="--bg: #b145e9"
        @click="clickNavbarItem(4)"
      >
        <i class="iconfont icon-highlight-fill"></i>
        <span class="text">设计</span>
      </div>
      <div
        :class="current === 5 ? 'navbar-item active' : 'navbar-item'"
        style="--bg: #1094eb"
        @click="clickNavbarItem(5)"
      >
        <i class="iconfont icon-shop-fill"></i>
        <span class="text">购物</span>
      </div>
      <div
        :class="current === 6 ? 'navbar-item active' : 'navbar-item'"
        style="--bg: #ff172e"
        @click="clickNavbarItem(6)"
      >
        <i class="iconfont icon-detail-fill"></i>
        <span class="text">其他</span>
      </div>
    </div>
    <div class="menu-toggle" @click="toggle = !toggle">
      <i class="iconfont icon-outdent" v-if="toggle"></i>
      <i class="iconfont icon-indent" v-else></i>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navbar01',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const toggle = ref(true)
const current = ref(1)

// 点击导航栏
const clickNavbarItem = (index: number) => {
  current.value = index
}
</script>
<style scoped lang="scss">
@use './font/iconfont.css' as *;

.container {
  width: 100%;
  height: 100%;
  background: #1b1c1f;
  .navbar {
    position: relative;
    width: 80px;
    height: 100%;
    background: #fff;
    padding-left: 10px;
    transition: 0.5s;
    overflow: hidden;
    .logo {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .iconfont {
        font-size: 2em;
        color: #1b1c1f;
      }
      .text {
        font-size: 1.2em;
        color: #1b1c1f;
        white-space: nowrap;
        padding-left: 15px;
      }
    }
    .navbar-item {
      width: 100%;
      position: relative;
      display: flex;
      white-space: nowrap;
      box-sizing: border-box;
      cursor: pointer;

      &:hover {
        .iconfont {
          color: var(--bg);
        }
        .text {
          color: var(--bg);
        }
      }
    }
    .active {
      background: #1b1c1f;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      .iconfont {
        color: var(--bg);
      }
      .text {
        color: var(--bg);
      }

      &:hover {
        .iconfont {
          color: var(--bg);
        }
        .text {
          color: var(--bg);
        }
      }
      &::before {
        content: '';
        position: absolute;
        top: -20px;
        right: 0;
        width: 20px;
        height: 20px;
        border-bottom-right-radius: 20px;
        box-shadow: 5px 5px 0 5px #1b1c1f;
        background: transparent;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        right: 0;
        width: 20px;
        height: 20px;
        border-top-right-radius: 20px;
        box-shadow: 5px -5px 0 5px #1b1c1f;
        background: transparent;
      }
    }
  }
  .active {
    width: 300px;
  }
  .iconfont {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 70px;
    font-size: 1.5em;
    color: #333;
    transition: 0.5s;
  }
  .text {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    font-size: 1em;
    color: #333;
    transition: 0.5s;
    padding-left: 15px;
  }

  .menu-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #31a4ff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .iconfont {
      font-size: 1.75em;
      color: #fff;
      transition: 0.5s;
    }
  }
}
</style>
