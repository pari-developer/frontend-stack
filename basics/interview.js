const mul = (a, b) => {
  return a * b;
};

const sayHello = () => {
  console.log('Hello');
};

class EventEmitter {
  constructor() {
    this.events = {};
    this.key = 0;
  }
  on(eventName, listener) {
    if (!Object.hasOwn(this.events, eventName)) {
      // It's ok to use `{}` here since the keys will just be numbers.
      this.events[eventName] = {};
    }
    const listenerId = this.key;
    this.events[eventName][listenerId] = listener;
    this.key++;
    return {
      // Use arrow function so that `this` is preserved.
      off: () => {
        delete this.events[eventName][listenerId];
      },
    };
  }
}
const add = (a, b) => {
  return a + b;
};

//   const emitter = new EventEmitter() ;

//   emitter.on('foo',add)
//  const sub = emitter.on ('bar',mul);
//   sub.off();
//   emitter.on ('bar',sayHello)
//   console.log(emitter)

//map polyfill

Array.prototype.myMap = function (cb, thisArg) {
  let newArr = [];
  let context = thisArg ?? this;
  for (let i = 0; i < context.length; i++) {
    newArr.push(cb(context[i], i, context));
  }
  return newArr;
};

let arr = [2, 3, 4];
function double(value) {
  return value * 2;
}
// console.log(arr.myMap(double))

function mul2(value) {
  return value % 2 == 0;
}
Array.prototype.myFilter = function (cb, thisArg) {
  let newArr = [];
  let context = thisArg ?? this;
  for (let i = 0; i < context.length; i++) {
    if (cb(context[i], i, context)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// console.log(arr.myFilter(mul2))

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue ?? this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};


const value = arr.myReduce((acc,cur)=> {
    acc = acc + cur;
    return acc;
},0)
// console.log(value)

function deepClone(value) {


}

let obj = {
    user : {
        role : 'admin'
    }
}
let objA = {
    foo : [{bar : 'baz'}]
}

deepClone(obj)