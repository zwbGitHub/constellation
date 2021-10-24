<template>
  <div class="item" :data-index="index" data-item = 
  '你好吗'>
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    item: String,
    index: Number
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 0.7rem;
  box-sizing: border-box;
  font-size: 0.145rem;
  text-align: center;
  color: #666;
  &:not(:last-child) {
    border-right: 1px solid pink;
  }
}
.active {
  color: #db7093;
}
</style>
