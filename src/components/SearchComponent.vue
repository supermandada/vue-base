<template>
<h3>SearchComponent</h3>
<input type="text" v-model="search">
<p>{{ onEvent("传递数据") }}</p>
</template>
<script>
export default {
    data() {
        return {
            search: ""
        }
    },
    props: {
        onEvent: Function
    },
    emits: ["searchEvent"],
    watch: {
        search() {
            this.$emit("searchEvent",this.search)
        }
    },
    
}
</script>