class Person {
  constructor(fullName, color) {
    this.name = fullName;
    this.favColor = color;
  }

  greet() {
    console.log(
      'Greetings, my name is ' +
        this.name +
        '.' +
        ' My favorite color is ' +
        this.favColor +
        '.'
    );
  }
}

// module.exports = Person;
export default Person;
