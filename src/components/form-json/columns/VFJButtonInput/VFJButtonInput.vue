<template>
    <Button :label="config.label" :class="config.class" :icon="config.icon" :iconPos="config.iconPos" v-tooltip="config.tooltip" @click="click_event"/>
</template>

<script setup>
import { useInputCommon } from '../VFJInputComposable'
import { VFJButtonInputConf } from './VFJButtonInputConf'

const props = defineProps(['params', 'modelValue'])
const emit = defineEmits(['update:modelValue', 'click'])

const { click_event, model, config } = useInputCommon( emit, VFJButtonInputConf, props )

</script>