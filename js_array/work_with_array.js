
// Làm việc với Array

// 1.Tostring
// 2.Join
// 3.Pop
// 4.Push
// 5.Shift
// 6.Unshift
// 7.Splicing (splice)
// 8.Concat
// 9.Slicing

var languages = [ // khai báo cách 1
    'RUBY',
    'PHP', 
    'Reactjs', 
    'Angular',
];
var languages1 = [ // khai báo cách 1
    'Nodejs',
    'Tailwind',
    'Bootstrap',
];

// console.log(languages.toString()); 
// chuyển từ array sang kiểu string

// console.log(languages.join('-')); 
// thêm phần từ trong () vào giữa mảng VD: join('-') => ruby - php - reactjs - angular

// console.log(languages.pop()); 
// xóa elements cuối mảng và trả về phần tử đã xóa

// console.log(languages.push('Nodejs')); 
// đẩy thêm phần tử vào cuối mảng và trả về mảng mới có phần từ đã thêm vào

// console.log(languages.shift()); 
// xóa elements đầu mảng và trả về phần tử đã xóa

// console.log(languages.unshift('Mysql')); 
// thêm phần từ mới vào đầu mảng và trả về mảng mới có phần tử đã thêm vào

console.log(languages.splice(1,2,'Go', 'Java')); 
// xóa từ phần tử 1 đến vị trí của phần tử thứ 2 trong mảng 
// vd trong mảng có ['angular','php','reactjs'] sẽ các vị trí 0,1,2 xóa từ vị trí 1 đến số vị trí 2
// => còn ['angular'] 

// console.log(languages.concat(languages1)); 
// nối 2 mảng hoặc nhiều hơn hợp nhất thành 1 mảng mới

console.log(languages.slice(0,2)); 
// trả về phần từ bắt đầu đến phần tử kết thúc 
// vd trong mảng ['angular,'php','Javascript'] => ['angular','php',]
