import { ref, onMounted, inject } from 'vue'

export function useInputCommon( emit, CONFIG_CLASS, props, optionals={} ) {
    const model  = ref()
    const config = ref(props.params)
    
    function input_event(){
        emit('update:modelValue', { config: config.value, data: model.value })
    }

    function click_event(evnt){
        emit('click', { config: config.value, data: model.value, evnt:evnt })
    }

    function blur_event(evnt){
        emit('blur', { config: config.value, data: model.value, evnt:evnt })
    }

    onMounted(async ()=>{
        console.log(props.modelValue, config.value.key)
        if (config.value.key != undefined && props.modelValue.data_form != undefined && props.modelValue.data_form[config.value.key] != undefined)
            model.value = props.modelValue.data_form[config.value.key]

        if (props.modelValue != undefined && config.value.field_options != undefined) {
            let data = props.modelValue.field_options 
            if (data != undefined)
                optionals.field_options.value = data[ config.value.field_options ]
        }
        
        if (props.modelValue !== undefined && props.modelValue.getValue !== undefined) {
            let value = props.modelValue.getValue( config.value.field )
            if (value != undefined) model.value = value
        } else {
            console.log(45645,props.modelValue)
        }
    })

    return { input_event, click_event, blur_event, model, config }
}

export function useSelectCommon( props ){
    const dataOrigins   = inject('dataOrigins')
    const field_options = ref([])

    async function getFieldOptions(){
        let data = await dataOrigins.getData( props.params.origin )
        return data
    }

    onMounted(async ()=>{
        field_options.value = await getFieldOptions()
    })

    return { field_options, dataOrigins }
}