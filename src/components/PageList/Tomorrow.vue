<template>
  <div class="page-list">
    <list-label title="明日日期" :text="tomorrowData.datetime" />
    <list-label title="配对星座" :text="tomorrowData.QFriend" />
    <list-label title="幸运颜色" :text="tomorrowData.color" />
    <list-label title="幸运数字" :text="tomorrowData.number" />
    <lucky-list title="明日运势总结" :text="tomorrowData.summary" />
  </div>
</template>

<script>
export default {
  name: 'PageList',
  props: {
   tomorrowData: Object
  }
}
</script>

<style lang="less" scoped>
.page-list{
    width: 100%;
}
</style>