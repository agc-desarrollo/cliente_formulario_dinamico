//Se usa para definir los parametros inciales de configuración del componente VFJSelectInput
import { VFJInputConfigBase } from '../VFJInputConfigBase'

export class VFJSelectInputConf extends VFJInputConfigBase {
    option_id     = ''
    option_label  = ''
    field_options = ''

    constructor( params ){
        super (params)
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}