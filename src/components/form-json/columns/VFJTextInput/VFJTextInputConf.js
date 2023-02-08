//Se usa para definir los parametros inciales de configuración del componente VFJTextInputConf
import { VFJInputConfigBase } from '../VFJInputConfigBase'

export class VFJTextInputConf extends VFJInputConfigBase {
    type = 'text'

    constructor( params ){
        super (params)
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}