<template>
    <div :class="row_data.css_class">
        <div class="col" >
            <CompInsert v-for="(col_data) in row_data.content" :data_channel="data_channel" :col_data="col_data" :key="col_data"
                @update:modelValue="update_model" v-model="prev_model" @click_event="click_event"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue', 'click_event'])

const props = defineProps(['row_data', 'data_channel', 'modelValue'])

const prev_model = ref()

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click_event( evnt ){
    emit('click_event', evnt)
}
</script>