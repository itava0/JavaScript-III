/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. On global binding the 'this' keyword refers to window. 
* 2. On Implicit binding the 'this' keyword refers to pronoun meaning when a function is called by a proceding dot.
* 3. On explicit  binding the 'this' keyword refers to the function with call or apply method.
* 4. On new Binding the 'this' keyword refers to object that is created and return by the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function welcome(name) {
  console.log(this);
  return name;
}

welcome('jame');
// Principle 2

// code example for Implicit Binding
const car = {
  year: 2016,
  make: 'Toyota',
  model: 'camry',
  own:function (year) {
    console.log(`I own a ${year} ${this.make} ${this.model}`)
  }
};

car.own(2016);

// Principle 3

// code example for New Binding


function Owncar(car){
  this.car = car;
}

let Mycar = new Owncar('I want a 2019 lexus RX350');

console.log(Mycar.car);

// Principle 4

// code example for Explicit Binding

 function prevCar(){
  console.log(this.make);
}

let lovelyOldCar ={
  year: 1999,
  make: 'Nissan',
  model: 'Sentra',
}

prevCar.call(lovelyOldCar);


