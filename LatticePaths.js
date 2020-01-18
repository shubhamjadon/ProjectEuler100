function factorial(n,r=1){
    let fact = 1;
    while(r<=n){
        fact = fact*r;
        r++;
    }
    return fact;
}
function latticePaths(gridSize) {
    let result = factorial(2*gridSize,gridSize+1)/factorial(gridSize);
    return result;
  }

// In this problem a person goes exactly n times to the right
// n times to the down
// So, the question resolves to this.
// How many combinations of n can be made fron 2*n numbers
// or How many moves could be right or down from the total moves available