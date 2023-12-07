
let Arr;

function fA() {
    var table = '';
    var rows = document.getElementsByName('rowA')[0].value;
    var cols = document.getElementsByName('colA')[0].value;

    var count = 1;
    for (var r = 0; r < rows; r++) {
        table += '<tr>';
        for (var c = 0; c < cols; c++) {
            table += '<th><input type="number" name="A' + count + '"></th>';
            count++;
        }
        table += '</tr>';
    }
    document.getElementById("A").innerHTML = ('<table>' + table + '</table>');
}

function fB() {
    var table = '';
    var rows = document.getElementsByName('rowB')[0].value;
    var cols = document.getElementsByName('colB')[0].value;

    var count = 1;
    for (var r = 0; r < rows; r++) {
        table += '<tr>';
        for (var c = 0; c < cols; c++) {
            table += '<th><input type="number" name="B' + count + '"></th>';
            count++;
        }
        table += '</tr>';
    }
    document.getElementById("B").innerHTML = ('<table>' + table + '</table>');
}

function fAdd() {

    var rowsA = document.getElementsByName('rowA')[0].value;
    var colsA = document.getElementsByName('colA')[0].value;
    var rowsB = document.getElementsByName('rowB')[0].value;
    var colsB = document.getElementsByName('colB')[0].value;


    if (rowsA != rowsB || colsA != colsB) return document.getElementById("hasile").innerHTML = 'Ordo matriks tidak sama';
    // let A = new Array(rowsA);
    // for (let k = 0; k < rowsA; k++)
    //     A[k] = new Array(colsA);

    // var count = 1;
    // let i, j;
    // for (i = 0; i < rowsA; i++)
    //     for (j = 0; j < colsA; j++)
    //         A[i][j] = document.getElementsByName('A'+count)[0].value;

    // var hsl = '';
    // for (i = 0; i < rowsA; i++){
    //     for (j = 0; j < colsA; j++)
    //         hsl += C[i][j] + ' ';
    //     hsl += '<br>';
    // }

    //var mtrA = [[],[]];

    //var count = 1;
    // for (var i = 0; i < rowsA; i++){
    //     for (var j = 0; j < colsA; j++){
    //         mtrA[i][j] = document.getElementsByName('A'+count)[0].value;
    //     }

    // }

    // let A = [ [1, 1, 1, 1],
    // 		[2, 2, 2, 2],
    // 		[3, 3, 3, 3],
    // 		[4, 4, 4, 4]];

    let A = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        A[k] = new Array(colsA);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsA; i++)
        for (j = 0; j < colsA; j++) {
            A[i][j] = document.getElementsByName('A' + count)[0].value;
            count++;
        }

    let B = new Array(rowsB);
    for (let k = 0; k < rowsB; k++)
        B[k] = new Array(colsB);

    count = 1;
    for (i = 0; i < rowsB; i++)
        for (j = 0; j < colsB; j++) {
            B[i][j] = document.getElementsByName('B' + count)[0].value;
            count++;
        }

    // let C = new Array(rowsB);
    // for (let k = 0; k < rowsB; k++)
    //     C[k] = new Array(colsB);

    // for (i = 0; i < rowsB; i++)
    //     for (j = 0; j < colsB; j++){
    //         C[i][j] = A[i][j]*1 + B[i][j]*1;
    //     }

    var hsl = '';
    for (i = 0; i < rowsA; i++) {
        for (j = 0; j < colsA; j++)
            hsl += (A[i][j] * 1 + B[i][j] * 1) + " ";
        hsl += "<br>";
    }

    // TEST
    // for (i = 0; i < rowsA; i++)
    // {
    //     for (j = 0; j < colsA; j++)
    //         hsl += A[i][j]*1 + " ";
    //     hsl += "<br>";
    // }

    //var no1 = document.getElementsByName('A'+count)[0].value;

    //document.getElementById("hasile").innerHTML=hsl;
    document.getElementById("hasile").innerHTML = hsl;
}

