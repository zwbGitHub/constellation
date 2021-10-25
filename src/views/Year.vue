<template>
  <div class="container">
    <page-card :name="yearData.name" :consAll="yearData.all" />
    <page-list :yearData="yearData" />
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import PageList from '../components/PageList/Year.vue'
import { computed, onMounted, onActivated, ref } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Year',
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
        console.log(333)
      }
    })
    return {
      yearData: computed(() => state.year),
      flag
    }
  }
}
</script>

<style></style>
