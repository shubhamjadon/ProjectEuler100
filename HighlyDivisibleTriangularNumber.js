function countFactors(num){
  let count = 2, arr = []
  for(let i=2;i<num;i++){
    if(num%i==0){
      if(arr.find(el=> el==i)) break;
      count += 2;
      arr.push(num/i);
    };
  }
  return count;
}

function divisibleTriangleNumber(n) {
  let i=n, num, count, factors;
  while(true){
    count = 0;
    num = i*(i+1)/2;
    factors = countFactors(num);
    if(factors>n) return num;
    i++;
  }
}
