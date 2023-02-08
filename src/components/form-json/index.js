import FormularioJSON from './FormularioJSON.vue'
import HTMLTag from './layout/HTMLTag.vue'

import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Textarea from 'primevue/textarea'
import PrimeVue from 'primevue/config'
import RadioButton from 'primevue/radiobutton'
import Checkbox from 'primevue/checkbox'
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import Image from 'primevue/image'
import ColorPicker from 'primevue/colorpicker'
import Slider from 'primevue/slider'
import FileUpload from 'primevue/fileupload'
import Tooltip from 'primevue/tooltip';

import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

import VFJButtonInput from './columns/VFJButtonInput/VFJButtonInput.vue'

import "primevue/resources/themes/nova/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export const VueFormJSON = {
    install(Vue, options) {
        Vue.use(PrimeVue);

        Vue.directive('tooltip', Tooltip);
        
        Vue.component("InputText", InputText);
        Vue.component("RadioButton", RadioButton);
        Vue.component("Checkbox", Checkbox);
        Vue.component("Dropdown", Dropdown);
        Vue.component("Textarea", Textarea);
        Vue.component("Calendar", Calendar);
        Vue.component("Button", Button);
        Vue.component("Image", Image);
        Vue.component("ColorPicker", ColorPicker);
        Vue.component("Slider", Slider);
        Vue.component("FileUpload", FileUpload);

        Vue.component("TabView", TabView)
        Vue.component("TabPanel", TabPanel)

        Vue.component("VFJButtonInput", VFJButtonInput);

        Vue.component("FormularioJSON", FormularioJSON);
        Vue.component("HTMLTag", HTMLTag);
    }
}