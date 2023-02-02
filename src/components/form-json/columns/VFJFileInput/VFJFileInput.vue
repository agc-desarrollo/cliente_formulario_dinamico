<template>
    <div class="mb-3">
        <label :for="params.field" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <FileUpload name="demo[]" :customUpload="true" @uploader="input_event"  />
        </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['params', 'data_channel'])

function input_event( evnt ){
    props.data_channel.streaming('_user_input_data', { config: props.params, data: evnt })
}
</script>