function fSub() {

    var rowsA = document.getElementsByName('rowA')[0].value;
    var colsA = document.getElementsByName('colA')[0].value;
    var rowsB = document.getElementsByName('rowB')[0].value;
    var colsB = document.getElementsByName('colB')[0].value;

    if (rowsA != rowsB || colsA != colsB) return document.getElementById("hasile").innerHTML = 'Ordo matriks tidak sama';

    let A = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        A[k] = new Array(colsA);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsA; i++)
        for (j = 0; j < colsA; j++) {
            A[i][j] = document.getElementsByName('A' + count)[0].value;
            count++;
        }

    let B = new Array(rowsB);
    for (let k = 0; k < rowsB; k++)
        B[k] = new Array(colsB);

    count = 1;
    for (i = 0; i < rowsB; i++)
        for (j = 0; j < colsB; j++) {
            B[i][j] = document.getElementsByName('B' + count)[0].value;
            count++;
        }

    var hsl = '';
    for (i = 0; i < rowsA; i++) {
        for (j = 0; j < colsA; j++)
            hsl += (A[i][j] * 1 - B[i][j] * 1) + " ";
        hsl += "<br>";
    }

    //var no1 = document.getElementsByName('A'+count)[0].value;

    document.getElementById("hasile").innerHTML = hsl;
    //document.getElementById("hasile").innerHTML=rowsA+colsA;
}

function fTimes() {
    var rowsA = document.getElementsByName('rowA')[0].value;
    var colsA = document.getElementsByName('colA')[0].value;
    var rowsB = document.getElementsByName('rowB')[0].value;
    var colsB = document.getElementsByName('colB')[0].value;

    if (colsA != rowsB) return document.getElementById("hasile").innerHTML = 'Tidak dapat melakukan perkalian';

    let A = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        A[k] = new Array(colsA);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsA; i++)
        for (j = 0; j < colsA; j++) {
            A[i][j] = document.getElementsByName('A' + count)[0].value;
            count++;
        }

    let B = new Array(rowsB);
    for (let k = 0; k < rowsB; k++)
        B[k] = new Array(colsB);

    count = 1;
    for (i = 0; i < rowsB; i++)
        for (j = 0; j < colsB; j++) {
            B[i][j] = document.getElementsByName('B' + count)[0].value;
            count++;
        }

    var hsl = '';
    let res;
    for (i = 0; i < rowsA; i++) {
        for (j = 0; j < colsB; j++) {
            res = 0;
            for (var k = 0; k < colsA; k++) {
                res += A[i][k] * B[k][j];
                if (k == colsA - 1)
                    hsl += res + " ";

            }
        }
        hsl += "<br>";
    }

    //var no1 = document.getElementsByName('A'+count)[0].value;

    document.getElementById("hasile").innerHTML = hsl;
    //document.getElementById("hasile").innerHTML=rowsA+colsA;
}

function fpangkatA() {
    var rowsA = document.getElementsByName('rowA')[0].value;
    var colsA = document.getElementsByName('colA')[0].value;
    var pangkat = document.getElementsByName('pangkatA')[0].value;

    let A = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        A[k] = new Array(colsA);

    let H = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        H[k] = new Array(colsA);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsA; i++)
        for (j = 0; j < colsA; j++) {
            A[i][j] = H[i][j] = document.getElementsByName('A' + count)[0].value;
            count++;
        }

    var hsl = '';
    let res;
    for (i = 0; i < rowsA; i++) {
        for (j = 0; j < colsA; j++) {
            res = 0;
            for (var k = 0; k < colsA; k++) {
                res += A[i][k] * A[k][j];
                if (k == colsA - 1)
                    hsl += res + " ";

            }
        }
        hsl += "<br>";
    }

    //var no1 = document.getElementsByName('A'+count)[0].value;

    document.getElementById("hasile").innerHTML = hsl;
    //document.getElementById("hasile").innerHTML=rowsA+colsA;
}

