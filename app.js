const calculator = {
  add : function(a, b){
    console.log(a + b);
  },
  sub: function(a, b){
    console.log(a - b);
  },
  powerof: function(a, b){
    console.log(a ** b);
  },
  divide: function(a, b){
    console.log(a / b);
  }
};


calculator.add(10, 10);
calculator.sub(10, 5);
calculator.powerof(10, 10);
calculator.divide(34, 96);





const calculator = {
  add : function(a, b){
    return(a + b);
  },
  sub: function(a, b){
    return (a - b);
  },
  powerof: function(a, b){
    return(a ** b);
  },
  divide: function(a, b){
    return(a / b);
  }
};

const plusResult = calculator.add(10, 10);

console.log(plusResult);

calculator.sub(10, 5);
calculator.powerof(10, 10);
calculator.divide(34, 96);
