<template>
<h3>数组变化侦听</h3>
<input type="text" v-model="inputValue">
<button @click="addList">提交</button>
<ul>
    <li v-for="(value,index) of names" :key="index">{{value}}</li>
</ul>
<button @click="addArray">合并</button>
<p>数组1</p>
<p v-for="(item,index) of nums1" :key="index">{{ item }}</p>
<p>数组2</p>
<p v-for="(item,index) of nums2" :key="index">{{ item }}</p>
</template>

<script>
export default {
    data() {
        return {
            names: ["rose","jack","allen"],
            inputValue: "",
            other: ["skaura"],
            nums1: [1,2,3,4],
            nums2: [5,6,7,8]
        }
    },
    methods: {
        addList() {
            this.names.push(this.inputValue)
            this.inputValue=""
            // concat方法不会刷新页面，需要将合并以后的数组赋值给原数组
            this.names = this.names.concat(this.other)
        },
        addArray() {
            this.nums1 =  this.nums1.concat(this.nums2)
            this.nums2 = []
        }
    }
}
</script>