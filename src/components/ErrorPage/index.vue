<template>
  <div class="error-page" v-if="errorCode">
    <div class="img-wrapper">
      <img src="@/assets/img/error.png" alt="出错啦" />
    </div>
    <div class="text">{{ErrorText[errorCode]}}</div>
  </div>
</template>

<script>
import ErrorText from '@/data/error.js'
import {useStore} from 'vuex'
import { computed } from 'vue'
export default {
    name:'ErrorPage',
    setup(){
        const store = useStore()
        return {
            ErrorText,
            errorCode:computed(()=>store.state.errorCode)
        }
    }
}
</script>

<style lang="less" scoped>
  .error-page{
    position: absolute;
    z-index: 1;
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-wrapper{
      width: 1rem;

    }
    .text{
      font-size: 0.2rem;
      margin-top: 0.1rem;
    }
  }
</style>
