//Map method in arrays
let arr = [23,55,69]
let a = arr.map((value, index, array)=> {
    console.log(value,index,array)
    return value + index
})
console.log(a)

//Filter Method in arrays
let arr2 = [23,55,69,7,6,9]
let b = arr2.filter((a)=>{
    return a<10
})
console.log(b)

//Reduce method in arrays
let arr3 = [1,2,3,5,2,1]
let c = arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(c)

let d = arr3.reduce((h1,h2)=>{
    return h1*h2
})
console.log(d)


//Closures
function close(){
    var name= 'Gaven'
    function display(){
        //display is the inner function i.e closure
        console.log(name)
    }
    name="Stuart"
    return display
}
let m = close()
m()

//Class, Method, Constructers,this
class Railway{
    constructor(name,train,station){
        console.log(`Constructor ${name}, ${train}, ${station}`)
        this.name = name
        this.train = train
        this.station = station
    }

    preview(){
        alert(this.name,this.train,this.station)
    }

    submit(){
        alert(this.name + "your train is" + this.train + "and destination is" + this.station)
    }

    cancel(){
        alert(this.name + "your form is cancelled")
    }

}

let gavenForm = new Railway("Gaven", "Rajdhani Express", "Manglore")
gavenForm.preview()
gavenForm.submit()
gavenForm.cancel()
gavenForm.preview()