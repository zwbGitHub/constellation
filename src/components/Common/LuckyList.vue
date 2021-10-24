<template>
  <div class="lucky-list">
    <div class="title">{{ title }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'LuckyList',
  props: {
    title: String,
    text: [String, Number]
  }
}
</script>
<style lang="less" scoped>
.lucky-list {
  margin: 0.1rem;
  border: 1px solid #ddd;
  border-radius: 0.05rem;
  overflow: hidden;
  box-sizing: border-box;
  .title {
    text-align: center;
    width: 100%;
    line-height: 0.35rem;
    height: 0.35rem;
    background: #c71585;
    color: #fff;
    font-size: 0.18rem;
  }
  .text {
    padding: 0.1rem;
    background: #fff;
    font-size: 0.14rem;
    text-indent: 2em;
    line-height: 0.2rem;
  }
}
</style>
