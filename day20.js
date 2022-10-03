function showNotification(){
     const notification = new Notification('New Info', {
        body: "One piece does exist!"
    
     })

     notification.onclick = () => {
        window.location.href = 'https://google.com'
     }
}

//default  granted   denied
console.log(Notification.permission)

if (Notification.permission === "granted"){
    //alert('we have permission')
    showNotification()
}else if (Notification.permission !== "denied"){
    Notification.requestPermission().then(permission => {
        //console.log(permission)
        if(permission === 'granted'){
           showNotification()
        }
    })
}
