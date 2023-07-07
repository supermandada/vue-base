<template>
    <h3>func事件处理</h3>
    <button @dblclick="addCount">add</button>
    <p>{{ count }}</p>
</template>

<script>
export default {
    data() {
        return{
            count: 0
        }
    },
    methods:{
        addCount(e){
            this.count++
            e.target.innerHTML = "add" + this.count
            console.log(e)
        }
    }
}
</script>