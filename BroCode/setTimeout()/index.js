let timer1 = setTimeout(firstMessage, 3000)
let timer2 = setTimeout(secondMessage, 6000)
let timer3 = setTimeout(thirdMessage, 9000)


function firstMessage(){
    alert("Hello...")
}

function secondMessage(){
    alert("Are you...")
}

function thirdMessage(){
    alert("Okay?...")
}

document.getElementById('myButton').onclick = function (){
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert("Okay, then...")
}