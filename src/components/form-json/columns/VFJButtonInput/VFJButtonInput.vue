<template>
    <Button :label="config.label" :class="config.class" :icon="config.icon" :iconPos="config.iconPos" v-tooltip="config.tooltip" @click="input_event($event)"/>
</template>

<script setup>
import { ref } from 'vue'
import { VFJButtonInputConf } from './VFJButtonInputConf'
const props = defineProps(['params', 'data_channel'])

const config = ref(new VFJButtonInputConf(props.params))

function input_event(){
    props.data_channel.streaming('_user_button_action', { config: props.params })
}
</script>