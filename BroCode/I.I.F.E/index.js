//I don't need to invoke it, because it is a immediately invoked function expression

(function(){
    console.log("The game has started")
})()

//Now i can return a value in a IIFE

const result = (function(){
    const name = "Júlio César Saldanha Landim"
    return name
})()

console.log(result)