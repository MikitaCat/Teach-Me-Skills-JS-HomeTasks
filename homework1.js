//Задание 1 каждый блок - вид данных

//Сторока
let name = "Nikita";
console.log(name);
alert(name);

//Число
let number = 8;
alert(number);
console.log(number);
//Infinity
console.log(number/0);
alert(number/0)
//NaN
console.log(number-name);
alert(number-name);

//Объект
let obj = {firstName: "Nikita", lastName: "Stankevich", age: 20};
console.log(obj);
console.table(obj);
//Массив (вид объекта)
let arr = [1, 2, 3, "some string", "some interasting text"];
console.log(arr);
alert(arr);

//Bulean
let first = 1<0; //false
let second = 1>0; //true
console.log(first);
alert(first);
console.log(second);
alert(second);

//undefined
let variable
console.log(variable);
alert(variable);

//null
let zero = null;
console.log(zero);
alert(zero);

//Задание 2
var age = +prompt("Сколько вам лет?");
alert( `Вам ${age} `);
if(age >= 18 && typeof age === "number") alert("Вы совершеннолетний");
else if (age < 18 && typeof age === "number")  alert("Вы несовершеннолетний");
else alert("Введить цифры");

//Задание 3
var numbers = [10, 25, 100];
let result = numbers.reduce (function(sum, elem) {
	return sum + elem;
}, 0);
console.log(result);
alert(result);

//Задание 3, вариант из консультации
var numbers = [10, 25, 100];
function arraySum(array){
   var sum = 0;
   for(var i = 0; i < array.length; i++){
      if(typeof array[i] === "number"){
      sum += array[i];
      }
   }
   return sum;
}
console.log(arraySum(numbers));

//Задание 4
var arrUsers = [
   {name: "Ivan", age: 18}, 
   {name: "Petr", age: 12}, 
   {name: "Sidor", age: 25},
   {name: "Pavel", age: 24},
   {name: "Sasha", age: 29}
];

var childUsers = [];
var oldUsers = [];

for(i=0; i < arrUsers.length; i++){
   if(arrUsers[i].age < 18) {
      childUsers.push(arrUsers[i]);
   }
   else if (arrUsers[i].age > 18){
      oldUsers.push(arrUsers[i]);
   }

}

console.table(childUsers);
console.table(oldUsers);









