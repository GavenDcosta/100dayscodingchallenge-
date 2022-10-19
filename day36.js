a = document.getElementById('txt1')
b = document.getElementById('txt2')
c = document.getElementById('txt3')
d = document.getElementById('btn1')

d.addEventListener('click', ()=>{
    let n = b.value
    let m = a.value
    c.innerHTML += parseFloat(m) - parseFloat(n)
    
    if(c.value%2 === 0){
        c.innerHTML += 'It is even\n'
    }
    else if(c.value%2 !== 0){
        c.innerHTML += 'It is odd\n'
    }

})