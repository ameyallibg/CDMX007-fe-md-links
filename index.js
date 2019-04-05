#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const folder = process.argv[2];
const links = require('./linksValidate')

const validate = process.argv[3];


  

fs.readdir(folder, function (err, files) {

  if (err)  return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ".md") {
      let newFile = file;
      fs.readFile(`${folder}/${newFile}`, function read(err, data) {
        if (err) {
          console.log(err)
        }else{
          links.mdlinks(data)
        }
      })
    }
  })
})

