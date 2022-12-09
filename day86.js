//Static

class Anime{
    constructor(name,anime){
        this.name =  name
        this.anime = anime
    }
    static ani(x){
        return x.name + " is from the anime " + x.anime 
    }
}

let Aniname = new Anime("Luffy","OnePiece")
document.getElementById("static").innerHTML = Anime.ani(Aniname)

//You can call "ani()" on the car class 
//But not on the car object
// "Aniname.ani()" will give an error 



//Inheritance

class Inheritance{
    constructor(name){
        this.name = name
    }

    parent(){
        return "My name is " + this.name
    }
}

class Inherit extends Inheritance{
    constructor(name,hobby){
        super(name)
        this.hobby = hobby
    }

    display(){
        return "My name is " + this.parent() + " , and my hobby is " + this.hobby
    }
}

let Gaven = new Inherit("Gaven", "ListeningToMusic")

document.getElementById("inheritance").innerHTML = Gaven.display()

// Use the "extends" keyword to inherit all methods from another class.
// Use the "super" method to call the parent's constructor function.



//Callbacks

function Calculate(a,b,myCallback){
       let mul = a*b
       myCallback(mul)
}

function Display(txt){
  document.getElementById("CB").innerHTML = txt  
}

Calculate(5,2,Display)


//Getters & Setters

class GetSet{
    constructor(name){
        this._name = name
        //"_" not required here
    }

    fly(){
        alert("God is always with you")
    }

    get name(){
        return this._name
        //will show error if you dont use underscore "_"
    }

    set name(newName){
        this._name = newName
    }
}

let a = new GetSet("Gaven")
a.fly()
console.log(a.name)
a.name = "Stuart"
console.log(a.name)


//Instance of Operator 
//tell us if our object is part of a class or no

console.log(a instanceof GetSet) //will return true
//will return true even in inheritance 

var c
console.log(c instanceof GetSet) //will return false