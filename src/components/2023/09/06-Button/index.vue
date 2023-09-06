<template>
  <div class="container">
    <button class="button" ref="buttonRef" @click="handleClick">点我</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Button06',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
const buttonRef = ref()
const timer = ref()
const handleClick = () => {
  if (timer.value) clearTimeout(timer.value)
  buttonRef.value.classList.add('animate')
  timer.value = setTimeout(() => {
    buttonRef.value.classList.remove('animate')
  }, 400)
}
</script>
<style scoped lang="scss">
@keyframes topBubbles {
  50% {
    background-position:
      0% 80%,
      0% 20%,
      10% 40%,
      20% 0%,
      30% 30%,
      22% 50%,
      50% 50%,
      60% 20%,
      90% 30%;
  }
  100% {
    background-position:
      0% 70%,
      0% 10%,
      10% 30%,
      20% -10%,
      30% 20%,
      22% 40%,
      50% 40%,
      65% 10%,
      90% 20%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}

@keyframes bottomBubbles {
  50% {
    background-position:
      0% 80%,
      20% 80%,
      45% 60%,
      60% 100%,
      75% 70%,
      95% 60%,
      105% 0%;
  }
  100% {
    background-position:
      0% 90%,
      20% 90%,
      45% 70%,
      60% 110%,
      75% 80%,
      95% 70%,
      110% 10%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0faff;
  .button {
    position: relative;
    padding: 10px 22px;
    background-color: #7d2ae8;
    border-radius: 6px;
    color: #ffffff;
    border: none;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
    transition: transform 0.2s ease;
    &:active {
      transform: scale(0.96);
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      width: 150%;
      z-index: -1;
      background-repeat: no-repeat;
    }
    &.animate::before {
      top: -70%;
      background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%);
      background-size:
        10% 10%,
        20% 20%,
        15% 20%,
        20% 20%,
        18% 18%,
        10% 10%,
        15% 15%,
        28% 18%;
      background-position:
        5% 90%,
        10% 90%,
        10% 90%,
        15% 90%,
        25% 90%,
        40% 90%,
        55% 90%,
        70% 90%;
      animation: topBubbles 0.4s ease-in-out infinite;
    }
    &.animate::after {
      bottom: -70%;
      background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%);
      background-size:
        15% 15%,
        20% 20%,
        18% 18%,
        20% 20%,
        15% 15%,
        20% 20%,
        18% 18%;
      background-position:
        10% 0%,
        30% 10%,
        55% 0%,
        70% 0%,
        85% 0%,
        70% 0%,
        70% 0%;
      animation: bottomBubbles 0.4s ease-in-out forwards;
    }
  }
}
</style>
