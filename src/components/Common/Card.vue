<template>
  <div class="page-card">
    <img :src="require(`@/assets/img/${name || '白羊座'}.jpg`)" :alt="name" />
    <div class="mask">
      <h1>{{ name }}</h1>
      <h2 v-if="Number(consAll)">幸运指数：{{ consAll }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageCard',
  props: {
    name: String,
    consAll: String || Number
  },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.page-card {
  padding: 0.1rem;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0.02rem 0.03rem 0.05rem #333;
  }
  .mask {
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #ffd7f5;
      font-size: 0.5rem;
    }
    h2 {
      font-size: 0.2rem;
      color: #fff;
      margin-top: 0.35rem;
    }
  }
}
</style>
