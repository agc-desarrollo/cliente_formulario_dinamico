import { ref, onMounted, resolveComponent, openBlock, createElementBlock, Fragment, createTextVNode, createBlock, createCommentVNode, toDisplayString, resolveDirective, withDirectives, unref, normalizeClass, createElementVNode, renderList, createVNode, isRef, withCtx, resolveDynamicComponent } from 'vue';
import axios from 'axios';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import PrimeVue from 'primevue/config';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import Image from 'primevue/image';
import ColorPicker from 'primevue/colorpicker';
import Slider from 'primevue/slider';
import FileUpload from 'primevue/fileupload';
import Tooltip from 'primevue/tooltip';
import InputNumber from 'primevue/inputnumber';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

//import { getToken } from '../utils/auth'

const create = function( url ){
  const service = axios.create({
    baseURL: url, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 100000 // request timeout
  });
  
  // request interceptor
  // Seudo Proxy
  service.interceptors.request.use(
  
    config => {
      //const token = getToken();
      //console.log(token)
      //if (token !== null) {
      //  config.headers['x-api-key'] = token
      //}
      return config
    },
    error => {
  
      // do something with request error
      console.log("request err", error); // for debug
      return Promise.reject(error)
    }
  );
  
  // response interceptor
  service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */
  
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      //loadingInstance.close()
  
      const res = response.data;
      //console.log("resdata", res)
  
      // if the custom code is not 20000, it is judged as an error.
      // console.log(res)
      return res
  
    },
    error => {
  
      console.log('err' + error); // for debug
  
      return { stat:false, error:error }
    }
  );
  return service
};

function getForm( urlAPI, id ) {
  const request = create(urlAPI);
  return request({
    url: '/form/get_form?id='+id,
    method: 'get',
    data: ''
  })
}

function getSession( urlAPI, data ) {
  const request = create(urlAPI);
  return request({
    url: '/form/get_session',
    method: 'post',
    data: data
  })
}

