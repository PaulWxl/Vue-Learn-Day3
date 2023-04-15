<template>
    <!-- 注意，所以东西 一定 要放在 div 盒子 里面 (div 和 div id="app" 替换 ) -->
    <div class="test-box">
        <h3>这是用户自定义的 Test.vue {{ username }} </h3> 
        
        <h2>这是h2</h2> 
        <label for="username"></label>
        <input type="text" name="username" id="username" placeholder="请输入用户名" v-model.lazy="username" >

        <button @click="changeName">修改用户名</button>

        <div>
            <span>123</span>
            <span>456</span>
            <span>789</span>
        </div>
    </div>
    <!-- <div>123</div> --><!--模板中 只能 允许 有一个 根节点。 解决方法： 再在 外面 统一的 包 一个 大的 div 。  今后在开发的 时候， 为了防止报错， 一进到 template 中 ， 第一件事 就是 放 div 占位， 然后 在 这个 div 内部 写结构。  -->
</template>

<!-- vue 组件的三个组成部分每个.vue 组件都由3 部分构成，分别是：template-> 组件的模板结构script-> 组件的JavaScript 行为style-> 组件的样式其中，每个组件中必须包含template 模板结构，而script 行为和style 样式是可选的组成部分。 -->
<!-- 一般 都是 template 在最上面， style 在 最下面， 中间是 script 。  -->


<!-- script 定义 组件 的 行为  -->
<script>

    const ipt =  document.querySelector('input')
    // 默认 导出, 这是 固定 写法！没有 为啥！！！
    // script 中 一上来， 必须 写 默认导出！！！ 固定 写法！没有 为啥！！！
    // export default {}
    export default  {
        // 定义一个 data 数据源
        //  Vue 官方 规定， .vue 组件 中 的 data 不能 指向 对象。 而 应该 是 一个 函数！！！而且 ，这个 函数 内部 必须 return 一个 对象。 {}。  对象 {} 内部 就是  数据。 
        data() {
            return {
                username: ''
            }
        },

        methods: {
            changeName() {
                console.log(this)// this 是 Vue 组件 的 一个 实例 ， this 具有 data ， 和 methods 中 的 方法， 可以 直接 调用。 
                let value = ipt.value
                this.username = value
            }
        },

        // 当前组件中的侦听器 ， 与 methods 平级 
        watch: {

        },

        // 当前组件中的计算属性
        computed: {

        },

        // 过滤器
        filters: {

        }
    }
</script>



<!-- 和 template 平级， 放一个 style 标签  -->
<!-- 想要在 模版中 使用 less 语法， 需要 在 style 标签 中 加 lang 属性， （language）， 值为 less  -->
<style lang="less">
    
    .test-box {
        background-color: pink;
        transform: translate(-7px, -33px);
        h3 {
            font-size: 2rem;
            font-family: Arial, Helvetica, sans-serif;
        }
        h2 {
            color: red;
        }
    }
</style>