<template>
    <div :class="get_contentainer_class()" >
        <label :for="config.key" class="form-label control-label">{{ config.label }}</label>
        <div class="input-group" v-tooltip="config.tooltip">
            <Dropdown v-model="model" 
                :options="field_options" :optionLabel="config.option_label" :optionValue="config.option_id" 
                :class="get_content_class()" :style="getJSON( config.style_content )" 
                @change="input_event" @click="click_event" @blur="blur_event" />
        </div>     
        <div v-if="is_invalid()" class="invalid-feedback" :style="{display:'block'}">{{ validation_text() }}</div>   
    </div>
</template>

<script setup>
import { getJSON } from '../../../../helpers/utils'
import { VFJSelectInputConf } from './VFJSelectInputConf'
import { useInputCommon, useSelectCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click', 'blur'])

const { field_options } = useSelectCommon( props )

const { input_event, click_event, blur_event, model, config, is_invalid, get_content_class, validation_text, get_contentainer_class } = useInputCommon( emit, VFJSelectInputConf, props,{ field_options:field_options })

</script>