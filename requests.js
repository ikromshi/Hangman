const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
        // Making an HTTP request
        const request = new XMLHttpRequest() 

        request.addEventListener("readystatechange", (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                resolve(data.puzzle)
                
            } else if (e.target.readyState === 4) {
                reject("An error has taken place")
            }
        })
    
        request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        request.send()
})


const getCountry = (countryCode) => new Promise((resolve, reject) => {
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