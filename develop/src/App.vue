<template>
  <div class="container">
    <ClienteFormularioDinamico 
        v-if ="conf !== null && !form_submited"
        v-model="model" :config="conf" @submit="onSubmit" @blur="blur"/>
    
    <div v-if="form_submited" class="row">
      <div class="col">
        Formulario Enviado
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route  = useRoute()

const model   = ref({})
const conf    = ref( null )

const form_submited = ref(false)

function blur(mo){
  console.log(mo)
}

function onSubmit(){
  form_submited.value = true
}

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
