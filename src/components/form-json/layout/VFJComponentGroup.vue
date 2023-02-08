<template>
    <div class="row component-group">
        <div class="col">
            <HTMLTag 
                v-for="(row_data) in params.content"
                :row_data="row_data" :key="row_data" 
                v-model="model" @update:modelValue="update_model"  
                @click="click"  />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['params', 'modelValue'])

const emit = defineEmits(['update:modelValue', 'click'])

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