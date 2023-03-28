<template>
    <div :class="get_contentainer_class()" >
        <label :for="config.field" class="form-label control-label">{{ config.label }}</label>
        <div class="input-group">
            <Calendar :disabled="config.disabled" :inline="config.inline" :selectionMode="config.selectionMode"
                    :dateFormat="config.dateFormat" :showTime="config.showTime"
                    v-tooltip="config.tooltip" :placeholder="config.placeholder"
                    :class="get_content_class()" :style="getJSON( config.style_content )" 
                    @year-change="input_event" @date-select="input_event" @click="click_event" @blur="blur_event"
                    v-model="model"  />
        </div>        
        <div v-if="is_invalid()" class="invalid-feedback" :style="{display:'block'}">{{ validation_text() }}</div>
    </div>
</template>

<script setup>
import { VFJDateInputConf } from './VFJDateInputConf'
import { useInputCommon } from '../VFJInputComposable'
import { getJSON } from '../../../../helpers/utils'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click', 'blur'])

const { input_event, click_event, blur_event, model, config, is_invalid, validation_text, get_contentainer_class, get_content_class } = useInputCommon( emit, VFJDateInputConf, props )
</script>