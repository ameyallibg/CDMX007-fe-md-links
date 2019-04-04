#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch');
const folder = process.argv[2];
// console.log(folder)
// const validate = '--' + process.argv[3];
console.log(process.argv)
fs.readdir(folder, function (err, files) {

  if (err)  return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ".md") {
      let newFile = file;
      fs.readFile(`${folder}/${newFile}`, function read(err, data) {
        let newData = data.toString()
        let newDataMatch = newData.match(/(http:\/\/[^\)\s]+)/g)
        if (err) {
          console.log(err)
        } else if (newDataMatch) {
          console.log(newDataMatch);
          newDataMatch.forEach(function (element) {
            console.log(element)
            fetch(element).then(response => {
              console.log( `respuesta: ${response.status} link:${element} `)
            })
          })
        }
      })
    }
  })
})


