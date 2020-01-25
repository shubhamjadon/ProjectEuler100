function namesScores(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        while (j < arr[i].length) {
            temp = arr[i][j].charCodeAt(0) - 64;
            temp = temp * (i + 1);
            sum += temp;
            j++;
        }
    }
    return sum;
}