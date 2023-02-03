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

const emit = defineEmits(['update:modelValue'])

const props = defineProps(['params', 'modelValue'])

const config = ref(new VFJTextareaInputConf(props.params))
const model = ref()

function input_event(){
    emit('update:modelValue', { config: config.value, data: model.value })
}

onMounted(async ()=>{
})
</script>