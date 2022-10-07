a = document.getElementById('txt1')
b = document.getElementById('txt2')
c = document.getElementById('btn1')

c.addEventListener('click', () => {
     b.innerHTML = 2022 - parseFloat(a.value)
})