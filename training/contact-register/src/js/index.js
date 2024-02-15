//Imports
import Contact from "./contact.js"

//Constants
const RECORD_BTN = document.getElementById('record')

const SHOW_CONTACTS = document.getElementById('show')

//Functions
RECORD_BTN.addEventListener('click', () =>{

    let name = document.getElementById("name").value
    let num = document.getElementById("number").value
    let email = document.getElementById("email").value

    let newDiv = document.createElement('div')

    newDiv.innerHTML += String(name)


    SHOW_CONTACTS.appendChild(newDiv)
})
