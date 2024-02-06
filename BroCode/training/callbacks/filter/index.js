let ages = [1,2,3,4,5,6,78,12,48,15,20,26,24,25]

let adults = ages.filter(checkAge)

console.log(adults)
function checkAge(element){
    return element >=18
}