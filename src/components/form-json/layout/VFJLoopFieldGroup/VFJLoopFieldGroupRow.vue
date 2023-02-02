<template>

<div class="row component-group">
    <div class="col">
        <FormRow 
            v-for="(row_data) in loop_data()"
            :row_data="row_data" :data_channel="data_channel" :key="row_data" />
    </div>
    <div class="col-auto">
        <VFJButtonInput :data_channel="data_channel" :params="getCfg_remove_btn( reg_data )" />
    </div>
</div>

</template>

<script setup>
const props = defineProps(['params', 'reg_data', 'data_channel'])

function loop_data() {
    let params = props.params 
    let field  = params.runtime_data_field
    let arr    = params.html_def

    props.data_channel.getData('initial_values', async (init_values) => {
        for (let i=0; i < arr.length; i++){
            for (let j=0; j < arr[i].content.length; j++){
                let c_params = arr[i].content[j].params
                if (c_params['dfield'] != undefined) {
                    c_params['field'] = field + '|' + props.reg_data._i + '|' + c_params.dfield
                    c_params['value'] = init_values[ params.initial_values_id ][ c_params['dfield'] ]
                    props.data_channel.streaming('_user_input_data', { config: c_params, data: c_params['value'] })
                }
            }
        }
    })
    return arr
}

function getCfg_remove_btn( reg_data ){
    return {
        action: 'list_remove_data',
        runtime_data_field:  props.params.runtime_data_field,
        icon:  props.params.btn_delete.icon, class:  props.params.btn_delete.class,
        reg_data: {...reg_data}, sub_fields: props.params.html_def, label:  props.params.btn_delete.label,
    }
}
</script>