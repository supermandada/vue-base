<template>
<h3>表单绑定</h3>
<form action="">
    <input type="text" v-model.lazy="message">
    <p>{{ message }}</p>
</form>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>

</template>

<script>

export default {
    data() {
        return {
            message: "",
            checked: false
        }
    }
}

</script>