export default Vue => {
  Vue.directive('dColor', {
    inserted: function (el, binding) {
      el.style.color = binding.value
    }
  })
  Vue.directive('dFont', {
    inserted: function (el, binding) {
      el.style.fontSize = binding.value + 'px'
    }
  })
  Vue.directive('dfocus', {
    inserted: function (el, binding) {
      el.focus()
    }
  })
  // ios微信打开网页键盘弹起后页面上滑，导致弹框里的按钮响应区域错位
  Vue.directive('blur', {
    'bind' (el) {
      el.addEventListener('click', function () {
        window.scrollTo(0, 0)
      })
    }
  })
}
/*
// 第一个参数：指令名称
// 第二个参数：配置对象，指定指令的钩子函数
Vue.directive('directiveName', {
  // bind中只能对元素自身进行DOM操作，而无法对父级元素操作
  // 只调用一次 指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
bind( el，binding, vnode ) {
    // 参数详解
    // el：指令所绑定的元素，可以用来直接操作 DOM 。
    // binding：一个对象，包含以下属性：
    // name：指令名，不包括 v- 前缀。
    // value：指令的绑定值，等号后面的值 。
    // oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
    // expression：字符串形式的指令表达式 等号后面的字符串 形式
    // arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
    // modifiers：指令修饰符。例如：v-directive.foo.bar中，修饰符对象为 { foo: true, bar: true }。
    // vnode：Vue 编译生成的虚拟节点。。
    // oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
},

// inserted这个钩子函数调用的时候，当前元素已经插入页面中了，也就是说可以获取到父级节点了
inserted (  el，binding, vnode ) {},
//  DOM重新渲染前
update(el，binding, vnode,oldVnode) {},
// DOM重新渲染后
componentUpdated ( el，binding, vnode,oldVnode ) {},
// 只调用一次，指令与元素解绑时调用
unbind ( el ) {
  // 指令所在的元素在页面中消失，触发
}
})
// 简写 如果你想在 bind 和 update 时触发相同行为，而不关心其它的钩子:
Vue.directive('自定义指令名', function( el, binding ) {})
// 例：
Vue.directive('color', function(el, binding) {
el.style.color = binging.value
})
// 使用 注意直接些会被i成data中的数据“red” 需要字符串则嵌套引号"'red'"
<p v-color="'red'"></p>

作者：极客James
链接：https://juejin.im/post/5d673ad7f265da03934bf266
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
