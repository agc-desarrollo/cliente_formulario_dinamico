//Se usa para definir los parametros inciales de configuración del componente VFJButtonInput
import { VFJInputConfigBase } from '../VFJInputConfigBase'
export class VFJButtonInputConf extends VFJInputConfigBase {
    icon  = ''; iconPos = ''
    data = true
    action = ''
    
    constructor( params ){
        super (params)
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}