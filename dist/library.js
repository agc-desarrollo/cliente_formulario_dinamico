'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var axios = require('axios');
var InputText = require('primevue/inputtext');
var Dropdown = require('primevue/dropdown');
var Textarea = require('primevue/textarea');
var PrimeVue = require('primevue/config');
var RadioButton = require('primevue/radiobutton');
var Checkbox = require('primevue/checkbox');
var Calendar = require('primevue/calendar');
var Button = require('primevue/button');
var Image = require('primevue/image');
var ColorPicker = require('primevue/colorpicker');
var Slider = require('primevue/slider');
var FileUpload = require('primevue/fileupload');
var Tooltip = require('primevue/tooltip');
var InputNumber = require('primevue/inputnumber');
var TabView = require('primevue/tabview');
var TabPanel = require('primevue/tabpanel');
require('primevue/resources/themes/nova/theme.css');
require('primevue/resources/primevue.min.css');
require('primeicons/primeicons.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var InputText__default = /*#__PURE__*/_interopDefaultLegacy(InputText);
var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
var Textarea__default = /*#__PURE__*/_interopDefaultLegacy(Textarea);
var PrimeVue__default = /*#__PURE__*/_interopDefaultLegacy(PrimeVue);
var RadioButton__default = /*#__PURE__*/_interopDefaultLegacy(RadioButton);
var Checkbox__default = /*#__PURE__*/_interopDefaultLegacy(Checkbox);
var Calendar__default = /*#__PURE__*/_interopDefaultLegacy(Calendar);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Image__default = /*#__PURE__*/_interopDefaultLegacy(Image);
var ColorPicker__default = /*#__PURE__*/_interopDefaultLegacy(ColorPicker);
var Slider__default = /*#__PURE__*/_interopDefaultLegacy(Slider);
var FileUpload__default = /*#__PURE__*/_interopDefaultLegacy(FileUpload);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);
var InputNumber__default = /*#__PURE__*/_interopDefaultLegacy(InputNumber);
var TabView__default = /*#__PURE__*/_interopDefaultLegacy(TabView);
var TabPanel__default = /*#__PURE__*/_interopDefaultLegacy(TabPanel);

//import { getToken } from '../utils/auth'

