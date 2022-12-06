const days = [
    <h3>sunday</h3>, 
    <h3>monday</h3>, 
    <h3>tuesday</h3>,
    <h3>wednesday</h3>,
    <h3>thursday</h3>,
    <h3>friday</h3>,
    <h3>saturday</h3>,
]

const para = [
    <ul>
        <ol>luffy</ol>
        <ol>naruto</ol>
        <ol>asta</ol>   
    </ul>
]

const imgs = [
    <img src="Naruto.png"/>
]

function Home(){

    return(
        <div>
            <nav>   
               <a href="https:/google.com" >Google</a>    
            </nav>  
            {days}
            <br />
            {para}
            {imgs}
            <br />
            <footer>
                <h2>variables in React</h2>
            </footer>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Home/>)