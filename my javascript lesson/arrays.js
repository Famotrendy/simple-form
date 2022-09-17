// // let arr1= [];
// // let arr2= new Array()
// // console.log(arr1,arr2)

// // let fruits = ['mango','guava', 'lemon']
// // console.log(fruits[1])
// // fruits[0] = 'apple'

// // console.log(fruits)
// let fruits = ['mango' , 'guava', 'lemon']
let vegetables = ['cabbage' , 'spring', 'onion']

// vegetables = fruits.concat(vegetables,['water'])
// console.log(vegetables)
// console.log(vegetables.length)
// console.log(vegetables.join('----'))
// // console.log(vegetables,indexOf('lemon'))
// console.log(vegetables.pop())
// console.log(vegetables.push('grape'))
// console.log(vegetables)


// vegetables.unshift('yam')
// console.log(vegetables)

// vegetables.reverse()
// console.log(vegetables)

let part_ingredient = vegetables.splice(1,4, 'green peas', 'pepper') 
console.log(part_ingredient)
// console.log(vegetables.startIndex())




// functions

// function sq(x){
//     return x * x;
// }

// let sqaured_x = sq(3)
// console.log(sqaured_x)
// console.log(sq(3)*4)

// console.log(y)
// let y = 5



// let multiple = (x) => {
//     return x * 2;
// }

// console.log(multiple(9));

// let double_integer = (x) => x * 2
// console.log(double_integer(12));


// arrow functions
let prime = (number) => {
    it_is_prime = true;

    for(let i = 2; i < number; i ++ )
    {
        if (number % i === 0) {
            it_is_prime = false;
            break;

        }
    }
        return it_is_prime;
};

console.log(prime(38));


let today_is_friday = (() => {
    return new Date().getDay() === 5;

}
)();

console.log(today_is_friday)



