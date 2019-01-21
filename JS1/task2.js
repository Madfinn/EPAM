/* 21.01 Anna Melnyk(Golovenko)
Check result in console please*/
function pushDataSnake(w, h) {
    //create empty array
    const arr = new Array(h);
    for (let i = 0; i < h; i++) {
        arr[i] = new Array(w);
    }

    let num = 1;
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if(i == (h - 1)) {
                let n = w - 2;
                if (arr[i][n] === undefined) {
                    while (n >= 0) {
                        arr[i][n] = num;
                        num++;
                        n--;
                        if (n === 0 && arr[i][n] === undefined) {
                            while (i > 1) {
                                arr[i][n] = num;
                                num++;
                                i--;
                            }
                        }
                    }
                }
                //turn right
                if (i == 1) {
                    let n = 1;
                    if (arr[i][n] === undefined) {
                        while (n < w-1) {
                            arr[i][n] = num;
                            num++;
                            n++;
                        }
                    }
                }
            }
            if(j == (w - 1)) {
                let k = i;
                if (arr[k][j] === undefined) {
                    while(k < h) {
                        arr[k][j] = num;
                        num++;
                        k++;
                    }
                }
            }
            if (i === 0 && arr[i][j] === undefined ) {
                arr[i][j] = num;
                num++;
            }

            //turn down
            if(i == 2 && j == (w - 2)) {
                let k = i;
                if (arr[i][0] !== undefined && arr[k][j] === undefined) {
                    while(k < h - 1) {
                        arr[k][j] = num;
                        num++;
                        k++;
                    }
                }
            }
            //turn left
            if (i == h - 2) {
                let n = w - 3;
                if (arr[i][0] !== undefined && arr[i][n] === undefined) {
                    while (n > 0) {
                        arr[i][n] = num;
                        /*console.log("arr [ " + i + "][" + n +"] = " + num );*/
                        num++;
                        n--;
                    }
                }
            }
            //turn up
            if(i == h - 2 && j == 1) {
                let k = h - 3;
                if (arr[i][1] !== undefined &&  arr[k][j] === undefined) {
                    while(k > 1) {
                        arr[k][j] = num;
                        num++;
                        k--;
                    }
                }
            }
        }
    }
    console.log(arr);
    return arr;
}

pushDataSnake(4, 6);

