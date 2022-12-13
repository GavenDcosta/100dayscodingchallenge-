let count = 0

function time(){
    count++
    postMessage(count)  //Used to post a message back to the html page
    setTimeout("time()",1000)
}
time()