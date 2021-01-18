//Задание 1
function f(){
    return (arguments.length >= 1) ? 1 : 0;
}

//Задание 2
function sum(a, b) {
    var sum = 0;

    for(let i = 0; i < arguments.length; i++){
        if((typeof(arguments[i])==="number") && !isNaN(arguments[i])){
            sum += arguments[i];

        }
    }
    return sum;
}

var res = sum(5, 12);
console.log(res);

// - Дан массив [1, 2, 56, 28, 90, 5, 6]. Отсортировать массив в порядке возрастания его элементов. В отсортированном массиве используя 
//метод indexof вывести индекс элемента со значением "6". 
var arr = [1, 2, 56, 28, 90, 5, 6];
arr.sort((a, b) => a - b);
console.log (arr);
console.log (arr.indexOf (6, 0));

//Задание с прошлых занятий. Создать массив объектов для юзеров [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
//Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
//!Использовать метод filter. Полученные на выходе два массива отсортировать (каждый из них в отдельности) 
//     по старшинству членов (от самого старшего к самому младшему).

let arrUsers = [{name: 'Ivan', age: 18}, 
    {name: 'Petr', age: 12}, 
    {name: 'Sidor', age: 25}, 
    {name: 'Pavel', age: 24}, 
    {name: 'Sasha', age: 29}];

    let oldUsers = arrUsers.filter(function(person){
        if(person.age >= 18){
        return true}})

        
 
//Расширить предыдущее задание так чтобы из исходного массива удалялись все несовершенолетние пользователи.
