import axios from 'axios'

export class DataOrigin{
    origins_def = {}
    origins_data = {}
    
    constructor( data_origins ){console.log(2342343,data_origins)
        this.origins_def = this.parse_data_origin(data_origins)
    }

    parse_data_origin( input ){
        if (input == undefined) return {}
        let aux = {}
        for (let c=0; c < input.length; c++)
            aux[input[c].alias] = input[c]
        return aux
    }

    async getData( key ){
        if (this.origins_def[key] == undefined) return undefined
        if (this.origins_data[key] != undefined) return this.origins_data[key]
        
        let cnf = this.origins_def[key]
        if (cnf.url == undefined || cnf.url == '')
            return cnf.options

        let resp = await axios.get(cnf.url)
        if (resp.status == 200){
            this.origins_data[key] = resp.data
            return resp.data
        } else {
            console.log('Error!! data not found')
            return undefined;
        }
    }
}

export class FormStorage {

    data_form      = {}
    field_options  = {}
    initial_values = {}

    constructor( params = {}){
        this.data_form = params.data_form ? params.data_form : {} 
    }

    update( evnt ){
        let p = evnt.config
        //console.log(987979,evnt)
        if ( p.list != undefined && p.list != null ){
            if (this.data_form[ p.list ] == undefined) 
                this.data_form[ p.list ] = []
            
            if (this.data_form[ p.list ][ Number(p.id) ] == undefined)
                this.data_form[ p.list ][ Number(p.id) ] = {}
            
            let is_new = true
            for (let c=0; c < this.data_form[ p.list ].length; c++)
                if (this.data_form[ p.list ][ c ]?.[ '_i' ] == Number(p.id)) {
                    this.data_form[ p.list ][ c ][ p.key ] = evnt.data
                    is_new = false
                    break;
                }

            if (is_new){
                this.data_form[ p.list ][ Number(p.id) ][ p.key ] = evnt.data
                this.data_form[ p.list ][ Number(p.id) ][ '_i' ]    = Number(p.id)
            }
            
            let aux = []
            for (let c = 0; c < this.data_form[ p.list ].length; c++)
                if (this.data_form[ p.list ][c] != undefined && this.data_form[ p.list ][c] != null ) aux.push(this.data_form[ p.list ][c])

            this.data_form[ p.list ] = aux
        } else {
            if (this.data_form == undefined)
                this.data_form = {}
            this.data_form[ p.key ] = evnt.data
        }
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