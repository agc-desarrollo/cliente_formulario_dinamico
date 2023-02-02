//Se usa para definir los parametros inciales de configuración del componente VFJColorInputConf
export class VFJColorInputConf{
    label = ''
    class = ''
    disabled = false
    field = ''
    dfield = ''
    required = false
    tooltip = ''
    inline = false

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}