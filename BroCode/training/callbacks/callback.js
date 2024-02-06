
let array = bigArray()

sum(outputDOM,...array)


function sum(output, ...numbers){
    let total = 0

    for(let number of numbers){
        total+=number
    }

    outputDOM(total)
}

function output(value){
    console.log(value)
}

function outputDOM(value){
    document.getElementById('myLabel').innerHTML = value
}

function bigArray(){
    let array = []

    for(let i = 1; i<=100;i++){
        array.push(i)
    }

    return array
}