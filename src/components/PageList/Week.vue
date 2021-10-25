<template>
  <div class="page-list">
    <list-label title="本周日期" :text="weekData.date" />
    <lucky-list title="健康运势总结" :text="weekData.health" />
    <lucky-list title="学业运势总结" :text="weekData.work" />
    <lucky-list title="恋爱运势总结" :text="weekData.love" />
    <lucky-list title="财运运势总结" :text="weekData.money" />
  </div>
</template>

<script>
export default {
  name: 'PageList',
  props: {
   weekData: Object
  }
}
</script>

<style lang="less" scoped>
.page-list{
    width: 100%;
}
</style>