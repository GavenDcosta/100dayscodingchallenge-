function Body(){
    return(
        <div>
            <header>
                <img src="Naruto.png" alt="pic" />
            </header>
            <body>
                <h1>Naruto Uzumaki</h1>
               
                <h3>Hokage</h3>
                <br />
                <button>E-Mail</button><button>Instagram</button>
                <br /><br />
                
                <p>
                    <h2>About:</h2>Hard working guy and will always try to <br />improve himself
                    <br />
                    <br />
                    <h2>Skills:</h2>A Ninja
                </p>
                <footer>Location: Konoha village(Hidden Leaf)</footer>
            </body>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Body />)