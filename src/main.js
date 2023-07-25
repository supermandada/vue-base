import { createApp } from 'vue'
import App from './App.vue'
import RefDemo from './components/RefDemo.vue'

const app = createApp(App)

// 在这里进行全局的注册
app.component("RefDemo",RefDemo),
app.provide("golabData","我是全局数据")

app.mount('#app')