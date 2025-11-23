

function vehicleInfo(vehicleCategory, callbackFn){
    console.log("this is " +vehicleCategory)
    callbackFn()
}
 function displayCar(){
console.log("this is a red car")
}
function displayTruck(){
console.log("this is a yellow truck")
}
function displayBike(){
console.log("this is a black bike")
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
