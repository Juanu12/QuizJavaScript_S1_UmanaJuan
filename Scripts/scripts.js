async function llamarapi(){
    let response = await fetch("https://api.weatherapi.com/v1/current.json?key=69ab410e39134867a8d114611252804&q=Floridablanca") 
    let data = await response.json()
   return data
}

async function searchingdata(){
let response = await fetch (` https://api.weatherapi.com/v1/current.json?key=69ab410e39134867a8d114611252804&q=Floridablanca `)
let info = await response.json()
let name = document.getElementById( "Name")
name.src = info["location"][0]
Name.innerHTML = `${info["location"]}`;
}



async function showingdta(){
data = await llamarapi()
let name = document.getElementById( "Name")
info = await response.json()
name.src = info["location"][0]
Name.innerHTML = `${info["location"]}`;
searchingdata(data)
}

showingdta()