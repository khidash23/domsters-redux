function Person(fullName, color) {
  this.name = fullName;
  this.favColor = color;
  this.greet = function() {
    console.log(
      'Yo ' + this.name + '.' + ' Your favorite color is ' + this.favColor + '.'
    );
  };
}

console.log('Hello from Person.js');
exports.sampleProperty = 'yo from peson';
exports.sampleFunction = function() {
  console.log('I am a function that logs');
};

module.exports = Person;
