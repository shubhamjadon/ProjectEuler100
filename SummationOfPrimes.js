function checkPrime(n){
  let sqrt = Math.sqrt(n)+1;
  for(let i=3;i<sqrt;i+=2){
    if(n%i==0) return false;
  }
  return true;
}

function primeSummation(n) {
  let i=2,sum=0;
  while(i<n){
    if(checkPrime(i)) sum+=i;
    if(i==2) i-=1;
    i+=2;
  }
  return sum;
}

console.log(primeSummation(50));
