<template>
    <div :class="config.class">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <InputNumber 
                v-tooltip="config.tooltip"
                :disabled="config.disabled" :min="config.min" :max="config.max" :step="config.step" :format="config.format"
                :minFractionDigits="config.minFractionDigits" :maxFractionDigits="config.maxFractionDigits"
                :currency="config.currency" :mode="config.mode" :suffix="config.suffix" :prefix="config.prefix"
                :showButtons="config.showButtons" :placeholder="config.placeholder"
                @input="input_event" @click="click_event"
                :type="config.type"  v-model="model" class="w-100" />
        </div>        
    </div>
</template>

<script setup>
import { VFJNumberConf } from './VFJNumberConf'
import { useInputCommon } from '../VFJInputComposable'

const emit  = defineEmits(['update:modelValue', 'click'])
const props = defineProps(['params', 'modelValue' ])

const { input_event, click_event, model, config } = useInputCommon( emit, VFJNumberConf, props )
</script>