function fpangkatA() {
    var rowsA = document.getElementsByName('rowA')[0].value;
    var colsA = document.getElementsByName('colA')[0].value;

    let A = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        A[k] = new Array(colsA);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsA; i++)
        for (j = 0; j < colsA; j++) {
            A[i][j] = document.getElementsByName('A' + count)[0].value;
            count++;
        }

    var hsl = '';
    let res;
    for (i = 0; i < rowsA; i++) {
        for (j = 0; j < colsA; j++) {
            res = 0;
            for (var k = 0; k < colsA; k++) {
                res += A[i][k] * A[k][j];
                if (k == colsA - 1)
                    hsl += res + " ";

            }
        }
        hsl += "<br>";
    }

    //var no1 = document.getElementsByName('A'+count)[0].value;

    document.getElementById("hasile").innerHTML = hsl;
    //document.getElementById("hasile").innerHTML=rowsA+colsA;
}


function fpangkatB() {
    var rowsB = document.getElementsByName('rowB')[0].value;
    var colsB = document.getElementsByName('colB')[0].value;

    let B = new Array(rowsB);
    for (let k = 0; k < rowsB; k++)
        B[k] = new Array(colsB);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsB; i++)
        for (j = 0; j < colsB; j++) {
            B[i][j] = document.getElementsByName('B' + count)[0].value;
            count++;
        }

    var hsl = '';
    let res;
    for (i = 0; i < rowsB; i++) {
        for (j = 0; j < colsB; j++) {
            res = 0;
            for (var k = 0; k < colsB; k++) {
                res += B[i][k] * B[k][j];
                if (k == colsB - 1)
                    hsl += res + " ";

            }
        }
        hsl += "<br>";
    }

    //var no1 = document.getElementsByName('A'+count)[0].value;

    document.getElementById("hasile").innerHTML = hsl;
    //document.getElementById("hasile").innerHTML=rowsB+colsA;
}

function transposeA() {
    var rowsA = document.getElementsByName('rowA')[0].value;
    var colsA = document.getElementsByName('colA')[0].value;

    let A = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        A[k] = new Array(colsA);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsA; i++)
        for (j = 0; j < colsA; j++) {
            A[i][j] = document.getElementsByName('A' + count)[0].value;
            count++;
        }

    var hsl = '';

    // TEST
    for (i = 0; i < colsA; i++) {
        for (j = 0; j < rowsA; j++)
            hsl += A[j][i] * 1 + " ";
        hsl += "<br>";
    }

    document.getElementById("hasile").innerHTML = hsl;
}

function transposeB() {
    var rowsB = document.getElementsByName('rowB')[0].value;
    var colsB = document.getElementsByName('colB')[0].value;

    let B = new Array(rowsB);
    for (let k = 0; k < rowsB; k++)
        B[k] = new Array(colsB);

    var count = 1;
    for (i = 0; i < rowsB; i++)
        for (j = 0; j < colsB; j++) {
            B[i][j] = document.getElementsByName('B' + count)[0].value;
            count++;
        }

    var hsl = '';

    // TEST
    for (i = 0; i < colsB; i++) {
        for (j = 0; j < rowsB; j++)
            hsl += B[j][i] * 1 + " ";
        hsl += "<br>";
    }

    document.getElementById("hasile").innerHTML = hsl;
}

function fkaliA() {
    var rowsA = document.getElementsByName('rowA')[0].value;
    var colsA = document.getElementsByName('colA')[0].value;
    var kali = document.getElementsByName('kaliA')[0].value;

    let A = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        A[k] = new Array(colsA);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsA; i++)
        for (j = 0; j < colsA; j++) {
            A[i][j] = document.getElementsByName('A' + count)[0].value;
            count++;
        }

    var hsl = '';

    // TEST
    for (i = 0; i < rowsA; i++) {
        for (j = 0; j < colsA; j++)
            hsl += A[i][j] * kali + " ";
        hsl += "<br>";
    }

    document.getElementById("hasile").innerHTML = hsl;
}

