export function getJSON( str ){
    try {
        return JSON.parse( String( str ) )
    } catch (error) {
        console.log('E: ', error, str)
        return {}
    }
}