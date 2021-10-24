<template>
  <div class="page-list">
    <list-label title="今日日期" :text="dayData.datetime" />
    <list-label title="配对星座" :text="dayData.QFriend" />
    <list-label title="幸运颜色" :text="dayData.color" />
    <list-label title="幸运数字" :text="dayData.number" />
    <lucky-list title="今日运势总结" :text="dayData.summary" />
  </div>
</template>

<script>
export default {
  name: 'PageList',
  props: {
    dayData: Object
  }
}
</script>

<style lang="less" scoped>
.page-list{
    width: 100%;
}
</style>
