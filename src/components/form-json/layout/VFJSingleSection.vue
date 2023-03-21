<template>
    <HTMLTag  v-for="(row_data) in params" :class="row_data.class"
                :row_data="row_data" :key="row_data" 
                v-model="model" @update:modelValue="update_model"
                @click="click"/>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['params', 'modelValue'])

const model = ref(props.modelValue)

const emit = defineEmits(['update:modelValue', 'click'])
const page  = ref(0)

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click( evnt ){
    emit('click', evnt)
}

</script>