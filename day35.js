a = document.getElementById('txt1')
b = document.getElementById('txt2')
c = document.getElementById('txt3')
d = document.getElementById('btn1')
e = document.getElementById('txt4')
f = document.getElementById('btn2')

d.addEventListener('click', ()=>{
    let n = b.value
    let m = a.value
    c.innerHTML = parseFloat(m) + parseFloat(n)

})

f.addEventListener('click', () => {
       e.innerHTML = parseFloat(c.value) * parseFloat(c.value)
})