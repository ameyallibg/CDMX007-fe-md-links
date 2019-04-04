    const printLinksValidate = require('./validate')
    
    const mdlinks = (err,data)=>{
        if (err) {
            console.log(err)
          }else {


    
        let newData = data.toString();
        let newDataMatch = newData.match(/((http|https):\/\/[^\)\s]+)/g);
        printLinksValidate.linksValidate(newDataMatch);


          }
    }

module.exports.mdlinks = mdlinks
