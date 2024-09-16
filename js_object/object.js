

// Object trong Javascript
var emailKey = 'email';

var myInfo = {
    name: 'Duong Nguyen',
    age: 23,
    address: 'Ha Noi',
    [emailKey]: 'shadynguyen@gmail.com',// đây là cách truyền biến
    getName: function (){ // value là 1 function
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
};

delete myInfo.address;// xóa 1 phần tử trong object

console.log(myInfo.getName());

//  Function --> Phương thức / method
//  Others --> Thuộc tính / property