var script$j = {
  __name: 'ClienteFormularioDinamico',
  props: ['config', 'modelValue'],
  emits: ['update:modelValue', 'input', 'submit', 'click' ],
  setup(__props, { emit }) {

const props = __props;




const form_data = ref( props.modelValue );
const form_def  = ref( null );

ref( null );

//REENVIO EVENTOS
function update_model( evnt ){  emit( 'update:modelValue', evnt ); }
function inputRepeat( event ){ emit('input', event); }
function submitRepeat( event ){ emit('submit' ,event); }
function clickRepeat( event ){ emit('click' ,event); }


async function callGetForm(){
  let res = await getForm(props.config.api, props.config.id);
  if (res.stat) {
    form_def.value = res.definition;
  } else {
    alert(res.text);
  }
}

onMounted(async ()=>{
  let res = await getSession(props.config.api);

  if (res.stat) {
    await callGetForm();
  } else {
    alert(res.text);
  }
});

return (_ctx, _cache) => {
  const _component_FormularioJSON = resolveComponent("FormularioJSON");

  return (openBlock(), createElementBlock(Fragment, null, [
    createTextVNode(" Cliente Formulario Dinámico "),
    (form_def.value !== null)
      ? (openBlock(), createBlock(_component_FormularioJSON, {
          key: 0,
          form_definition: form_def.value,
          modelValue: form_data.value,
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = $event => ((form_data).value = $event)),
            update_model
          ],
          onSubmit: submitRepeat,
          onInput: inputRepeat,
          onClick: clickRepeat
        }, null, 8 /* PROPS */, ["form_definition", "modelValue"]))
      : createCommentVNode("v-if", true),
    createTextVNode(" " + toDisplayString(form_data.value), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}
}

};

script$j.__file = "src/ClienteFormularioDinamico.vue";

function useInputCommon( emit, CONFIG_CLASS, props, optionals={} ) {
    const model  = ref();
    const config = ref(props.params);
    
    function input_event(){
        emit('update:modelValue', { config: config.value, data: model.value });
    }

    function click_event(evnt){
        emit('click', { config: config.value, data: model.value, evnt:evnt });
    }

    onMounted(async ()=>{
        if (props.modelValue != undefined && config.value.field_options != undefined) {
            let data = props.modelValue.field_options; 
            if (data != undefined)
                optionals.field_options.value = data[ config.value.field_options ];
        }
        
        if (props.modelValue !== undefined && props.modelValue.getValue !== undefined) {
            let value = props.modelValue.getValue( config.value.field );
            if (value != undefined) model.value = value;
        } else {
            console.log(45645,props.modelValue);
        }
    });

    return { input_event, click_event, model, config }
}

class VFJInputConfigBase {
    label = ''
    class = 'col mb-3'
    disabled = false
    field = ''
    dfield = ''
    required = false
    autocomplete_options = ''
    tooltip = ''
    list = null
    id = 0
    placeholder = ''

    constructor( params ){
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

//Se usa para definir los parametros inciales de configuración del componente VFJButtonInput
class VFJButtonInputConf extends VFJInputConfigBase {
    icon  = ''; iconPos = ''
    data = true
    action = ''
    
    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

var script$i = {
  __name: 'VFJButtonInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const { click_event, model, config } = useInputCommon( emit, VFJButtonInputConf, props );


return (_ctx, _cache) => {
  const _component_Button = resolveComponent("Button");
  const _directive_tooltip = resolveDirective("tooltip");

  return withDirectives((openBlock(), createBlock(_component_Button, {
    label: unref(config).label,
    class: normalizeClass(unref(config).class),
    icon: unref(config).icon,
    iconPos: unref(config).iconPos,
    onClick: unref(click_event)
  }, null, 8 /* PROPS */, ["label", "class", "icon", "iconPos", "onClick"])), [
    [_directive_tooltip, unref(config).tooltip]
  ])
}
}

};

script$i.__file = "src/components/form-json/columns/VFJButtonInput/VFJButtonInput.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJCheckboxInput
class VFJCheckboxInputConf extends VFJInputConfigBase{
    option_id     = ''
    option_label  = ''
    field_options = ''

    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$d = ["for"];
const _hoisted_2$b = { class: "input-group row" };
const _hoisted_3$2 = { for: "{{ config.field + option[config.option_id] }}" };


var script$h = {
  __name: 'VFJCheckboxInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const field_options = ref([]);

const { input_event, click_event, model, config } = useInputCommon( emit, VFJCheckboxInputConf, props, { field_options:field_options });

return (_ctx, _cache) => {
  const _component_Checkbox = resolveComponent("Checkbox");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: unref(config).field,
      class: "form-label"
    }, toDisplayString(unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$d),
    createElementVNode("div", _hoisted_2$b, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(field_options.value, (option) => {
        return (openBlock(), createElementBlock("div", {
          class: "field-radiobutton col-12",
          key: option
        }, [
          createVNode(_component_Checkbox, {
            inputId: "{{config.field + option[config.option_id]}}",
            name: unref(config).field,
            onChange: unref(input_event),
            onClick: unref(click_event),
            value: option[unref(config).option_id],
            modelValue: unref(model),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null))
          }, null, 8 /* PROPS */, ["name", "onChange", "onClick", "value", "modelValue"]),
          createElementVNode("label", _hoisted_3$2, toDisplayString(option[unref(config).option_label]), 1 /* TEXT */)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 2 /* CLASS */))
}
}

};

script$h.__file = "src/components/form-json/columns/VFJCheckboxInput/VFJCheckboxInput.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJColorInput
class VFJColorInputConf extends VFJInputConfigBase{
    inline = false

    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$c = ["for"];
const _hoisted_2$a = { class: "input-group" };


var script$g = {
  __name: 'VFJColorInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const { input_event, click_event, model, config } = useInputCommon( emit, VFJColorInputConf, props );

return (_ctx, _cache) => {
  const _component_ColorPicker = resolveComponent("ColorPicker");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: unref(config).field,
      class: "form-label"
    }, toDisplayString(unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$c),
    createElementVNode("div", _hoisted_2$a, [
      withDirectives(createVNode(_component_ColorPicker, {
        modelValue: unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null)),
        inline: unref(config).inline,
        onChange: unref(input_event),
        onClick: unref(click_event)
      }, null, 8 /* PROPS */, ["modelValue", "inline", "onChange", "onClick"]), [
        [_directive_tooltip, unref(config).tooltip]
      ])
    ])
  ], 2 /* CLASS */))
}
}

};

script$g.__file = "src/components/form-json/columns/VFJColorInput/VFJColorInput.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJDateInput
class VFJDateInputConf extends VFJInputConfigBase {
    inline = false
    selectionMode = 'single'
    dateFormat = 'dd.mm.yy'
    showTime = false
    value = null

    constructor( params ){
        super(params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++){
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];}
    }
}

const _hoisted_1$b = ["for"];
const _hoisted_2$9 = { class: "input-group" };


