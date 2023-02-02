<template>
    <div class="row component-group">
        <div class="col">
            <FormRow 
                v-for="(row_data) in params.html_def"
                :row_data="row_data" :data_channel="data_channel" :key="row_data"></FormRow>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['params', 'data_channel'])
</script>
