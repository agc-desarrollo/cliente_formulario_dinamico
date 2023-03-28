<template>
    <div :class="get_contentainer_class()" >
        <label :for="params.field"  class="form-label control-label">{{ params.label }}</label>
        <div class="input-group">
            <FileUpload name="demo[]" :customUpload="true" @uploader="input_event" 
                :class="get_content_class()" :style="getJSON( config.style_content )"   />
        </div>        
    </div>
</template>

<script setup>
import { getJSON } from '../../../../helpers/utils'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue'])

function input_event( evnt ){
    emit('update:modelValue', { config: config.value, data: model.value })
}
</script>