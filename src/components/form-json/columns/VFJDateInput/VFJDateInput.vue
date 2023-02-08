<template>
    <div class="mb-3">
        <label :for="config.field" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <Calendar :disabled="config.disabled" :inline="config.inline" :selectionMode="config.selectionMode"
                    :dateFormat="config.dateFormat" :showTime="config.showTime"
                    v-tooltip="config.tooltip"
                    @year-change="input_event" @date-select="input_event" @click="click_event"
                    v-model="model" class="w-100" />
        </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { VFJDateInputConf } from './VFJDateInputConf'
import { useInputCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click'])

const config = ref(new VFJDateInputConf(props.params))

const { input_event, click_event, model } = useInputCommon( emit, config, props )
</script>