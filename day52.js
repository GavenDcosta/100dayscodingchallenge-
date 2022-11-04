function Head(){
    return(
   <div>
    
    <header className="head">
    <img src="react.png"></img>
    <nav>
       <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
    </nav>
    </header>
    <body>
        <center><h1>Styling in react</h1></center>
        <footer>
            <p>Have a nice day</p>
        </footer>
    </body>
   </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Head />)