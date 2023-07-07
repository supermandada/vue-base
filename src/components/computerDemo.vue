<template>
<h3>{{ itbaizhan.name }}</h3>
<p>{{ itbaizhanContent }}</p>
<p>{{ itbaizhanContents() }}</p>
</template>
<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            itbaizhan: {
                name: "jack",
                job: ["golang","c++","python"]
            }
        }
    },
    // 计算属性。只要表达式不变，可以直接从缓存中取出结果
    computed: {
            itbaizhanContent() {
                return this.itbaizhan.job.length > 0 ? 'YES' : 'NO'
            }
        },
    // 函数或方法。每次调用都要重新计算
    methods: {
        itbaizhanContents() {
            return this.itbaizhan.job.length > 0 ? 'YES' : 'NO'
        }
    }
}
</script>