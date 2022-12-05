/*

if setup was not there in the code then it wont come on the output screen

function Condition(props){
    return(
        <div>   
            {props.setup && <h3>Setup: {props.setup}</h3>}   
            <p>Punchline: {props.punchline}</p>
        </div>
    )
}

function Cond(){
    return(
        <div>
            <Condition
              setup = "One piece"
              punchline = "Even If i die trying, atleast i tried"
            />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Cond/>)


using variable in react 


function Displayvar(){
 const colours = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"]
    return(
        <div>
              {colours}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Displayvar/>)


function Displaystr(){
    const colours = [
        <h3>Red</h3>, 
        <h3>Orange</h3>, 
        <h3>Yellow</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>,
    ]
    return(
        <div>  
            {colours}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Displaystr/>)
*/

//Short cut for props 

function Joke(props){
    return(
        <div>   
            <h1>{props.setup}</h1>
            <h2>{props.punchline}</h2>
        </div>
    )
}

const Jokes= [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]

function Joke(){
    const jokeElements = Jokes.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline}/>
    })
    return(
        <div>
            {jokeElements}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Joke/>)