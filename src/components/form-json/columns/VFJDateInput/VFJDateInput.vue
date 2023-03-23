<template>
    <div :class="config.class">
        <label :for="config.field" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <Calendar :disabled="config.disabled" :inline="config.inline" :selectionMode="config.selectionMode"
                    :dateFormat="config.dateFormat" :showTime="config.showTime"
                    v-tooltip="config.tooltip" :placeholder="config.placeholder"
                    class="form-control w-100" :class="{ 'is-invalid': is_invalid() }"
                    @year-change="input_event" @date-select="input_event" @click="click_event" @blur="blur_event"
                    v-model="model"  />
        </div>        
    </div>
</template>

<script setup>
import { VFJDateInputConf } from './VFJDateInputConf'
import { useInputCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click', 'blur'])

const { input_event, click_event, blur_event, model, config, is_invalid } = useInputCommon( emit, VFJDateInputConf, props )
</script>