a = document.getElementById('btn1')
b = document.getElementById('btn2')

a.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('bg1.jpg')"
})

b.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('bg2.jpg')"
})