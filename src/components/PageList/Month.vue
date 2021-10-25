<template>
  <div class="page-list">
    <lucky-list title="健康运势总结" :text="monthData.health" />
    <lucky-list title="工作运势总结" :text="monthData.work" />
    <lucky-list title="爱情运势总结" :text="monthData.love" />
    <lucky-list title="财运运势总结" :text="monthData.money" />
    <lucky-list title="本月运势总结" :text="monthData.all" />
  </div>
</template>

<script>
export default {
  name: 'PageList',
  props: {
   monthData: Object
  }
}
</script>

<style lang="less" scoped>
.page-list{
    width: 100%;
}
</style>