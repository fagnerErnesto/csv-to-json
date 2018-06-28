const csv = require('csvtojson')
const csvFile = 'customer-data.csv'
const fs = require('fs');
const path = require('path')
const jsonFile = path.join(__dirname, 'customer-data.json')

csv().fromFile(csvFile).then( (jsonObj) => {
    fs.writeFileSync(jsonFile, JSON.stringify(jsonObj))
})


// Do a test in generated json file
fs.readFile(jsonFile, 'utf8', function (error, data) {
    if (error) {
        console.log(error)
    }
    let obj = JSON.parse(data)
    let index = Math.floor(Math.random() * obj.length)
    console.log(obj[index]);
})