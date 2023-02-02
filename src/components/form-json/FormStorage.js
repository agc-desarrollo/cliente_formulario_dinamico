
export class FormStorage {

    data_form      = {}

    update( evnt ){
        this.data_form[ evnt.config.field ] = evnt.data
    }

    getValue( id_field ){
        return this.data_form[ id_field ]
    }

    deleteField( id_field ){
        delete this.data_form[id_field]
    }
}