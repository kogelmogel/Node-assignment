const fs = require('fs')
const countryname = process.argv[2]
const fileReader = require('./json-file-reader')


fileReader("countries.json", function (content) {
    content.find(function (country) {
        if (country.name === countryname) {
            console.log('Country: ' + country.name)
            console.log('Top level domain: ' + country.topLevelDomain)
        }
    });
})