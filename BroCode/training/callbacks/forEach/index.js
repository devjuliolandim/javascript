/*let students = ["julio", "matheus", "rhyan", "gregório"]

students.forEach(capitalize)
students.forEach(print)

function capitalize(string, index, array){
    array[index] = string.charAt(0).toUpperCase() + string.substring(1)
}

function print(element){
    console.log(element)
}*/



/*let students = ["julio", "matheus", "rhyan"]

students.forEach(toUp)

function toUp(string, index, array){
    array[index] = string.charAt(0).toUpperCase() + string.slice(1)
    console.log(array[index])
} */


let students = ["mack", "sirius", "marcus"]

students.forEach(toUp)

console.log(students)


function toUp(string, index, array){
    array[index] = string[0].toUpperCase() + string.slice(1)
}