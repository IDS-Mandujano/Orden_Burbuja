import { agenda } from "./dependencies.js"

const add = document.getElementById("add")
add.addEventListener("click",()=>{

    let nombre = document.getElementById("name").value
    let apellido = document.getElementById("ape").value
    let tel = document.getElementById("tel").value

    agenda.addContact(nombre,apellido,tel)
    console.log(agenda.viewContacts())
})

const search = document.getElementById("search")
search.addEventListener("click",()=>{
    let nombre = document.getElementById("nameSearch").value
    let viewContact = document.getElementById("viewContact")
    viewContact.innerText = agenda.searchContact(nombre)
})

const view = document.getElementById("view")
view.addEventListener("click", ()=>{
    let window = document.getElementById("window")
    window.innerText = agenda.viewContacts()
})

const order = document.getElementById("order")
order.addEventListener("click",()=>{
    agenda.ordenamiento()
})

const delFifo = document.getElementById("delFifo")
delFifo.addEventListener("click",()=>{
    agenda.deleteFIFO()
})

