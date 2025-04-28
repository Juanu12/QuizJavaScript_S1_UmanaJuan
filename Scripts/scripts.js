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
Name.innerHTML = `<p> ${info["location"]["name"]},${info["location"]["country"]} </p>`;

}


async function showingdta(){
data2 = await llamarapi() 
searchingdata(data2)
}

async function clouddata(){
     let response = await fetch (` https://api.weatherapi.com/v1/current.json?key=69ab410e39134867a8d114611252804&q=Floridablanca `)
let info = await response.json()
let name = document.getElementById( "Name")
name.src = info["location"][0]
Name.innerHTML = `<p> ${info["location"]["name"]},${info["location"]["country"]} </p>`;


}


showingdta()