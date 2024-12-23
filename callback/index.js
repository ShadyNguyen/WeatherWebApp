// callback ?

// là hàm (function callback) được truyền qua đối số
// khi gọi hàm khác

// 1. là hàm
// 2. Được truyền qua đối so
// 3. Được gọi lại (trong hàm nhận đối số)


Array.prototype.map2 = function(callback) { 
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) { 
        var result = callback(this[i], i);
        output.push(result);
    }

    return output;
};


var courses = [
    'English',
    'Japna',
    'French',
]

var htmls = courses.map2(function (course) {
    if (typeof map2 === 'function') {
        return `<h2>Course ${course}</h2>`
    }
});

console.log(htmls.join(' '));

// function myFunction (param) {
//     // console.log(typeof param)
//     param( 'hoc lap trinh');
// }


// function myFunction () { 

// }

// myFunction(myFunction)

