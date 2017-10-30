var $ = require('jquery');
// var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes $0 in taxes');
  }
}

console.log('Webpack Automation test#3');

var john = new Adult('John Doe', 'red');
john.greet();
john.payTaxes();

var jane = new Person('Jane Doe', 'purple');
jane.greet();

$('h2').remove();
