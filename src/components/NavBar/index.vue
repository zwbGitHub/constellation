<template>
  <div class="nav-bar">
    <div class="scroll-wrap">
      <div class="wrap">
        <nav-item
          v-for="(item, index) of NavName"
          :key="index"
          :item="item"
          :index="index"
          v-model="consIdx"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavName from '../../data/nav-name'
import NavItem from './item'
export default {
  name: 'NavBar',
  components: {
    NavItem
  },
  setup() {
    let consIdx = ref(0)
    return {
      NavName,
      consIdx
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
   z-index: 999;
  top: 0.44rem;
  left: 0;
  right: 0;
  height: 0.38rem;
  border-bottom: 1px solid pink;
  width: 100%;
  overflow: hidden;
}
.scroll-wrap {
  overflow-x: scroll;
  height: 0.45rem;
  width: 100%;
  .wrap {
    display: flex;
    width: 8.4rem;
    height: 0.38rem;
    align-items: center;
    z-index: 999;
  }
}
</style>
