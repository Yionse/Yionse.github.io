<template>
  <div>
    <input type="checkbox">
    <span>已完成{{doneCount}} / 全部{{total}}</span>
    <button @click="clearAll">清除已完成的任务</button>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
    props : ["total", "doneCount", "clearAll"]
  }
</script>

<style lang="less">
  div {
    height: 40px;
    line-height: 40px;
  }
</style>