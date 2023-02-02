<template>
    <div class="col" :class="col_data.css_class">
        <component :is="COMPONENTS_REFS[ col_data.component ]" :data_channel="data_channel" :params="col_data.params"></component>
    </div>
</template>

<script setup>
import { COMPONENTS_REFS } from '../components'

const props = defineProps(['col_data', 'data_channel'])

</script>