function Nav(){
    return(
        <nav>
        <img  id="img1" src="luffy.jpg" alt="bruh" />
        </nav>
    )
}

function Body1(){
    return(
    <div>
      <section className="sec1">
        <img  id="img2" src="bodyimg.png" alt="body" />
        <br /><br /><br />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
      </section>
    </div>
    )
}



function Main(){
    return(
        <div>
             <Nav />
             <Body1 />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)