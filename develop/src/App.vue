<template>
  <div class="container">
    <ClienteFormularioDinamico 
        v-if ="conf !== null"
        v-model="model" :config="conf" />
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route  = useRoute()

const model   = ref({})
const conf    = ref( null )

onMounted(async ()=>{
  let form_id = route.query.f
  
  if (form_id == undefined){
    
    alert('Formulario no especificado')
    return false
  }

  conf.value = {
    api: process.env.VUE_APP_API_URL,
    id:  form_id
  }
})
</script>

<style>
.component-group{
  background-color: #ddd;
}
</style>
