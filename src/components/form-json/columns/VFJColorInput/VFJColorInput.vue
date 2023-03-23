<template>
    <div :class="config.class">
        <label :for="config.field" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <ColorPicker 
                v-tooltip="config.tooltip"
                class="form-control w-100" :class="{ 'is-invalid': is_invalid() }"
                v-model="model" :inline="config.inline" 
                @change="input_event" @click="click_event" />
        </div>        
    </div>
</template>

<script setup>
import { VFJColorInputConf } from './VFJColorInputConf'
import { useInputCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click'])

const { input_event, click_event, model, config, is_invalid } = useInputCommon( emit, VFJColorInputConf, props )
</script>