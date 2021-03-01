let people = document.getElementById("people")
let planet = document.getElementById("planet")
let vehicles = document.getElementById("vehicles")

async function theData(){
    
    try {
        const webPeople = await axios.get("http://swapi.dev/api/people/") 
        const webPlanets = await axios.get("http://swapi.dev/api/planets/")
        const webVehicles = await axios.get("http://swapi.dev/api/vehicles/")
        peopleList(webPeople)
        planetList(webPlanets)
        vehiclesList(webVehicles)
        
    }
    catch(error){
        console.log(error)
    }
    
}

theData()

let peopleList = (apiData) => {
    let peopleData = apiData.data.results
    let title = document.createElement("h1")
    title.innerHTML = "People"
    title.className = "people"
    people.appendChild(title)

    peopleData.map(function(person){
        let z = document.createElement("li")
        z.innerHTML = person.name
        people.appendChild(z)
    })
}

let planetList = (apiData) => {
    let planetData = apiData.data.results
    let title = document.createElement("h1")
    title.innerHTML = "Planets"
    title.className = "planets"
    planet.appendChild(title)

    planetData.map(function(x){
        let z = document.createElement("li")
        z.innerHTML = x.name
        planet.appendChild(z)
    })
}



let vehiclesList = (apiData) => {
    let vehiclesData = apiData.data.results
    let title = document.createElement("h1")
    title.innerHTML = "Vehicles"
    title.className = "vehicles"
    vehicles.appendChild(title)

    vehiclesData.map(function(x){
        let z = document.createElement("li")
        z.innerHTML = x.name
        vehicles.appendChild(z)
    })
}