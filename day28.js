a = document.getElementById('txt1')
b = document.getElementById('txt2')
c = document.getElementById('btn1')
d = document.getElementById('txt3')

c.addEventListener('click', () => {
    if(a.value>b.value){
        d.innerHTML += a.value + ' is the largest\n'
    }
    else if(b.value>a.value){
        d.innerHTML += b.value + ' is the largest\n'
    }
    else if(a.value === b.value){
        d.innerHTML += 'Both  are equal\n'
    }
    
})