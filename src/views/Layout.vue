<template>
  <my-header />
  <nav-bar />
  <error-page />
  <router-view v-slot="{ Component }" v-if="!errorCode">
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
import ErrorPage from '../components/ErrorPage'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, watch } from 'vue'
export default {
  name: 'Layout',
  components: {
    MyHeader,
    Tab,
    NavBar,
    ErrorPage
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
    return {
      errorCode: computed(() => store.state.errorCode)
    }
  }
}
</script>

<style></style>