var script$f = {
  __name: 'VFJDateInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const { input_event, click_event, model, config } = useInputCommon( emit, VFJDateInputConf, props );

return (_ctx, _cache) => {
  const _component_Calendar = resolveComponent("Calendar");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: unref(config).field,
      class: "form-label"
    }, toDisplayString(unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$b),
    createElementVNode("div", _hoisted_2$9, [
      withDirectives(createVNode(_component_Calendar, {
        disabled: unref(config).disabled,
        inline: unref(config).inline,
        selectionMode: unref(config).selectionMode,
        dateFormat: unref(config).dateFormat,
        showTime: unref(config).showTime,
        placeholder: unref(config).placeholder,
        onYearChange: unref(input_event),
        onDateSelect: unref(input_event),
        onClick: unref(click_event),
        modelValue: unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null)),
        class: "w-100"
      }, null, 8 /* PROPS */, ["disabled", "inline", "selectionMode", "dateFormat", "showTime", "placeholder", "onYearChange", "onDateSelect", "onClick", "modelValue"]), [
        [_directive_tooltip, unref(config).tooltip]
      ])
    ])
  ], 2 /* CLASS */))
}
}

};

script$f.__file = "src/components/form-json/columns/VFJDateInput/VFJDateInput.vue";

const _hoisted_1$a = ["for"];
const _hoisted_2$8 = { class: "input-group" };


var script$e = {
  __name: 'VFJFileInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue'],
  setup(__props, { emit }) {




function input_event( evnt ){
    emit('update:modelValue', { config: config.value, data: model.value });
}

return (_ctx, _cache) => {
  const _component_FileUpload = resolveComponent("FileUpload");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(__props.params.class)
  }, [
    createElementVNode("label", {
      for: __props.params.field,
      class: "form-label"
    }, toDisplayString(__props.params.label), 9 /* TEXT, PROPS */, _hoisted_1$a),
    createElementVNode("div", _hoisted_2$8, [
      createVNode(_component_FileUpload, {
        name: "demo[]",
        customUpload: true,
        onUploader: input_event
      })
    ])
  ], 2 /* CLASS */))
}
}

};

script$e.__file = "src/components/form-json/columns/VFJFileInput/VFJFileInput.vue";

var script$d = {
  __name: 'VFJImage',
  props: ['params'],
  setup(__props) {



return (_ctx, _cache) => {
  const _component_Image = resolveComponent("Image");

  return (openBlock(), createBlock(_component_Image, {
    src: __props.params.src,
    alt: __props.params.alt
  }, null, 8 /* PROPS */, ["src", "alt"]))
}
}

};

script$d.__file = "src/components/form-json/columns/VFJImage/VFJImage.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJRadioBtnInput

class VFJRadioBtnInputConf extends VFJInputConfigBase {
    option_id     = ''
    option_label  = ''
    field_options = ''

    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$9 = ["for"];
const _hoisted_2$7 = { class: "input-group row" };
const _hoisted_3$1 = { for: "{{ config.field + option[config.option_id] }}" };


var script$c = {
  __name: 'VFJRadioBtnInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;



const field_options = ref([]);

const { input_event, click_event, model, config } = useInputCommon( emit, VFJRadioBtnInputConf, props, { field_options:field_options });

return (_ctx, _cache) => {
  const _component_RadioButton = resolveComponent("RadioButton");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: unref(config).field,
      class: "form-label"
    }, toDisplayString(unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$9),
    createElementVNode("div", _hoisted_2$7, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(field_options.value, (option) => {
        return (openBlock(), createElementBlock("div", {
          class: "field-radiobutton col-12",
          key: option
        }, [
          createVNode(_component_RadioButton, {
            inputId: "{{config.field + option[config.option_id]}}",
            name: unref(config).field,
            onChange: unref(input_event),
            onClick: unref(click_event),
            value: option[unref(config).option_id],
            modelValue: unref(model),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null))
          }, null, 8 /* PROPS */, ["name", "onChange", "onClick", "value", "modelValue"]),
          createElementVNode("label", _hoisted_3$1, toDisplayString(option[unref(config).option_label]), 1 /* TEXT */)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 2 /* CLASS */))
}
}

};

script$c.__file = "src/components/form-json/columns/VFJRadioBtnInput/VFJRadioBtnInput.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJRangeInput

class VFJRangeInputConf extends VFJInputConfigBase{
    step = 1
    min  = 0
    max  = 100
    range = false

    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$8 = ["for"];
const _hoisted_2$6 = { class: "input-group" };


var script$b = {
  __name: 'VFJRangeInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const { input_event, click_event, model, config } = useInputCommon( emit, VFJRangeInputConf, props );

return (_ctx, _cache) => {
  const _component_Slider = resolveComponent("Slider");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: __props.params.field,
      class: "form-label"
    }, toDisplayString(__props.params.label), 9 /* TEXT, PROPS */, _hoisted_1$8),
    createElementVNode("div", _hoisted_2$6, [
      createVNode(_component_Slider, {
        modelValue: unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null)),
        range: unref(config).range,
        onSlideend: unref(input_event),
        step: unref(config).step,
        min: unref(config).min,
        max: unref(config).max,
        class: "w-100",
        onClick: unref(click_event)
      }, null, 8 /* PROPS */, ["modelValue", "range", "onSlideend", "step", "min", "max", "onClick"])
    ])
  ], 2 /* CLASS */))
}
}

};

