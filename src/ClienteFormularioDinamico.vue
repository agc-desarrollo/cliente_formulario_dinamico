<template>
    Cliente Formulario Dinámico

    <FormularioJSON v-if="form_def !== null"
                    :form_definition="form_def" v-model="form_data" @update:modelValue="update_model"
                    @submit="submitRepeat" @input="inputRepeat" @click="clickRepeat"/>
    {{ form_data }}

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getSession, getForm } from './api/form'

const props = defineProps(['config', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'input', 'submit', 'click' ])

const form_data = ref( props.modelValue )
const form_def  = ref( null )

const session_res = ref( null )

//REENVIO EVENTOS
function update_model( evnt ){  emit( 'update:modelValue', evnt ) }
function inputRepeat( event ){ emit('input', event) }
function submitRepeat( event ){ emit('submit' ,event) }
function clickRepeat( event ){ emit('click' ,event) }


async function callGetForm(){
  let res = await getForm(props.config?.api, 1)
  if (res.stat) {
    form_def.value = res.definition
  } else {
    alert(res.text)
  }
}

onMounted(async ()=>{
  let res = await getSession(props.config?.api)

  if (res.stat) {
    await callGetForm()
  } else {
    alert(res.text)
  }
})
</script>
