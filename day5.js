a = document.getElementById('key')
b = document.getElementById('value')
add = document.getElementById('btn1')
prnt = document.getElementById('btn2')
del = document.getElementById('btn3')

function fun1()
{
    localStorage.setItem(a.value, b.value)
}

add.addEventListener('click', fun1)

function show()
{
    Node = document.createElement('p')
    Node.textContent = JSON.stringify(localStorage)
    document.body.appendChild(Node)
}

prnt.addEventListener('click', show)

function clean()
{
    localStorage.clear()
}

del.addEventListener('click', clean)
