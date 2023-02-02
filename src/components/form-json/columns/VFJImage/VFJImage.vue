<template>
  <Image :src="params.src" :alt="params.alt" />
</template>

<script setup>
const props = defineProps(['params'])
</script>