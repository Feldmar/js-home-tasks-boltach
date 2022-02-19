function sum(a) {
    return function(b) {
      return a + b;
    };
  }
  
console.log(sum(19)(774)); 
console.log(sum(-666)(13));
console.log(sum(6109066)(135573));