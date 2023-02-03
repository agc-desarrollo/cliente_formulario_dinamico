<template>
    <component :is="COMPONENTS_REFS[ col_data.component ]" :class="col_data.css_class" :data_channel="data_channel" :params="col_data.params"
        @update:modelValue="update_model" v-model="prev_model" @click_event="click_event"/>
</template>

<script setup>
import { ref } from 'vue'
import { COMPONENTS_REFS } from '../components'

const emit = defineEmits(['update:modelValue', 'click_event'])

const props = defineProps(['col_data', 'data_channel', 'modelValue'])

const prev_model = ref()

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click_event( evnt ){
    emit('click_event', evnt)
}
</script>