const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZGlvZ29sYWNlcmRhIiwiYSI6ImNqdGQ5NTRncDE1MHo0M3Q1OGJ3amE5c3IifQ.cYMGXpV-yeIOitdbzCCPbQ&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to geocoding service', undefined)
        } else if (body.features.length === 0) {
            callback('Location not found', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode