const fetch = require('node-fetch');


const linksValidate = (dataLinks) =>{
    

     dataLinks.forEach(function (element) {
        console.log(element)
        fetch(element).then(response => {
           console.log(`respuesta: ${response.status} link:${element} `)
            
        }) 
      }) 

} 

module.exports.linksValidate= linksValidate