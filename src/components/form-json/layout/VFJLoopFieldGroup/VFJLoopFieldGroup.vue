<template>
    <div class="row">
        <div class="col">
            <VFJButtonInput :data_channel="data_channel" :params="getCfg_new_btn()" />
        </div>
    </div>
    
    <VFJLoopFieldGroupRow v-for="(reg_data) in list_data" :key="reg_data"
        :data_channel="data_channel" :reg_data="reg_data" :params="conf" />
    
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJLoopFieldGroupConf } from './VFJLoopFieldGroupConf'
import VFJLoopFieldGroupRow from './VFJLoopFieldGroupRow.vue'

const props = defineProps(['params', 'data_channel'])

const conf = ref(new VFJLoopFieldGroupConf(props.params))
const list_data = ref([])

onMounted(async ()=>{
    props.data_channel.subscribe('runtime_list_data_updated', 'rd_'+conf.value.runtime_data_field, async ( data ) => {
        if (data.field == conf.value.runtime_data_field)
            list_data.value = data.rows
    })
})

function getCfg_new_btn(){
    return {
        action: 'list_add_new_data', 
        runtime_data_field: conf.value.runtime_data_field,
        class: conf.value.btn_create.class, label: conf.value.btn_create.label,
        icon: conf.value.btn_create.icon, iconPos:  conf.value.btn_create.iconPos
    }
}

</script>