script$b.__file = "src/components/form-json/columns/VFJRangeInput/VFJRangeInput.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJSelectInput

class VFJSelectInputConf extends VFJInputConfigBase {
    option_id     = ''
    option_label  = ''
    field_options = ''

    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$7 = ["for"];
const _hoisted_2$5 = { class: "input-group" };


var script$a = {
  __name: 'VFJSelectInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;



const field_options = ref();

const { input_event, click_event, model, config } = useInputCommon( emit, VFJSelectInputConf, props,{ field_options:field_options });


return (_ctx, _cache) => {
  const _component_Dropdown = resolveComponent("Dropdown");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: unref(config).key,
      class: "form-label"
    }, toDisplayString(unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$7),
    withDirectives((openBlock(), createElementBlock("div", _hoisted_2$5, [
      createVNode(_component_Dropdown, {
        modelValue: unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null)),
        class: "w-100",
        options: field_options.value,
        optionLabel: unref(config).option_label,
        optionValue: unref(config).option_id,
        onChange: unref(input_event),
        onClick: unref(click_event)
      }, null, 8 /* PROPS */, ["modelValue", "options", "optionLabel", "optionValue", "onChange", "onClick"])
    ])), [
      [_directive_tooltip, unref(config).tooltip]
    ])
  ], 2 /* CLASS */))
}
}

};

script$a.__file = "src/components/form-json/columns/VFJSelectInput/VFJSelectInput.vue";

const _hoisted_1$6 = ["innerHTML", "styles"];


var script$9 = {
  __name: 'VFJText',
  props: ['params'],
  setup(__props) {



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    innerHTML: __props.params.html,
    styles: __props.params.styles
  }, null, 8 /* PROPS */, _hoisted_1$6))
}
}

};

script$9.__file = "src/components/form-json/columns/VFJText/VFJText.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJTextareaInput

class VFJTextareaInputConf extends VFJInputConfigBase {
    rows = 5
    cols = 30

    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$5 = ["for"];
const _hoisted_2$4 = { class: "input-group" };


var script$8 = {
  __name: 'VFJTextareaInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const { input_event, click_event, model, config } = useInputCommon( emit, VFJTextareaInputConf, props );

return (_ctx, _cache) => {
  const _component_Textarea = resolveComponent("Textarea");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: unref(config).key,
      class: "form-label"
    }, toDisplayString(unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$5),
    createElementVNode("div", _hoisted_2$4, [
      withDirectives(createVNode(_component_Textarea, {
        class: "w-100",
        placeholder: unref(config).placeholder,
        modelValue: unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null)),
        rows: unref(config).rows,
        cols: unref(config).cols,
        disabled: unref(config).disabled,
        onClick: unref(click_event),
        onInput: unref(input_event)
      }, null, 8 /* PROPS */, ["placeholder", "modelValue", "rows", "cols", "disabled", "onClick", "onInput"]), [
        [_directive_tooltip, unref(config).tooltip]
      ])
    ])
  ], 2 /* CLASS */))
}
}

};

script$8.__file = "src/components/form-json/columns/VFJTextareaInput/VFJTextareaInput.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJTextInputConf

