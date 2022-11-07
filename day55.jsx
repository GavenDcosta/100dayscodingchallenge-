
import Luffy from "Hed" 
import Page from "Page"  
import Fuffy from "Til"  //write file name here
//can write anything instead of page but to avoid confusion ....

function Head(){
    return(
        <div>     
           <Page />
           <Luffy/>
           <Fuffy/>
            <h1>learning about components in react</h1>
            <ol>
                <li>All the best</li>
            </ol>
        
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Head />)