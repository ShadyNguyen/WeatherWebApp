
// đệ quy

// 1. xác định điểm dừng
// 2. logic handle  => tạo ra điểm dừng 

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log([...(new Set(array))]);


function deQuy(num) {
    if (num < 0) {
        return false;
    }
    deQuy();
}
// deQuy(10);

function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(10);

function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ['javacsript', 'php', 'golang'];

loop(0, array.length, function(index) {
    // console.log('index: ', index);
    console.log(array[index]);
});

function giaiThua(number) {
    // var output = 1;
    // for (var i = num; i > 0; i--) {
    //     output *= i;
    // }
    // return output;


    if (number >= 0) {
        return number * giaiThua(number - 1); 
    }
    return 1;
}

giaiThuat(6)