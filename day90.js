a = document.getElementById("btn1")
b = document.getElementById("btn2")
let w
c = document.getElementById("ans")

a.addEventListener("click", () => {
    if(typeof(w) == "undefined"){
        w = new Worker("D90.js")
    }
    w.onmessage = function(event) {
        document.getElementById("ans").innerHTML = event.data
      }
})

b.addEventListener("click", () => {
    w.terminate()
    w = undefined
})

// A web worker is a JavaScript, running in the background, without affecting the performance of the page.