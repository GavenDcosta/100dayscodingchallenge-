a = document.getElementById('fname')
b = document.getElementById('lname')
c = document.getElementById('colour')
d = document.getElementById('btn1')
e = document.getElementById('txt3')
f = document.getElementById('btn2')

d.addEventListener('click', ()=> {
    localStorage.setItem('fName',a.value)
    localStorage.setItem('lName',b.value)
    localStorage.setItem('colour',c.value)
    
    e.innerHTML += JSON.stringify(localStorage.getItem('fName'))
    e.innerHTML += JSON.stringify(localStorage.getItem('lName'))
    e.innerHTML += JSON.stringify(localStorage.getItem('colour'))
    
    document.body.style.backgroundColor = c.value

    a.value = ''
    b.value = ''
    c.value = ''
})

f.addEventListener('click', ()=> {
    localStorage.clear()
})



