a = document.getElementById('btn1')
b = document.getElementById('btn2')
modal = document.getElementById('modal')

a.addEventListener('click',()=>{
    modal.showModal();
})

b.addEventListener('click',()=>{
    modal.close();
})