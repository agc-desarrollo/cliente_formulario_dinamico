<template>
    <component  v-for="(col_data) in row_data.content" :key="col_data"
            :is="COMPONENTS_REFS[ col_data.component ]" :class="col_data.class" :params="col_data.params"
            @update:modelValue="update_model" v-model="model" 
            @click="click"/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { COMPONENTS_REFS } from '../components'

const emit  = defineEmits(['update:modelValue', 'click'])
const props = defineProps(['row_data', 'modelValue'])

const model = ref( props.modelValue )

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click( evnt ){
    emit('click', evnt)
}

onMounted(async ()=>{
})
</script>