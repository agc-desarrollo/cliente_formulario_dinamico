<template>
    <div :class="get_contentainer_class()" >
        <Button :label="config.label" :icon="config.icon" :iconPos="config.iconPos" v-tooltip="config.tooltip" @click="click_event"
            :class="config.class_content" :style="getJSON( config.style_content )"/>
    </div>
</template>

<script setup>
import { useInputCommon } from '../VFJInputComposable'
import { VFJButtonInputConf } from './VFJButtonInputConf'
import { getJSON } from '../../../../helpers/utils'

const props = defineProps(['params', 'modelValue'])
const emit = defineEmits(['update:modelValue', 'click'])

const { click_event, model, config, get_contentainer_class } = useInputCommon( emit, VFJButtonInputConf, props )

</script>