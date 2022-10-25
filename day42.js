one = document.getElementById('btn1')
two = document.getElementById('btn2')
three = document.getElementById('btn3')
four = document.getElementById('btn5')
five = document.getElementById('btn6')
six = document.getElementById('btn7')
seven = document.getElementById('btn9')
eight = document.getElementById('btn10')
nine = document.getElementById('btn11')
add = document.getElementById('btn4')
sub = document.getElementById('btn8')
mul = document.getElementById('btn12')
divi = document.getElementById('btn15')
calc = document.getElementById('btn13')
clr = document.getElementById('btn14')
dis = document.getElementById('screen')
mod = document.getElementById('btn17')
zero = document.getElementById('btn16')
obrac = document.getElementById('btn18')
cbrac = document.getElementById('btn19')

one.addEventListener('click', () => {
    dis.innerHTML += '1'
})

two.addEventListener('click', () => {
    dis.innerHTML += '2'
})

three.addEventListener('click', () => {
    dis.innerHTML += '3'
})

four.addEventListener('click', () => {
    dis.innerHTML += '4'
})

five.addEventListener('click', () => {
    dis.innerHTML += '5'
})

six.addEventListener('click', () => {
    dis.innerHTML += '6'
})

seven.addEventListener('click', () => {
    dis.innerHTML += '7'
})

eight.addEventListener('click', () => {
    dis.innerHTML += '8'
})

nine.addEventListener('click', () => {
    dis.innerHTML += '9'
})

add.addEventListener('click', () => {
    dis.innerHTML += '+'
})

sub.addEventListener('click', () => {
    dis.innerHTML += '-'
})

mul.addEventListener('click', () => {
    dis.innerHTML += '*'
})

divi.addEventListener('click', () => {
    dis.innerHTML += '/'
})

clr.addEventListener('click', () => {
    dis.innerHTML = ''
})


mod.addEventListener('click', () => {
    dis.innerHTML += '%'
})

obrac.addEventListener('click', () => {
    dis.innerHTML += '('
})

cbrac.addEventListener('click', () => {
    dis.innerHTML += ')'
})

zero.addEventListener('click', () => {
    dis.innerHTML += '0'
})

calc.addEventListener('click', () => {
    dis.innerHTML = eval(dis.innerHTML)
})
