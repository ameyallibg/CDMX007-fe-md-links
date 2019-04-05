    const printLinksValidate = require('./validate')
    
    const mdlinks = (data)=>{
        let newData = data.toString();
        let newDataMatch = newData.match(/((http|https):\/\/[^\)\s]+)/g);
        printLinksValidate.linksValidate(newDataMatch);
    }

module.exports.mdlinks = mdlinks
