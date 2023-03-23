<template>
    <HTMLTag  v-for="(row_data) in params" :class="row_data.class"
                :row_data="row_data" :key="row_data"
                v-model="model" @update:modelValue="update_model"
                @click="click" @blur="blur"/>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['params', 'modelValue'])

const model = ref(props.modelValue)

const emit = defineEmits(['update:modelValue', 'click', 'blur'])

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click( evnt ){
    emit('click', evnt)
}

function blur( evnt ){
    emit('blur', evnt)
}

function refresh_validations(){ html_tag_refs.value.refresh_validations() }
</script>