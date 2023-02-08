//Se usa para definir los parametros inciales de configuración del componente VFJDateInput
import { VFJInputConfigBase } from '../VFJInputConfigBase'
export class VFJDateInputConf extends VFJInputConfigBase {
    inline = false
    selectionMode = 'single'
    dateFormat = 'dd.mm.yy'
    showTime = false
    value = null

    constructor( params ){
        super(params)
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++){
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]}
    }
}