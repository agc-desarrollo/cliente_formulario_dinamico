<template>
    <div v-html="params.html" :styles="params.styles"></div>
</template>

<script setup>
const props = defineProps(['params', 'data_channel'])
</script>