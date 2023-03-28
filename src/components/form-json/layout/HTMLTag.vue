<template>
    <div  :class="row_data.params?.class_container" :style="getJSON(row_data.params?.style_container)">
        <component  v-for="(col_data) in row_data.content" :key="col_data"
            :is="COMPONENTS_REFS[ col_data.component ]" :params="col_data.params"
            @update:modelValue="update_model" v-model="model" 
            @click="click"  @blur="blur" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { COMPONENTS_REFS } from '../components'
import { getJSON } from '../../../helpers/utils'

const emit  = defineEmits(['update:modelValue', 'click', 'blur'])
const props = defineProps(['row_data', 'modelValue', 'cont_class'])

const model = ref( props.modelValue )

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click( evnt ){
    emit('click', evnt)
}

function blur( evnt ){
    emit('blur', evnt)
}

onMounted(async ()=>{
})
</script>