const page = (
    <div>
         Enter your name:<input type="text"></input>
        <br /><br />
         Enter your Roll No:<input type="text"></input>
        <br /><br />
        Enter your fav anime:<input type="text"></input>
        <br /><br />
         Enter your fav music genere:<input type="text"></input>
        <br /><br />
        Enter your hobbies:<input type="text"></input>
        <br /><br />
        <textarea cols="20" row = "20"></textarea>
        <br /><br />       
        <button>Submit</button>
    </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(page)
