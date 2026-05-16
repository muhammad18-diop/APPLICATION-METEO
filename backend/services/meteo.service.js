require("dotenv").config();
async function recupererDonnee(ville) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${process.env.API_CLE}&units=metric`
    );

    const data = await response.json();
    return data; 
}

module.exports = { recupererDonnee };