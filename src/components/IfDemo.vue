<template>
<h3>条件渲染</h3>
<p v-if="flag">你能看见我么</p>
<p v-else>那你还是看看我吧</p>
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>NOT A/B/C</div>
<p v-show="flag">你能看见我么</p>
</template>

<script>
export default{
    data() {
        return {
            flag: true,
            type: "C"
        }
    }
}
</script>