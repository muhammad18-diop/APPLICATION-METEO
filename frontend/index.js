let input = document.getElementById("input");
let btn =  document.getElementById("btn");
let liste = document.querySelector(".liste")
let message = document.getElementById("message")

btn.addEventListener("click", async() => {
    
    if(input.value.trim() == ""){
        liste.innerHTML = `
        <h3>Veillez renseigner un pays ou une ville </h3>
        `
        return
    }
    let response = await fetch(`http://localhost:3000/meteo/ville?ville=${input.value}`)
    let data = await response.json();
    if(data.cod == "404"){
        liste.innerHTML = `
        <h3>Pays ou Ville introuvable </h3>
        `
        return;
    }

    if(data.cod == "500"){
        liste.innerHTML = `
        <h3>Erreur lors de la recupérations des données</h3>
        `
        return
    }

    input.value = ""
    console.log(data);
    const sunrise = data.sys.sunrise;
    const heureSunrise = new Date(sunrise * 1000)
    const sunset = data.sys.sunset;
    const heureSunset = new Date(sunset * 1000);
    
    liste.innerHTML = 
    `
<div class="cards">

    <div class="card">
    <h1>Données Générales</h1>
       <h2><span>Ville</span>: ${data.name}</h2>
       <h2><span>Latitude</span>: ${data.coord.lat}</h2>
       <h2><span>Longitude</span>: ${data.coord.lon}</h2>
       <h2><span>Température</span>: ${data.main.temp} °C</h2>
       </div>

    <div class="card">
       <h1>D'autres données</h1>
       <h2><span>Température moyenne ressentie</span>: ${data.main.feels_like} °C</h2>
       <h2><span>Humidité</span>: ${data.main.humidity} %</h2>
       <h2><span>Vitesse du vent</span>: ${data.wind.speed} m/s</h2>
       <h2><span>Pression athmosphérique</span>: ${data.main.pressure}</h2>
       </div>

    <div class="card">
       <h1>Lever et Coucher du soleil</h1>
       <h2><span>Pays</span>: ${data.sys.country}</h2>
       <h2><span>Lever du soleil</span>: ${heureSunrise}</h2>
       <h2><span>Coucher du soleil</span>: ${heureSunset}</h2>
       </div>
 </div>
    `
})


input.addEventListener("keypress", async(e) => {

    const response = await fetch(`http://localhost:3000/meteo/ville?ville=${input.value}`);
        
    if(e.key === "Enter"){
        const data = await response.json();
        console.log(data);
        input.value = ""; 
    }

     

    

    
})