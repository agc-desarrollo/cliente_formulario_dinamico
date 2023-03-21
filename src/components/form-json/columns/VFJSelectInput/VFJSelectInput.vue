<template>
    <div :class="config.class">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group" v-tooltip="config.tooltip">
            <Dropdown v-model="model" class="w-100"
                :options="field_options" :optionLabel="config.option_label" :optionValue="config.option_id" 
                @change="input_event" @click="click_event" @blur="blur_event" />
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJSelectInputConf } from './VFJSelectInputConf'
import { useInputCommon, useSelectCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click'])

const { field_options } = useSelectCommon( props )

const { input_event, click_event, blur_event, model, config } = useInputCommon( emit, VFJSelectInputConf, props,{ field_options:field_options })

onMounted(async ()=>{
})
</script>