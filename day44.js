/*  const h1 = document.createElement('h1')
    h1.textContent = "Ill be the Pirate King"
    h1.className = "header"
    console.log(h1)
//this will also print <h1 class = "header">

    const element = <h1 className="header">This is JSX</h1>
    console.log(element)
//this will print {type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}

//JSX
ReactDOM.render(element, document.getElementById('root'))
*/


 ReactDOM.render(
       //  <h1 className="header">This is JSX</h1><p>hello</p>, 
       //this will show error ...you cannot put elements like this...always wrap them inside of a parent like div
       <div>
        <h1>This is JSX</h1>
        <p>HEllo</p>         
       </div>,
       //rendering one parent element ...It does not matter how many children we are putting as long as they are inside the parent element
    document.getElementById('root')
     )

//Another method of doing this 
//Declaring JSX as a variable
const page = (   
    <div>
       <h1>This is JSX</h1>
       <p>HEllo</p>         
    </div>
)
//console.log(page)

ReactDOM.render(
   page,
   document.getElementById('root')
)

 const lol = (
    <div>
        <nav>
            <button><a href="https://www.google.com/">Google</a></button>
            <button><a href="https://www.yahoo.com/">Yahoo</a></button>
        </nav>
    </div>
 )

 ReactDOM.render(
    lol,
    document.getElementById('root')
 )


 //if you declare the HTML as various functions then you can add all the functions in the parent element
 //if you declare the JSX as variables then you can only add one inside the ReactDOM..only the latest one will appear as the output