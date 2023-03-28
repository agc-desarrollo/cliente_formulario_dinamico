<template>
    <div :class="get_contentainer_class()" >
        <label :for="config.field"  class="form-label control-label">{{ config.label }}</label>
        <div class="input-group">
            <ColorPicker 
                v-tooltip="config.tooltip"
                v-model="model" :inline="config.inline"
                :class="get_content_class()" :style="getJSON( config.style_content )" 
                @change="input_event" @click="click_event" />
        </div>        
    </div>
</template>

<script setup>
import { VFJColorInputConf } from './VFJColorInputConf'
import { useInputCommon } from '../VFJInputComposable'
import { getJSON } from '../../../../helpers/utils'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click'])

const { input_event, click_event, model, config, get_content_class, get_contentainer_class } = useInputCommon( emit, VFJColorInputConf, props )
</script>