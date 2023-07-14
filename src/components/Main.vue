<template>
    <h3>Main</h3>
    <p>子节点获取的数据：{{ msg }}</p>
    <p>子节点传到父节点的数据：{{ msg1 }}</p>
    <SearchComponent @search-event="gethandle" :onEvent="funcHandle"/>
</template>
<script>
import SearchComponent from './SearchComponent.vue';
export default {
    data() {
        return {
            msg: "",
            msg1: ""
        }
    },
    components: {
        SearchComponent
    },
    methods: {
        gethandle(data) {
            this.msg = data
        },
        funcHandle(data) {
            this.msg1 = data
        }
    }
}
</script>