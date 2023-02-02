<template>
    <div class="mb-3">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <InputText 
                v-tooltip="config.tooltip"
                :disabled="config.disabled" @input="input_event"
                :type="config.type"  v-model="model" class="w-100" />
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJTextInputConf } from './VFJTextInputConf'

const props = defineProps(['params', 'data_channel'])

const config = ref(new VFJTextInputConf(props.params))
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