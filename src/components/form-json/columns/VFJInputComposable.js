import { ref, onMounted } from 'vue'

export function useInputCommon( emit, CONFIG_CLASS, props, optionals={} ) {
    const model  = ref()
    const config = ref(new CONFIG_CLASS(props.params))
    
    function input_event(){
        emit('update:modelValue', { config: config.value, data: model.value })
    }

    function click_event(evnt){
        emit('click', { config: config.value, data: model.value, evnt:evnt })
    }

    onMounted(async ()=>{
        if (props.modelValue != undefined && config.value.field_options != undefined) {
            let data = props.modelValue.field_options 
            optionals.field_options.value = data[ config.value.field_options ]
        }
        
        if (props.modelValue !== undefined && props.modelValue.getValue !== undefined) {
            let value = props.modelValue.getValue( config.value.field )
            if (value != undefined) model.value = value
        } else {
            console.log(45645,props.modelValue)
        }
    })

    return { input_event, click_event, model, config }
}