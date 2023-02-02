//Se usa para definir los parametros inciales de configuración del componente VFJTextInputConf
export class VFJTextInputConf{
    label = ''
    class = ''
    disabled = false
    field = ''
    dfield = ''
    required = false
    type = 'text'
    autocomplete_options = ''
    tooltip = ''

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}