class VFJTextInputConf extends VFJInputConfigBase {
    type = 'text'
    params = {}

    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$4 = ["for"];
const _hoisted_2$3 = { class: "input-group" };


var script$7 = {
  __name: 'VFJTextInput',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const { input_event, click_event, model, config } = useInputCommon( emit, VFJTextInputConf, props );

return (_ctx, _cache) => {
  const _component_InputText = resolveComponent("InputText");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: unref(config).key,
      class: "form-label"
    }, toDisplayString(unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$4),
    createElementVNode("div", _hoisted_2$3, [
      withDirectives(createVNode(_component_InputText, {
        disabled: unref(config).disabled,
        onInput: unref(input_event),
        onClick: unref(click_event),
        type: unref(config).type,
        modelValue: unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null)),
        class: "w-100"
      }, null, 8 /* PROPS */, ["disabled", "onInput", "onClick", "type", "modelValue"]), [
        [_directive_tooltip, unref(config).tooltip]
      ])
    ])
  ], 2 /* CLASS */))
}
}

};

script$7.__file = "src/components/form-json/columns/VFJTextInput/VFJTextInput.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJNumber

class VFJNumberConf extends VFJInputConfigBase {
    min               = null
    max               = null
    mode              = 'decimal'
    minFractionDigits = null
    maxFractionDigits = null
    locale            = 'es-AR'
    currency          = 'USD'
    suffix            = ''
    prefix            = ''
    step              = 1
    format            = true
    showButtons       = true

    constructor( params ){
        super (params);
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$3 = ["for"];
const _hoisted_2$2 = { class: "input-group" };


var script$6 = {
  __name: 'VFJNumber',
  props: ['params', 'modelValue' ],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const { input_event, click_event, model, config } = useInputCommon( emit, VFJNumberConf, props );

return (_ctx, _cache) => {
  const _component_InputNumber = resolveComponent("InputNumber");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(unref(config).class)
  }, [
    createElementVNode("label", {
      for: unref(config).key,
      class: "form-label"
    }, toDisplayString(unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$3),
    createElementVNode("div", _hoisted_2$2, [
      withDirectives(createVNode(_component_InputNumber, {
        disabled: unref(config).disabled,
        min: unref(config).min,
        max: unref(config).max,
        step: unref(config).step,
        format: unref(config).format,
        minFractionDigits: unref(config).minFractionDigits,
        maxFractionDigits: unref(config).maxFractionDigits,
        currency: unref(config).currency,
        mode: unref(config).mode,
        suffix: unref(config).suffix,
        prefix: unref(config).prefix,
        showButtons: unref(config).showButtons,
        placeholder: unref(config).placeholder,
        onInput: unref(input_event),
        onClick: unref(click_event),
        type: unref(config).type,
        modelValue: unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(model) ? (model).value = $event : null)),
        class: "w-100"
      }, null, 8 /* PROPS */, ["disabled", "min", "max", "step", "format", "minFractionDigits", "maxFractionDigits", "currency", "mode", "suffix", "prefix", "showButtons", "placeholder", "onInput", "onClick", "type", "modelValue"]), [
        [_directive_tooltip, unref(config).tooltip]
      ])
    ])
  ], 2 /* CLASS */))
}
}

};

script$6.__file = "src/components/form-json/columns/VFJNumber/VFJNumber.vue";

