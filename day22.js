a = document.getElementById('txt1')
b = document.getElementById('btn1')
c = document.getElementById('txt2')


b.addEventListener('click', () => {
    var val = a.value
    var fact=1
    for(let i=1; i<=val; i++)
    {
        fact = fact*i
    }
    c.innerHTML = fact
})