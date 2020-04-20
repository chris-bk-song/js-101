function totalAmount (bill, service) {
  if (service == 'good') {
    total = bill + (bill * 0.20);
    return('The total amount including tip is $ ' + total);
  }
  else if (service === 'fair') {
    total = bill + (bill * 0.15);
    return('The total amount including tip is $ ' + total);
  }
  else if (service === 'bad') {
    total = bill + (bill * 0.10);
    return('The total amount including tip is $ ' + total);
  }
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));