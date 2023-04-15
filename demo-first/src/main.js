// webpack 语法 : import xxx from ''
// 导入 vue 这个包， 得到 Vue 构造函数 
import Vue from 'vue'

// 导入 App.vue 这个 根组件， 将来要把 App.vue 中的 模板（template） 结构 渲染到 HTML 页面 中  
import App from './App.vue'

import Test from './Test.vue'

Vue.config.productionTip = false

// import Vue from 'vue'
// import App from './App.vue'


// 创建 Vue 的 实例对象 
new Vue({
  // el: '#app',// el 手动指定 要 渲染到 哪个 区域 上
  // 通过 render 函数， 指定 了 要 渲染 哪个 UI 结构。
  // 把 render 函数指定的 组件， 渲染 到 HTML 页面 中 
  // 指定了 要渲染 App 这个 UI 结构
  // 不用管 h函数 是怎么 执行 的 

  // 就是 通过 render 函数， 把 App.vue 渲染 到 public目录下 的 index.html 中的 
  // render: h => h(App),
  render: h => h(Test),
}).$mount('#app')
// Vue实例的 $mount 方法 ，和 el 是一样的 作用， 制定 要 替换 的 区域， 有了 $mount() 方法， 就不用  使用 el 方法 了。  
//  Vue 实例的 $mount() 方法，作用和 el 属性完全一样！
// .$mount('选择器')  表示要把这个区域 替换掉
// 今后 都 通过 这种 工程化 的 方式， 来使用Vue 
