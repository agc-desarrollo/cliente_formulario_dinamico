<template>
  <div :class="params.class_container" :style="getJSON( params.style_container )">
    <img :src="params.url" :alt="params.alt" :class="params.class_content" :style="getJSON( params.style_content )" />
  </div>
</template>

<script setup>
import { getJSON } from '../VFJInputComposable'

const props = defineProps(['params'])
</script>