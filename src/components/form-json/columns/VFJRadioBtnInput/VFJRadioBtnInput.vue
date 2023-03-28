<template>

    <div :class="get_contentainer_class()" >
        <label :for="config.field"  class="form-label control-label">{{ config.label }}</label>
        <div class="form-control input-group row" :class="{ 'is-invalid': is_invalid() }">
            <div class="field-radiobutton col-12" v-for="(option) in field_options" :key="option">
                <RadioButton inputId="{{config.field + option[config.option_id]}}" :name="config.field" 
                @change="input_event" @click="click_event" @blur="blur_event"
                :value="option[config.option_id]" v-model="model" 
                :class="get_content_class()" :style="getJSON( config.style_content )" />
                <label for="{{ config.field + option[config.option_id] }}">{{option[config.option_label]}}</label>
            </div>
        </div>
    </div>

</template>

<script setup>
import { getJSON } from '../../../../helpers/utils'
import { VFJRadioBtnInputConf } from './VFJRadioBtnInputConf'
import { useInputCommon, useSelectCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click', 'blur'])

const { field_options } = useSelectCommon( props )
const { input_event, click_event, blur_event, model, config, is_invalid, get_content_class, get_contentainer_class } = useInputCommon( emit, VFJRadioBtnInputConf, props, { field_options:field_options })
</script>