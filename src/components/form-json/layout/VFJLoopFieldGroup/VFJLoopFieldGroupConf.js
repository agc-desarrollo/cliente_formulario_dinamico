//Se usa para definir los parametros inciales de configuración del componente VFJLoopFieldGroup
export class VFJLoopFieldGroupConf {
    
    runtime_data_field = ''
    content = ''
    btn_create = { label: 'Agregar', icon: 'pi pi-plus', iconPos: 'left' }
    btn_delete = { label: '', icon: 'pi pi-times', class: 'p-button-raised p-button-rounded p-button-danger' }
    initial_values_id = ''

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}