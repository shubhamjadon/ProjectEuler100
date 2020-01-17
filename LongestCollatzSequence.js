function longestChain(num){
  let count = 0;
  while(num!=1){
    if(num%2==0) num = num/2;
    else num = 3*num + 1;
    count++;
  }
  return count;
}

function longestCollatzSequence(limit) {
  let j=0, lc = 0,result = 0;
  for(let i=2;i<limit;i++){
    j = longestChain(i);
    if(j>lc){
      lc = j;
      result = i;
    }
    }
  return result;
}