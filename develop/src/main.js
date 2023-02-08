import { createApp } from 'vue'
import App from './App.vue'

import { VueClienteFormDinamico } from '@agc-desarrollo/cliente_formulario_dinamico'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(VueClienteFormDinamico).mount('#app')
