function prom(complete){
    return newPromise(function(resolve,reject){
        if(complete){
            resolve("this is successful");
        }else{
            reject("this is an error");
        }
    })
}