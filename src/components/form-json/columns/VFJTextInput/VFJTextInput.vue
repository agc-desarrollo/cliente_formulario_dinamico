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

const props = defineProps(['params', 'modelValue'])

const emit = defineEmits(['update:modelValue'])

const config = ref(new VFJTextInputConf(props.params))
const model = ref()

function input_event(){
    emit('update:modelValue', { config: config.value, data: model.value })
}

onMounted(async ()=>{

})
</script>