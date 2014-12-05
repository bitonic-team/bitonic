var dbConfig = function(){
    var url;

    if(process.env.NODE_ENV == 'prod'){
       url =  'mongodb://mongo/bitonic'
    }
    else if(process.env.NODE_ENV == 'dev'){
        url = 'mongodb://localhost/bitonic'
    }
    else{
        url='mongodb://mongo/bitonic'
    }

    return {
        url : url
    }
}();

module.exports = dbConfig;


