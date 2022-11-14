function Nav(){
    return(
        <nav>
        <img  id="img1" src="airbnb-logo.png" alt="bruh" />
        </nav>
    )
}

function Body1(){
    return(
    <div>
      <section className="sec1">
        <img  id="img2" src="photo-grid.png" alt="body" />
        <br /><br /><br />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
      </section>
    </div>
    )
}

function Body2(){
    return(
        <div className="card">
            <img src="katie-zaferes.png" className="img3"/>
            <div className="card--stats">
                <img src="star.png" alt="" className="starimg" />
                <span>5.0</span>
                <span className="gray">(6).</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="strong">From $136</span> /person</p>
            
        </div>
    )
}


function Main(){
    return(
        <div>
             <Nav />
             <Body1 />
             <Body2 />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)

/*
  function LearningBasicsOfProps(){
    return(
        const firstName="Gaven"
        const lastName="Dcosta"
        const date = new Date()  can declare the function here
        <h1>Hello {firstName} {lastName} </h1>   //anything inside {} will run as normal JS
        <h1>It is currently about {date.gethours()}!</h1>
        <h1>It is currently about {new Date.gethours()}!</h1>  //or declare directly over here

        const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }   
    <h1>Good {timeOfDay}!</h1>
    )
  }
*/