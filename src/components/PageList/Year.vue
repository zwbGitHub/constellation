<template>
  <div class="page-list">
    <list-label title="所在年份" :text="yearData.date" />
    <list-label title="幸运石头" :text="yearData.luckeyStone" />
    <lucky-list
      title="健康运势总结"
      :text="yearData.health && yearData.health[0]"
    />
    <lucky-list
      title="事业运势总结"
      :text="yearData.career && yearData.career[0]"
    />
    <lucky-list
      title="爱情运势总结"
      :text="yearData.love && yearData.love[0]"
    />
    <lucky-list
      title="财运运势总结"
      :text="yearData.finance && yearData.finance[0]"
    />
    <lucky-list
      title="本年运势总结"
      :text="yearData.mima && yearData.mima.info + '，' + yearData.mima.text[0]"
    />
  </div>
</template>

<script>
export default {
  name: 'PageList',
  props: {
    yearData: Object
  }
}
</script>

<style lang="less" scoped>
.page-list {
  width: 100%;
}
</style>
