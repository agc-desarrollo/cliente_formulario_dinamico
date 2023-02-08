<template>
    <TabView :activeIndex="page">
        <TabPanel 
            v-for="(section) in params" :key="section"
            :header="section.header">
                <HTMLTag 
                    v-for="(row_data) in section.content"
                    :row_data="row_data" :key="row_data" 
                    v-model="model" @update:modelValue="update_model"
                    @click="click"/>
        </TabPanel>
    </TabView>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'modelValue'])

const model = ref(props.modelValue)

const emit = defineEmits(['update:modelValue', 'click'])
const page  = ref(0)

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click( evnt ){
    emit('click', evnt)

    if (evnt.config?.action != undefined && ACTION_INDEX[ evnt.config.action ] != undefined) 
            ACTION_INDEX[ evnt.config.action ]( evnt )
}

function sig_page(){
    if ((page.value + 1) < props.params.length)
        page.value ++
}

function prev_page(){
    if ((page.value - 1) >= 0)
        page.value --
}

function section_goTo( params ){
    page.value = params.config.action_params.id
}

const ACTION_INDEX = {
    'section_next' : sig_page,
    'section_back' : prev_page,
    'section_goTo' : section_goTo
}

onMounted(async ()=>{
})
</script>