let p = new Promise((resolve , reject) =>{
    let a = 1+2
    if (a == 3){
        resolve('success')

    }else{
        reject('failed')
      }
})



p.then((messenge) => {
    console.log ('this is in the then ' + messege)
}).catch((messege)=> {
    console.log ('this is in the catch ' + messege)
})