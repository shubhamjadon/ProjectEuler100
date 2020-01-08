function findLcm(num1,num2){
  let j=1,multiply = num2*j;
  while(multiply<=num1*num2){
    if(multiply%num1==0){
      break;
    }
    multiply = num2*++j;
  }
  return multiply;
}

function smallestMult(n){
  let i = 4,result = 6;
  while(i<=n){
    result = findLcm(i,result);
    i++;
  }
  return result;
}

