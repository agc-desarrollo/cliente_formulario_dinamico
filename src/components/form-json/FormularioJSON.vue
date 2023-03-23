<template>
    <component 
        :is="COMPONENTS_REFS[ formConfig.sections.component ]" ref="section_comp_ref"
        :params="formConfig.sections.content"
        @click="click" @blur="blur"
        v-model="model" @update:modelValue="update_model"></component>    
</template>

<script setup>
import { ref, provide } from 'vue'
import { COMPONENTS_REFS } from './components'

import { FormConfig } from './FormConfig'
import { FormStorage, DataOrigin } from './FormStorage'

const props = defineProps(['form_definition', 'modelValue'])

const emit = defineEmits(['update:modelValue', 'submit', 'input', 'click', 'blur'])

const model = ref(props.modelValue)
const section_comp_ref = ref()

const formConfig  = ref(props.form_definition)
const formStorage = ref(new FormStorage(model.value))
const dataOrigins = new DataOrigin(props.form_definition.data_origin)
const validationRes = ref()

provide('dataOrigins', dataOrigins)
provide('validationRes', validationRes)
defineExpose({ refresh_validations })

const BTN_ACTION_INDEX = {
    'submit' : submit_form
}

async function submit_form(){
    emit('submit', formStorage.value.data_form)
}

function refresh_validations( validation_res ){
    validationRes.value = validation_res
}

function update_model( evnt ){
    formStorage.value.update( evnt )
    emit('update:modelValue', formStorage.value)
    emit('input', evnt)
}

async function click( evnt ){
    emit( 'click', evnt.data )
    
    if (evnt.config != undefined && BTN_ACTION_INDEX[ evnt.config.action ] != undefined) 
        await BTN_ACTION_INDEX[ evnt.config.action ]( evnt )
}

async function blur( evnt ){
    emit( 'blur', evnt.data )
}

</script>