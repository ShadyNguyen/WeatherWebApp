
// Vòng lặp - Loop

// 1. for - lặp với điều kiện đúng
// 2. for/in - lặp qua key của đối tượng
// 3. for/of - lặp qua value của đối tượng
// 4. while - lặp khi điều kiện đúng
// 5. do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

// for(var i = 7; i <= 10 ; i++ ){
//     console.log(i);
// }

function getRandNumbers(min,max,length){
    var arr = [];
    for ( var i = 0; i < length; i++ ){
        arr[i] = Math.random() * (max - min) + min;
    }
    return arr;
}

getRandNumbers(50,20,30)


/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */