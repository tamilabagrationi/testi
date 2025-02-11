//  var a = 4;
// var b = 3;
// var c= a + b;
// console.log(c);

// var userName ='Nino'
// console.log(userName)
// var age =14
// console.log(age);
// var is_boy = false;
// console.log(is_boy)

// let userName1 = 'Ana'
// userName1 = 'Nata'
// console.log(typeof age)

// lecrure 2

// var number1 = 22;
// var number2 = 4;
// var sum = number1 + number2;
// console.log(sum);

// let conts
// Array  მასივი

// let fruits = ["apple", "banana", "cherry"];
// fruits.push("orange");
// console.log(fruits);

// let numbers = [10, 20, 30, 40];
// numbers.shift()
// console.log(numbers)

// let colors = ["red", "blue", "green"];
// colors.splice(1, 0, "yellow");
// console.log(colors);

// let animals1 = ["cat", "dog"];
// let animals2 = ["lion", "tiger"];
// let animals=animals1.concat(animals2);
// console.log(animals)

// let scores = [50, 30, 20, 10, 40];
// scores.sort()
// console.log(scores)

// let cities = ["Tbilisi", "Batumi", "Kutaisi"];
// let result = cities.join(" - ");
// console.log(result);

// let letters = ["a", "b", "c", "d"];
// letters.reverse();
// console.log(letters);

// let books = ["Math", "Science", "History"];
// let length = books.length;
// console.log(length);

// 29 January

// დავალება 1. სტრიქონის სიგრძე
// let text = "Flower";
// let result = text.length;
// console.log(result)

// დავალება 2. სტრიქონის ყველა ასო დიდი
// let text1 = "Flower";
// let result1 = text1.toUpperCase();
// console.log(result1)

// დავალება 3. სტრიქონის ყველას ასო პატარა

// let text2 = "Flower";
// let result2 = text2.toLowerCase()
// console.log(result2)

// დავალება 4. სტიქონის კონკრეტული სიმბოლო
// let text3 = "Hello";
// let result3 = Text3.indexOf(1);
// console.log(result3)

// დავალება 5. სტრიქონის ნაწილი
// let text4 = "Flower";
// let result4 = text4.slice(2,5);
// console.log(result4)

// დავალება 6. სტრქონის ცვლილება

// let text5 ="Hello";
// let result5 = text5.replace("Hello" , "Hi");
// console.log(result5)

// დავალება 7. სტრიქონის განაწილება

// let text6 = "Hello world";
// let result6 = text6.split(" ");
// console.log(result6);

// დავალება 8. სტრიქონის დასაწყისი

// let text8 = "Java";
// let result8 = text8.startsWith("Java");
// console.log(result8);

// დავალება 9. სტრიქონის ბოლოს

// let text9 ="Hello"
// let result9 = text9.endsWith("script");
// console.log (result9)

// დავალება 10. სტრიქონის გამეორება

// // let text10 = "hello";
// let result10 = text10.repeat(4);
// console.log(result10)

// დავალება 11. სტრიქონის ცარიელი სივრცეების მოცილება

// let text11 = "   Flower";
// let result11 = text11.trim();
// console.log (result11)

// დავალება 12. სტრიქონის გამოყოფა

// let text12 ="Hello";
// let result12 = text12.includes("JavaSlript");
// console.log(result12);

// 31 იანვრის დავალება

// let age = prompt("daweret asaki")
// console.log(typeofage)

// let age = Number(prompt("daweret asaki"));
// console.log(typeof age);

// let fullName= prompt("დაწერწთ სახელი");
// let result = fullName.trim();
// console.log(result)

// const student = {
//     name: "ლაშა",
//     age: 20,
//     isStudying: true,
//     favoriteSubjects: ["მათემატიკა", "ფიზიკა", "პროგრამირება"],
//     address: {
//         city: "თბილისი",
//         street: "რუსთაველის გამზირი"
//     }
// };
// console.log(student);

// const student = {
//     name: prompt("შეიყვანე სტუდენტის სახელი:"),
//     age: Number(prompt("შეიყვანე სტუდენტის ასაკი:")),
//     isStudying: confirm("სწავლობს ახლა? დააჭირე OK თუ სწავლობს, ან Cancel თუ არა."),
//     favoriteSubjects: prompt("შეიყვანე სტუდენტის საყვარელი საგნები მძიმით გამოყოფილი:").split(","),
//     address: {
//         city: prompt("შეიყვანე ქალაქი:"),
//         street: prompt("შეიყვანე ქუჩა:")
//     }
// };
// console.log(student);

// davaleba 3 tebervali

// for(let i = 2 , = 20; i+=2){
// console.log(i);
// }

// let sum = 0;
// for(let i=1; i <= 100; i++){
//     sum = sum +i
// }
// console.log(sum);

// let Number =1;
// if(Number > 0){
//     console.log("დადებითია");

// } else if (Number < 0){
//     console.log("უარყოფითია");

// }
// else{
//     console.log("ნული");
// }

// let fullName = prompt("დაწერეთ სახელი");
// console.log(fullName);

// for (let i=1; i<10; i++) {
//     console.log(i);
// }

// let i=1
// while (i<10) {
//     console.log(i)
//     i++;
// }

// for (let i=2; i<20; i++) {
//     console.log(i);

// }

// function greet(fullName){
//     console.log(`hello ${fullName}`);
// }
// greet("Teona");

// ციკლები

// let array =[2,4,6,8,34,23,45,66,88];
// for (let i=0; i<array.length; i++){
//     if (array [i] % 2 ==1){
//         console.log(array[i]);
//     }
// }

// let array =[2,4,6,8,34,23,45,66,88];
// for (let i=0; i<array.length; i++){
//     if (array [i] % 2 ==0){
// //         console.log(array[i]);
//     }
// }

// function greet(fullName){
//     return `hello ${fullName}`;
// }
// let result = greet("Teona");
// console.log(result);

// const greet = function(fullName) {
//     return `Hello ${fullName}`

// }
// let result = greet("Teona");
// console.log(result);


// const greet = (fullname) => `hello ${fullname}`
// let result = greet ("Teona")
// console.log(result)

function sum(... num){
    let result =0
    for (let item of num){
        if (item >0) {
            result= result + item
        }
    }
    return result
}
 let sumResult = sum(2,3,4,5,6,7,8,9,-2,-3,-5)
 console.log(sumResult)