<template>
  <div class="container">
    <div class="navbar">
      <div class="brand">
        <img
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Avtar"
        />
        <p>
          早上好，
          <span>admin</span>
        </p>
      </div>
      <hr class="line" />
      <ul class="list">
        <li class="active">
          <i class="iconfont icon-home-fill"></i>
          <span>首页</span>
        </li>
        <li>
          <i class="iconfont icon-message-fill"></i>
          <span>消息</span>
        </li>
        <li>
          <i class="iconfont icon-fire-fill"></i>
          <span>最热</span>
        </li>
        <li>
          <i class="iconfont icon-setting-fill"></i>
          <span>设置</span>
        </li>
      </ul>
      <hr class="line" />
      <ul>
        <li>
          <i class="iconfont icon-camera"></i>
          <span>退出</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navbar30',
}
</script>
<script setup lang="ts"></script>
<style scoped lang="scss">
@use './font/iconfont.css' as *;

@keyframes fadeIn {
  to {
    opacity: 1;
    pointer-events: unset;
    transform: translateX(0);
  }
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#9fc0cf, #e5edf1);
  .navbar {
    width: 100px;
    height: min-content;
    padding: 16px;
    border-radius: 12px;
    backdrop-filter: blur(18px);
    background-color: rgba(230, 235, 240, 0.7);
    border: 2px solid rgba(230, 235, 240, 0.7);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    transition: 0.6s cubic-bezier(0.8, 0.5, 0.5, 0.8);
    .brand {
      width: 100%;
      display: flex;
      align-items: center;
      img {
        width: 65px;
        border-radius: 50%;
        border: 4px solid rgba(230, 235, 240, 0.8);
      }
      p {
        color: #505257;
        font-weight: 500;
        font-style: italic;
        text-align: left;
        line-height: 22px;
        margin: 0 0 0 12px;
        opacity: 0;
        pointer-events: none;
        transform: translateX(20px);
        span {
          color: #3c3e43;
          display: block;
          font-size: 26px;
          font-style: normal;
        }
      }
    }
    &:hover {
      width: 320px;
      .brand {
        p {
          animation: fadeIn 0.4s ease-out forwards;
          animation-delay: 0.4s;
        }
      }

      li {
        span {
          animation: fadeIn 0.4s ease-out forwards;
        }
        // &:nth-child(1) {
        //   span {
        //     animation-delay: 0.5s;
        //   }
        // }
        // &:nth-child(2) {
        //   span {
        //     animation-delay: 0.6s;
        //   }
        // }
        // &:nth-child(3) {
        //   span {
        //     animation-delay: 0.7s;
        //   }
        // }
        // &:nth-child(4) {
        //   span {
        //     animation-delay: 0.8s;
        //   }
        // }
      }
    }
    .line {
      width: 100%;
      height: 2px;
      margin: 32px 0;
      border-radius: 30%;
      background: #87a3af;
    }
    .list {
      width: 100%;

      .active {
        background-color: #3681f6;
        .iconfont {
          color: #e6ebf0;
        }
        span {
          color: #ffffff;
        }
      }
    }
    li {
      display: flex;
      align-items: center;
      margin: 12px 0;
      padding: 20px;
      cursor: pointer;
      border-radius: 8px;
      transition: 0.4s ease-in-out;
      white-space: nowrap;
      &:hover {
        background-color: rgba(230, 235, 240, 0.4);
      }
      .iconfont {
        font-size: 20px;
        color: #3c3e43;
      }
      span {
        color: #505257;
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 0 12px;
        opacity: 0;
        pointer-events: none;
        transform: translateX(20px);
      }
    }
  }
}
</style>
