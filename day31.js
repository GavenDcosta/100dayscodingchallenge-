a = document.getElementById('txt1')
b = document.getElementById('btn')
c = document.getElementById('txt2')

b.addEventListener('click', () => {
    switch(parseFloat(a.value))
{
    case 1:
        c.innerHTML = 'Sunday'
        break

    case 2:
         c.innerHTML = 'Monday'
        break

    case 3:
        c.innerHTML = 'Tuesday'
        break
    
    case 4:
        c.innerHTML = 'Wednesday'
        break

    case 5:
        c.innerHTML = 'Thursday'
        break

    case 6:
        c.innerHTML = 'Friday'
        break
    
    case 7:
        c.innerHTML = 'Saturday'
        break
       
}

})
