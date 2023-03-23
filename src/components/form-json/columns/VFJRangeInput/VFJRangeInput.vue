<template>
    <div :class="config.class">
        <label :for="params.field" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <Slider v-model="model" :range="config.range"  @slideend="input_event" :step="config.step" :min="config.min" :max="config.max" 
                    class="form-control w-100" :class="{ 'is-invalid': is_invalid() }"
                    @click="click_event"  @blur="blur_event"/>
        </div>        
    </div>
</template>

<script setup>
import { VFJRangeInputConf } from './VFJRangeInputConf'
import { useInputCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click'])

const { input_event, click_event, blur_event, model, config, is_invalid } = useInputCommon( emit, VFJRangeInputConf, props )
</script>