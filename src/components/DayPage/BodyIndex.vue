<template>
  <div class="body-index">
    <body-index-item
      v-for="(item, index) of allBodyIdx"
      :key="index"
      :item="item"
      :dayData="dayData"
      :testStr="testStr"
    />
  </div>
</template>

<script>
import BodyIndexItem from './IndexItem.vue'
import allBodyIdx from '@/data/all-body-index.js'
import {ref, watch} from 'vue'
export default {
  name: 'BodyIndex',
  components: {
    BodyIndexItem
  },
  props: {
    dayData: Object
  },
  setup(props) {
    // 无法获取props传值对象的属性
    // console.log(props.dayData.health)   // undefined
    let testStr = ref('')
     watch(
      () => {
        return props.dayData
      },
      () => {
        // 使用watch可以获取props传值对象的属性
        console.log("监视dayData中是否存入了数据",props.dayData)
        if(props.dayData.reason){
            console.log("获取数据了")
            testStr.value = props.dayData.reason
        }
      },{immediate:true}
    )
    return {
      allBodyIdx,
      testStr
    }
  }
}
</script>

<style lang="less" scoped>
.body-index {
  margin: 0.10rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0.1rem;
  box-shadow: 0 0 0.05rem #999;
  overflow: scroll;
}
</style>
