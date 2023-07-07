<template>
<p :class="{ 'active':isactive,'text-danger':haserr }">class测试绑定属性动态1</p>
<p :class="objectActive">class测试绑定属性动态2</p>
<p :class="[activeClass,errorClass]">class测试绑定属性动态3</p>
<p :class="[isactive ? 'active' : '',haserr ? 'text-danger' : '']">class测试绑定属性动态4</p>
<p :class="[{'active':isactive},errorClass]">class测试绑定属性动态5</p>
</template>
<script>
export default {
    data() {
        return {
            objectActive: {
                'active': true,
                'text-danger': true,
            },
            activeClass:'active',
            errorClass:'text-danger',
            isactive: true,
            haserr: true

        }
    }
}
</script>

<style>
.active{
    font-size: large;
}
.text-danger {
    color: red;
}
</style>