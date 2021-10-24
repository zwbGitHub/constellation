<template>
  <div class="tab">
    <div class="tab-item" v-for="(item, index) of tabData" :key="index">
      <tab-icon :item="item"></tab-icon>
    </div>
  </div>
</template>

<script>
import TabIcon from './TabIcon.vue'

import tabData from '@/data/tab'

import { reactive } from 'vue'

export default {
  name: 'Tab',
  components: {
    TabIcon
  },
  setup() {
    const state = reactive({
      tabData
    })

    return {
      ...state
    }
  }
}
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;
  z-index: 999;
  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
     width: 33.3%;
    height: 100%;
  }
}
</style>
