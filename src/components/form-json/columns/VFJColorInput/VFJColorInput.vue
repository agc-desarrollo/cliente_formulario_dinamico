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

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue'])

const config = ref(new VFJColorInputConf(props.params))
const model = ref()

function input_event(){
    emit('update:modelValue', { config: config.value, data: model.value })
}

onMounted(async ()=>{
})
</script>