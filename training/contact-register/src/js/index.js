//Imports
import Contact from "./contact.js"
import { contacts } from "./contactDB.js"

//Constants
const RECORD_BTN = document.getElementById('record')

const SHOW_CONTACTS = document.getElementById('show-contacts')

//Functions
RECORD_BTN.addEventListener('click', (event) =>{

    event.preventDefault()

    let name = document.getElementById("name").value
    let num = document.getElementById("number").value
    let email = document.getElementById("email").value

    if(name == ""|| num == "" || email == ""){
        alert("Please fill in the required fields")
        return
    }
    
    let contact = new Contact(name, num, email)

    addDiv(contact)
})


function addDiv(contact){

    
    let contactDiv = document.createElement('div')
    
    contactDiv.classList.add('contact')
    
    contactDiv.innerHTML = `
        <strong>Name:</strong> ${contact.getName()}<br>
        <strong>Number:</strong> ${contact.getContact()}<br>
        <strong>Email:</strong> ${contact.getEmail()}<br>
    `

    SHOW_CONTACTS.appendChild(contactDiv)

}