var script$5 = {
  __name: 'VFJTabsSection',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;



const model = ref(props.modelValue);


const page  = ref(0);

function update_model( evnt ){
    emit('update:modelValue', evnt);
}

function click( evnt ){
    emit('click', evnt);

    if (evnt.config?.action != undefined && ACTION_INDEX[ evnt.config.action ] != undefined) 
            ACTION_INDEX[ evnt.config.action ]( evnt );
}

function sig_page(){
    if ((page.value + 1) < props.params.length)
        page.value ++;
}

function prev_page(){
    if ((page.value - 1) >= 0)
        page.value --;
}

function section_goTo( params ){
    page.value = params.config.action_params.id;
}

const ACTION_INDEX = {
    'section_next' : sig_page,
    'section_back' : prev_page,
    'section_goTo' : section_goTo
};

onMounted(async ()=>{
});

return (_ctx, _cache) => {
  const _component_HTMLTag = resolveComponent("HTMLTag");
  const _component_TabPanel = resolveComponent("TabPanel");
  const _component_TabView = resolveComponent("TabView");

  return (openBlock(), createBlock(_component_TabView, { activeIndex: page.value }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(__props.params, (section) => {
        return (openBlock(), createBlock(_component_TabPanel, {
          key: section,
          header: section.header
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(section.content, (row_data) => {
              return (openBlock(), createElementBlock("div", {
                class: normalizeClass(row_data.class)
              }, [
                (openBlock(), createBlock(_component_HTMLTag, {
                  row_data: row_data,
                  key: row_data,
                  modelValue: model.value,
                  "onUpdate:modelValue": [
                    _cache[0] || (_cache[0] = $event => ((model).value = $event)),
                    update_model
                  ],
                  onClick: click
                }, null, 8 /* PROPS */, ["row_data", "modelValue"]))
              ], 2 /* CLASS */))
            }), 256 /* UNKEYED_FRAGMENT */))
          ]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["header"]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["activeIndex"]))
}
}

};

script$5.__file = "src/components/form-json/layout/VFJTabsSection.vue";

const _hoisted_1$2 = { class: "component-group" };
const _hoisted_2$1 = { class: "row" };


var script$4 = {
  __name: 'VFJComponentGroup',
  props: ['params', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const model = ref( props.modelValue );

function update_model( evnt ){
    emit('update:modelValue', evnt);
}

function click( evnt ){
    emit('click', evnt);
}

onMounted(async ()=>{
});

return (_ctx, _cache) => {
  const _component_HTMLTag = resolveComponent("HTMLTag");

  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", _hoisted_2$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(__props.params.content, (row_data) => {
        return (openBlock(), createBlock(_component_HTMLTag, {
          row_data: row_data,
          key: row_data,
          modelValue: model.value,
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = $event => ((model).value = $event)),
            update_model
          ],
          onClick: click
        }, null, 8 /* PROPS */, ["row_data", "modelValue"]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}
}

};

script$4.__file = "src/components/form-json/layout/VFJComponentGroup.vue";

//Se usa para definir los parametros inciales de configuración del componente VFJLoopFieldGroup
class VFJLoopFieldGroupConf {
    
    runtime_data_field = ''
    content = ''
    btn_create = { label: 'Agregar', icon: 'pi pi-plus', iconPos: 'left' }
    btn_delete = { label: '', icon: 'pi pi-times', class: 'p-button-raised p-button-rounded p-button-danger' }
    initial_values_id = ''

    constructor( params ){
        let keys = Object.keys(params);
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]];
    }
}

const _hoisted_1$1 = { class: "row" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "row component-group" };
const _hoisted_4 = { class: "col-auto" };

var script$3 = {
  __name: 'VFJLoopFieldGroupRow',
  props: ['params', 'reg_data', 'modelValue'],
  emits: ['update:modelValue', 'click', 'remove'],
  setup(__props, { emit }) {

const props = __props;

const model = ref(props.modelValue);



const _remove_btn_cfg = ref(props.params.btn_delete);

function update_model( evnt ){
    emit('update:modelValue', evnt);
}

function click( evnt ){
    emit('click', evnt);
}

function loop_data() {
    let params = props.params; 
    let field  = params.runtime_data_field;
    let arr    = params.content;

    for (let i=0; i < arr.length; i++){
        for (let j=0; j < arr[i].content.length; j++){
            let c_params = arr[i].content[j].params;
            if (c_params['dfield'] != undefined) {
                c_params['field'] = c_params.dfield;
                c_params['list']  = field;
                c_params['id']    = props.reg_data._i;
                if (model.value[ params.initial_values_id ])
                    c_params['value'] = model.value[ params.initial_values_id ][ c_params['dfield'] ];
            }
        }
    }
    
    return arr
}


function click_delete( evnt ){
    emit('remove', { id: props.reg_data._i, list: props.params.runtime_data_field });
}


return (_ctx, _cache) => {
  const _component_HTMLTag = resolveComponent("HTMLTag");
  const _component_VFJButtonInput = resolveComponent("VFJButtonInput");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(loop_data(), (row_data) => {
          return (openBlock(), createBlock(_component_HTMLTag, {
            row_data: row_data,
            key: row_data,
            modelValue: model.value,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = $event => ((model).value = $event)),
              update_model
            ],
            onClick: click
          }, null, 8 /* PROPS */, ["row_data", "modelValue"]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ]),
    createElementVNode("div", _hoisted_4, [
      createVNode(_component_VFJButtonInput, {
        params: _remove_btn_cfg.value,
        onClick: click_delete
      }, null, 8 /* PROPS */, ["params"])
    ])
  ]))
}
}

};

script$3.__file = "src/components/form-json/layout/VFJLoopFieldGroup/VFJLoopFieldGroupRow.vue";

class FormStorage {

    data_form      = {}
    field_options  = {}
    initial_values = {}

