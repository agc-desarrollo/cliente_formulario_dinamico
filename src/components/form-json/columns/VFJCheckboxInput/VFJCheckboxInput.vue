<template>

    <div :class="config.class">
        <label :for="config.field" class="form-label">{{ config.label }}</label>
        <div class="input-group row">
            <div class="field-radiobutton col-12" v-for="(option) in field_options" :key="option">
                <Checkbox inputId="{{config.field + option[config.option_id]}}" :name="config.field" 
                            @change="input_event" @click="click_event"
                            :value="option[config.option_id]" v-model="model" />
                <label for="{{ config.field + option[config.option_id] }}">{{option[config.option_label]}}</label>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { VFJCheckboxInputConf } from './VFJCheckboxInputConf'
import { useInputCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click'])

const field_options = ref([])

const { input_event, click_event, model, config } = useInputCommon( emit, VFJCheckboxInputConf, props, { field_options:field_options })
</script>