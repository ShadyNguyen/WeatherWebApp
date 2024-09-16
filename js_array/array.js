
// Mảng trong Javascript - Array

// 1. Tạo Mảng
//     - Cách Tạo
//     - Sử dụng cách nào? Tại sao?
//     - Kiểm tra data type?

// 2. Truy xuất Mảng
//     - Độ dài Mảng
//     - Lấy phần tử theo index

var languages = [ // khai báo cách 1
    'RUBY',
    'PHP', 
    'Reactjs', 
    'Angular',
    null,
    undefined,
    function(){

    },
    {},
    123,
];

var languages1 = new Array( // khai báo cách 2
    'RUBY',
    'PHP', 
    'Reactjs', 
    'Angular',
    null,
    undefined,
    function(){

    },
    {},
    123,
);

console.log(languages);
console.log(Array.isArray(new Array(1,2)));

// 2. cách truy xuất
console.log(languages.length[3]);