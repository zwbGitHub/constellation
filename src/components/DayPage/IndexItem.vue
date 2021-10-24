<template>
  <div class="item-box" :style="{ backgroundColor: item.bgColor }">
    <h1>{{ item.title }}</h1>
    <h2>{{ dayData[item.field] || '60' }}</h2>
    <!-- {{testStr}} -->
  </div>
</template>

<script>
export default {
  name: 'BodyIndexItem',
  props: {
    item: Object,
    dayData: Object,
    testStr: String
  }
}
</script>

<style lang="less" scoped>
.item-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
  padding: 0.1rem;
  flex: 1;
  h1 {
    font-size: 0.16rem;
  }
  h2 {
    font-size: 0.2rem;
    margin-top: 0.1rem;
  }
}
</style>
