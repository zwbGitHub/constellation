<template>
  <div class="container">
    <page-card :name="monthData.name" :consAll="monthData.all" />
    <page-list :monthData="monthData" />
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import PageList from '../components/PageList/Month.vue'
import { computed, onMounted, onActivated, ref } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Month',
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
      monthData: computed(() => state.month)
    }
  }
}
</script>

<style></style>
