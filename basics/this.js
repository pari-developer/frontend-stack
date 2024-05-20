let name = "bhavesh"
let user = {
    name:"pari",
    getName : () => {
        console.log(this.name)
    }
}

user.getName() // undefined  as let and const are not attached to window and here we are refering to window .


let secondUser = {
    name : 'Nasya',
    getName : function() {
        const name = () =>{
            console.log(this.name)
        }
        name()
    }
}

// console.log(secondUser.getName()) It will print Nasya as this is coming from the parent scope
//In arrow function the this is defined according to the environment inside which its declared

class thirdUser {
    constructor(name) {
        this.name = name
    }

    getName () {
        console.log(this.name)
    }
}

const a = new thirdUser('my name is a');
// console.log(a.getName())

// output

function makeUser() {
    return {
        name : "John",
        ref : this
    }
}

let b = makeUser();
// console.log(b.ref.name) // undefined . 


// make a calculator object

let calculator = {
    read () {
        this.a = prompt("a ",0)
        this.b = prompt("b " , 0)
    },
    sum () {
        return this.a + this.b
    }
}

// console.log(calculator.read())

//Implement calc.add(10).multiply(5)

let calc = {
     total : 0,
    add (para) {
      this.total =  this.total + para;
      return this;
    },
    mul(para) {
        this.total =  this.total * para
        return this;
    }


}
const val = calc.add(20).mul(2);
// console.log(val.total)



let obj = {name : 'mummy'}
function getName (age) {
    return`My name is ${this.name} and age is  ${age}`
}
const later = getName.bind(obj,[24])
// console.log(later(obj,[22]))

const age = 6;
let person = {
    name : 'Ayush',
    age : 16 ,
    getAge : function () {
       return `My age is ${this.age}`
    }
}
let person2 = {age : 68};

// console.log(person.getAge.call(person2))


const array = ["a","b"];
const elements = [0,1,2];

// elements.push.apply(elements,array)
// console.log(elements)


//Polyfill of call method

let bj = {name : 'laila'};
function getName(){
    return this.name
}

Function.prototype.myCall = function (context, ...args) {
  if(typeof this !== 'function' ) {
    throw new Error('Not Callable')
  }
  context.fn = this;
  return context.fn(...args)
}

// console.log(getName.myCall(bj))
// console.log(getName.call(bj))

//Polyfill of apply method

Function.prototype.myApply = function (context,...args) {
    if(typeof this !== 'function'){
        throw new Error('Not Callable')
    }
    context.fn = this;
    return context.fn(args)
}
console.log(getName.myApply(bj),'apply')

//Polyfill of bind method 

Function.prototype.myBind = function (context,...args1) {
    if(typeof this !== 'function'){
        throw new Error('not callable')
    }
    context.fn = this;
    return function(...args2) {
       return context.fn(...args1,...args2)
    }
}
const c = getName.myBind(bj)
console.log(c(),'bind')