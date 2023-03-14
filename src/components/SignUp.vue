<template>
    <FormularioJSON v-if="form_storage !== null"
                    :form_definition="form_def" v-model="form_storage"
                    @submit="onSubmit"/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getSession } from '../api/form'
import { FormStorage } from '../components/form-json/FormStorage'

const props = defineProps(['config'])
const emit  = defineEmits(['hasSession' ])

const form_storage = ref( null )

const form_def = ref({
  gral: {
    title: "Registro",
    status: 1
  },
  sections: {
    component: "V_TABS",
    content: [
      {
        header: "Registro",
        content: [
          {
            component: "V_ROW",
            class: "row",
            content: [
              {
                class: "col",
                component: "I_TEXT",
                params: {
                  label: "CUIL",
                  class: "col mb-3",
                  disabled: false,
                  key: "cuil",
                  required: true,
                  autocomplete_options: "",
                  tooltip: "",
                  id: "",
                  placeholder: "",
                  type: ""
                },
                id: 1
              },
              {
                class: "col",
                component: "I_BUTTON",
                params: {
                  action: "submit",
                  label: "Continuar",
                  dkey: "",
                  key: "submit"
                },
                id: 0
              }
            ]
          }
        ],
        external_ref: 0
      }
    ],
    class: ""
  }
})

async function onSubmit( evnt ){
  let res = await getSession(props.config.api, { cuil: evnt.cuil  })

  if (res.stat) {
    emit('hasSession', true)
  } 
}

onMounted(async ()=>{
  form_storage.value = new FormStorage()
  form_storage.value.data_form = { cuil: '' }
})

</script>