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


//db.Places.insert({"name" : "antoine suce des noeuds", lat : 2277, lng : 8786})

