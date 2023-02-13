export class VFJInputConfigBase {
    label = ''
    class = 'col mb-3'
    disabled = false
    field = ''
    dfield = ''
    required = false
    autocomplete_options = ''
    tooltip = ''
    list = null
    id = 0
    placeholder = ''

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}