
let username


document.getElementById("myButton").onclick = function(){

    username = document.getElementById("iname").value
    console.log("Your username is: " + username)

    document.getElementById("myH1").innerHTML = "Hello, " + username
}

let enrolled = false;
