class Contact{
    constructor(name,contactNum,email){
        this.name = name
        this.contactNum = contactNum
        this.email = email
    }

    getName(){
        return this.name
    }

    getContact(){
        return this.contactNum        
    }

    getEmail(){
        return this.email
    }
}

export default Contact