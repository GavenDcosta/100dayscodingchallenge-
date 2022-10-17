a = document.getElementById('btn1')
b = document.getElementById('btn2')
c = document.getElementById('btn3')
d = document.getElementById('btn4')
e = document.getElementById('con1')

a.addEventListener('click', () => {
   e.style.backgroundImage = "url('luffy.jpg')"
})

b.addEventListener('click', () => {
  e.style.backgroundImage = "url('Naruto.png')"  
})

c.addEventListener('click', () => {
    e.style.backgroundImage = "url('Qin.webp')"  
})


d.addEventListener('click', () => {
    e.style.backgroundImage = "url('Goku.png')"  
})