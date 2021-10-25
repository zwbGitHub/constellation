<template>
  <div class="container">
    <page-card :name="dayData.name" :consAll="dayData.all" />
    <body-index :dayData="dayData" />
    <page-list :dayData="dayData" />
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import BodyIndex from '../components/DayPage/BodyIndex.vue'
import PageList from '../components/PageList/Day.vue'
import { computed, onMounted, onActivated, ref } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Day',
  components: {
    // PageCard,
    BodyIndex,
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
        console.log(444)
      }
    })
    return {
      dayData: computed(() => state.today)
    }
  }
}
</script>

<style></style>
