/*ReactDOM.render(<h1>Hello, everyone!!</h1>, document.getElementById('root'))
ReactDOM.render(<p>My name is Gaven</p>, document.getElementById('root'))
ReactDOM.render(
    <ul><li>Luffy</li><li>Naruto</li></ul>,
    document.getElementById('root')
)*/

function MainContent(){
    return(
        <div>
        <h1>Hello Everyone</h1>
        <p>This is my react website</p>
        <ul><li>Luffy</li><li>Naruto</li></ul>
        <button><a href="https://www.google.com/">Enter</a></button>
        </div>
        
    )
}    
//in react use 'className' instead of 'class'
function Body(){
   return(
        <div>
        <h1 className='header'>this is my first react website</h1> 
        </div>
   )
}

ReactDOM.render(
    <div>
    <MainContent />
    <Body />
    </div>,
    document.getElementById('root')
)

//Vanilla Js
const h1 = document.createElement("h1")
h1.textContent = "imperative way to program"
h1.className = "header"
document.getElementById('root').append(h1)