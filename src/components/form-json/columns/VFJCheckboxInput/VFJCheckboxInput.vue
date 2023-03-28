<template>

    <div :class="get_contentainer_class()" >
        <label :for="config.field" class="form-label control-label">{{ config.label }}</label>
        <div class="input-group row">
            <div class="field-radiobutton col-12" v-for="(option) in field_options" :key="option">
                <Checkbox inputId="{{config.field + option[config.option_id]}}" :name="config.field" 
                            @change="input_event" @click="click_event" @blur="blur_event"
                            :class="config.class_content" :style="getJSON( config.style_content )"
                            :value="option[config.option_id]" v-model="model" />
                <label for="{{ config.field + option[config.option_id] }}">{{option[config.option_label]}}</label>
            </div>
        </div>
    </div>

</template>

<script setup>
import { VFJCheckboxInputConf } from './VFJCheckboxInputConf'
import { useInputCommon, useSelectCommon } from '../VFJInputComposable'
import { getJSON } from '../../../../helpers/utils'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click', 'blur'])

const { field_options } = useSelectCommon( props )
const { input_event, click_event, blur_event, model, config, get_contentainer_class } = useInputCommon( emit, VFJCheckboxInputConf, props, { field_options:field_options })
</script>