function largestPrimeFactor(number) {
    var max;
    var i=2;
        while(i<=number){
            if(number%i==0){
                max = i;
                number = number/i;
                continue;
            }
            if(i==2){
                i-=1;
            }
            i+=2;
        }
    return(max);
}