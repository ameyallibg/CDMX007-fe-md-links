const fetch = require('node-fetch');
const colors = require('colors');
const path = require('path');
const validate = process.argv[3];
const validateStats = process.argv[4];
const linksValidate = (dataLinks) =>{

   if(validate == undefined){
         dataLinks.forEach(function (element) {
      const linkName = path.parse(element)
      const linkContent = linkName.name
      console.log(process.argv[2],element.green, colors.magenta(linkContent))  
      }) 
   }else  if (validate == '--validate' ) {
     dataLinks.forEach(function (element) {
      const linkName = path.parse(element)
      const linkContent = linkName.name
      
        fetch(element).then(response => {
         if (response.status === 200) {
            console.log(process.argv[2],element.cyan,colors.green(response.status),colors.green(response.statusText), colors.magenta(linkContent))    
         }else if(response.status === 404){
            console.log(process.argv[2],element.bgRed,colors.bgRed(response.status),colors.bgRed(response.statusText), colors.bgRed(linkContent))
         }    
        }) 
      }) 
   }else if(validate == '--stats' ){

      console.log(`${process.argv[2]} Total: ${dataLinks.length}`)

      const uniqs = dataLinks.filter(function(item, index, array) {
         return array.indexOf(item) === index;
       })
       console.log(`${process.argv[2]} Unique: ${uniqs.length}`);
   } else console.log("opcion no valida")
   
   if(validate == '--stats' && validateStats === '--validate'){  
      let responseLink = [];
      dataLinks.forEach(function (element) {   
         
           fetch(element).then(response => {
             if(response.status >= 400){
                  responseLink.push(response.status)
             }
           })
   })
   setTimeout(function(){
      console.log(`${process.argv[2]} Broken: ${responseLink.length}`)
       },500 )  
}
}

module.exports.linksValidate= linksValidate