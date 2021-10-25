<template>
  <div :class="['item', { active: index === modelValue }]" @click="setCons">
    {{ item }}
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  name: 'NavItem',
  props: {
    item: String,
    index: Number,
    modelValue: Number
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    // console.log(props.index)
    const store = useStore()
    function setCons() {
      context.emit('update:modelValue', props.index)
      store.commit('setConsName', props.item)
    }
    return {
      setCons
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 0.7rem;
  box-sizing: border-box;
   font-size: .145rem;
  text-align: center;
   color: #666;
  &:not(:last-child) {
    border-right: 1px solid pink;
  }
}
.active {
  color: #db7093;
}
</style>
