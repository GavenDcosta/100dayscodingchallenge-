function Home({logo,link1,link2,link3,link4,name1,name2,name3,name4,webname,content,bgimg}){
   return( 
    <div className="main">
        <header className="nav">
            <img src={logo} id="logo"/>
            <nav className="content">
                <a href={link1} id="a1">{name1}</a>
                <a href={link2} id="a2">{name2}</a>
                <a href={link3} id="a3">{name3}</a>
                <a href={link4} id="a4">{name4}</a>
            </nav>
        </header>
        <body>
            <section className="parent">
                     <section className="child">
                            <h1>Welcome to {webname}</h1>
                            <p>{content}</p> 
                     </section>
                 <img src={bgimg} id="bgimg"/>    
            </section>
        </body>
    </div>
   )
}

function Main(){
    return(
        <div className="home">
            <Home
              logo="Naruto.png"
              link1="https:/www.instagram.com"
              link2="https:/www.facebook.com"
              link3="https:/www.youtube.com"
              link4="https:/www.spotify.com"
              name1="Instagram"
              name2="Facebook"
              name3="Youtube"
              name4="Spotify"
              webname="SMshortcuts"
              content="This is a website which will let you browse various social media websites"
              bgimg="fluffykins.png"            
              />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>)
