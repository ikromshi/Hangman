// Using the fetch API to return a puzzle word 
const getPuzzle = async (wordCount) => {
    const promise = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (!promise.ok) {throw Error(promise.statusText)}
    const data = await promise.json()
    return data.puzzle
}


// Integrating two fetch APIs and returning the country the user is in
const getCurrentCountry = async () => {
    const data = await getLocation()
    return await getCountry(data.country)
}


// Using the fetch API to return a country object
const getCountry = async (countryCode) => {
    const promise = await fetch ("/countryJSON.json")
    if (!promise.ok) {throw Error(promise.statusText)}

    const data = await promise.json()
    return await data.find(country => country.alpha2Code === countryCode)
}


// Using the fetch API to return the user's data depending on their IP adress
const getLocation = async () => {
    const promise = await fetch("http://ipinfo.io/json?token=85bf991c24ca2c")
    if (!promise.ok) {throw Error(promise.statusText)}
    return await promise.json()
}

export {getPuzzle as default}