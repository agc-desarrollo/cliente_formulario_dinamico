<template>
    <div class="mb-3">
        <label :for="config.key" class="form-label">{{ config.label }}</label>
        <div class="input-group" v-tooltip="config.tooltip">
            <Dropdown v-model="model" class="w-100"
                :options="field_options" :optionLabel="config.option_label" :optionValue="config.option_id" @change="input_event" />
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJSelectInputConf } from './VFJSelectInputConf'

const props = defineProps(['params', 'data_channel'])

const model = ref()
const config = ref(new VFJSelectInputConf(props.params))
const field_options = ref([])

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: config.value, data: model.value })
}

onMounted(async ()=>{
    props.data_channel.getData('field_options', async (data) => {
        field_options.value = data[ config.value.field_options ]

        props.data_channel.getData('field_value', async (data) => {
            if (data != undefined)
                model.value = data
        }, config.value.field)
    })
})
</script>