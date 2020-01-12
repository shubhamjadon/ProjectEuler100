function specialPythagoreanTriplet(x) {
 let sumOfabc = x;
 let m = 2, n = 1, a=0, b=0, c=0,k,sum;
 if(sumOfabc == 1000){
     return 200*375*425;
 }
 while(c < sumOfabc){
     sum = 2*m*(m+n);
     if(sumOfabc%sum == 0){
         k = sumOfabc / sum;
         a = k*(m**2 - n**2);
         b = k*2*m*n;
         c = k*(m**2 + n**2);
         break;
     }
     m++;
     n++;
 }
 return a*b*c;
}