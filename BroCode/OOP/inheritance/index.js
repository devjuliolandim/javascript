class Animal{

    alive = true

    eat(){
        console.log(`This ${this.name} is eating`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }

    constructor(name, age){
        this.name = name
        this.age = age
    }

}

class Rabbit extends Animal{

    name = "rabbit"

    run(){
        console.log(`This ${this.name} is running`)
    }
    constructor(name,age,runSpeed){
        super(name,age)
        this.runSpeed = runSpeed
    }

}

class Fish extends Animal{

    name = "fish"

    swim(){
        console.log(`This ${this.name} is swimming`)
    }

}

class Hawk extends Animal{

    name = "hawk"

    fly(){
        console.log(`This ${this.name} is flying`)
    }

}

const RABBIT = new Rabbit("Falcon", 2, 40)

console.log(RABBIT.runSpeed)