//Promises

let myPromise = new Promise(function(myResolve,myReject){
    let a = 10;
    let b = 8;

    if(a>b){
        myResolve("a is bigger")
    }
    else{
        myReject("b is bigger")
    }
})

function myDisplay(text){
      document.getElementById("promises").innerHTML = text
}

myPromise.then(
    function(value){myDisplay(value)},
    function(error){myDisplay(error)}
)


//Async & Await

async function myDisplay(){
    let myPromise = new Promise(function(myResolve,myReject){
        let a = 10;
        let b = 8;
    
        if(a>b){
            myResolve("a is bigger")
        }
        else{
            myReject("b is bigger")
        }
    })

    document.getElementById("asaw").innerHTML = await myPromise;
    
}

myDisplay()