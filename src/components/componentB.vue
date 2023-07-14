<template>
    <p>componentB</p>
    <p>{{ title }}</p>
    <button @click="updateTitle">修改</button>
    <p v-for="(item,index) of names" :key="index">{{ item }}</p>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
</template>
<script>
export default{
    data() {
        return {
            
        }
    },
    props: {
        title: {
            type: [String,Number,Array,Object],
            default: "nil"
        },
        names: {
            type: Array,
            // default: ["nil"]
            default() {
                return ["nil"]
            }
        },
        userInfo: {
            type: Object,
            // 都可以
            // default: {
            //     name: "nil",
            //     age: 10
            // }
            default() {
                return {
                    name: "nil",
                    age: 0
                }
            }
        }
    },
    methods: {
        // 无法修改从父节点传过来的值
        updateTitle() {
            this.title = "go"
        }
    }
}
</script>