/*let numbers = [1,2,3,4,5,7,8,9,100000]

let maximum = Math.max(...numbers)

console.log(maximum)*/

let a = 1
let b = 2
let c = 3
let d = 4

function sum (...numbers){

    let total = 0

    for(let number of numbers){
        total+= number
    }

    return total
}

console.log(sum(a,b,c, d))