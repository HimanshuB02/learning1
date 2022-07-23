function add(a,b){
    return a+b;
}
add(4,5)
const me = add
me(5,6)
const you = add
you(8,9)


////////////////////////////////////////////////////////////////////////////////////////////
function add(a,b){
    return a+b;
}
function addfive(x,addReference){
     return addReference(5,x)
}
addfive(3,add)

function Higherorderfinction(x,callBack){
    return callBack(5,x)
}

Higherorderfinction(19,add)
