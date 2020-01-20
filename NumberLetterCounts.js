function numberLetterCounts(limit) {
  let arr = {1:3,2:3,3:5,4:4,5:4,6:3,7:5,8:5,9:4,10:3,11:6,12:6,13:8,14:8,15:7,16:7,17:9,18:8,19:8,20:6,30:6,40:5,50:5,60:5,70:7,80:6,90:6,100:7,1000:11};
  //console.log(arr[30]) 5+7+3++3
  let sum = 0,temp,temp1;
  for(let i=1; i<=limit; i++){
    if(arr[i]) sum = sum + arr[i];
    else{
      if(i<100){
        temp = Math.floor(i/10);
        sum += arr[temp*10];
        temp = i%10;
        sum += arr[temp];
      }
      else if(i>100 && i<1000){
        temp = Math.floor(i/100);
        sum = sum + arr[temp] + arr[100];
        temp = i%100;
        if(temp!=0){
          if(arr[temp]) sum = sum + arr[temp]+3;
          else{
            temp1 = Math.floor(temp/10);
            sum += arr[temp1*10];
            temp = temp%10;
            sum += arr[temp];
            sum += 3;
          }
        }
      }
    }
    if(i==100) sum += 3;
  }
  return sum;
}