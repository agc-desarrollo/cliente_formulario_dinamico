<template>
    <div class="mb-3">
        <label :for="params.field" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <Slider v-model="model" :range="params.range"  @slideend="input_event" :step="params.step" :min="params.min" :max="params.max" class="w-100"/>
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue'])

const model = ref(props.params.min)

function input_event(){
    emit('update:modelValue', { config: config.value, data: model.value })
}

onMounted(async ()=>{
})
</script>