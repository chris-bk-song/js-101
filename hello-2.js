function hello(name) {
  if (name === undefined) {
    console.log('Hello, World!');
  }
  else {
    console.log('Hello, ' + name + '!');
  }
}

hello();
hello('Mustache');