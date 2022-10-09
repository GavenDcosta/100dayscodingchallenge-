a = document.getElementById('txt1')
b = document.getElementById('txt2')
c = document.getElementById('btn1')

c.addEventListener('click', () => {
    if(parseFloat(a.value)%4 === 0){
        b.innerHTML += a.value + ' is a Leap Year\n'
    } 
    else{
        b.innerHTML += a.value + ' is not a Leap Year\n'
    }
})