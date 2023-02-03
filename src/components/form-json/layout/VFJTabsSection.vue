<template>
    <TabView :activeIndex="page">
        <TabPanel 
            v-for="(section) in params" :key="section"
            :header="section.header">
                <HTMLTag 
                    v-for="(row_data) in section.html_def"
                    :row_data="row_data" :data_channel="data_channel" :key="row_data" v-model="prev_model" ç
                    @update:modelValue="update_model"  @click_event="click_event"/>
        </TabPanel>
    </TabView>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel', 'modelValue'])

const prev_model = ref()

const emit = defineEmits(['update:modelValue', 'click_event'])
const page  = ref(0)

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click_event( evnt ){
    emit('click_event', evnt)

    if (ACTION_INDEX[ evnt.config.action ] != undefined) 
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