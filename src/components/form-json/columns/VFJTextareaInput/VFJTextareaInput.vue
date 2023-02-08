<template>
    <div class="mb-3">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <Textarea 
                class="w-100"    v-tooltip="config.tooltip"
                v-model="model" :rows="config.rows" :cols="config.cols" :disabled="config.disabled" 
                @click="click_event" @input="input_event"  />
        </div>        
    </div>

</template>

<script setup>
import { VFJTextareaInputConf } from './VFJTextareaInputConf'
import { ref } from 'vue'
import { useInputCommon } from '../VFJInputComposable'

const emit  = defineEmits(['update:modelValue'])
const props = defineProps(['params', 'modelValue', 'click'])

const config = ref(new VFJTextareaInputConf(props.params))

const { input_event, click_event, model } = useInputCommon( emit, config, props )
</script>