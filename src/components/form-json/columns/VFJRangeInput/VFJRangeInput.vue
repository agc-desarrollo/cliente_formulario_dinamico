<template>
    <div :class="get_contentainer_class()" >
        <label :for="params.field"  class="form-label control-label">{{ params.label }}</label>
        <div class="input-group">
            <Slider v-model="model" :range="config.range"  @slideend="input_event" :step="config.step" :min="config.min" :max="config.max" 
                    :class="get_content_class()" :style="getJSON( config.style_content )" 
                    @click="click_event"  @blur="blur_event"/>
        </div>    
        <div v-if="is_invalid()" class="invalid-feedback" :style="{display:'block'}">{{ validation_text() }}</div>    
    </div>
</template>

<script setup>
import { VFJRangeInputConf } from './VFJRangeInputConf'
import { useInputCommon } from '../VFJInputComposable'
import { getJSON } from '../../../../helpers/utils'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click', 'blur'])

const { input_event, click_event, blur_event, model, config, is_invalid, get_content_class, validation_text, get_contentainer_class } = useInputCommon( emit, VFJRangeInputConf, props )
</script>