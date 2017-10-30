var $ = require('jquery');
var Person = require('./modules/Person');

var john = new Person('John Doe', 'red');
john.greet();
console.log(john);

var jane = new Person('Jane Doe', 'green');
jane.greet();

// $('h2').remove();
