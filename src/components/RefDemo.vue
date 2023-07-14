<template>
<h3>模板引用 获取DOM</h3>
<p ref="container">{{ msg }}</p>
<input type="text" ref="username">
<button @click="getdom">获取元素</button>
</template>

<script>
export default {
    data() {
        return {
            msg: "鸟"
        }
    },
    methods: {
        getdom() {
            // innerHTML 是原生的js属性
            this.$refs.container.innerHTML = "大"
            console.log(this.$refs.username.value)  
    }
}
}
</script>