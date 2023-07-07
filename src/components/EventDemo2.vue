<template>
    <h3>事件传参</h3>
    <p @click="getNameHandler(item,$event)" v-for="(item,index) of msg">{{ item }}</p>
</template>

<script>
export default {
    data() {
        return{
            msg: ["jack","allen","rose"]
        }
    },
    methods:{
        getNameHandler(name,e) {
            console.log(name)
            console.log(e)
        }
    }
}
</script>