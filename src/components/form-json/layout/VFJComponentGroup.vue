<template>
    <div class="row component-group">
        <div class="col">
            <HTMLTag 
                v-for="(row_data) in params.html_def"
                :row_data="row_data" :data_channel="data_channel" :key="row_data" v-model="prev_model" 
                @update:modelValue="update_model"  @click_event="click_event"  />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['params', 'data_channel'])

const emit = defineEmits(['update:modelValue', 'click_event'])

const prev_model = ref()

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click_event( evnt ){
    emit('click_event', evnt)
}
</script>
