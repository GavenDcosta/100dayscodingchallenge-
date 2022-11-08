function Head(){
    return(
        <div>
            <header>
                <img src="react.png" alt="logo" />
                <h2>React Facts</h2>
                <nav>
                <p>React Course- Project 1</p>
                </nav>
            </header>
            <body>
                <section>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <br />
                    <li>Was originally created by Jordan Walke</li>
                    <br />
                    <li>Has well over 100k stars on Github</li>
                    <br />
                    <li>Is maintained by Facebook</li>
                    <br />
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                </section>
            </body>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Head/>)