<template>
    <div :class="config.class">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <Textarea 
                class="form-control w-100" :class="{ 'is-invalid': is_invalid() }" v-tooltip="config.tooltip" :placeholder="config.placeholder"
                v-model="model" :rows="config.rows" :cols="config.cols" :disabled="config.disabled" 
                @click="click_event" @input="input_event" @blur="blur_event" />
        </div>    
        <div v-if="is_invalid()" class="invalid-feedback" :style="{display:'block'}">{{ validation_text() }}</div>    
    </div>

</template>

<script setup>
import { VFJTextareaInputConf } from './VFJTextareaInputConf'
import { useInputCommon } from '../VFJInputComposable'

const emit  = defineEmits(['update:modelValue', 'click', 'blur'])
const props = defineProps(['params', 'modelValue'])

const { input_event, click_event, blur_event, model, config, is_invalid, validation_text } = useInputCommon( emit, VFJTextareaInputConf, props )
</script>