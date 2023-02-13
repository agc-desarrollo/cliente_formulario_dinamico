//Se usa para definir los parametros inciales de configuración del componente VFJNumber
import { VFJInputConfigBase } from '../VFJInputConfigBase'

export class VFJNumberConf extends VFJInputConfigBase {
    min               = null
    max               = null
    mode              = 'decimal'
    minFractionDigits = null
    maxFractionDigits = null
    locale            = 'es-AR'
    currency          = 'USD'
    suffix            = ''
    prefix            = ''
    step              = 1
    format            = true
    showButtons       = true

    constructor( params ){
        super (params)
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}