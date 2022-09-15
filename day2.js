b = document.getElementById('change')

function fun1()
{
    let a = document.getElementById('color').value
    document.body.style.backgroundColor = a;
}

b.addEventListener('click', fun1)