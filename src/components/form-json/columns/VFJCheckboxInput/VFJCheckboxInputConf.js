//Se usa para definir los parametros inciales de configuración del componente VFJCheckboxInput
export class VFJCheckboxInputConf {
    tooltip = ''
    field_options = ''
    field = ''
    dfield = ''
    label = ''
    option_id = ''
    option_label = ''

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}