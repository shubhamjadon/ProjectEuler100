function checkPrime(i){
    for(let j=2;j<i/2+1;j+=2){
      if(i%j==0) return false;
      if(j==2) j-=1;
    }
    return true;
  }
function nthPrime(n) {
    let i = 2,count=0;
    while(true){
        if(checkPrime(i)) count++;
        if(count==n) return i;
        if(i%2==0) i-=1;
        i+=2;
    }
}