function fkaliB() {
    var rowsB = document.getElementsByName('rowB')[0].value;
    var colsB = document.getElementsByName('colB')[0].value;
    var kali = document.getElementsByName('kaliB')[0].value;

    let B = new Array(rowsB);
    for (let k = 0; k < rowsB; k++)
        B[k] = new Array(colsB);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsB; i++)
        for (j = 0; j < colsB; j++) {
            B[i][j] = document.getElementsByName('B' + count)[0].value;
            count++;
        }

    var hsl = '';

    // TEST
    for (i = 0; i < rowsB; i++) {
        for (j = 0; j < colsB; j++)
            hsl += B[i][j] * kali + " ";
        hsl += "<br>";
    }

    document.getElementById("hasile").innerHTML = hsl;
}

function inputA() {
    var rowsA = document.getElementsByName('rowA')[0].value;
    var colsA = document.getElementsByName('colA')[0].value;

    var A = new Array(rowsA);
    for (let k = 0; k < rowsA; k++)
        A[k] = new Array(colsA);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsA; i++) {
        for (j = 0; j < colsA; j++) {
            A[i][j] = document.getElementsByName('A' + count)[0].value;
            count++;
        }
    }

    return A;
}

function inputB() {
    var rowsB = document.getElementsByName('rowB')[0].value;
    var colsB = document.getElementsByName('colB')[0].value;

    var B = new Array(rowsB);
    for (let k = 0; k < rowsB; k++)
        B[k] = new Array(colsB);

    var count = 1;
    let i, j;
    for (i = 0; i < rowsB; i++) {
        for (j = 0; j < colsB; j++) {
            B[i][j] = document.getElementsByName('B' + count)[0].value;
            count++;
        }
    }

    return B;
}

// function det() {
//     var rowsA = document.getElementsByName('rowA')[0].value;
//     var colsA = document.getElementsByName('colA')[0].value;

//     let A = new Array(rowsA);
//     for (let k = 0; k < rowsA; k++)
//         A[k] = new Array(colsA);

//     var count = 1;
//     let i, j;
//     for (i = 0; i < rowsA; i++){
//         for (j = 0; j < colsA; j++){
//             A[i][j] = document.getElementsByName('A'+count)[0].value;
//             count++;
//         }
//     }

//     var hsl = 0;

//     if(rowsA<=0) hsl = 0;                                 // stop recursion
//     if(rowsA==1) hsl = A[0][0];                           // stop recursion
//     if(rowsA==2) hsl = (A[0][0]*A[1][1] - A[0][1]*A[1][0]);



//     document.getElementById("hasile").innerHTML=hsl;
// }

function det(M) {
    if (M.length <= 0) return 0;                                 // stop recursion
    if (M.length == 1) return M[0][0];                           // stop recursion
    if (M.length == 2) {
        return (M[0][0] * M[1][1]) - (M[0][1] * M[1][0]);
    }
    var answer = 0;
    for (var i = 0; i < M.length; i++) {
        answer += Math.pow(-1, i) * M[0][i] * det(deleteRowAndColumn(M, i));
    }
    return answer;
}

function deleteRowAndColumn(M, index) {
    var temp = [];
    for (var i = 0; i < M.length; i++) {
        temp.push(M[i].slice(0));
    }
    temp.splice(0, 1);
    for (var i = 0; i < temp.length; i++) {
        temp[i].splice(index, 1);
    }
    return temp;
}

function determinan(mtr) {
    document.getElementById("hasile").innerHTML = det(mtr);
}

// function detA(A){

//     var hsl = 0;

//     if(rowsA<=0) hsl = 0;                                 // stop recursion
//     if(rowsA==1) hsl = A[0][0];                           // stop recursion
//     if(rowsA==2) hsl = (A[0][0]*A[1][1] - A[0][1]*A[1][0]);

//     // var answer = 0;
//     // for (i = 0; i < A.length; i++) {
//     //     answer += Math.pow(-1, i) * A[0][i] * det(deleteRowAndColumn(A, i));
//     // }

//     document.getElementById("hasile").innerHTML=hsl;
// }

