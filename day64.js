// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name} = person
// console.log(name)

function Contact({img, name, nickname, Quote}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <p>{nickname}</p>
            </div>
            <div className="info-group">               
                <p>{Quote}</p>
            </div>
        </div>
    )
}


function Body(){
    return(

        <div className="contacts">
        <Contact 
            img="mike.jpg"
            name="Mike Tyson"
            nickname="Iron Mike"
            Quote="Everyone has a plan till they get punched in the face"
        />
        <Contact 
            img="ali.jpg"
            name="Mohammad Ali"
            nickname="Butterfly"
            Quote="Float like a butterfly, Sting like a bee"
        />
        <Contact 
            img="Naruto.png"
            name="Uzumaki Naruto"
            nickname="The seventh hokage"
            Quote="saasuuukkeeeeeeeee"
        />
        <Contact 
            img="luffy.jpg"
            name="Monkey D Luffy"
            nickname="Strawhat Luffy"
            Quote="If i die trying, then atleast i tried"
        />
        </div>
 
    )
}
        
    
  

ReactDOM.createRoot(document.getElementById('root')).render(<Body />)