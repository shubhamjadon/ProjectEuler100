function factorSum(n){
  let sum=1;
  for(let i=2;i<n/2+1;i+=1){
    if(n%i==0) sum+=i;
  }
  return sum;
}
function sumAmicableNum(limit) {
  let sum=0, num, i=limit, num1, num2, arr=[];
  num = factorSum(limit)
  while(i>=220){
    num1 = factorSum(i);
    num2 = factorSum(num1);
    if(num2 == i && num1!=num2){
      if(!arr.includes(num1))
        arr.push(num1,num2)
    }
    i--;
  }
  arr.forEach((i)=>{
    sum += i;
  })
  return sum;
}
