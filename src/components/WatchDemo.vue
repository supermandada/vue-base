<template>
<h3>侦听器</h3>
<p>{{ message }}</p>
<button v-on:click="updateMsg">修改</button>
</template>

<script>
export default {
    data() {
        return {
            message: "hello"
        }
    },
    methods: {
        updateMsg() {
            this.message = "world"
        }
    },
    watch: {
        // 侦听message的变化，自动执行的函数
        message(newValue,oldValue) {
            console.log(newValue,oldValue)
        }
    }
}
</script>