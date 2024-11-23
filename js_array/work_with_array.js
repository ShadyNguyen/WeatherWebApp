
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

// console.log(languages.splice(1,2,'Go', 'Java')); 
// xóa từ phần tử 1 đến vị trí của phần tử thứ 2 trong mảng 
// vd trong mảng có ['angular','php','reactjs'] sẽ các vị trí 0,1,2 xóa từ vị trí 1 đến số vị trí 2
// => còn ['angular'] 

// console.log(languages.concat(languages1)); 
// nối 2 mảng hoặc nhiều hơn hợp nhất thành 1 mảng mới

// console.log(languages.slice(0,2)); 
// trả về phần từ bắt đầu đến phần tử kết thúc 
// vd trong mảng ['angular,'php','Javascript'] => ['angular','php',]

// Làm việc với mảng part 2
    /*
        Array method:
            forEach() // lặp qua từng phần tử
            every() // kiểm tra tất cả phần tử phải thoải mãn 1 điều kiện nào đó
            some() // kiểm tra 1 phần tử trong mảng đúng thì là true
            find() // Tìm kiếm phần tử trong mảng
            filter() // Lọc phần tử trong mảng
            map() // thêm phần tử vào mảng
            reduce() // 
    */

    var courser = [
        { 
            id: 1,
            name: 'javascript',
            coin: 250
        },
        {
            id: 2,
            name: 'php',
            coin: 300
        },
        {
            id: 3,
            name: 'Html, css',
            coin: 100
        },
        {
            id: 4,
            name: 'angular',
            coin: 150
        },
        {
            id: 5,
            name: 'angular',
            coin: 400
        }
    ];

    // 1. Dễ hiểu
    // 2. Ngắn gọn


    function coinHandler(accumulator, currentValue, currentIndex, originArray) {
      let total = accumulator + currentValue.coin;
    //   console.table({
    //     'Lượt chạy: ': currentIndex,
    //     'Biến lưu trư: ': accumulator,
    //     'Biến mặc định: ': currentValue.coin,
    //     'Biến tích trư được: ':total
    //   })
      return total;
    }

    var totalCoin = courser.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.coin;
    }, 0);

    console.log(totalCoin);

    for (var course of courser) { 
        totalCoin += course.coin;
    }

    // console.log(totalCoin);

    var listCourse = courser.filter(function (course, index) {
        // console.log(index, course) //foreach

        return course.name == 'angular';
    });

    var newCourses = courser.map(function (course, originArray) {
        // return {
        //     id: course.id,
        //     name: `Khoá học: ${course.name}`,
        //     coin: course.coin,
        //     coinText: `Giá: ${course.coin}`,
        //     originArray: originArray,
        //     index: index,
        // };
        // return course.name;
        return `<h2>${course.name}</h2>`;
    });

    console.log(newCourses);

    // bài tập thực hành làm việc với mảng
    /* 
        Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). 
        Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.

         const sports = [
            {
                name: 'Bóng rổ',
                like: 6
            },
            {
                name: 'Bơi lội',
                like: 5
            },
            {
                name: 'Bóng đá',
                like: 10
            },
        ]

        function getMostFavoriteSport(sports) {
            var sportFilter = sports.filter(function(sport) {
            sport.like > 5;
            });
            return sportFilter;
        };

         Kỳ vọng
        console.log(getMostFavoriteSport(sports)) 
        Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

         */


        var sports = [
            {
                name: 'Bơi lội',
                gold: 11
            },
            {
                name: 'Boxing',
                gold: 3
            },
            {
                name: 'Đạp xe',
                gold: 4
            },
            {
                name: 'Đấu kiếm',
                gold: 5
            },
        ]

        function getTotalGold(sports) {
            let goldCharm = sports.reduce(function(accumulator, currentValue){
                return accumulator + currentValue.gold;
            }, 0);
            return goldCharm;
        }
        
        
        // Expected results:
        console.log(getTotalGold(sports)) // Output: 23