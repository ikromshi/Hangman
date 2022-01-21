const getPuzzle = (wordCount, callback) => {
    // Making an HTTP request
    const request = new XMLHttpRequest() 

    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
            
        } else if (e.target.readyState === 4) {
            callback("An error has taken place", undefined)
        }
    })

    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}


const getCountry = (countryCode, callback) => {
    // Using restcountries.eu
    const findCountry = new XMLHttpRequest()

    findCountry.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)

        } else if (e.target.readyState === 4) {
            callback("Error has occurred", undefined)
        }
    })

    findCountry.open("GET", "http://api.countrylayer.com/v2/all?access_key=920920f8f6a0aefd84f8ededde259eb9")
    findCountry.send()
}