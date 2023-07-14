<template>
<p>parent</p>
<!-- <child :title="MSG" :age="age" :names="names" :userInfo="userInfo" @someEvent="getHandle"/> -->
<child @someEvent="getHandle"/>
<p>父节点:{{ msg }}</p>
</template>
<script>
import child from './children.vue'
export default {
    data() {
        return {
            MSG: "parent数据!!",
            age: 20,
            names: ["jack","rose","tom"],
            userInfo: {
                name: "jack",
                age: 20
            },
            msg:""
        }
    },
    components: {
        child
    },
    // emits: ["someEvent"],
    methods: {
        getHandle(data) {
            this.msg = data
        }
    }
}
</script>