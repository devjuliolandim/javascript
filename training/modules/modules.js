const cars = ["Golf", "Uno", "Palio", "Lamborghini", "Limousine", "Ferrari", "Maseratti"]

const getIndexCar = (carIndex) =>{
    return cars[carIndex]
}

export {cars, getIndexCar}

export default function getAllCars(){
    return cars
}