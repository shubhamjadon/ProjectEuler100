function maximumPathSumI(triangle) {
    let sum=0, i=0, j=0, m=triangle.length, n=triangle[0].length;
    i = m-2;
    while(i>=0){
        j=0;
        while(triangle[j]){
            triangle[i][j] += Math.max(triangle[i+1][j],triangle[i+1][j+1]);
            j++;
        }
        i--;
    }
    return triangle[0][0];
}
