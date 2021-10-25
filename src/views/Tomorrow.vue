<template>
  <div class="container">
    <page-card :name="tomorrowData.name" :consAll="tomorrowData.all" />
    <page-list :tomorrowData="tomorrowData" />
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import PageList from '../components/PageList/Tomorrow.vue'
import { computed, onMounted, onActivated, ref } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Tomorrow',
  components: {
    // PageCard,
    PageList
  },
  setup() {
    const store = useStore(),
      state = store.state,
      flag = ref('')

    onMounted(() => {
      getAllData(store)
    })
    onActivated(() => {
      if (flag.value !== state.consName) {
        getAllData(store)
        flag.value = state.consName
      }
    })
    return {
      tomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>

<style></style>
