function tipAmount (bill, service) {
  if (service == 'good') {
    tip = bill * 0.20;
    return('The tip amount for good service is $ ' + tip);
  }
  else if (service == 'fair') {
    tip = bill * 0.15;
    return('The tip amount for fair service is $ ' + tip);
  }
  else if (service == 'bad') {
    tip = bill * 0.10;
    return('The total amount for bad service is $ ' +_tip);
  }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));