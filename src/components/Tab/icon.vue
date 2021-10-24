<template>
  <router-link
    :to="item.path"
    class="router"
    active-class="active"
  >
    <div class="circle">{{ item.icon }}</div>
    <div class="title">{{ item.title }}</div>
  </router-link>
</template>

<script>
/* import { computed } from 'vue'
import { useStore } from 'vuex' */
export default {
  name: 'TabIcon',
  props: {
    item: {
      type: Object
    }
  },
 /*  setup(){
    const store = useStore(),
        state= store.state
   return{
     routerName:computed(()=>state.routerName)
   }
  } */
}
</script>

<style lang="less" scoped>
.router {
  text-align: center;
  .circle {
    font-size: 0.15rem;
    border-radius: 50%;
    padding: 0.05rem;
    background: #DB7093;
    border: 1px solid;
    color: #fff;
  }

  .title {
    margin-top: 0.02rem;
    font-size: 0.12rem;
    color: #DB7093;
  }
}
.active  {
  .circle {
    border: 1px solid #DB7093;
    color: #DB7093;
    background: #fff;
    transition: all linear 0.1s;
  }
}
</style>
