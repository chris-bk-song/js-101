function splitAmount (bill, service, people) {
  if (service == 'good') {
    split = (bill + (bill * 0.20))/ Number(people);
    return(split);
  }
  else if (service == 'fair') {
    split = (bill + (bill * 0.15))/ Number(people);
    return(split);
  }
  else if (service == 'bad') {
    split = (bill + (bill * 0.10))/ Number(people);
    return(split);
  }
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));