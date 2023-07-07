<template>
<div :style="{color:activeColor,fontSize:activeFontSize+'px'}">style测试1</div>
<div :style="objectActive1">style测试2</div>
<div :style="[objectActive1,objectActive2]">style测试3</div>
</template>

<script>
export default {
    data() {
        return {
            activeColor: "skyblue",
            activeFontSize: 30,
            objectActive1:{
                color: "skyblue",
            },
            objectActive2:{
                fontSize: '30px',
            },
        }
    }
}
</script>