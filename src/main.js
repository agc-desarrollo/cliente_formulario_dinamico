import { createApp } from 'vue'
import App from './App.vue'

import { VueFormJSON } from '@greenborn/vue_json_form'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(VueFormJSON).mount('#app')
