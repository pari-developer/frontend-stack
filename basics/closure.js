//run a function only once
function runOnce() {
  let name = 'pranita';
  let called = 0;
  return function () {
    if (called === 0) {
      console.log(`${name} is the best`);
    }
    called++;
    console.log('already subscribed');
  };
}

// const invokeMe = runOnce();

//loadash once method polyfill
let person = {
  name: 'pari',
  getName: function () {
    return this.name;
  },
};
let person2 = {
  name: 'panigrahi',
};

function myOnce(fn, context) {
  let ran;
  let executed = false;
  return function () {
    if (!executed) {
      ran = fn.apply(context || this, arguments);
      executed = true;
    }
    return ran;
  };
}

const once = myOnce(person.getName, person);
const hello = myOnce(() => {
  console.log('hello sir');
});

// memoize polyfill
function memoize(fn,context) {
  let cache = {};
  return function (...args) {
     const argsCache = JSON.stringify(args);
     if(!cache[argsCache]){
        console.log('setting cache')
        cache[argsCache] = fn.apply(context||this,args)
     }
     console.log('picking from cache cache')
     return cache[argsCache]
  };
}

function add(a,b) {
    return a+b
}
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1,2))
console.log(memoizedAdd(1,2))



