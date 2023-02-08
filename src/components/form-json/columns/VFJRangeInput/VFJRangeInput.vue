<template>
    <div class="mb-3">
        <label :for="params.field" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <Slider v-model="model" :range="config.range"  @slideend="input_event" :step="config.step" :min="config.min" :max="config.max" class="w-100"
                    @click="click_event"/>
        </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { VFJRangeInputConf } from './VFJRangeInputConf'
import { useInputCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click'])

const config = ref(new VFJRangeInputConf(props.params))

const { input_event, click_event, model } = useInputCommon( emit, config, props )
</script>