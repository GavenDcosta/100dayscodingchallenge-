a = document.getElementById('txt1')
b = document.getElementById('txt2')
c = document.getElementById('btn1')

function fun1()
 {
    b.innerHTML = a.value;
 }

c.addEventListener('click', fun1);