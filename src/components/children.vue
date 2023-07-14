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
</template>
<script>

export default {
    data() {
        return{
            msg: "child数据"
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
    }
}
</script>