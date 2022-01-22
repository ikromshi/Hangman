const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(promise => {
        if (!promise.ok) {throw Error(promise.statusText)}
        return promise.json()
    }).then(data => data.puzzle)
}


const getCountry = (countryCode) => {
    return fetch ("/countryJSON.json").then(promise => {
        if (!promise.ok) {throw Error(promise.statusText)}
        const data = promise.json()
        return data
    }).then(data => {
        return data.find(country => country.alpha2Code === countryCode)
    })
}




const getCountry1 = (countryCode) => new Promise((resolve, reject) => {
    // Using restcountries.eu
    const findCountry = new XMLHttpRequest()

    findCountry.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)

        } else if (e.target.readyState === 4) {
            reject("Error has occurred")
        }
    })

    findCountry.open("GET", "http://api.countrylayer.com/v2/all?access_key=920920f8f6a0aefd84f8ededde259eb9")
    findCountry.send()
})