<template>
  <div class="container"> {{ conf }}
    <ClienteFormularioDinamico v-model="model" :config="conf" />
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'

const model = ref({  'name': 'Juan Perez', 'categoria': 4, 'radio_ej': 2, 'checkbox_ej': [1,4] })
const conf  = ref({
    api: process.env.VUE_APP_API_URL
})

onMounted(async ()=>{
})
</script>

<style>
.component-group{
  background-color: #ddd;
}
</style>
