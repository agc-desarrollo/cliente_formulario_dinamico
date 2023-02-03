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

const props = defineProps(['params', 'modelValue'])

const emit = defineEmits(['update:modelValue'])

const config = ref(new VFJDateInputConf(props.params))
const model = ref()

function input_event(){
    emit('update:modelValue', { config: config.value, data: model.value })
}

onMounted(async ()=>{
    
})
</script>