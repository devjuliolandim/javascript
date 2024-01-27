let num = document.querySelector("input#number")
let area = document.querySelector("select#numbers")
let res = document.querySelector("div#results")
let numbersSelected = []

function isNumber(number){
    if(Number(number) < 1 || Number(number)> 100){
        return false
    }else{
        return true
    }
}

function isOnTheList(number, numbersSelected){
    if(numbersSelected.indexOf(Number(number)) != -1){
        return true
    }else{
        return false
    }
}

function addNumber(){
    if(isNumber(num.value) && !isOnTheList(num.value, numbersSelected)){

        numbersSelected.push(Number(num.value))

        let option = document.createElement("option")
        option.text = `Number ${num.value} was added`
        area.appendChild(option)
        res.innerHTML = ""

    }else{
        alert("This number was already picked or it's not a valid number")
    }

    num.value = ""
    num.focus()
}

function showResults(){
    if(numbersSelected.length>=1){
        
        res.innerHTML = ""
        res.innerHTML = `<br><p>The number of added numbers is <strong>${numbersSelected.length}</strong></p>`
        res.innerHTML += `<br><p>The biggest number is <strong>${bigger(numbersSelected)}</strong></p>`
        res.innerHTML += `<br><p>The smallest number is <strong>${smaller(numbersSelected)}</strong></p>`
        res.innerHTML += `<br><p>The sum of all the numbers is <strong>${sum(numbersSelected)}</strong></p>`
        res.innerHTML += `<br><p>The arithmetic average of all the numbers is <strong>${arithmeticAverage(numbersSelected)}</strong></p>`
        res.innerHTML += `<br><p>The amount of even numbers is <strong>${evenNumbers(numbersSelected)}</strong></p>`
        res.innerHTML += `<br><p>The amount of odd numbers is <strong>${oddNumbers(numbersSelected)}</strong></p>`

    }else{
        alert("You didn't pick any number")
    }
}

function bigger(list){
    let bigger = list[0]

    for (let index = 0; index < list.length; index++) {
        if(list[index]> bigger){
            bigger = list[index]
        }
    }

    return bigger
}

function smaller(list){

    let smaller = list[0]

    for(let i = 0; i<list.length; i++){
        if(list[i]< smaller){
            smaller = list[i]
        }
    }

    return smaller
}

function sum(list){
    let sum = 0
    
    for(let i = 0; i< list.length; i++){
        sum+= list[i]
    }

    return sum
}

function arithmeticAverage(list){
    return sum(list)/list.length
}

function evenNumbers(list){
    let evennum = 0

    for(let i = 0; i<list.length;i++){
        if(list[i]%2 == 0){
            evennum++
        }
    }

    return evennum
}

function oddNumbers(list){
    let oddnum = 0

    for (let i = 0; i < list.length; i++) {
        if(list[i]%2 !=0){
            oddnum++
        }
    }

    return oddnum
}

function clean(){
    numbersSelected.splice(0,numbersSelected.length)
    area.innerHTML = ""
    res.innerHTML = ""
}