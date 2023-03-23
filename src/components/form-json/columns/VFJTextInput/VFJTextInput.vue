<template>
    <div :class="config.class"> 
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <InputText 
                class="form-control w-100" :class="{ 'is-invalid': is_invalid() }"
                v-tooltip="config.tooltip" :disabled="config.disabled"
                @input="input_event" @click="click_event" @blur="blur_event"
                :type="config.type"  v-model="model" />
        </div>   
        <div v-if="is_invalid()" class="invalid-feedback" :style="{display:'block'}">{{ validation_text() }}</div>      
    </div>
</template>

<script setup>
import { VFJTextInputConf } from './VFJTextInputConf'
import { useInputCommon } from '../VFJInputComposable'

const emit  = defineEmits(['update:modelValue', 'click', 'blur'])
const props = defineProps(['params', 'modelValue'])

const { input_event, click_event, blur_event, model, config, is_invalid, validation_text } = useInputCommon( emit, VFJTextInputConf, props )
</script>