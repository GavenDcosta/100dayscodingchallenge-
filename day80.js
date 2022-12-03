function Music({img,composer,songName,mp3}){
    return(
        <div className="main">
            <img src={img}/>
            <div id="Name">
            <h3>Composer - {composer}</h3>
            <h4>Name - {songName}</h4>
            <audio src={mp3} loop controls></audio>
            </div>
        </div>
    )
}

function Body(){
    return(
        <div className="head">
             <Music 
                img="92keys.jpg"
                composer="92 Keys"
                songName="Uprising on Bach's Toccata"
                mp3="bachtoccata.mp3"
             />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Body/>)