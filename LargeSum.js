function largeSum(arr) {
    let arr1 = [],arr2 = [],arr3 = [],arr4 = [],arr5 = [];
    let result1=0,result2=0,result3=0,result4=0,result5=0;

    for(let i=0;i<arr.length;i++){
      arr1.push(arr[i].substr(0,10));
      arr2.push(arr[i].substr(10,10));
      arr3.push(arr[i].substr(20,10));
      arr4.push(arr[i].substr(30,10));
      arr5.push(arr[i].substr(40,10));
    }

    for(let i=0;i<arr.length;i++){
      result1+=Number(arr1[i]);
      result2+=Number(arr2[i]);
      result3+=Number(arr3[i]);
      result4+=Number(arr4[i]);
      result5+=Number(arr5[i]);
    }

    result1 += '';
    result2 += '';
    result3 += '';
    result4 += '';
    result5 += '';

    if(result5.length>10){
      result4 = Number(result4) + Number(result5.substr(0,result5.length-arr5[0].length));
      result4 += '';
      result5 = result5.substr(result5.length-arr5[0].length,10);
    }
    if(result4.length>10){
      result3 = Number(result3) + Number(result4.substr(0,result4.length-arr4[0].length));
      result3 += '';
      result4 = result4.substr(result4.length-arr4[0].length,10);
    }
    if(result3.length>10){
      result2 = Number(result2) + Number(result3.substr(0,result3.length-arr3[0].length));
      result2 += '';
      result3 = result3.substr(result3.length-arr3[0].length,10);
    }
    if(result2.length>10){
      result1 = Number(result1) + Number(result2.substr(0,result2.length-arr2[0].length));
      result1 += '';
      result2 = result2.substr(result2.length-arr2[0].length,10);
    }
    return Number(result1.substr(0,10));
  }

  const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];
