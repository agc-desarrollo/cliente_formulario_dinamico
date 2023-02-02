<template>
    <TabView :activeIndex="page">
        <TabPanel 
            v-for="(section) in params" :key="section"
            :header="section.header">
                <FormRow 
                    v-for="(row_data) in section.html_def"
                    :row_data="row_data" :data_channel="data_channel" :key="row_data"></FormRow>
        </TabPanel>
    </TabView>
    
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel'])
const page  = ref(0)

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
    props.data_channel.subscribe('_user_button_action', 'btns_1', async ( evnt ) => {
        if (ACTION_INDEX[ evnt.config.action ] != undefined) 
            ACTION_INDEX[ evnt.config.action ]( evnt )
    })
})
</script>