//Se usa para definir los parametros inciales de configuración del componente VFJRangeInput
import { VFJInputConfigBase } from '../VFJInputConfigBase'

export class VFJRangeInputConf extends VFJInputConfigBase{
    step = 1
    min  = 0
    max  = 100
    range = false

    constructor( params ){
        super (params)
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}