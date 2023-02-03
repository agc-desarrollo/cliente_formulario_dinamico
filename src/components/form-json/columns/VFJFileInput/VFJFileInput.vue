<template>
    <div class="mb-3">
        <label :for="params.field" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <FileUpload name="demo[]" :customUpload="true" @uploader="input_event"  />
        </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue'])

function input_event( evnt ){
    emit('update:modelValue', { config: config.value, data: model.value })
}
</script>