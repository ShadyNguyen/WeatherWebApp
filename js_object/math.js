

// math Object

// - Math.PI
// - Math.round()
// - Math.abs()
// - Math.ceil()
// - Math.floor()
// - Math.random()
// - Math.min()
// - Math.max()

console.log(Math.PI)
console.log(Math.round(1.7)) // làm tròn số
console.log(Math.abs(4)) // trả về giá trị tuyệt đối
console.log(Math.ceil(4.1)) // làm tròn trên 4.1 = 5
console.log(Math.floor(4.999)) // làm tròn dưới 4.999 = 4
console.log(Math.random()) // trả về số thập phân nhỏ hơn 1
console.log(Math.min()) // lấy số nhỏ nhất trong dãy số
console.log(Math.max()) // lấy số lớn nhất trong dãy số

// console.log(Math.floor(Math.random() * 100)); // VD ngẫu nhiên
var random = Math.ceil(Math.random() * 5);

var bonus = [
    '10 coins',
    '20 coins',
    '30 coins',
    '40 coins',
]

console.log(bonus[random]);

function getRandomItem(array = []){
    return Math.random;
}