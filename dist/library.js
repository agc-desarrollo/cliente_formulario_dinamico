"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),o=require("primevue/inputtext"),t=require("primevue/dropdown"),l=require("primevue/textarea"),n=require("primevue/config"),a=require("primevue/radiobutton"),i=require("primevue/checkbox"),r=require("primevue/calendar"),s=require("primevue/button"),c=require("primevue/image"),u=require("primevue/colorpicker"),m=require("primevue/slider"),d=require("primevue/fileupload"),p=require("primevue/tooltip"),f=require("primevue/inputnumber"),_=require("primevue/tabview"),v=require("primevue/tabpanel");function V(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("primevue/resources/themes/nova/theme.css"),require("primevue/resources/primevue.min.css"),require("primeicons/primeicons.css");var k=V(o),b=V(t),g=V(l),h=V(n),C=V(a),B=V(i),F=V(r),I=V(s),x=V(c),T=V(u),y=V(m),E=V(d),w=V(p),N=V(f),j=V(_),D=V(v),J={__name:"ClienteFormularioDinamico",setup(o){const t=e.ref({name:"Juan Perez",categoria:4,radio_ej:2,checkbox_ej:[1,4]}),l=e.ref({general_data:{field_options:{opciones_select_categoria:[{id:1,text:"Categoria 1"},{id:2,text:"Categoria 2"},{id:3,text:"Categoria 3"},{id:4,text:"Categoria 4"}],opciones_radio_ej:[{id:1,text:"Radio 1"},{id:2,text:"Radio 2"},{id:3,text:"Radio 3"},{id:4,text:"Radio 4"}],opciones_checkbox_ej:[{id:1,text:"Checkbox 1"},{id:2,text:"Checkbox 2"},{id:3,text:"Checkbox 3"},{id:4,text:"Checkbox 4"}]},autocomplete_options:{ciudades:["Tandil","Mar del Plata","Ayacucho","Azul","Bolivar","Capital Federal"]},initial_values:{user_list_initial_values:{date:new Date,color:"#00FF00"}}},sections:{component:"V_TABS",section_def:[{header:"Parte 1",content:[{class:"justify-content-md-center row",content:[{component:"V_GROUP",class:"row",params:{id:"example_group_1",content:[{class:"justify-content-md-center row",content:[{class:"",component:"_IMAGE",params:{src:"https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg",alt:"Vue logo"}}]},{class:"justify-content-md-center row",content:[{class:"",component:"_TEXT",params:{html:"<h1>Titulo de formulario</h1>"}}]},{class:"justify-content-md-center row",content:[{class:"col",component:"I_TEXT",params:{field:"name",tooltip:"hello moto",label:"Campo de texto",type:"text"}},{class:"col",component:"I_TEXTAREA",params:{field:"descripcion",tooltip:"hola",label:"Campo Textarea"}},{class:"col",component:"I_SELECT",params:{field:"categoria_1",tooltip:"hola1",label:"Campo Select",field_options:"opciones_select_categoria",option_id:"id",option_label:"text"}}]},{class:"justify-content-md-center row",content:[{class:"",component:"I_RADIO",params:{field:"radio_ej",label:"Campo Radio Button",field_options:"opciones_radio_ej",option_id:"id",option_label:"text"}},{class:"",component:"I_CHECKBOX",params:{field:"checkbox_ej",label:"Campo Checkbox",field_options:"opciones_checkbox_ej",option_id:"id",option_label:"text"}}]}]}}]},{class:"justify-content-md-center row",content:[{class:"",component:"I_DATE",params:{field:"date",label:"Campo de fecha"}},{class:"",component:"I_BUTTON",params:{action:"test_action",tooltip:"hola",label:"Boton de prueba"}},{class:"",component:"I_COLOR",params:{field:"color",tooltip:"hola",label:"Campo de selección de color"}}]},{class:"justify-content-md-center row",content:[{class:"",component:"I_RANGE",params:{field:"rango",range:!1,min:0,step:1,max:200,label:"Campo de selección tipo Slider"}},{class:"",component:"I_FILE",params:{field:"file",label:"Campo de subida de archivos"}}]},{class:"justify-content-md-center row",content:[{class:"",component:"I_BUTTON",params:{action:"section_next",label:"Siguiente"}}]}]},{header:"Parte 2",content:[{class:"justify-content-md-center row",content:[{class:"",component:"_IMAGE",params:{src:"https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg",alt:"Vue logo"}}]},{class:"justify-content-md-center",content:[{class:"",component:"_TEXT",params:{html:"<h1>Titulo de formulario Parte 2</h1>"}}]},{class:"justify-content-md-center",content:[{class:"",component:"I_TEXT",params:{field:"name",label:"Campo de texto",type:"text"}},{class:"",component:"I_TEXTAREA",params:{field:"descripcion",label:"Campo Textarea"}},{class:"",component:"I_SELECT",params:{field:"categoria",label:"Campo Select",field_options:"opciones_select_categoria",option_id:"id",option_label:"text"}}]},{class:"justify-content-md-center row",content:[{class:"",component:"I_RADIO",params:{field:"radio_ej",label:"Campo Radio Button",field_options:"opciones_radio_ej",option_id:"id",option_label:"text"}},{class:"",component:"I_CHECKBOX",params:{field:"checkbox_ej",label:"Campo Checkbox",field_options:"opciones_checkbox_ej",option_id:"id",option_label:"text"}}]},{class:"justify-content-md-center",content:[{class:"",component:"I_DATE",params:{field:"date",label:"Campo de fecha"}},{class:"",component:"I_BUTTON",params:{action:"test_action",label:"Boton de prueba"}},{class:"",component:"I_COLOR",params:{field:"color",label:"Campo de selección de color"}}]},{class:"justify-content-md-center row",content:[{class:"",component:"I_RANGE",params:{field:"rango",min:0,step:1,max:200,label:"Campo de selección tipo Slider"}},{class:"",component:"I_FILE",params:{field:"file",label:"Campo de subida de archivos"}}]},{class:"justify-content-md-center row",content:[{class:"",component:"I_BUTTON",params:{action:"section_back",label:"Anterior"}},{class:"",component:"I_BUTTON",params:{action:"section_next",label:"Siguiente"}}]}]},{header:"Paso Final",content:[{class:"justify-content-md-center row",content:[{class:"",component:"V_LOOP",params:{runtime_data_field:"user_list",initial_values_id:"user_list_initial_values",content:[{class:"justify-content-md-center row",content:[{class:"",component:"I_DATE",params:{dfield:"date",label:"Campo de fecha"}},{class:"",component:"I_BUTTON",params:{dfield:"btn",action:"test_action",label:"Boton de prueba"}},{class:"",component:"I_COLOR",params:{dfield:"color",label:"Campo de selección de color"}}]}]}}]},{class:"justify-content-md-center row",content:[{class:"",component:"I_BUTTON",params:{action:"section_back",label:"Anterior"}},{class:"",component:"I_BUTTON",params:{action:"section_goTo",action_params:{id:0},label:"Inicio"}},{class:"",component:"I_BUTTON",params:{action:"submit",label:"Confirmar"}}]}]}]}});function n(e){console.log("input: ",e)}function a(e){console.log("submit: ",e)}function i(e){console.log("click: ",e)}return(o,r)=>{const s=e.resolveComponent("FormularioJSON");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createTextVNode(" Cliente Formulario Dinámico "),e.createVNode(s,{form_definition:l.value,modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),onSubmit:a,onInput:n,onClick:i},null,8,["form_definition","modelValue"]),e.createTextVNode(" "+e.toDisplayString(t.value),1)],64)}}};function O(o,t,l,n={}){const a=e.ref(),i=e.ref(new t(l.params));return e.onMounted((async()=>{if(null!=l.modelValue&&null!=i.value.field_options){let e=l.modelValue.field_options;n.field_options.value=e[i.value.field_options]}if(void 0!==l.modelValue&&void 0!==l.modelValue.getValue){let e=l.modelValue.getValue(i.value.field);null!=e&&(a.value=e)}else console.log(45645,l.modelValue)})),{input_event:function(){o("update:modelValue",{config:i.value,data:a.value})},click_event:function(e){o("click",{config:i.value,data:a.value,evnt:e})},model:a,config:i}}J.__file="src/ClienteFormularioDinamico.vue";class R{label="";class="col mb-3";disabled=!1;field="";dfield="";required=!1;autocomplete_options="";tooltip="";list=null;id=0;placeholder="";constructor(e){let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}class S extends R{icon="";iconPos="";data=!0;action="";constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}var L={__name:"VFJButtonInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,{click_event:n,model:a,config:i}=O(t,S,l);return(o,t)=>{const l=e.resolveComponent("Button"),a=e.resolveDirective("tooltip");return e.withDirectives((e.openBlock(),e.createBlock(l,{label:e.unref(i).label,class:e.normalizeClass(e.unref(i).class),icon:e.unref(i).icon,iconPos:e.unref(i).iconPos,onClick:e.unref(n)},null,8,["label","class","icon","iconPos","onClick"])),[[a,e.unref(i).tooltip]])}},__file:"src/components/form-json/columns/VFJButtonInput/VFJButtonInput.vue"};class U extends R{option_id="";option_label="";field_options="";constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const A=["for"],M={class:"input-group row"},q={for:"{{ config.field + option[config.option_id] }}"};var P={__name:"VFJCheckboxInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,n=e.ref([]),{input_event:a,click_event:i,model:r,config:s}=O(t,U,l,{field_options:n});return(o,t)=>{const l=e.resolveComponent("Checkbox");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(s).class)},[e.createElementVNode("label",{for:e.unref(s).field,class:"form-label"},e.toDisplayString(e.unref(s).label),9,A),e.createElementVNode("div",M,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.value,(o=>(e.openBlock(),e.createElementBlock("div",{class:"field-radiobutton col-12",key:o},[e.createVNode(l,{inputId:"{{config.field + option[config.option_id]}}",name:e.unref(s).field,onChange:e.unref(a),onClick:e.unref(i),value:o[e.unref(s).option_id],modelValue:e.unref(r),"onUpdate:modelValue":t[0]||(t[0]=o=>e.isRef(r)?r.value=o:null)},null,8,["name","onChange","onClick","value","modelValue"]),e.createElementVNode("label",q,e.toDisplayString(o[e.unref(s).option_label]),1)])))),128))])],2)}},__file:"src/components/form-json/columns/VFJCheckboxInput/VFJCheckboxInput.vue"};class z extends R{inline=!1;constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const G=["for"],X={class:"input-group"};var H={__name:"VFJColorInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,{input_event:n,click_event:a,model:i,config:r}=O(t,z,l);return(o,t)=>{const l=e.resolveComponent("ColorPicker"),s=e.resolveDirective("tooltip");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(r).class)},[e.createElementVNode("label",{for:e.unref(r).field,class:"form-label"},e.toDisplayString(e.unref(r).label),9,G),e.createElementVNode("div",X,[e.withDirectives(e.createVNode(l,{modelValue:e.unref(i),"onUpdate:modelValue":t[0]||(t[0]=o=>e.isRef(i)?i.value=o:null),inline:e.unref(r).inline,onChange:e.unref(n),onClick:e.unref(a)},null,8,["modelValue","inline","onChange","onClick"]),[[s,e.unref(r).tooltip]])])],2)}},__file:"src/components/form-json/columns/VFJColorInput/VFJColorInput.vue"};class K extends R{inline=!1;selectionMode="single";dateFormat="dd.mm.yy";showTime=!1;value=null;constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const Y=["for"],Q={class:"input-group"};var W={__name:"VFJDateInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,{input_event:n,click_event:a,model:i,config:r}=O(t,K,l);return(o,t)=>{const l=e.resolveComponent("Calendar"),s=e.resolveDirective("tooltip");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(r).class)},[e.createElementVNode("label",{for:e.unref(r).field,class:"form-label"},e.toDisplayString(e.unref(r).label),9,Y),e.createElementVNode("div",Q,[e.withDirectives(e.createVNode(l,{disabled:e.unref(r).disabled,inline:e.unref(r).inline,selectionMode:e.unref(r).selectionMode,dateFormat:e.unref(r).dateFormat,showTime:e.unref(r).showTime,placeholder:e.unref(r).placeholder,onYearChange:e.unref(n),onDateSelect:e.unref(n),onClick:e.unref(a),modelValue:e.unref(i),"onUpdate:modelValue":t[0]||(t[0]=o=>e.isRef(i)?i.value=o:null),class:"w-100"},null,8,["disabled","inline","selectionMode","dateFormat","showTime","placeholder","onYearChange","onDateSelect","onClick","modelValue"]),[[s,e.unref(r).tooltip]])])],2)}},__file:"src/components/form-json/columns/VFJDateInput/VFJDateInput.vue"};const Z=["for"],$={class:"input-group"};var ee={__name:"VFJFileInput",props:["params","modelValue"],emits:["update:modelValue"],setup(o,{emit:t}){function l(e){t("update:modelValue",{config:config.value,data:model.value})}return(t,n)=>{const a=e.resolveComponent("FileUpload");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(o.params.class)},[e.createElementVNode("label",{for:o.params.field,class:"form-label"},e.toDisplayString(o.params.label),9,Z),e.createElementVNode("div",$,[e.createVNode(a,{name:"demo[]",customUpload:!0,onUploader:l})])],2)}},__file:"src/components/form-json/columns/VFJFileInput/VFJFileInput.vue"},oe={__name:"VFJImage",props:["params"],setup:o=>(t,l)=>{const n=e.resolveComponent("Image");return e.openBlock(),e.createBlock(n,{src:o.params.src,alt:o.params.alt},null,8,["src","alt"])},__file:"src/components/form-json/columns/VFJImage/VFJImage.vue"};class te extends R{option_id="";option_label="";field_options="";constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const le=["for"],ne={class:"input-group row"},ae={for:"{{ config.field + option[config.option_id] }}"};var ie={__name:"VFJRadioBtnInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,n=e.ref([]),{input_event:a,click_event:i,model:r,config:s}=O(t,te,l,{field_options:n});return(o,t)=>{const l=e.resolveComponent("RadioButton");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(s).class)},[e.createElementVNode("label",{for:e.unref(s).field,class:"form-label"},e.toDisplayString(e.unref(s).label),9,le),e.createElementVNode("div",ne,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.value,(o=>(e.openBlock(),e.createElementBlock("div",{class:"field-radiobutton col-12",key:o},[e.createVNode(l,{inputId:"{{config.field + option[config.option_id]}}",name:e.unref(s).field,onChange:e.unref(a),onClick:e.unref(i),value:o[e.unref(s).option_id],modelValue:e.unref(r),"onUpdate:modelValue":t[0]||(t[0]=o=>e.isRef(r)?r.value=o:null)},null,8,["name","onChange","onClick","value","modelValue"]),e.createElementVNode("label",ae,e.toDisplayString(o[e.unref(s).option_label]),1)])))),128))])],2)}},__file:"src/components/form-json/columns/VFJRadioBtnInput/VFJRadioBtnInput.vue"};class re extends R{step=1;min=0;max=100;range=!1;constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const se=["for"],ce={class:"input-group"};var ue={__name:"VFJRangeInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,{input_event:n,click_event:a,model:i,config:r}=O(t,re,l);return(t,l)=>{const s=e.resolveComponent("Slider");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(r).class)},[e.createElementVNode("label",{for:o.params.field,class:"form-label"},e.toDisplayString(o.params.label),9,se),e.createElementVNode("div",ce,[e.createVNode(s,{modelValue:e.unref(i),"onUpdate:modelValue":l[0]||(l[0]=o=>e.isRef(i)?i.value=o:null),range:e.unref(r).range,onSlideend:e.unref(n),step:e.unref(r).step,min:e.unref(r).min,max:e.unref(r).max,class:"w-100",onClick:e.unref(a)},null,8,["modelValue","range","onSlideend","step","min","max","onClick"])])],2)}},__file:"src/components/form-json/columns/VFJRangeInput/VFJRangeInput.vue"};class me extends R{option_id="";option_label="";field_options="";constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const de=["for"],pe={class:"input-group"};var fe={__name:"VFJSelectInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,n=e.ref(),{input_event:a,click_event:i,model:r,config:s}=O(t,me,l,{field_options:n});return(o,t)=>{const l=e.resolveComponent("Dropdown"),c=e.resolveDirective("tooltip");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(s).class)},[e.createElementVNode("label",{for:e.unref(s).key,class:"form-label"},e.toDisplayString(e.unref(s).label),9,de),e.withDirectives((e.openBlock(),e.createElementBlock("div",pe,[e.createVNode(l,{modelValue:e.unref(r),"onUpdate:modelValue":t[0]||(t[0]=o=>e.isRef(r)?r.value=o:null),class:"w-100",options:n.value,optionLabel:e.unref(s).option_label,optionValue:e.unref(s).option_id,onChange:e.unref(a),onClick:e.unref(i)},null,8,["modelValue","options","optionLabel","optionValue","onChange","onClick"])])),[[c,e.unref(s).tooltip]])],2)}},__file:"src/components/form-json/columns/VFJSelectInput/VFJSelectInput.vue"};const _e=["innerHTML","styles"];var ve={__name:"VFJText",props:["params"],setup:o=>(t,l)=>(e.openBlock(),e.createElementBlock("div",{innerHTML:o.params.html,styles:o.params.styles},null,8,_e)),__file:"src/components/form-json/columns/VFJText/VFJText.vue"};class Ve extends R{rows=5;cols=30;constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const ke=["for"],be={class:"input-group"};var ge={__name:"VFJTextareaInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,{input_event:n,click_event:a,model:i,config:r}=O(t,Ve,l);return(o,t)=>{const l=e.resolveComponent("Textarea"),s=e.resolveDirective("tooltip");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(r).class)},[e.createElementVNode("label",{for:e.unref(r).key,class:"form-label"},e.toDisplayString(e.unref(r).label),9,ke),e.createElementVNode("div",be,[e.withDirectives(e.createVNode(l,{class:"w-100",placeholder:e.unref(r).placeholder,modelValue:e.unref(i),"onUpdate:modelValue":t[0]||(t[0]=o=>e.isRef(i)?i.value=o:null),rows:e.unref(r).rows,cols:e.unref(r).cols,disabled:e.unref(r).disabled,onClick:e.unref(a),onInput:e.unref(n)},null,8,["placeholder","modelValue","rows","cols","disabled","onClick","onInput"]),[[s,e.unref(r).tooltip]])])],2)}},__file:"src/components/form-json/columns/VFJTextareaInput/VFJTextareaInput.vue"};class he extends R{type="text";constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const Ce=["for"],Be={class:"input-group"};var Fe={__name:"VFJTextInput",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,{input_event:n,click_event:a,model:i,config:r}=O(t,he,l);return(o,t)=>{const l=e.resolveComponent("InputText"),s=e.resolveDirective("tooltip");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(r).class)},[e.createElementVNode("label",{for:e.unref(r).key,class:"form-label"},e.toDisplayString(e.unref(r).label),9,Ce),e.createElementVNode("div",Be,[e.withDirectives(e.createVNode(l,{disabled:e.unref(r).disabled,onInput:e.unref(n),onClick:e.unref(a),type:e.unref(r).type,modelValue:e.unref(i),"onUpdate:modelValue":t[0]||(t[0]=o=>e.isRef(i)?i.value=o:null),class:"w-100"},null,8,["disabled","onInput","onClick","type","modelValue"]),[[s,e.unref(r).tooltip]])])],2)}},__file:"src/components/form-json/columns/VFJTextInput/VFJTextInput.vue"};class Ie extends R{min=null;max=null;mode="decimal";minFractionDigits=null;maxFractionDigits=null;locale="es-AR";currency="USD";suffix="";prefix="";step=1;format=!0;showButtons=!0;constructor(e){super(e);let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const xe=["for"],Te={class:"input-group"};var ye={__name:"VFJNumber",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,{input_event:n,click_event:a,model:i,config:r}=O(t,Ie,l);return(o,t)=>{const l=e.resolveComponent("InputNumber"),s=e.resolveDirective("tooltip");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(r).class)},[e.createElementVNode("label",{for:e.unref(r).key,class:"form-label"},e.toDisplayString(e.unref(r).label),9,xe),e.createElementVNode("div",Te,[e.withDirectives(e.createVNode(l,{disabled:e.unref(r).disabled,min:e.unref(r).min,max:e.unref(r).max,step:e.unref(r).step,format:e.unref(r).format,minFractionDigits:e.unref(r).minFractionDigits,maxFractionDigits:e.unref(r).maxFractionDigits,currency:e.unref(r).currency,mode:e.unref(r).mode,suffix:e.unref(r).suffix,prefix:e.unref(r).prefix,showButtons:e.unref(r).showButtons,placeholder:e.unref(r).placeholder,onInput:e.unref(n),onClick:e.unref(a),type:e.unref(r).type,modelValue:e.unref(i),"onUpdate:modelValue":t[0]||(t[0]=o=>e.isRef(i)?i.value=o:null),class:"w-100"},null,8,["disabled","min","max","step","format","minFractionDigits","maxFractionDigits","currency","mode","suffix","prefix","showButtons","placeholder","onInput","onClick","type","modelValue"]),[[s,e.unref(r).tooltip]])])],2)}},__file:"src/components/form-json/columns/VFJNumber/VFJNumber.vue"},Ee={__name:"VFJTabsSection",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,n=e.ref(l.modelValue),a=e.ref(0);function i(e){t("update:modelValue",e)}function r(e){t("click",e),null!=e.config?.action&&null!=s[e.config.action]&&s[e.config.action](e)}const s={section_next:function(){a.value+1<l.params.length&&a.value++},section_back:function(){a.value-1>=0&&a.value--},section_goTo:function(e){a.value=e.config.action_params.id}};return e.onMounted((async()=>{})),(t,l)=>{const s=e.resolveComponent("HTMLTag"),c=e.resolveComponent("TabPanel"),u=e.resolveComponent("TabView");return e.openBlock(),e.createBlock(u,{activeIndex:a.value},{default:e.withCtx((()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.params,(o=>(e.openBlock(),e.createBlock(c,{key:o,header:o.header},{default:e.withCtx((()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.content,(o=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(o.class)},[(e.openBlock(),e.createBlock(s,{row_data:o,key:o,modelValue:n.value,"onUpdate:modelValue":[l[0]||(l[0]=e=>n.value=e),i],onClick:r},null,8,["row_data","modelValue"]))],2)))),256))])),_:2},1032,["header"])))),128))])),_:1},8,["activeIndex"])}},__file:"src/components/form-json/layout/VFJTabsSection.vue"};const we={class:"component-group"},Ne={class:"row"};var je={__name:"VFJComponentGroup",props:["params","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,n=e.ref(l.modelValue);function a(e){t("update:modelValue",e)}function i(e){t("click",e)}return e.onMounted((async()=>{})),(t,l)=>{const r=e.resolveComponent("HTMLTag");return e.openBlock(),e.createElementBlock("div",we,[e.createElementVNode("div",Ne,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.params.content,(o=>(e.openBlock(),e.createBlock(r,{row_data:o,key:o,modelValue:n.value,"onUpdate:modelValue":[l[0]||(l[0]=e=>n.value=e),a],onClick:i},null,8,["row_data","modelValue"])))),128))])])}},__file:"src/components/form-json/layout/VFJComponentGroup.vue"};class De{runtime_data_field="";content="";btn_create={label:"Agregar",icon:"pi pi-plus",iconPos:"left"};btn_delete={label:"",icon:"pi pi-times",class:"p-button-raised p-button-rounded p-button-danger"};initial_values_id="";constructor(e){let o=Object.keys(e);for(let t=0;t<o.length;t++)void 0!==this[o[t]]&&(this[o[t]]=e[o[t]])}}const Je={class:"row"},Oe={class:"col"},Re={class:"row component-group"},Se={class:"col-auto"};var Le={__name:"VFJLoopFieldGroupRow",props:["params","reg_data","modelValue"],emits:["update:modelValue","click","remove"],setup(o,{emit:t}){const l=o,n=e.ref(l.modelValue),a=e.ref(l.params.btn_delete);function i(e){t("update:modelValue",e)}function r(e){t("click",e)}function s(){let e=l.params,o=e.runtime_data_field,t=e.content;for(let a=0;a<t.length;a++)for(let i=0;i<t[a].content.length;i++){let r=t[a].content[i].params;null!=r.dfield&&(r.field=r.dfield,r.list=o,r.id=l.reg_data._i,n.value[e.initial_values_id]&&(r.value=n.value[e.initial_values_id][r.dfield]))}return t}function c(e){t("remove",{id:l.reg_data._i,list:l.params.runtime_data_field})}return(o,t)=>{const l=e.resolveComponent("HTMLTag"),u=e.resolveComponent("VFJButtonInput");return e.openBlock(),e.createElementBlock("div",Je,[e.createElementVNode("div",Oe,[e.createElementVNode("div",Re,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s(),(o=>(e.openBlock(),e.createBlock(l,{row_data:o,key:o,modelValue:n.value,"onUpdate:modelValue":[t[0]||(t[0]=e=>n.value=e),i],onClick:r},null,8,["row_data","modelValue"])))),128))])]),e.createElementVNode("div",Se,[e.createVNode(u,{params:a.value,onClick:c},null,8,["params"])])])}},__file:"src/components/form-json/layout/VFJLoopFieldGroup/VFJLoopFieldGroupRow.vue"};class Ue{data_form={};field_options={};initial_values={};update(e){let o=e.config;if(console.log(987979,e),null!=o.list&&null!=o.list){null==this.data_form[o.list]&&(this.data_form[o.list]=[]),null==this.data_form[o.list][Number(o.id)]&&(this.data_form[o.list][Number(o.id)]={});let t=!0;for(let l=0;l<this.data_form[o.list].length;l++)if(this.data_form[o.list][l]?._i==Number(o.id)){this.data_form[o.list][l][o.field]=e.data,t=!1;break}t&&(this.data_form[o.list][Number(o.id)][o.field]=e.data,this.data_form[o.list][Number(o.id)]._i=Number(o.id));let l=[];for(let e=0;e<this.data_form[o.list].length;e++)null!=this.data_form[o.list][e]&&null!=this.data_form[o.list][e]&&l.push(this.data_form[o.list][e]);this.data_form[o.list]=l}else this.data_form[o.field]=e.data}delete(e){if(null==this.data_form[e.list])return!1;let o=[];for(let t=0;t<this.data_form[e.list].length;t++)this.data_form[e.list][t]._i!=e.id&&o.push(this.data_form[e.list][t]);return this.data_form[e.list]=o,!0}getValue(e){if(null!=this.data_form)return this.data_form[e]}deleteField(e){delete this.data_form[e]}}const Ae={class:"col"};var Me={__name:"VFJLoopFieldGroup",props:["params","modelValue","class"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,n=e.ref(l.modelValue),a=e.ref(new Ue),i=e.ref(new Ue),r=e.ref(0),s=e.ref(new De(l.params)),c=e.ref(s.value.btn_create),u=e.ref([]);function m(e){i.value.update(e),_({list:s.value.runtime_data_field})}function d(e){t("click",e)}function p(e){u.value.push({_i:r.value}),r.value++,_(e)}function f(e){for(let o=0;o<u.value.length;o++)if(u.value[o]._i==e.id){i.value.delete(e),u.value.splice(o,1);break}_(e)}function _(e){let o=e.list;t("update:modelValue",{config:{field:o},data:i.value.data_form[o]})}return e.onMounted((async()=>{i.value.field_options=n.value.field_options,i.value.initial_values=n.value.initial_values})),(t,l)=>{const n=e.resolveComponent("VFJButtonInput");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",{class:e.normalizeClass(["row",o.class])},[e.createElementVNode("div",Ae,[e.createVNode(n,{onClick:p,params:c.value},null,8,["params"])])],2),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,(o=>(e.openBlock(),e.createBlock(Le,{key:o,reg_data:o,params:s.value,modelValue:a.value,"onUpdate:modelValue":[l[0]||(l[0]=e=>a.value=e),m],onRemove:f,onClick:d},null,8,["reg_data","params","modelValue"])))),128))],64)}},__file:"src/components/form-json/layout/VFJLoopFieldGroup/VFJLoopFieldGroup.vue"};const qe={I_BUTTON:L,I_CHECKBOX:P,I_COLOR:H,I_DATE:W,I_FILE:ee,_IMAGE:oe,I_RADIO:ie,I_RANGE:ue,I_SELECT:fe,_TEXT:ve,I_TEXTAREA:ge,I_TEXT:Fe,I_NUMBER:ye,V_TABS:Ee,V_GROUP:je,V_LOOP:Me},Pe=0;class ze{status=Pe;title="untitled";captcha_public_key="";field_options={};submit_msg=""}class Ge{component="VFJTabsSection";section_def=[]}class Xe{general_data=new ze;sections=new Ge;runtime_data={};field_rels=[]}var He={__name:"FormularioJSON",props:["form_definition","modelValue"],emits:["update:modelValue","submit","input"],setup(o,{emit:t}){const l=o,n=e.ref(new Ue),a=e.ref(new Xe),i=e.ref(new Ue),r={submit:async function(){t("submit",i.value.data_form)}};function s(e){i.value.update(e),t("update:modelValue",i.value),t("input",e)}async function c(e){t("click",e.data),null!=e.config&&null!=r[e.config.action]&&await r[e.config.action](e)}return e.onMounted((async()=>{a.value=l.form_definition,n.value.data_form=l.modelValue?l.modelValue:{},n.value.field_options=a.value.general_data.field_options,n.value.initial_values=a.value.general_data.initial_values})),(o,t)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(qe)[a.value.sections.component]),{params:a.value.sections.section_def,onClick:c,modelValue:n.value,"onUpdate:modelValue":[t[0]||(t[0]=e=>n.value=e),s]},null,8,["params","modelValue"]))},__file:"src/components/form-json/FormularioJSON.vue"},Ke={__name:"HTMLTag",props:["row_data","modelValue"],emits:["update:modelValue","click"],setup(o,{emit:t}){const l=o,n=e.ref(l.modelValue);function a(e){t("update:modelValue",e)}function i(e){t("click",e)}return e.onMounted((async()=>{})),(t,l)=>(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.row_data.content,(o=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(qe)[o.component]),{key:o,class:e.normalizeClass(o.class),params:o.params,"onUpdate:modelValue":[a,l[0]||(l[0]=e=>n.value=e)],modelValue:n.value,onClick:i},null,8,["class","params","modelValue"])))),128))},__file:"src/components/form-json/layout/HTMLTag.vue"};const Ye={install(e,o){e.use(h.default),e.directive("tooltip",w.default),e.component("InputText",k.default),e.component("RadioButton",C.default),e.component("Checkbox",B.default),e.component("Dropdown",b.default),e.component("Textarea",g.default),e.component("Calendar",F.default),e.component("Button",I.default),e.component("Image",x.default),e.component("ColorPicker",T.default),e.component("Slider",y.default),e.component("FileUpload",E.default),e.component("InputNumber",N.default),e.component("TabView",j.default),e.component("TabPanel",D.default),e.component("VFJButtonInput",L),e.component("FormularioJSON",He),e.component("HTMLTag",Ke)}},Qe={install(e,o){e.use(Ye),e.component("ClienteFormularioDinamico",J)}};exports.VueClienteFormDinamico=Qe;
