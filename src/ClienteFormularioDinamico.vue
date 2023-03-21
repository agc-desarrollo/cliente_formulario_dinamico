<template>
  
  <SignUp v-if="step == 0" :config="config" @hasSession="hasSession"/>

  <FormularioJSON v-if="step == 1 && form_def !== null"
                    :form_definition="form_def" v-model="form_storage" @update:modelValue="update_model"
                    @submit="submitForm" @input="inputRepeat" @blur="blurRepeat" @click="clickRepeat"/>

  <FormNotFound v-if="step == 1 &&  form_def == null" />
</template>

<script setup>
import { ref } from 'vue'
import { getForm, putClientData, actionSubmit } from './api/form'
import { FormStorage } from './components/form-json/FormStorage'
import  SignUp        from './components/SignUp.vue'
import  FormNotFound  from './components/FormNotFound.vue'

const props = defineProps(['config', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'input', 'submit', 'click', 'blur' ])

const form_storage = ref( new FormStorage() )
const form_def  = ref( null )

const step = ref(0)

const INPUT_INTERVAL = 1500
const last_sync_r = ref(0)
const on_interval = ref(false)

//REENVIO EVENTOS
function update_model( evnt ){ syncData(evnt); emit( 'update:modelValue', evnt ) }
function inputRepeat( event ){  emit('input', event) }
function clickRepeat( event ){ emit('click' ,event) }
function blurRepeat( event ){ emit('blur' ,event) }

async function submitForm( evnt ){
  let res = await actionSubmit(props.config.api)
  if (res.stat){
    emit('submit' ,evnt)
  } else {
    console.log('error, submit', res)
  }
}


async function hasSession(){
  await callGetForm()
}

async function syncData( evnt ){
  let ahora = new Date().getTime()

  if ((ahora - last_sync_r.value) > INPUT_INTERVAL ){
    last_sync_r.value = ahora

    let res = await putClientData(props.config.api, evnt.data_form )
    if (res) {
      console.log('putClientData', res )
    }

  } else {
    if (!on_interval.value) {
      on_interval.value = true
      setTimeout(async () => {
        last_sync_r.value = ahora

        let res = await putClientData(props.config.api, evnt.data_form )
        if (res) {
          console.log('putClientData', res )
        }

      }, INPUT_INTERVAL)
    }
  }
}

async function callGetForm(){
  let res = await getForm(props.config.api, props.config.id)
  if (res.stat) {
    form_def.value = res.definition
    form_storage.value.data_form = res.form_data
    step.value = 1
  }
}

</script>
