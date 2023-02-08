<template>
    <div class="row">
        <div class="col">
            <VFJButtonInput   @click="click_add" :params="cfg_new_btn" />
        </div>
    </div>
    
    <VFJLoopFieldGroupRow v-for="(reg_data) in list_data" :key="reg_data"
           :reg_data="reg_data" :params="conf" 
            v-model="model_rows" @update:modelValue="update_model" 
            @remove="click_remove" @click="click_event" />
    
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJLoopFieldGroupConf } from './VFJLoopFieldGroupConf'
import VFJLoopFieldGroupRow from './VFJLoopFieldGroupRow.vue'
import { FormStorage } from '../../FormStorage'

const props = defineProps(['params', 'modelValue'])

const model      = ref( props.modelValue )
const model_rows = ref(new FormStorage())
const model_aux  = ref(new FormStorage())

const emit = defineEmits(['update:modelValue', 'click'])

const u_id = ref(0)
const conf = ref(new VFJLoopFieldGroupConf(props.params))
const cfg_new_btn = ref(conf.value.btn_create)
const list_data = ref([])

function update_model( evnt ){
    model_aux.value.update( evnt )
    sync_upd( { list : conf.value.runtime_data_field } )
}

function click_event( evnt ){
    emit('click', evnt)
    console.log(46543,evnt)
}

function click_add( evnt ){
    list_data.value.push({ _i: u_id.value })
    u_id.value ++
    sync_upd( evnt )
}

function click_remove(evnt){
    for (let i=0; i < list_data.value.length; i++){
        if (list_data.value[i]._i == evnt.id){
            model_aux.value.delete(evnt)
            list_data.value.splice(i,1)
            return true
        }
    }
    sync_upd( evnt )    
}

function sync_upd( evnt ){
    let l = evnt.list
    emit('update:modelValue', {
        'config': { field : l  },
        'data' : model_aux.value.data_form[ l ]
    })
}

onMounted(async ()=>{
    model_aux.value.field_options  = model.value.field_options
    model_aux.value.initial_values = model.value.initial_values
})
</script>