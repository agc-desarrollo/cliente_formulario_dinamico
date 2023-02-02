<template>
    <div class="row" :class="row_data.css_class">
        <FormCol v-for="(col_data) in row_data.content" :data_channel="data_channel" :col_data="col_data" :key="col_data"></FormCol>
    </div>
</template>

<script setup>
const props = defineProps(['row_data', 'data_channel'])
</script>