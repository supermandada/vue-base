
<template>
<div :id="dynamicID" :class="dynamicClass">测试</div> 
<button :disabled="isButtonDisabled">提交</button>
<div v-bind="objectOfAttrs">测试2</div>
</template>

<script >
export default {
  data() {
    return {
      dynamicID: "appID",
      dynamicClass: "hello",
      isButtonDisabled: false,
      objectOfAttrs: {
        id: "appID",
        class: "hello"
      }
    }
  }
}
</script>

<style>
.hello{
  color: #000;
  font-size:30px;
}
</style>

