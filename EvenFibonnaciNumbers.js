function fiboEvenSum(n) {
  var i=1;
  var number0 = 1;
  var number1 = 2;
  var number;
  var sum = 2;
  while(i<n-1){
    number = number0 + number1;
    number0 = number1;
    number1 = number;
    //console.log(number)
    if(number%2==0 && n>=2){
      sum += number;
    }
    i++;
  }
  return sum;
}