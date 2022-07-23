function evenStatus(i){

    if( i%2 == 0){
        return "its even"
    }else{
        return "its odd"
    }
}




function evenStatusPromise(i){
    return new Promise((resolve,reject)=>{
        if( i%2 == 0){
            resolve("its even")
        }else{
            reject("its odd")
        }
    })
   
}