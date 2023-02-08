<template>
  <div class="container">
    <FormularioJSON :form_definition="f_config" v-model="form_data" 
                    @submit="submitHandler" @input="inputHandler" @click="clickHandler"/>
    {{ form_data }}
  </div>
  
</template>

<script setup>
import { ref } from 'vue'

const form_data = ref({
  'name': 'Juan Perez', 'categoria': 4, 'radio_ej': 2, 'checkbox_ej': [1,4]
})
const f_config = ref({
  "general_data": {
    "field_options": {
      "opciones_select_categoria": [
        { id: 1, text: 'Categoria 1'},
        { id: 2, text: 'Categoria 2'},
        { id: 3, text: 'Categoria 3'},
        { id: 4, text: 'Categoria 4'},
      ],
      "opciones_radio_ej": [
        { id: 1, text: 'Radio 1'},
        { id: 2, text: 'Radio 2'},
        { id: 3, text: 'Radio 3'},
        { id: 4, text: 'Radio 4'},
      ],
      "opciones_checkbox_ej": [
        { id: 1, text: 'Checkbox 1'},
        { id: 2, text: 'Checkbox 2'},
        { id: 3, text: 'Checkbox 3'},
        { id: 4, text: 'Checkbox 4'},
      ]
    },
    "autocomplete_options": {
      "ciudades": [ 'Tandil', 'Mar del Plata', 'Ayacucho', 'Azul', 'Bolivar', 'Capital Federal' ]
    },
    "initial_values": {
      user_list_initial_values: { date:new Date(), color:'#00FF00' }
    }
    
  },
  "sections": { 
    component: 'V_TABS',
    section_def: 
    [
      {
        header: "Parte 1", 
        content: [
          { class: 'justify-content-md-center row', content: 
            [
              { 
                component: 'V_GROUP', class:'row',
                params:{ 
                    id: "example_group_1", 
                    content: [
                      { class: 'justify-content-md-center row', content: 
                        [{ class:'', component: '_IMAGE', params:{ src: "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg", alt: "Vue logo" } }
                        ] 
                      },
                      { class: 'justify-content-md-center row', content: 
                        [{ class:'', component: '_TEXT', params:{ html: "<h1>Titulo de formulario</h1>"} }
                        ] 
                      },
                      { class: 'justify-content-md-center row', content: 
                        [{ class:'col', component: 'I_TEXT', params:{ field: 'name',tooltip:"hello moto", label: 'Campo de texto', type: 'text' } },
                        { class:'col', component: 'I_TEXTAREA', params:{ field: 'descripcion','tooltip':'hola', label: 'Campo Textarea' } },
                        { class:'col', component: 'I_SELECT', params:{ field: 'categoria_1', 'tooltip':'hola1', label: 'Campo Select',
                          field_options: "opciones_select_categoria", option_id : "id", option_label: "text"
                        } }
                        ] 
                      },
                      { class: 'justify-content-md-center row', content: 
                        [
                          { class:'', component: 'I_RADIO', params:
                            { field: 'radio_ej', label: 'Campo Radio Button',
                              field_options: "opciones_radio_ej", option_id : "id", option_label: "text"
                            } 
                          },
                          { class:'', component: 'I_CHECKBOX', params:
                            { field: 'checkbox_ej', label: 'Campo Checkbox',
                              field_options: "opciones_checkbox_ej", option_id : "id", option_label: "text"
                            } 
                          }
                        ] 
                      },                      
                    ]
                } 
              }
            ] 
          },
          { class: 'justify-content-md-center row', content: 
            [
              { class:'', component: 'I_DATE', params:{ field: 'date', label: 'Campo de fecha' } },
              { class:'', component: 'I_BUTTON', params:{ action: 'test_action','tooltip':'hola', label: 'Boton de prueba' } },
              { class:'', component: 'I_COLOR', params:{ field: 'color','tooltip':'hola', label: 'Campo de selección de color' } },
            ] 
          },
          { class: 'justify-content-md-center row', content: 
            [
              { class:'', component: 'I_RANGE', params:{ field: 'rango', range:false, min:0, step:1, max:200, label: 'Campo de selección tipo Slider' } },
              { class:'', component: 'I_FILE', params:{ field: 'file', label: 'Campo de subida de archivos' } },
            ] 
          },
          { class: 'justify-content-md-center row', 
            content: [
              { class:'', component: 'I_BUTTON', params:{ action: 'section_next', label: 'Siguiente' } }
            ]
          },
        ],
      },
      {
        header: "Parte 2",
        content: [
          { class: 'justify-content-md-center row', content: 
            [{ class:'', component: '_IMAGE', params:{ src: "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg", alt: "Vue logo" } }
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [{ class:'', component: '_TEXT', params:{ html: "<h1>Titulo de formulario Parte 2</h1>"} }
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [{ class:'', component: 'I_TEXT', params:{ field: 'name', label: 'Campo de texto', type: 'text' } },
            { class:'', component: 'I_TEXTAREA', params:{ field: 'descripcion', label: 'Campo Textarea' } },
            { class:'', component: 'I_SELECT', params:{ field: 'categoria', label: 'Campo Select',
              field_options: "opciones_select_categoria", option_id : "id", option_label: "text"
            } }
            ] 
          },
          { class: 'justify-content-md-center row', content: 
            [
              { class:'', component: 'I_RADIO', params:
                { field: 'radio_ej', label: 'Campo Radio Button',
                  field_options: "opciones_radio_ej", option_id : "id", option_label: "text"
                } 
              },
              { class:'', component: 'I_CHECKBOX', params:
                { field: 'checkbox_ej', label: 'Campo Checkbox',
                  field_options: "opciones_checkbox_ej", option_id : "id", option_label: "text"
                } 
              }
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [
              { class:'', component: 'I_DATE', params:{ field: 'date', label: 'Campo de fecha' } },
              { class:'', component: 'I_BUTTON', params:{ action: 'test_action', label: 'Boton de prueba' } },
              { class:'', component: 'I_COLOR', params:{ field: 'color', label: 'Campo de selección de color' } },
            ] 
          },
          { class: 'justify-content-md-center row', content: 
            [
              { class:'', component: 'I_RANGE', params:{ field: 'rango', min:0, step:1, max:200, label: 'Campo de selección tipo Slider' } },
              { class:'', component: 'I_FILE', params:{ field: 'file', label: 'Campo de subida de archivos' } },
            ] 
          },
          { class: 'justify-content-md-center row', 
            content: [
              { class:'', component: 'I_BUTTON', params:{ action: 'section_back', label: 'Anterior' } },
              { class:'', component: 'I_BUTTON', params:{ action: 'section_next', label: 'Siguiente' } }
            ]
          },
        ],
      },
      {
        header: "Paso Final",
        content: [
          { class: 'justify-content-md-center row', 
            content: [
              { 
                class:'', component: 'V_LOOP', 
                params:{
                  runtime_data_field: 'user_list',
                  initial_values_id: 'user_list_initial_values',
                  content: [
                  { class: 'justify-content-md-center row', content: 
                      [
                        { class:'', component: 'I_DATE', params:{   dfield: 'date',    label: 'Campo de fecha' } },
                        { class:'', component: 'I_BUTTON', params:{ dfield: 'btn', action: 'test_action', label: 'Boton de prueba' } },
                        { class:'', component: 'I_COLOR', params:{  dfield: 'color',  label: 'Campo de selección de color' } },
                      ] 
                    }
                  ]
                } 
              }
            ]
          },
          { class: 'justify-content-md-center row', 
            content: [
              { class:'', component: 'I_BUTTON', params:{ action: 'section_back', label: 'Anterior' } },
              { class:'', component: 'I_BUTTON', params:{ action: 'section_goTo', action_params:{ id: 0 }, label: 'Inicio' } },
              { class:'', component: 'I_BUTTON', params:{ action: 'submit', label: 'Confirmar' } }
            ]
          },
        ]
      }
    ]
  }
  
})

function inputHandler( event ){
  console.log('input: ',event)
}

function submitHandler( event ){
  console.log('submit: ',event)
}

function clickHandler( event ){
  console.log('click: ',event)
}

</script>

<style>
.component-group{
  background-color: #ddd;
}
</style>
