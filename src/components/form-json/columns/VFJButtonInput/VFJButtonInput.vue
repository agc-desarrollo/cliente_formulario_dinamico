<template>
    <Button :label="config.label" :class="config.class" :icon="config.icon" :iconPos="config.iconPos" v-tooltip="config.tooltip" @click="input_event($event)"/>
</template>

<script setup>
import { ref } from 'vue'
import { VFJButtonInputConf } from './VFJButtonInputConf'
const props = defineProps(['params', 'data_channel' , 'modelValue'])

const emit = defineEmits(['update:modelValue', 'click_event'])

const config = ref(new VFJButtonInputConf(props.params))

function input_event(){
    emit('click_event', { config: props.params, data: true })
}
</script>