const create = function( url ){
  const service = axios__default["default"].create({
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




const form_data = vue.ref( props.modelValue );
const form_def  = vue.ref( null );

vue.ref( null );

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

vue.onMounted(async ()=>{
  let res = await getSession(props.config.api);

  if (res.stat) {
    await callGetForm();
  } else {
    alert(res.text);
  }
});

return (_ctx, _cache) => {
  const _component_FormularioJSON = vue.resolveComponent("FormularioJSON");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createTextVNode(" Cliente Formulario Dinámico "),
    (form_def.value !== null)
      ? (vue.openBlock(), vue.createBlock(_component_FormularioJSON, {
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
      : vue.createCommentVNode("v-if", true),
    vue.createTextVNode(" " + vue.toDisplayString(form_data.value), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}
}

};

script$j.__file = "src/ClienteFormularioDinamico.vue";

function useInputCommon( emit, CONFIG_CLASS, props, optionals={} ) {
    const model  = vue.ref();
    const config = vue.ref(new CONFIG_CLASS(props.params));
    
    function input_event(){
        emit('update:modelValue', { config: config.value, data: model.value });
    }

    function click_event(evnt){
        emit('click', { config: config.value, data: model.value, evnt:evnt });
    }

    vue.onMounted(async ()=>{
        if (props.modelValue != undefined && config.value.field_options != undefined) {
            let data = props.modelValue.field_options; 
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
  const _component_Button = vue.resolveComponent("Button");
  const _directive_tooltip = vue.resolveDirective("tooltip");

  return vue.withDirectives((vue.openBlock(), vue.createBlock(_component_Button, {
    label: vue.unref(config).label,
    class: vue.normalizeClass(vue.unref(config).class),
    icon: vue.unref(config).icon,
    iconPos: vue.unref(config).iconPos,
    onClick: vue.unref(click_event)
  }, null, 8 /* PROPS */, ["label", "class", "icon", "iconPos", "onClick"])), [
    [_directive_tooltip, vue.unref(config).tooltip]
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




const field_options = vue.ref([]);

const { input_event, click_event, model, config } = useInputCommon( emit, VFJCheckboxInputConf, props, { field_options:field_options });

return (_ctx, _cache) => {
  const _component_Checkbox = vue.resolveComponent("Checkbox");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: vue.unref(config).field,
      class: "form-label"
    }, vue.toDisplayString(vue.unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$d),
    vue.createElementVNode("div", _hoisted_2$b, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(field_options.value, (option) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          class: "field-radiobutton col-12",
          key: option
        }, [
          vue.createVNode(_component_Checkbox, {
            inputId: "{{config.field + option[config.option_id]}}",
            name: vue.unref(config).field,
            onChange: vue.unref(input_event),
            onClick: vue.unref(click_event),
            value: option[vue.unref(config).option_id],
            modelValue: vue.unref(model),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null))
          }, null, 8 /* PROPS */, ["name", "onChange", "onClick", "value", "modelValue"]),
          vue.createElementVNode("label", _hoisted_3$2, vue.toDisplayString(option[vue.unref(config).option_label]), 1 /* TEXT */)
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
  const _component_ColorPicker = vue.resolveComponent("ColorPicker");
  const _directive_tooltip = vue.resolveDirective("tooltip");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: vue.unref(config).field,
      class: "form-label"
    }, vue.toDisplayString(vue.unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$c),
    vue.createElementVNode("div", _hoisted_2$a, [
      vue.withDirectives(vue.createVNode(_component_ColorPicker, {
        modelValue: vue.unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null)),
        inline: vue.unref(config).inline,
        onChange: vue.unref(input_event),
        onClick: vue.unref(click_event)
      }, null, 8 /* PROPS */, ["modelValue", "inline", "onChange", "onClick"]), [
        [_directive_tooltip, vue.unref(config).tooltip]
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
  const _component_Calendar = vue.resolveComponent("Calendar");
  const _directive_tooltip = vue.resolveDirective("tooltip");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: vue.unref(config).field,
      class: "form-label"
    }, vue.toDisplayString(vue.unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$b),
    vue.createElementVNode("div", _hoisted_2$9, [
      vue.withDirectives(vue.createVNode(_component_Calendar, {
        disabled: vue.unref(config).disabled,
        inline: vue.unref(config).inline,
        selectionMode: vue.unref(config).selectionMode,
        dateFormat: vue.unref(config).dateFormat,
        showTime: vue.unref(config).showTime,
        placeholder: vue.unref(config).placeholder,
        onYearChange: vue.unref(input_event),
        onDateSelect: vue.unref(input_event),
        onClick: vue.unref(click_event),
        modelValue: vue.unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null)),
        class: "w-100"
      }, null, 8 /* PROPS */, ["disabled", "inline", "selectionMode", "dateFormat", "showTime", "placeholder", "onYearChange", "onDateSelect", "onClick", "modelValue"]), [
        [_directive_tooltip, vue.unref(config).tooltip]
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
  const _component_FileUpload = vue.resolveComponent("FileUpload");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(__props.params.class)
  }, [
    vue.createElementVNode("label", {
      for: __props.params.field,
      class: "form-label"
    }, vue.toDisplayString(__props.params.label), 9 /* TEXT, PROPS */, _hoisted_1$a),
    vue.createElementVNode("div", _hoisted_2$8, [
      vue.createVNode(_component_FileUpload, {
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
  const _component_Image = vue.resolveComponent("Image");

  return (vue.openBlock(), vue.createBlock(_component_Image, {
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



const field_options = vue.ref([]);

const { input_event, click_event, model, config } = useInputCommon( emit, VFJRadioBtnInputConf, props, { field_options:field_options });

return (_ctx, _cache) => {
  const _component_RadioButton = vue.resolveComponent("RadioButton");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: vue.unref(config).field,
      class: "form-label"
    }, vue.toDisplayString(vue.unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$9),
    vue.createElementVNode("div", _hoisted_2$7, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(field_options.value, (option) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          class: "field-radiobutton col-12",
          key: option
        }, [
          vue.createVNode(_component_RadioButton, {
            inputId: "{{config.field + option[config.option_id]}}",
            name: vue.unref(config).field,
            onChange: vue.unref(input_event),
            onClick: vue.unref(click_event),
            value: option[vue.unref(config).option_id],
            modelValue: vue.unref(model),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null))
          }, null, 8 /* PROPS */, ["name", "onChange", "onClick", "value", "modelValue"]),
          vue.createElementVNode("label", _hoisted_3$1, vue.toDisplayString(option[vue.unref(config).option_label]), 1 /* TEXT */)
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
  const _component_Slider = vue.resolveComponent("Slider");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: __props.params.field,
      class: "form-label"
    }, vue.toDisplayString(__props.params.label), 9 /* TEXT, PROPS */, _hoisted_1$8),
    vue.createElementVNode("div", _hoisted_2$6, [
      vue.createVNode(_component_Slider, {
        modelValue: vue.unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null)),
        range: vue.unref(config).range,
        onSlideend: vue.unref(input_event),
        step: vue.unref(config).step,
        min: vue.unref(config).min,
        max: vue.unref(config).max,
        class: "w-100",
        onClick: vue.unref(click_event)
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



const field_options = vue.ref();

const { input_event, click_event, model, config } = useInputCommon( emit, VFJSelectInputConf, props,{ field_options:field_options });


return (_ctx, _cache) => {
  const _component_Dropdown = vue.resolveComponent("Dropdown");
  const _directive_tooltip = vue.resolveDirective("tooltip");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: vue.unref(config).key,
      class: "form-label"
    }, vue.toDisplayString(vue.unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$7),
    vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_2$5, [
      vue.createVNode(_component_Dropdown, {
        modelValue: vue.unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null)),
        class: "w-100",
        options: field_options.value,
        optionLabel: vue.unref(config).option_label,
        optionValue: vue.unref(config).option_id,
        onChange: vue.unref(input_event),
        onClick: vue.unref(click_event)
      }, null, 8 /* PROPS */, ["modelValue", "options", "optionLabel", "optionValue", "onChange", "onClick"])
    ])), [
      [_directive_tooltip, vue.unref(config).tooltip]
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
  return (vue.openBlock(), vue.createElementBlock("div", {
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
  const _component_Textarea = vue.resolveComponent("Textarea");
  const _directive_tooltip = vue.resolveDirective("tooltip");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: vue.unref(config).key,
      class: "form-label"
    }, vue.toDisplayString(vue.unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$5),
    vue.createElementVNode("div", _hoisted_2$4, [
      vue.withDirectives(vue.createVNode(_component_Textarea, {
        class: "w-100",
        placeholder: vue.unref(config).placeholder,
        modelValue: vue.unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null)),
        rows: vue.unref(config).rows,
        cols: vue.unref(config).cols,
        disabled: vue.unref(config).disabled,
        onClick: vue.unref(click_event),
        onInput: vue.unref(input_event)
      }, null, 8 /* PROPS */, ["placeholder", "modelValue", "rows", "cols", "disabled", "onClick", "onInput"]), [
        [_directive_tooltip, vue.unref(config).tooltip]
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
  const _component_InputText = vue.resolveComponent("InputText");
  const _directive_tooltip = vue.resolveDirective("tooltip");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: vue.unref(config).key,
      class: "form-label"
    }, vue.toDisplayString(vue.unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$4),
    vue.createElementVNode("div", _hoisted_2$3, [
      vue.withDirectives(vue.createVNode(_component_InputText, {
        disabled: vue.unref(config).disabled,
        onInput: vue.unref(input_event),
        onClick: vue.unref(click_event),
        type: vue.unref(config).type,
        modelValue: vue.unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null)),
        class: "w-100"
      }, null, 8 /* PROPS */, ["disabled", "onInput", "onClick", "type", "modelValue"]), [
        [_directive_tooltip, vue.unref(config).tooltip]
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
  const _component_InputNumber = vue.resolveComponent("InputNumber");
  const _directive_tooltip = vue.resolveDirective("tooltip");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(vue.unref(config).class)
  }, [
    vue.createElementVNode("label", {
      for: vue.unref(config).key,
      class: "form-label"
    }, vue.toDisplayString(vue.unref(config).label), 9 /* TEXT, PROPS */, _hoisted_1$3),
    vue.createElementVNode("div", _hoisted_2$2, [
      vue.withDirectives(vue.createVNode(_component_InputNumber, {
        disabled: vue.unref(config).disabled,
        min: vue.unref(config).min,
        max: vue.unref(config).max,
        step: vue.unref(config).step,
        format: vue.unref(config).format,
        minFractionDigits: vue.unref(config).minFractionDigits,
        maxFractionDigits: vue.unref(config).maxFractionDigits,
        currency: vue.unref(config).currency,
        mode: vue.unref(config).mode,
        suffix: vue.unref(config).suffix,
        prefix: vue.unref(config).prefix,
        showButtons: vue.unref(config).showButtons,
        placeholder: vue.unref(config).placeholder,
        onInput: vue.unref(input_event),
        onClick: vue.unref(click_event),
        type: vue.unref(config).type,
        modelValue: vue.unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (vue.isRef(model) ? (model).value = $event : null)),
        class: "w-100"
      }, null, 8 /* PROPS */, ["disabled", "min", "max", "step", "format", "minFractionDigits", "maxFractionDigits", "currency", "mode", "suffix", "prefix", "showButtons", "placeholder", "onInput", "onClick", "type", "modelValue"]), [
        [_directive_tooltip, vue.unref(config).tooltip]
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



const model = vue.ref(props.modelValue);


const page  = vue.ref(0);

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

vue.onMounted(async ()=>{
});

return (_ctx, _cache) => {
  const _component_HTMLTag = vue.resolveComponent("HTMLTag");
  const _component_TabPanel = vue.resolveComponent("TabPanel");
  const _component_TabView = vue.resolveComponent("TabView");

  return (vue.openBlock(), vue.createBlock(_component_TabView, { activeIndex: page.value }, {
    default: vue.withCtx(() => [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.params, (section) => {
        return (vue.openBlock(), vue.createBlock(_component_TabPanel, {
          key: section,
          header: section.header
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(section.content, (row_data) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                class: vue.normalizeClass(row_data.class)
              }, [
                (vue.openBlock(), vue.createBlock(_component_HTMLTag, {
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




const model = vue.ref( props.modelValue );

function update_model( evnt ){
    emit('update:modelValue', evnt);
}

function click( evnt ){
    emit('click', evnt);
}

vue.onMounted(async ()=>{
});

return (_ctx, _cache) => {
  const _component_HTMLTag = vue.resolveComponent("HTMLTag");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
    vue.createElementVNode("div", _hoisted_2$1, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.params.content, (row_data) => {
        return (vue.openBlock(), vue.createBlock(_component_HTMLTag, {
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

const model = vue.ref(props.modelValue);



const _remove_btn_cfg = vue.ref(props.params.btn_delete);

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
  const _component_HTMLTag = vue.resolveComponent("HTMLTag");
  const _component_VFJButtonInput = vue.resolveComponent("VFJButtonInput");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.createElementVNode("div", _hoisted_3, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(loop_data(), (row_data) => {
          return (vue.openBlock(), vue.createBlock(_component_HTMLTag, {
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
    vue.createElementVNode("div", _hoisted_4, [
      vue.createVNode(_component_VFJButtonInput, {
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



const model      = vue.ref( props.modelValue );
const model_rows = vue.ref(new FormStorage());
const model_aux  = vue.ref(new FormStorage());



const u_id = vue.ref(0);
const conf = vue.ref(new VFJLoopFieldGroupConf(props.params));
const cfg_new_btn = vue.ref(conf.value.btn_create);
const list_data = vue.ref([]);

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

vue.onMounted(async ()=>{
    model_aux.value.field_options  = model.value.field_options;
    model_aux.value.initial_values = model.value.initial_values;
});

return (_ctx, _cache) => {
  const _component_VFJButtonInput = vue.resolveComponent("VFJButtonInput");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(["row", __props.class])
    }, [
      vue.createElementVNode("div", _hoisted_1, [
        vue.createVNode(_component_VFJButtonInput, {
          onClick: click_add,
          params: cfg_new_btn.value
        }, null, 8 /* PROPS */, ["params"])
      ])
    ], 2 /* CLASS */),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(list_data.value, (reg_data) => {
      return (vue.openBlock(), vue.createBlock(script$3, {
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
    general_data = new FormConfigGeneralData()
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





const model = vue.ref(new FormStorage());

const formConfig  = vue.ref(new FormConfig());
const formStorage = vue.ref(new FormStorage());

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

vue.onMounted(async ()=>{
    formConfig.value = props.form_definition;
    model.value.data_form      = props.modelValue ? props.modelValue : {}; 
    model.value.field_options  = formConfig.value.general_data.field_options;
    model.value.initial_values = formConfig.value.general_data.initial_values;
});

return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(COMPONENTS_REFS)[ formConfig.value.sections.component ]), {
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




const model = vue.ref( props.modelValue );

function update_model( evnt ){
    emit('update:modelValue', evnt);
}

function click( evnt ){
    emit('click', evnt);
}

vue.onMounted(async ()=>{
});

return (_ctx, _cache) => {
  return (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.row_data.content, (col_data) => {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(COMPONENTS_REFS)[ col_data.component ]), {
      key: col_data,
      class: vue.normalizeClass(col_data.class),
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
        Vue.use(PrimeVue__default["default"]);

        Vue.directive('tooltip', Tooltip__default["default"]);
        
        Vue.component("InputText", InputText__default["default"]);
        Vue.component("RadioButton", RadioButton__default["default"]);
        Vue.component("Checkbox", Checkbox__default["default"]);
        Vue.component("Dropdown", Dropdown__default["default"]);
        Vue.component("Textarea", Textarea__default["default"]);
        Vue.component("Calendar", Calendar__default["default"]);
        Vue.component("Button", Button__default["default"]);
        Vue.component("Image", Image__default["default"]);
        Vue.component("ColorPicker", ColorPicker__default["default"]);
        Vue.component("Slider", Slider__default["default"]);
        Vue.component("FileUpload", FileUpload__default["default"]);
        Vue.component("InputNumber", InputNumber__default["default"]);
        
        Vue.component("TabView", TabView__default["default"]);
        Vue.component("TabPanel", TabPanel__default["default"]);

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

exports.VueClienteFormDinamico = VueClienteFormDinamico;
