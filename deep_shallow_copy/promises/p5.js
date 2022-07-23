async function evenChecker1(i){
    if( i%2 == 0){
        return"its even"
    }else{
        throw "its odd"
        }
}

try{
    let resp = await evenChecker1(8);
    console.log(resp)
}catch(err){
    console.log(error)
}