    update( evnt ){
        let p = evnt.config;
        console.log(987979,evnt);
        if ( p.list != undefined && p.list != null ){
            if (this.data_form[ p.list ] == undefined) 
                this.data_form[ p.list ] = [];
            
            if (this.data_form[ p.list ][ Number(p.id) ] == undefined)
                this.data_form[ p.list ][ Number(p.id) ] = {};
            
            let is_new = true;
            for (let c=0; c < this.data_form[ p.list ].length; c++)
                if (this.data_form[ p.list ][ c ]?.[ '_i' ] == Number(p.id)) {
                    this.data_form[ p.list ][ c ][ p.field ] = evnt.data;
                    is_new = false;
                    break;
                }

            if (is_new){
                this.data_form[ p.list ][ Number(p.id) ][ p.field ] = evnt.data;
                this.data_form[ p.list ][ Number(p.id) ][ '_i' ]    = Number(p.id);
            }
            
            let aux = [];
            for (let c = 0; c < this.data_form[ p.list ].length; c++)
                if (this.data_form[ p.list ][c] != undefined && this.data_form[ p.list ][c] != null ) aux.push(this.data_form[ p.list ][c]);

            this.data_form[ p.list ] = aux;
        } else 
            this.data_form[ p.field ] = evnt.data;
    }

    delete( evnt ){
        if (this.data_form[evnt.list] == undefined)
            return false

        let aux = [];
        for (let c=0; c < this.data_form[evnt.list].length; c++)
            if (this.data_form[evnt.list][c]._i != evnt.id)
                aux.push( this.data_form[evnt.list][c] );
        
        this.data_form[evnt.list] = aux;
        return true
    }

    getValue( id_field ){
        if (this.data_form != undefined)
            return this.data_form[ id_field ]
    }

    deleteField( id_field ){
        delete this.data_form[id_field];
    }
}

const _hoisted_1 = { class: "col" };


var script$2 = {
  __name: 'VFJLoopFieldGroup',
  props: ['params', 'modelValue', 'class'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;



const model      = ref( props.modelValue );
const model_rows = ref(new FormStorage());
const model_aux  = ref(new FormStorage());



const u_id = ref(0);
const conf = ref(new VFJLoopFieldGroupConf(props.params));
const cfg_new_btn = ref(conf.value.btn_create);
const list_data = ref([]);

function update_model( evnt ){
    model_aux.value.update( evnt );
    sync_upd( { list : conf.value.runtime_data_field } );
}

function click_event( evnt ){
    emit('click', evnt);
}

function click_add( evnt ){
    list_data.value.push({ _i: u_id.value });
    u_id.value ++;
    sync_upd( evnt );
}

function click_remove(evnt){
    for (let i=0; i < list_data.value.length; i++){
        if (list_data.value[i]._i == evnt.id){
            model_aux.value.delete(evnt);
            list_data.value.splice(i,1);
            break;
        }
    }
    sync_upd( evnt );    
}

function sync_upd( evnt ){
    let l = evnt.list;
    emit('update:modelValue', {
        'config': { field : l  },
        'data' : model_aux.value.data_form[ l ]
    });
}

onMounted(async ()=>{
    model_aux.value.field_options  = model.value.field_options;
    model_aux.value.initial_values = model.value.initial_values;
});

return (_ctx, _cache) => {
  const _component_VFJButtonInput = resolveComponent("VFJButtonInput");

  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", {
      class: normalizeClass(["row", __props.class])
    }, [
      createElementVNode("div", _hoisted_1, [
        createVNode(_component_VFJButtonInput, {
          onClick: click_add,
          params: cfg_new_btn.value
        }, null, 8 /* PROPS */, ["params"])
      ])
    ], 2 /* CLASS */),
    (openBlock(true), createElementBlock(Fragment, null, renderList(list_data.value, (reg_data) => {
      return (openBlock(), createBlock(script$3, {
        key: reg_data,
        reg_data: reg_data,
        params: conf.value,
        modelValue: model_rows.value,
        "onUpdate:modelValue": [
          _cache[0] || (_cache[0] = $event => ((model_rows).value = $event)),
          update_model
        ],
        onRemove: click_remove,
        onClick: click_event
      }, null, 8 /* PROPS */, ["reg_data", "params", "modelValue"]))
    }), 128 /* KEYED_FRAGMENT */))
  ], 64 /* STABLE_FRAGMENT */))
}
}

};

script$2.__file = "src/components/form-json/layout/VFJLoopFieldGroup/VFJLoopFieldGroup.vue";

