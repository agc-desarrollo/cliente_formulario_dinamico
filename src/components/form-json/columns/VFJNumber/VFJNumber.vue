<template>
    <div :class="get_contentainer_class()" >
        <label :for="config.key"  class="form-label control-label">{{ config.label }}</label>
        <div class="input-group">
            <InputNumber 
                v-tooltip="config.tooltip"
                :disabled="config.disabled" :min="Number(config.min)" :max="Number(config.max)" :step="config.step" :format="config.format"
                :minFractionDigits="config.minFractionDigits" :maxFractionDigits="config.maxFractionDigits"
                :currency="config.currency" :mode="config.mode" :suffix="config.suffix" :prefix="config.prefix"
                :showButtons="config.showButtons" :placeholder="config.placeholder"
                @input="input_event" @click="click_event" @blur="blur_event"
                :class="get_content_class()" :style="getJSON( config.style_content )" 
                :type="config.type"  v-model="model"  />
        </div>   
        <div v-if="is_invalid()" class="invalid-feedback" :style="{display:'block'}">{{ validation_text() }}</div>     
    </div>
</template>

<script setup>
import { VFJNumberConf } from './VFJNumberConf'
import { useInputCommon } from '../VFJInputComposable'
import { getJSON } from '../../../../helpers/utils'

const emit  = defineEmits(['update:modelValue', 'click', 'blur'])
const props = defineProps(['params', 'modelValue' ])

const { input_event, click_event, blur_event, model, config, is_invalid, get_content_class, validation_text, get_contentainer_class } = useInputCommon( emit, VFJNumberConf, props )
</script>