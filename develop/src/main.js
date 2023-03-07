import { createRouter, createWebHashHistory } from "vue-router"
import { createApp } from 'vue'
import App from './App.vue'

import { VueClienteFormDinamico } from '@agc-desarrollo/cliente_formulario_dinamico'
import 'bootstrap/dist/css/bootstrap.css'

const routes = [
    {
        path: "/", name: 'root', redirect: 'forms'
    },
    {
        path: "/forms", name: 'forms', component: App
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    hash: false,
    routes,
});

const app = createApp(App)
app.use(VueClienteFormDinamico).use(router)

router.isReady().then(() => {
    app.mount('#app');
})