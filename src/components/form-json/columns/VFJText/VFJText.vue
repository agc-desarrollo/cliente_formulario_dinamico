<template>
    <div v-html="params.html" :class="params.class_container" :style="getJSON( params.style_container )"></div>
</template>

<script setup>
import { getJSON } from '../../../../helpers/utils'

const props = defineProps(['params'])
</script>