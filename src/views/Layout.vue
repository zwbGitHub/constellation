<template>
  <my-header />
  <nav-bar />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <tab />
</template>

<script>
import MyHeader from '../components/Header'
import NavBar from '../components/NavBarDir'
import Tab from '../components/Tab/index.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { watch } from 'vue'
export default {
  name: 'Layout',
  components: {
    MyHeader,
    Tab,
    NavBar
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    router.replace('/')
    watch(
      () => {
        return router.currentRoute.value.name
      },
      value => {
        store.commit('setRouterName', value)
      }
    )
    //  watch(()=>{
    //    return store.state.consName
    //   },(value)=>{
    //     console.log(value)
    //   })
    return {}
  }
}
</script>

<style></style>
