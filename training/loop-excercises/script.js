
//let vs var

//let is limited to the {} scope
//var is limited to the function scope

function doSomething(){
    for(var i =0 ; i<5;i++){
        console.log(i)
    }
}

doSomething()

console.log(i)