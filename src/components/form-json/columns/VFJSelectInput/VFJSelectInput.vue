<template>
    <div :class="config.class">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group" v-tooltip="config.tooltip">
            <Dropdown v-model="model" class="form-control w-100" :class="{ 'is-invalid': is_invalid() }"
                :options="field_options" :optionLabel="config.option_label" :optionValue="config.option_id" 
                @change="input_event" @click="click_event" @blur="blur_event" />
        </div>     
        <div v-if="is_invalid()" class="invalid-feedback" :style="{display:'block'}">{{ validation_text() }}</div>   
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJSelectInputConf } from './VFJSelectInputConf'
import { useInputCommon, useSelectCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click', 'blur'])

const { field_options } = useSelectCommon( props )

const { input_event, click_event, blur_event, model, config, is_invalid, validation_text } = useInputCommon( emit, VFJSelectInputConf, props,{ field_options:field_options })

onMounted(async ()=>{
})
</script>