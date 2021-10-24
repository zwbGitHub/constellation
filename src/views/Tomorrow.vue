<template>
  <div class="container">
    <page-card :name="tomorrowData.name"
    :consAll="tomorrowData.all"/>
    <page-list :tomorrowData="tomorrowData"/>
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import PageList from '../components/PageList/Tomorrow.vue'
import { computed, onMounted } from 'vue'
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
      state = store.state
    getAllData(store)
    onMounted(() => {})

    return {
      tomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>

<style></style>