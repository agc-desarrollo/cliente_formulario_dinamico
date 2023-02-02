//Se usa para definir los parametros inciales de configuración del componente VFJTextareaInput
export class VFJTextareaInputConf{
    label = ''
    class = ''
    disabled = false
    field = ''
    dfield = ''
    required = false
    tooltip = ''
    rows = 5
    cols = 30

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}