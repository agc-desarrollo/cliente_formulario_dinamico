<template>

<div class="row">
    <div class="col">
        <div class="row component-group">
            <HTMLTag 
                v-for="(row_data) in loop_data()"
                :row_data="row_data" :key="row_data" 
                v-model="model" @update:modelValue="update_model" 
                @click="click" />
        </div>
    </div>
    <div class="col-auto">
        <VFJButtonInput :params="_remove_btn_cfg" @click="click_delete" />
    </div>
</div>

</template>

<script setup>
import { ref } from 'vue'
const model = ref(props.modelValue)
const props = defineProps(['params', 'reg_data', 'modelValue'])
const emit = defineEmits(['update:modelValue', 'click', 'remove'])

const _remove_btn_cfg = ref(props.params.btn_delete)

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click( evnt ){
    emit('click', evnt)
}

function loop_data() {
    let params = props.params 
    let field  = params.runtime_data_field
    let arr    = params.content

    for (let i=0; i < arr.length; i++){
        for (let j=0; j < arr[i].content.length; j++){
            let c_params = arr[i].content[j].params
            if (c_params['dfield'] != undefined) {
                c_params['field'] = c_params.dfield
                c_params['list']  = field
                c_params['id']    = props.reg_data._i
                if (model.value[ params.initial_values_id ])
                    c_params['value'] = model.value[ params.initial_values_id ][ c_params['dfield'] ]
            }
        }
    }
    
    return arr
}


function click_delete( evnt ){
    emit('remove', { id: props.reg_data._i, list: props.params.runtime_data_field })
}

</script>