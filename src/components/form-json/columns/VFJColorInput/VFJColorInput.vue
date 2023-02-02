<template>
    <div class="mb-3">
        <label :for="config.field" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <ColorPicker 
                v-tooltip="config.tooltip"
                v-model="model" :inline="config.inline" @change="input_event"/>
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJColorInputConf } from './VFJColorInputConf'

const props = defineProps(['params', 'data_channel'])

const config = ref(new VFJColorInputConf(props.params))
const model = ref()

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: config.value, data: model.value })
}

onMounted(async ()=>{
    props.data_channel.getData('field_value', async (data) => {
        if (data != undefined)
            model.value = data
    }, props.params.field)
})
</script>