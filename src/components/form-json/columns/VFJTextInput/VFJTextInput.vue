<template>
    <div class="mb-3">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group">
            <InputText 
                v-tooltip="config.tooltip"
                :disabled="config.disabled" 
                @input="input_event" @click="click_event"
                :type="config.type"  v-model="model" class="w-100" />
        </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { VFJTextInputConf } from './VFJTextInputConf'
import { useInputCommon } from '../VFJInputComposable'

const emit  = defineEmits(['update:modelValue'])
const props = defineProps(['params', 'modelValue', 'click'])

const config = ref(new VFJTextInputConf(props.params))

const { input_event, click_event, model } = useInputCommon( emit, config, props )
</script>