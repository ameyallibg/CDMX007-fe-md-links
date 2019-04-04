const fetch = require('node-fetch');


export const linksValidate = (dataLinks) =>{
    

     dataLinks.forEach(function (element) {
        console.log(element)
        fetch(element).then(response => {
          return console.log(`respuesta: ${response.status} link:${element} `)
            
        }) 
      }) 

} 