<template>
  <div class="list-label">
    <div class="title">{{ title }}</div>
    <div class="content">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'ListLabel',
  props: {
    title: String,
    text: [String ,Number]
  }
}
</script>

<style lang="less" scoped>
.list-label {
  margin: 0.1rem;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 0.05rem;
  height: 0.44rem;
  background: #fff;
  box-sizing: border-box;
  .title {
    color: #c71585;
    font-size: 0.16rem;
    width: 1rem;
    text-align: center;
    line-height: 0.42rem;
  }
  .content {
    font-size: 0.16rem;
    color: #666;
    width: 2.53rem;
    overflow: scroll;
    line-height: 0.42rem;
  }
}
</style>
