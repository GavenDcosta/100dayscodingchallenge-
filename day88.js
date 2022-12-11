//Cookies

//cookies is a way of storing data 
console.log(document.cookie)
document.cookie = "name = Gaven"
document.cookie = "name2 = Stuart"
//if you give the same key then the old one will get over written
document.cookie = "name = luffy"
let key = prompt("Enter key")
let value = prompt("Wenter value")

//document.cookie = `${key} = ${value}` 

//but this method wont work if the user puts a semi-colon in the input
//to avoid this we use encode URI function 

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
 console.log(document.cookie)
//to decode use the decodeURIComponent("..")



//Get Location API

const loc = document.getElementById("txt")
a = document.getElementById("btn")

a.addEventListener("click", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(show)
    }
    else{
        loc.innerHTML = "not supported"
    }
})

function show() {
    loc.innerHTML = "Latitude = " + position.coords.latitude +
  "<br>Longitude = " + position.coords.longitude;
}