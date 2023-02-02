<template>
    <div class="mb-3">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <Textarea 
                class="w-100"    v-tooltip="config.tooltip"
                v-model="model" :rows="config.rows" :cols="config.cols" @input="input_event" :disabled="config.disabled" />
        </div>        
    </div>

</template>

<script setup>
import { VFJTextareaInputConf } from './VFJTextareaInputConf'
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel'])

const config = ref(new VFJTextareaInputConf(props.params))
const model = ref()

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: config.value, data: model.value })
}

onMounted(async ()=>{
    props.data_channel.getData('field_value', async (data) => {
        if (data != undefined)
            model.value = data
    }, config.value.field)
})
</script>