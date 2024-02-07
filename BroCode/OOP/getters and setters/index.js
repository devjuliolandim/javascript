class Car{
    constructor(speed, gas){
        this._speed = speed
        this._gas = gas
    }

    get speed(){
        return `${this._speed}HP`
    }

    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`
    }
    set gas(value){
        if(value > 50){
            value = 50
        }else if(value<0){
            value = 0
        }
        this._gas = value
    }   
}

let car = new Car(400, 10)

console.log(car.speed)


car.gas = 51

console.log(car.gas)