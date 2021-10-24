<template>
  <div
    class="nav-bar"
    v-add-active-class="{
      consIdx: consIdx,
      allClass: 'item',
      activeClass: 'active'
    }"
    @click="getActiveEle($event)"
  >
    <div class="scroll-wrap">
      <div class="wrap">
        <nav-item
          v-for="(item, index) of NavName"
          :key="index"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { addActiveClass } from '@/directives/index'
import { useStore } from 'vuex'
import NavName from '../../data/nav-name'
import NavItem from './item'
export default {
  name: 'NavBar',
  components: {
    NavItem
  },
  directives: {
    addActiveClass: addActiveClass
  },
  setup() {
    const store = useStore()
    let consIdx = ref(0)
    function getActiveEle(e) {
      // 要是e.target.dataset上存在index，需要给子组件配置 data-index = ""属性
      // console.dir(e.target.dataset)
      let activeText = e.target.innerHTML
      if (NavName.includes(activeText)) {
        consIdx.value = NavName.findIndex(item => item === activeText)
        store.commit('setConsName', activeText)
      }
    }
    return {
      NavName,
      consIdx,
      getActiveEle
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  top: 0.44rem;
  left: 0;
  right: 0;
  height: 0.38rem;
  border-bottom: 1px solid pink;
  width: 100%;
  overflow: hidden;
  z-index: 999;
  background: #fff;
}
.scroll-wrap {
  overflow-x: scroll;
  height: 0.45rem;
  width: 100%;
  .wrap {
    display: flex;
    width: 8.4rem;
    height: 0.39rem;
    align-items: center;
  }
}
</style>
