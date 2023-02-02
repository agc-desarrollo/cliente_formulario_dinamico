<template>
    <div class="mb-3">
        <label :for="params.field" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <Slider v-model="model" :range="params.range"  @slideend="input_event" :step="params.step" :min="params.min" :max="params.max" class="w-100"/>
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel'])

const model = ref(props.params.min)

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: props.params, data: model.value })
}

onMounted(async ()=>{
    props.data_channel.getData('field_value', async (data) => {
        if (data != undefined)
            model.value = data
    }, props.params.field)
})
</script>