
a = document.getElementById('txt1')
b = document.getElementById('btn1')
c = document.getElementById('txt2')


b.addEventListener('click', () => {
 var val = a.value
    if (val%2 ===0){
        c.innerHTML += a.value + 'Even'
    }
    else if(val%2 !== 0){
        c.innerHTML += a.value + 'Odd'
    }

})