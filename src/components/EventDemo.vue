<template>
    <h3>内联事件处理</h3>
    <button v-on:click="count++">累加</button>
    <p>{{ count }}</p>

</template>

<script>
export default {
    data() {
        return{
            count: 0
        }
    }
}
</script>