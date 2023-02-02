//Se usa para definir los parametros inciales de configuración del componente VFJButtonInput
export class VFJButtonInputConf {
    label = ''
    class = ''
    icon  = ''
    iconPos = ''
    disabled = false
    tooltip = ''

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}