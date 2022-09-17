a = document.getElementById('txt1')
b = document.getElementById('txt2')
add = document.getElementById('btn1')
dele = document.getElementById('del')


function addtxt()
{
    b.innerHTML += a.value
}

add.addEventListener('click', addtxt)

function deltxt()
{
    b.textContent = ''
}

dele.addEventListener('click', deltxt)