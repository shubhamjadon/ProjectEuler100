function sumSquareDifference(n) {
    let i = 1, sumOfSquare = 0,squareOfSum = 0;
    sumOfSquare = n*(n+1)*(2*n+1)/6;
    squareOfSum = (n*(n+1)/2)**2;
    return(squareOfSum-sumOfSquare);
}