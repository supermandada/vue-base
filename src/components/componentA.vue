<template>
    <p>componentA</p>
    <componentB :title="title" :names="names" :userInfo="userInfo"/>
</template>
<script>
import componentB from './componentB.vue'
export default{
    data() {
        return {    
            title: "golang",
            names: ["jack","tom"],
            userInfo: {
                name: "jack",
                age: 30
            }
        }
    },
    components: {
        componentB
    }
}
</script>