const COMPONENTS_REFS = {
    'I_BUTTON' : script$i,
    'I_CHECKBOX' : script$h,
    'I_COLOR' : script$g,
    'I_DATE' : script$f,
    'I_FILE' : script$e,
    '_IMAGE' : script$d,
    'I_RADIO' : script$c,
    'I_RANGE' : script$b,
    'I_SELECT' : script$a,
    '_TEXT' : script$9,
    'I_TEXTAREA' : script$8,
    'I_TEXT' : script$7,
    'I_NUMBER' : script$6,

    'V_TABS' : script$5,
    'V_GROUP' : script$4,
    'V_LOOP' : script$2
};

const STATUS = {
    DRAFT: 0,
    PUBLISHED: 1
};

class FormConfigGeneralData{
    status             = STATUS['DRAFT']
    title              = 'untitled'
    captcha_public_key = ''
    field_options      = {}
    submit_msg         = ''
}

class FormConfigSections {
    component = 'VFJTabsSection'
    content = []
}

class FormConfig {
    gral         = new FormConfigGeneralData()
    sections     = new FormConfigSections()
    runtime_data = {}
    field_rels   = []
}

var script$1 = {
  __name: 'FormularioJSON',
  props: ['form_definition', 'modelValue'],
  emits: ['update:modelValue', 'submit', 'input'],
  setup(__props, { emit }) {

const props = __props;





const model = ref(new FormStorage());

const formConfig  = ref(new FormConfig());
const formStorage = ref(new FormStorage());

const BTN_ACTION_INDEX = {
    'submit' : submit_form
};

async function submit_form(){
    emit('submit', formStorage.value.data_form);
}

function update_model( evnt ){
    formStorage.value.update( evnt );
    emit('update:modelValue', formStorage.value);
    emit('input', evnt);
}

async function click( evnt ){
    emit( 'click', evnt.data );

    if (evnt.config != undefined && BTN_ACTION_INDEX[ evnt.config.action ] != undefined) 
        await BTN_ACTION_INDEX[ evnt.config.action ]( evnt );
}

onMounted(async ()=>{
    formConfig.value = props.form_definition;
    model.value.data_form      = props.modelValue ? props.modelValue : {}; 
    model.value.field_options  = formConfig.value.gral.field_options;
    model.value.initial_values = formConfig.value.gral.initial_values;
});

return (_ctx, _cache) => {
  return (openBlock(), createBlock(resolveDynamicComponent(unref(COMPONENTS_REFS)[ formConfig.value.sections.component ]), {
    params: formConfig.value.sections.content,
    onClick: click,
    modelValue: model.value,
    "onUpdate:modelValue": [
      _cache[0] || (_cache[0] = $event => ((model).value = $event)),
      update_model
    ]
  }, null, 8 /* PROPS */, ["params", "modelValue"]))
}
}

};

script$1.__file = "src/components/form-json/FormularioJSON.vue";

var script = {
  __name: 'HTMLTag',
  props: ['row_data', 'modelValue'],
  emits: ['update:modelValue', 'click'],
  setup(__props, { emit }) {

const props = __props;




const model = ref( props.modelValue );

function update_model( evnt ){
    emit('update:modelValue', evnt);
}

function click( evnt ){
    emit('click', evnt);
}

onMounted(async ()=>{
});

return (_ctx, _cache) => {
  return (openBlock(true), createElementBlock(Fragment, null, renderList(__props.row_data.content, (col_data) => {
    return (openBlock(), createBlock(resolveDynamicComponent(unref(COMPONENTS_REFS)[ col_data.component ]), {
      key: col_data,
      class: normalizeClass(col_data.class),
      params: col_data.params,
      "onUpdate:modelValue": [
        update_model,
        _cache[0] || (_cache[0] = $event => ((model).value = $event))
      ],
      modelValue: model.value,
      onClick: click
    }, null, 8 /* PROPS */, ["class", "params", "modelValue"]))
  }), 128 /* KEYED_FRAGMENT */))
}
}

};

script.__file = "src/components/form-json/layout/HTMLTag.vue";

const VueFormJSON = {
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
        Vue.component("InputNumber", InputNumber);
        
        Vue.component("TabView", TabView);
        Vue.component("TabPanel", TabPanel);

        Vue.component("VFJButtonInput", script$i);

        Vue.component("FormularioJSON", script$1);
        Vue.component("HTMLTag", script);
    }
};

const VueClienteFormDinamico = {
    install(Vue, options) {
        Vue.use(VueFormJSON);
        Vue.component("ClienteFormularioDinamico", script$j);
    }
};

export { VueClienteFormDinamico };
