//Se usa para definir los parametros inciales de configuración del componente VFJTextareaInput
import { VFJInputConfigBase } from '../VFJInputConfigBase'

export class VFJTextareaInputConf extends VFJInputConfigBase {
    rows = 5
    cols = 30

    constructor( params ){
        super (params)
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}