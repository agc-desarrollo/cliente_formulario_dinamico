<template>
    <component 
        :is="COMPONENTS_REFS[ formConfig.sections.component ]" 
        :params="formConfig.sections.content"
        @click="click" v-model="model" @update:modelValue="update_model"></component>    
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { COMPONENTS_REFS } from './components'

import { FormConfig } from './FormConfig'
import { FormStorage } from './FormStorage'

const props = defineProps(['form_definition', 'modelValue'])

const emit = defineEmits(['update:modelValue', 'submit', 'input'])

const model = ref(props.modelValue)

const formConfig  = ref(new FormConfig())
const formStorage = ref(new FormStorage())

const BTN_ACTION_INDEX = {
    'submit' : submit_form
}

async function submit_form(){
    emit('submit', formStorage.value.data_form)
}

function update_model( evnt ){
    formStorage.value.update( evnt )
    emit('update:modelValue', formStorage.value)
    emit('input', evnt)
}

async function click( evnt ){
    //emit( 'click', evnt.data )

    if (evnt.config != undefined && BTN_ACTION_INDEX[ evnt.config.action ] != undefined) 
        await BTN_ACTION_INDEX[ evnt.config.action ]( evnt )
}

onMounted(async ()=>{
    formConfig.value           = props.form_definition
    formStorage.value.data_form = props.modelValue.data_form
    model.value.data_form = props.modelValue.data_form
    model.value.field_options  = formConfig.value.gral.field_options
    model.value.initial_values = formConfig.value.gral.initial_values
})
</script>