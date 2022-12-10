//returns the width of the window on the screen
document.getElementById("one").innerHTML = window.innerWidth


//returns the height of the window on the screen
document.getElementById("two").innerHTML = window.innerHeight

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window


//returns the width of the visitors screen in pixels
document.getElementById("three").innerHTML = screen.width

//returns the height of the visitors screen in pixels
document.getElementById("four").innerHTML = screen.height

//returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar
document.getElementById("five").innerHTML = screen.availWidth

//returns the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar
document.getElementById("six").innerHTML = screen.availHeight

//returns the number of bits used to display one color.
document.getElementById("seven").innerHTML = screen.colorDepth

//returns the pixel depth of the screen.
document.getElementById("eight").innerHTML = screen.pixelDepth




//returns URL of the current page
document.getElementById("nine").innerHTML = window.location.href

//returns the name of the internet host of the current page
document.getElementById("ten").innerHTML = window.location.hostname

//returns the path name of the current page
document.getElementById("eleven").innerHTML = window.location.pathname

//returns the web protocol of the page
document.getElementById("twelve").innerHTML = window.location.protocol

//returns the no of the internet host port
//If the port number is default (80 for http and 443 for https), most browsers will display 0 or nothing.
document.getElementById("thirteen").innerHTML = window.location.port

//loads a new document
var a = document.getElementById("fourteen")
a.addEventListener("click", () => {
    window.location.assign("https://www.w3schools.com")
})


// history.back() - same as clicking back in the browser

// history.forward() - same as clicking forward in the browser

//alert() -  will alert a message

//confirm() - A confirm box is often used if you want the user to verify or accept something.

//prompt() - will help tp take the user input