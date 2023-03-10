<template>
    <FormularioJSON v-if="form_def !== null"
                    :form_definition="form_def" v-model="form_data" @update:modelValue="update_model"
                    @submit="submitRepeat" @input="inputRepeat" @click="clickRepeat"/>
    {{ form_data }}
  <div class="row"><!-- TODO: Agregar v-if-->
    Formulario inexistente
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getSession, getForm, putClientData } from './api/form'

const props = defineProps(['config', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'input', 'submit', 'click' ])

const form_data = ref( props.modelValue )
const form_def  = ref( null )

const session_res = ref( null )

//REENVIO EVENTOS
function update_model( evnt ){ syncData(evnt); emit( 'update:modelValue', evnt ) }
function inputRepeat( event ){  emit('input', event) }
function submitRepeat( event ){ emit('submit' ,event) }
function clickRepeat( event ){ emit('click' ,event) }

async function syncData( evnt ){
  //TODO: Aplicar debounce
  let res = await putClientData(props.config.api, evnt.data_form )
  if (res) {
    console.log('putClientData', res )
  }
}

async function callGetForm(){
  let res = await getForm(props.config.api, props.config.id)
  if (res.stat) {
    form_def.value = res.definition
  } else {
    alert(res.text)
  }
}

onMounted(async ()=>{
  let res = await getSession(props.config.api)

  if (res.stat) {
    await callGetForm()
  } else {
    alert(res.text)
  }
})
</script>
