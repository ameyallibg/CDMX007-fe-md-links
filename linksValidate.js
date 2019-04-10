    const printLinksValidate = require('./validate')
    
    const mdlinks = (data)=>{
        let newData = data.toString();
        let newDataMatch = newData.match(/\[((.+?))\]\((http|https|ftp|ftps).+?\)/g);
        let jsonData =JSON.stringify(newDataMatch)
        let dataFinal = jsonData.match(/(https?:\/\/[^\)\s ]+)/g)
        
        printLinksValidate.linksValidate(dataFinal);
    }

module.exports.mdlinks = mdlinks
