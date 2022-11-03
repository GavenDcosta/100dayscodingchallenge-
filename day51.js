

function Header(){
    return(
        <div>
            <header>
                <nav>
                <img src ="react.png"></img>   
                <h1>Bruh + Meme = Breme</h1>
                <button>Adonis</button>
                <input type="text"></input>
                </nav>
            </header>
           
        </div>
    )
}

function Foot(){
    return(
        <div>
            <footer>
            <h1>leant about the parent and child component</h1>
            <a href="http://127.0.0.1:5500/day51.html">Run Code</a>
            </footer>
        </div>
    )
}

function Body(){
    return(
        <div>
            <body>
                <p>
                To know sorrow is not terrifying. What is terrifying is to know you cant go back to the happiness you could have.
       
                 MATSUMOTO RANGIKU-BLEACH 
                 <br />
                       If you dont like your destiny, dont accept it. Instead, have the courage to change it the way you want it to be.
                </p>
            </body>
        </div>
    )
}

function Page() {
    return(
        <div>
            <Header />
            <h1>Learning about parent and child component in react</h1>
            <h1>Do the hard work especially when you dont feel like it</h1>
            <Body />
            <Foot />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />)
