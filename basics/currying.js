//sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(sum(2)(6)(1))

function evaluate(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case 'sum':
          return a + b;
        case 'substract':
          return a - b;
      }
    };
  };
}
//  console.log(evaluate("sum")(6)(1))
//  console.log(evaluate("substract")(6)(1))

// add(2)(3)(4)(5)...(n)

function add(a) {
  return function (b) {
    if (b) {
      return add(a+b);
    } else {
      return a;
    }
  };
}

// console.log(add(2)(6)(8)())

//f(a,b,c) => f(a)(b)(c)

const sum = (a,b,c,d) => {
return a+b+c+d
}

function curry(fn) {
    return function curried(...args) {
      if(args.length>=fn.length) {
        return fn.apply(this,args)
      }else {
        return function(...args2) {
            return curried.apply(this,args.concat(args2))
        }
      }
    }
  }
  

const sum = curry(sum);
console.log(sum(1)(2)(3))


