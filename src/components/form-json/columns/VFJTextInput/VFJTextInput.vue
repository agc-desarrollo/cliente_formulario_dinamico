<template>
    <div :class="get_contentainer_class()" > 
        <label :for="config.key" class="form-label control-label">{{ config.label }}</label>
        <div class="input-group">
            <InputText 
                :class="get_content_class()" :style="getJSON( config.style_content )"
                v-tooltip="config.tooltip" :disabled="config.disabled"
                @input="input_event" @click="click_event" @blur="blur_event"
                :type="config.type"  v-model="model" />
        </div>   
        <div v-if="is_invalid()" class="invalid-feedback" :style="{display:'block'}">{{ validation_text() }}</div>      
    </div>
</template>

<script setup>
import { VFJTextInputConf } from './VFJTextInputConf'
import { useInputCommon } from '../VFJInputComposable'
import { getJSON } from '../../../../helpers/utils'

const emit  = defineEmits(['update:modelValue', 'click', 'blur'])
const props = defineProps(['params', 'modelValue'])

const { input_event, click_event, blur_event, model, config, get_content_class, is_invalid, validation_text, get_contentainer_class } = useInputCommon( emit, VFJTextInputConf, props )
</script>
