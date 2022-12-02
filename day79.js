function Main({img,name,info}){
    return(
        <div className="main">            
                <img src={img}/>
                <div className="child"><h1>{name}</h1></div>
                <div className="info-group"><p>{info}</p></div>       
        </div>
    )
}

function Body(){
    return(
        <div className="Parent">    
             <Main 
             img="Naruto.png"
             name="Naruto Uzumaki"
             info="Son of Minato Namikaze"    
             />

             <Main 
             img="mike.jpg"
             name="Mike Tyson"
             info="Made of iron"
             />
        </div>
  
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Body/>)