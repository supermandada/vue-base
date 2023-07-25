<script>
import HelloWorld from './components/HelloWorld.vue';
import IfDemo from './components/IfDemo.vue';
import ForDemo from './components/ForDemo.vue'
import EventDemo from './components/EventDemo.vue'
import EventDemo1 from './components/EventDemo1.vue'
import EventDemo2 from './components/EventDemo2.vue'
import EventDemo3 from './components/EventDemo3.vue'
import ArrayList from './components/ArrayList.vue'
import computerDemo from './components/computerDemo.vue'
import ClassDemo from './components/ClassDemo.vue'
import StyleDemo from './components/StyleDemo.vue'
import WatchDemo from './components/WatchDemo.vue'
import ModelDemo from './components/ModelDemo.vue'
import RefDemo from './components/RefDemo.vue'
import parent from './components/parent.vue'
import componentA from './components/componentA.vue'
import Main from './components/Main.vue'

export default {
  components: {
    parent
  },
  data() {
    return {
      message: "爷爷的财产"
    }
  },
  // provide: {
  //   messge: "财产"
  // }
  provide() {
    return {
      message: this.message
    }
  }
}
</script>

<template>
  <!-- <HelloWorld/>
  <IfDemo/>
  <ForDemo/>
  <EventDemo/>
  <EventDemo1/>
  <EventDemo2/>
  <EventDemo3/> -->
  <!-- <ArrayList/> -->
  <!-- <computerDemo/> -->
  <!-- <ClassDemo/> -->
  <!-- <StyleDemo/> -->
  <!-- <WatchDemo/> -->
  <!-- <ModelDemo/> -->
  <!-- <RefDemo/> -->
  <parent/>
  <!-- <componentA /> -->
  <!-- <Main/> -->
</template>