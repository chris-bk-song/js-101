function tipAmount (bill, service) {
  if (service == 'good') {
    tip = bill * 0.20;
    return(tip);
  }
  else if (service == 'fair') {
    tip = bill * 0.15;
    return(tip);
  }
  else if (service == 'bad') {
    tip = bill * 0.10;
    return(tip);
  }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));