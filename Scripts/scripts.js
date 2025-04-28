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
let response2 = await fetch (` https://api.weatherapi.com/v1/current.json?key=69ab410e39134867a8d114611252804&q=Floridablanca `)
let info2 = await response2.json()
let name2 = document.getElementById( "cloudinfo")
name2.src = info2["current"]
cloudinfo.innerHTML = `<p> ${info2["current"]["condition"]["text"]} </p>`;


}
async function showingcloud(){
    data3 = await llamarapi() 
clouddata(data3)
}

async function tempdata(){
    let response3 = await fetch (` https://api.weatherapi.com/v1/current.json?key=69ab410e39134867a8d114611252804&q=Floridablanca `)
    let info3 = await response3.json()
    let name3 = document.getElementById( "tempe")
    name3.src = info3["current"]
    tempe.innerHTML = `<p> ${info3  ["current"]["temp_c"]}&deg </p>`;
    
    }
    async function showingtemp(){
        data4 = await llamarapi() 
    tempdata(data4)
    }
async function feelslike(){
    let response4 = await fetch (` https://api.weatherapi.com/v1/current.json?key=69ab410e39134867a8d114611252804&q=Floridablanca `)
    let info4 = await response4.json()
    let name4 = document.getElementById( "sensation")
    name4.src = info4["current"]
    sensation.innerHTML = `<p> Feels like ${info4 ["current"] ["feelslike_c"]}&deg </p>`;
        
    }
    async function showsensation(){
    data5 = await llamarapi() 
    tempdata(data5)
    }
feelslike()
showingtemp()
showingdta()
showingcloud()