
function Contact(props){
    return(
        <div className="contacts">       
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
        </div>
    )
}

                                     //Properties/Props

function Body(){
    return(

        <div className="contacts">
        <Contact 
            img="mr-whiskerson.png"
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        <Contact 
            img="fluffykins.png"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        <Contact 
            img="felix.png"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        <Contact 
            img="pumpkin.png"
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
        />
        </div>
 
                             //this method is lengthy so we use props to make code more efficient

 /*
 <div className="contacts">
        
 <div className="contact-card">
     <img src="mr-whiskerson.png"/>
     <h3>Mr. Whiskerson</h3>
     <div className="info-group">
         <img src="phone-icon.png" />
         <p>(212) 555-1234</p>
     </div>
     <div className="info-group">
         <img src="mail-icon.png" />
         <p>mr.whiskaz@catnap.meow</p>
     </div>
 </div>
 
 <div className="contact-card">
     <img src="fluffykins.png"/>
     <h3>Fluffykins</h3>
     <div className="info-group">
         <img src="phone-icon.png" />
         <p>(212) 555-2345</p>
     </div>
     <div className="info-group">
         <img src="mail-icon.png" />
         <p>fluff@me.com</p>
     </div>
 </div>
 
 <div className="contact-card">
     <img src="felix.png"/>
     <h3>Felix</h3>
     <div className="info-group">
         <img src="phone-icon.png" />
         <p>(212) 555-4567</p>
     </div>
     <div className="info-group">
         <img src="mail-icon.png" />
         <p>thecat@hotmail.com</p>
     </div>
 </div>
 
 <div className="contact-card">
     <img src="pumpkin.png"/>
     <h3>Pumpkin</h3>
     <div className="info-group">
         <img src="phone-icon.png" />
         <p>(0800) CAT KING</p>
     </div>
     <div className="info-group">
         <img src="mail-icon.png" />
         <p>pumpkin@scrimba.com</p>
     </div>
 </div>
 
</div> */

    )
}
        
    
  

ReactDOM.createRoot(document.getElementById('root')).render(<Body />)