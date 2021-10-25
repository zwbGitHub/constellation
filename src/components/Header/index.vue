<template>
  <header>
    <img src="../../assets/img/cons.png" />
    <span>星座物语</span>
  </header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="less" scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 0.44rem;
  text-align: center;
  justify-content: center;
  line-height: 0.44rem;
  background: #db7093;
  color: rgba(255, 255, 255, 0.952);
  font-size: 0.18rem;
  z-index: 999;
  img {
    width: 0.26rem;
    margin-right: 0.05rem;
  }
}
</style>
