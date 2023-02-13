<template>
    <div :class="config.class">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <Textarea 
                class="w-100"    v-tooltip="config.tooltip" :placeholder="config.placeholder"
                v-model="model" :rows="config.rows" :cols="config.cols" :disabled="config.disabled" 
                @click="click_event" @input="input_event"  />
        </div>        
    </div>

</template>

<script setup>
import { VFJTextareaInputConf } from './VFJTextareaInputConf'
import { useInputCommon } from '../VFJInputComposable'

const emit  = defineEmits(['update:modelValue', 'click'])
const props = defineProps(['params', 'modelValue'])

const { input_event, click_event, model, config } = useInputCommon( emit, VFJTextareaInputConf, props )
</script>