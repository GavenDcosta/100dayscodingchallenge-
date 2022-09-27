
b = document.getElementById('btn1')

b.addEventListener('click', ()=>{
    var a = document.getElementsByTagName("template")[0]
    var clone = a.content.cloneNode(true)
    document.body.appendChild(clone)
})
