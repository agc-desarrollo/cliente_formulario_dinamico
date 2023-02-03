<template>
    <component 
        :is="COMPONENTS_REFS[ formConfig.sections.component ]" :data_channel="subs_data_channel" :params="formConfig.sections.section_def"
        @click_event="click_event" v-model="prev_model" @update:modelValue="update_model"></component>    
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { SubscriptionChannel } from './helpers/SubscriptionChannel'
import { COMPONENTS_REFS } from './components'

import { FormConfig } from './FormConfig'
import { FormStorage } from './FormStorage'
import { FormService } from './services/FormService'

const props = defineProps(['form_definition', 'modelValue'])

const emit = defineEmits(['update:modelValue', 'submit', 'input'])

const prev_model = ref()

const formConfig = ref(new FormConfig())
const formStorage   = ref(new FormStorage())
const formService = ref(new FormService())

const subs_data_channel = ref(new SubscriptionChannel())

const BTN_ACTION_INDEX = {
    'submit' : submit_form,
    'list_add_new_data' : list_add_new_data,
    'list_remove_data' : list_remove_data
}

async function submit_form(){
    emit('submit', formStorage.value.data_form)
}

function update_model( evnt ){
    formStorage.value.update( evnt )
    emit('update:modelValue', formStorage.value)
}

async function click_event( evnt ){
    emit( 'click_event', evnt.data )

    if (BTN_ACTION_INDEX[ evnt.config.action ] != undefined) 
            await BTN_ACTION_INDEX[ evnt.config.action ]( evnt )
}

async function list_remove_data( event ){
    let field     = event.config.runtime_data_field
    let rd_data = formConfig.value.runtime_data[field]

    for (let i=0; i < rd_data.data.length; i++)
        if ( rd_data.data[i]._i ==  event.config.reg_data._i ){
            
            let sub_fields = event.config.sub_fields
            for (let i=0; i < sub_fields.length; i++){
                for (let j=0; j < sub_fields[i].content.length; j++){
                    let c_params = sub_fields[i].content[j].params
                    formStorage.value.deleteField( field + '|' + rd_data.data[i]._i  + '|' +c_params.dfield )
                }
            }

            rd_data.data.splice(i,1)
            
            subs_data_channel.value.streaming('runtime_list_data_updated', { field:field, rows: rd_data.data })
            return true
        }
}

async function list_add_new_data( event ){
    let field = event.config.runtime_data_field
    if (!formConfig.value.runtime_data)
        formConfig.value.runtime_data = {}
    if (!formConfig.value.runtime_data[field])
        formConfig.value.runtime_data[field] = { u_id:0, data: [] }

    let rd_data = formConfig.value.runtime_data[field]
    rd_data.u_id ++
    rd_data.data.push({ _i: rd_data.u_id })
    
    subs_data_channel.value.streaming('runtime_list_data_updated', { field:field, rows: rd_data.data })
}

onMounted(async ()=>{
    formConfig.value = props.form_definition

    subs_data_channel.value.setGetter('field_options', async ()=>{ return formConfig.value.general_data.field_options } )
    subs_data_channel.value.setGetter('initial_values', async ()=>{ return formConfig.value.general_data.initial_values } )
    subs_data_channel.value.setGetter('field_value', async ( id )=>{  return formStorage.value.getValue(id) } )
})
</script>