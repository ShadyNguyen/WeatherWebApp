
//  Câu lệnh rẽ nhánh If - Else

function run(a){
    if ( a % 3 === 0 && a !== 15){
        return 1
    }
    else if ( a % 5 === 0 && a !== 15){
        return 2
    }else if ( a % 15 === 0 ){
        return 3
    }
}