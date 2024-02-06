let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
let squares = numbers.map(square)
let cubes = numbers.map(cube)
//squares.forEach(print)

console.log(squares)
console.log(cubes)
function print(element){
    console.log(element)
}

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}