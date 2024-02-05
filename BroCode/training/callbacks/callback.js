
let array = bigArray()

sum(output,...array)


function sum(output, ...numbers){
    let total = 0

    for(let number of numbers){
        total+=number
    }

    output(total)
}

function output(value){
    console.log(value)
}

function bigArray(){
    let array = []

    for(let i = 1; i<=10000;i++){
        array.push(i)
    }

    return array
}