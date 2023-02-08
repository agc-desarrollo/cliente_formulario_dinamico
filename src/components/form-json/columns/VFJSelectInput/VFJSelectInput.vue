<template>
    <div class="mb-3">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group" v-tooltip="config.tooltip">
            <Dropdown v-model="model" class="w-100"
                :options="field_options" :optionLabel="config.option_label" :optionValue="config.option_id" 
                @change="input_event" @click="click_event" />
        </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { VFJSelectInputConf } from './VFJSelectInputConf'
import { useInputCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue'])

const config = ref(new VFJSelectInputConf(props.params))
const field_options = ref()

const { input_event, click_event, model } = useInputCommon( emit, config, props,{ field_options:field_options })

</script>