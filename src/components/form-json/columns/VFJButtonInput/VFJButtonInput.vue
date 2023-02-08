<template>
    <Button :label="config.label" :class="config.class" :icon="config.icon" :iconPos="config.iconPos" v-tooltip="config.tooltip" @click="input_event($event)"/>
</template>

<script setup>
import { ref } from 'vue'
import { VFJButtonInputConf } from './VFJButtonInputConf'
const props = defineProps(['params', 'modelValue'])

const emit = defineEmits(['update:modelValue', 'click'])

const config = ref(new VFJButtonInputConf(props.params))

function input_event(){
    emit('click', { config: props.params, data: true })
}
</script>