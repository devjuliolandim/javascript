function table(){

    let num = Number(document.getElementById('num').value)


    let result = document.getElementById('result')

    let string = ""

    for(let i = 1; i<= 10; i++){

        string += `${num} x ${i} = ${num * i}<br>`

    }

    result.innerHTML = string
}