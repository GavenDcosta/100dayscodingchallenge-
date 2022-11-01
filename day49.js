function Page() {      //Always write the function name in pascal case in react 
    return(
    <div>
        <header>
            <nav>
                <img src="react.png"></img>
                <button><a href ="https://www.google.com/">Google</a></button>
                <button><a href ="https://www.yahoo.com/">yahoo</a></button>
            </nav>
        </header>
        <h1>Some of my favourite quotes</h1>
          <ol>
            <li>Do the hard work especially when you dont feel like it</li>
            <li>Every second you waste is another second that your parents have to work</li>
            <li>Dont feel the pain, make the pain feel how strong you are</li>
            <li>It is a shame for a man to get old without seeing the full capacity that his body can acheive</li>
          </ol>
          <footer>
            <p>Making a react webpage using Functions</p>
          </footer>
    </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />)