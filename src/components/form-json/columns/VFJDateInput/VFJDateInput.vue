<template>
    <div class="mb-3">
        <label :for="config.field" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <Calendar :disabled="config.disabled" :inline="config.inline" :selectionMode="config.selectionMode"
                    :dateFormat="config.dateFormat" :showTime="config.showTime"
                    v-tooltip="config.tooltip"
                    @year-change="input_event" @date-select="input_event" v-model="model" class="w-100" />
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJDateInputConf } from './VFJDateInputConf'

const props = defineProps(['params', 'data_channel'])

const config = ref(new VFJDateInputConf(props.params))
const model = ref()

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: config.value, data: model.value })
}

onMounted(async ()=>{
    props.data_channel.getData('field_value', async (data) => {
        if (data != undefined)
            model.value = data
        else if (config.value.value != null)
            model.value = config.value.value
    }, config.value.field)
})
</script>