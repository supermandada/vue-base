<template>
<h3>列表渲染</h3>
<p v-for="(item,index) in msg">{{ item }}-{{index}}</p>
<div v-for="item of result" :key="item.id" :class="item.id">
    <a :href="item.url">{{ item.id }}</a>
    <p>{{item.title}}</p>
</div>
<div>
    <p v-for="(value,key,index) of userinfo">{{ value }} - {{ key }} - {{ index }}</p>
</div>
<p v-for="(value,key,index) of userinfo1">{{ value }} - {{ key }} - {{ index }}</p>
</template>

<script>
export default {
    data() {
        return {
            msg: ["你好","golang","hello"],
            result: [
                {
                    "id": "1",
                    "title": "golang",
                    "url": "https://www.baidu.com"
                },
                {
                    "id": 2,
                    "title": "c++",
                    "url": "https://www.baidu.com"
                }
            ],
            userinfo: {
                name: "jack",
                age: 10,
                job: "sre"
            },
            userinfo1: {
                "name": "jack",
                "age": 10,
                "job": "sre"
            }
        }
    }
}
</script>