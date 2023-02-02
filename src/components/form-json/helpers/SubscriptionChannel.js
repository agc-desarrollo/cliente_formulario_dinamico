export class SubscriptionChannel {
    subscriptions = {}
    data = {}
    getters = {}

    subscribe( channel, subcription_name, callback ){
        if (this.subscriptions[ channel ] === undefined ){
            this.subscriptions[ channel ] = {}
        }
        
        this.subscriptions[ channel ][ subcription_name ] = callback
    }

    async streaming( channel, data = undefined ){
        if (this.subscriptions[ channel ] !== undefined ){
            let keys = Object.keys( this.subscriptions[ channel ] )
            let prom_array = []
            
            for (let c=0; c < keys.length; c++) {
                prom_array.push( this.subscriptions[ channel ][ keys[c] ]( data ) )
            }

            await Promise.all(prom_array)
        }

    }

    setGetter( info, def_func ){
        this.getters[ info ] = def_func
    }

    async getData( info, callback, params={} ){
        if (typeof this.getters[ info ] == 'function')
            return await callback( await this.getters[ info ]( params ) )
    }
}