<template>
    <div :class="config.class">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <InputText 
                v-tooltip="config.tooltip" :disabled="config.disabled"
                @input="input_event" @click="click_event"
                :type="config.type"  v-model="model" class="w-100" />
        </div>        
    </div>
</template>

<script setup>
import { VFJTextInputConf } from './VFJTextInputConf'
import { useInputCommon } from '../VFJInputComposable'

const emit  = defineEmits(['update:modelValue', 'click'])
const props = defineProps(['params', 'modelValue'])

const { input_event, click_event, model, config } = useInputCommon( emit, VFJTextInputConf, props )
</script>