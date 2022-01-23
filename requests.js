// Using the fetch API to return a puzzle word 
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(promise => {
        if (!promise.ok) {throw Error(promise.statusText)}
        return promise.json()
    }).then(data => data.puzzle)
}


// Using the fetch API to return a country object
const getCountry = (countryCode) => {
    return fetch ("/countryJSON.json").then(promise => {
        if (!promise.ok) {throw Error(promise.statusText)}
        const data = promise.json()
        return data
    }).then(data => {
        return data.find(country => country.alpha2Code === countryCode)
    })
}


// Using the fetch API to return the user's data depending on their IP adress
const getLocation = () => {
    return fetch("http://ipinfo.io/json?token=85bf991c24ca2c").then(promise => {
        if (!promise.ok) {throw Error(promise.statusText)}
        return promise.json()
    })
}