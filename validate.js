const fetch = require('node-fetch');
const colors = require('colors');
const path = require('path');
const validate = process.argv[3];
const validateStats = process.argv[4];


const linksValidate = (dataLinks) =>{
   
   if (validate == '--validate') {
   
     dataLinks.forEach(function (element) {
      const linkName = path.parse(element)
      const linkContent = linkName.name
      
        fetch(element).then(response => {
         if (response.status === 200) {
            console.log(`Contenido: ${linkContent} respuesta: ${colors.green(response.status)} estatus:${colors.green(response.statusText)} link:${element.green}  `)
              
         }else if(response.status === 404){
            console.log(`respuesta: ${colors.red(response.status)} estatus:${colors.red(response.statusText)} link:${element.red} `)

         }
           
            
        }) 
      
      }) 
   }else if(validate == '--stats' ){

      console.log(`Total: ${dataLinks.length}`)

      const uniqs = dataLinks.filter(function(item, index, array) {
         return array.indexOf(item) === index;
       })
       console.log(`Unique: ${uniqs.length}`);
       


   }
   if(validate == '--stats' && validateStats == '--validate'){
      
      let responseLink = [];
      dataLinks.forEach(function (element) {   
         
           fetch(element).then(response => {
             if(response.status >= 400){
                  responseLink.push(response.status)
             }
           })
 
   })
   setTimeout(function(){
      console.log(`Broken: ${responseLink.length}`)
       },2000 )  
}
}

module.exports.linksValidate= linksValidate