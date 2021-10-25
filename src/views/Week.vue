<template>
  <div class="container">
    <page-card :name="weekData.name" :consAll="weekData.all" />
    <page-list :weekData="weekData" />
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import PageList from '../components/PageList/Week.vue'
import { computed, onMounted, onActivated, ref } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Week',
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
      weekData: computed(() => state.week)
    }
  }
}
</script>

<style></style>
