"use strict";


// 1.
// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;
  
function sumPositive(...numbers) {
    let sum = 0;
    for(let item of numbers) {
        if (item > 0) {
            sum += item;
        }
    }
      return sum;

}
let result = sumPositive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);



// 2.
// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

function sumValue(...numbers) {
    let sum = 0;
    for(let item of numbers) {
         sum += item;
    }
      return sum;

}
let result2 = sumValue(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result2);




// 3.
// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}

let aboutGeorg =() => {

    if (user.isloggedin) {

        return `${user.firstname} ${user.lastname}`
    }
    return false;
}

let resultGeorg = aboutGeorg(user);
console.log(resultGeorg);


// 4.
// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

let getMaxNumber = (...number) => {
    let max = number[0]
    for(let item of number) {
        if(item > max) {
            max = item
        }
    } return max
}

let maxResult = getMaxNumber(12, 112, 66, 85, 1, 49, 50)
console.log(maxResult);


// 5.
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;


let oddNumber = (number) => {
    if(number % 2 === 0) {
        return `${number} this number is even`;
    } 
    return `${number} this number is odd`;
}
let typeResult = oddNumber(17);
console.log(typeResult);



// 6.
// მოცემულია მასივი:
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1


let array6 = [1,2,3,4,5];

for (let item3 = array6.length - 1; item3 >= 0; item3--) {
    console.log(array6[item3]);
}



// 7.

// ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;


let userAge = (birthYear,yearNow) => {
    let age = yearNow - birthYear
    let result = age > 18 ? 'სრულწლოვანია' : 'არასწულყლოვანია'
    return result
}

let ageResult = userAge(2000, 2023)
console.log(ageResult);



// 8.
// მოცემულია მასივი
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i of array8) {
    if (i == 5) {
        console.log('არის');
        break
    }
}

// 9.
// მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)

let array5 = [1, 2, 3, 7, 6, 9];
    for(let i of array5) {
        if(i == 7) {
            continue
        }
    console.log(i);
}