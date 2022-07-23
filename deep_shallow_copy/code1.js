let developer1 = {name : 'himanshu',
skills: {primery : 'fullstack', secondry: 'DevOps'}
}

//let developer2= developer1;
//developer2 = {...developer1 }
//developer2 = Object.assign({} , developer1);
let developer2=JSON.parse(JSON.stringify(developer1));
developer2.name = 'himmu';
developer2.skills.primery = 'Front end';
console.log(developer1);
console.log(developer2);
                                                                    
