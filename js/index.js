import { carTemplate } from "./template"

//Data fetch Module
let carData = []

async function fetchCarData(url) {
    const response = await fetch(url) // recieve the response body
    carData = [... await response.json()] // parsing data in JSON objects
    renderCar(carData)
}

fetchCarData('/db/car.json')


//Render Module
function renderCar(cars) {
    // container is in memory
    // return element is in memory
    const container = document.createElement('div')

    cars.forEach((car) => {
        container.append(carTemplate(car))

    })

    document.querySelector('#cards').append(container)
}