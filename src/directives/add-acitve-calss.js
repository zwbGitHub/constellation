// 自定义指令渲染NavBar组件的点击事件
export default {
  mounted(el, binding) {
    const { allClass, activeClass, consIdx } = binding.value
    const item = el.getElementsByClassName(allClass)
    item[consIdx].className = item[consIdx].className + ' ' + activeClass
  },
  updated(el, binding) {
    const { allClass, activeClass, consIdx } = binding.value
    const item = el.getElementsByClassName(allClass)
    item[binding.oldValue.consIdx].className = item[consIdx].className
    item[consIdx].className = item[consIdx].className + ' ' + activeClass
  }
}
