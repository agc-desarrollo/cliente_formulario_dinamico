import ClienteFormularioDinamico from './ClienteFormularioDinamico.vue'
import { VueFormJSON } from './components/form-json/index'

export const VueClienteFormDinamico = {
    install(Vue, options) {
        Vue.use(VueFormJSON);
        Vue.component("ClienteFormularioDinamico", ClienteFormularioDinamico);
    }
}