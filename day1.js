console.log(sessionStorage)

a = document.querySelectorAll('input')
b = document.getElementById('btn1')

   function fun1(){
    i=0;
    while(i<a.length)
    {
    sessionStorage.setItem(a[i].name,a[i].value)
    i++
    }
}

  b.addEventListener("click",fun1)

  console.log(sessionStorage)

