let count = 0
let label = document.getElementById('myLabel')

document.getElementById('decrease').onclick = function(){
    count -= 1
    label.innerHTML = count
}

document.getElementById('increase').onclick = function(){
    count += 1
    label.innerHTML = count
}

document.getElementById('reset').onclick = function(){
    count = 0
    label.innerHTML = count
}