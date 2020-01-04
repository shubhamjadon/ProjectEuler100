function multiplesOf3and5(number) {
  number = number-1;
  var sum=0;
  while(number>=3){
    if(number%3==0 || number%5==0){
      sum += number;
    }
    number-=1;
  }
  return sum;
}

