const fetch = require('node-fetch');
const colors = require('colors');
const validate = process.argv[3];


const linksValidate = (dataLinks) =>{
   if (validate == '--validate') {
     dataLinks.forEach(function (element) {
      //   console.log(element)
      
        fetch(element).then(response => {
         if (response.status === 200) {
            console.log(`respuesta: ${colors.green(response.status)} estatus:${colors.green(response.statusText)} link:${element.green}  `)
              
         }else if(response.status === 404){
            console.log(`respuesta: ${colors.red(response.status)} estatus:${colors.red(response.statusText)} link:${element.red} `)

         }
           
            
        }) 
      
      }) 
   }else if(validate == '--stats'){
      console.log(`Total: ${dataLinks.length}`)
      // dataLinks.forEach(function (element) {
      // fetch(element).then(response => {
         
      //    if (response.status === 404) {
      //       console.log(responseStatus.length)
            
      //    }
      // })
   })
   }
   
} 

module.exports.linksValidate= linksValidate