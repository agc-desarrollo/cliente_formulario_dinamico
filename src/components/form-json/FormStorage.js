
export class FormStorage {

    data_form      = {}
    field_options  = {}
    initial_values = {}

    update( evnt ){
        let p = evnt.config
        console.log(987979,evnt)
        if ( p.list != undefined && p.list != null ){
            if (this.data_form[ p.list ] == undefined) 
                this.data_form[ p.list ] = []
            
            if (this.data_form[ p.list ][ Number(p.id) ] == undefined)
                this.data_form[ p.list ][ Number(p.id) ] = {}
            
            let is_new = true
            for (let c=0; c < this.data_form[ p.list ].length; c++)
                if (this.data_form[ p.list ][ c ]?.[ '_i' ] == Number(p.id)) {
                    this.data_form[ p.list ][ c ][ p.field ] = evnt.data
                    is_new = false
                    break;
                }

            if (is_new){
                this.data_form[ p.list ][ Number(p.id) ][ p.field ] = evnt.data
                this.data_form[ p.list ][ Number(p.id) ][ '_i' ]    = Number(p.id)
            }
            
            let aux = []
            for (let c = 0; c < this.data_form[ p.list ].length; c++)
                if (this.data_form[ p.list ][c] != undefined && this.data_form[ p.list ][c] != null ) aux.push(this.data_form[ p.list ][c])

            this.data_form[ p.list ] = aux
        } else 
            this.data_form[ p.field ] = evnt.data
    }

    delete( evnt ){
        if (this.data_form[evnt.list] == undefined)
            return false

        let aux = []
        for (let c=0; c < this.data_form[evnt.list].length; c++)
            if (this.data_form[evnt.list][c]._i != evnt.id)
                aux.push( this.data_form[evnt.list][c] )
        
        this.data_form[evnt.list] = aux
        return true
    }

    getValue( id_field ){
        if (this.data_form != undefined)
            return this.data_form[ id_field ]
    }

    deleteField( id_field ){
        delete this.data_form[id_field]
    }
}