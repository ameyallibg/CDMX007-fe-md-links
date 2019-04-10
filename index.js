#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const folder = process.argv[2];
const links = require('./linksValidate')

if(path.extname(folder) === ".md"){
fs.readFile(`${folder}`, function read(err, data) {
  if (err) {
    console.log(err)
  }else{
    links.mdlinks(data)
  }
})
}else{

fs.readdir(folder, function (err, files) {
  const folderRes = path.resolve(folder)
  if (err)  return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ".md") {
      let newFile = file;
      fs.readFile(`${folderRes}/${newFile}`, function read(err, data) {
        if (err) {
          console.log(err)
        }else{
          links.mdlinks(data)
        }
      })
    }
  })
})

}