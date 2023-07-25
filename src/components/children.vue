<template>
<p>children</p>
<!-- <p>{{ title }}</p>
<p>{{ age }}</p>
<ul>
    <li v-for="(item,index of names" :key="index">{{ item }}</li>
</ul>
<p>{{ userInfo.name }}</p>
<p>{{ userInfo.age }}</p> -->
<button @click="updateEvent">点击child按钮向父节点传数据</button>
<p>{{ message }}</p>
<p>{{ fullmessage }}</p>
<p>{{ golabData }}</p>
</template>
<script>

export default {
    data() {
        return{
            msg: "child数据",
            fullmessage: this.message
        }
    },
    components: {
    },
    emits: ["someEvent"],
    // props: ["title","age","names","userInfo"],
    methods: {
        updateEvent() {
            this.$emit("someEvent",this.msg)
        }
    },
    inject: ["message","golabData"]
}
</script>