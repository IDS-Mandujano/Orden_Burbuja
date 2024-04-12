import { Queue } from "./Queue.js"

export class Agenda{

    contacto

    constructor(){
        this.contacto = new Queue()
    }

    addContact(nombre,telefono){
        this.contacto.enqueue({nombre,telefono})
    }

    viewContacts(){
        return this.contacto.printQueue()
    }
    

    searchContact(nombre){
        let encontrado = false
        let contact = ""
        let tempQueue = new Queue()

        while(!this.contacto.isEmpty()){
            let contacto = this.contacto.dequeue()
            if(contacto.nombre === nombre){
                contact = contacto.nombre+" "+contacto.telefono
                encontrado = true;
                return contact
            }
            tempQueue.enqueue(contacto)
        }

        while (!tempQueue.isEmpty()) {
            this.contacto.enqueue(tempQueue.dequeue())
          }
        
        if(!encontrado){
            return "contacto no encontrado"
        }
    }

    deleteFIFO(){
        this.contacto.dequeue()
    }

}