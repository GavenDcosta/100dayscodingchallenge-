//Rendering Normally

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <h1>Best Piano pieces</h1>
        <ol>
            <li><a href ="https://open.spotify.com/playlist/1OjkYP9AM98WJhT8RCK1NG?si=b5e655117eb54739">Moonlight sonata By Ludwing van Beethoven</a></li>
            <li><a href="https://open.spotify.com/album/4sRW98KImZVg7OCZQ2Jljz?si=_Gljdhs4Qimx0eRxqUQTgg">Passacaglia by George Frideric Handel</a></li>
            <li><a href="https://open.spotify.com/album/4OAB3uX8M7O7ehA8YwTFau?si=okPsNUY4QbGOmCCzWHKcmQ">Fantise Impromptu by Frederic Chopin</a></li>
        </ol>
    </div>
)

//Rendering by using Variables

const page = (
    <div>
        <img src ="react.png"></img>     
    </div>
)

ReactDOM.createRoot(document.getElementById('groot')).render(page)

//Rendering by using functions

function Root(){
    return(      //always write return inside the function
    <div>
        <h1>Its never too late</h1>
    </div>
    )
}

ReactDOM.createRoot(document.getElementById('NNN')).render(<Root />)  //Always write function name in pascall case in react