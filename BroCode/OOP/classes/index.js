class Player{
    health = 50

    pause(){
        console.log('You paused the game.')
    }

    exit(){
        console.log('You exited the game')
    }
}

const PLAYER_1 = new Player()

// CONSTRUCTOR

class Student{

    constructor(name,age,gpa){
        this.name = name
        this.age = age
        this.gpa = gpa
    }

    study(){
        console.log(`${this.name} is studying!`)
    }
}

class Car{

    static carNumber = 0

    constructor(model){
        this.model = model
        Car.carNumber+= 1
    }
}

let car1 = new Car("Ferrari")
let car2 = new Car("Mercedes")
let car3 = new Car("Volvo")

console.log(Car.carNumber)
