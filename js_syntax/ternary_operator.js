
// Toán tử 3 ngôi - Ternary operator

var course = {
    name : 'Javascript',
    coin : 250,
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// }
// else
// {
//     console.log('Free');
// }

// nếu điều kiện trước "?" đúng thì sẽ in ra điều kiện sau "?" nếu không sẽ in ra điều kiện sau ":" 
var result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
console.log(result);

// Làm bài
function getCanVoteMessage(age){
    return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu"
}


// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'