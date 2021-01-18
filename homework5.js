//Задание 1
var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUniqe = arr.reduce((newArr, item) => {
    if(newArr.indexOf(item) === -1){
     newArr.push(item);
     return newArr
    }
    else{
        return newArr;
    }
     
} ,[])

// На основании этого массива сформировать новы массив usersAfterYear 
//где все пользователи повзрсолели на год и являются совершенолетними 
//(повзрослевших на год, но оставшимися
//все еще несовершенолетних пользователей в новый массив usersAfterYear не включать). 
//Сам массив users должен остаться неизменным. Использовать метод map.
var users = [
     {id: 1, name: "Вася", age: 19},
     {id: 2, name: "Петя", age: 18},
     {id: 3, name: "Маша", age: 17},
     {id: 4, name: "Света", age: 18},
     {id: 5, name: "Наташа", age: 17},
     {id: 6, name: "Женя", age: 12},
     {id: 7, name: "Коля", age: 30},
     {id: 8, name: "Настя", age: 16},
     {id: 9, name: "Антон", age: 19},
     {id: 10, name: "Иван", age: 20},
     {id: 11, name: "Павел", age: 16},
     {id: 12, name: "Денис", age: 20}
 ];

 var usersAfter = users.map(person => {
    person.age +=1;
    return person;
    }).filter(person => person.age >= 18);
 


 






//Необходимо сделать так чтобы все значения полей объекта users начинались с заглавной буквы (например не "pavel" a "Pavel"). 
//Для решения этой задачи рекомендую использовать методы 
//Object.keys или Object.values и методы строк как UpperCase. 

var users = {
    first_name: "pavel",
    second_name: "ivanov",
    father_name: "ivanovich",
    city: "minsk",
    car: "subaru",
    telephone: "samsung" 
};

let keys = Object.keys(users);
console.log(keys);
keys.forEach(key => {
    users[key] = users[key] [0].toUpperCase() + users[key].slice(1);
})


//Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); (При вызове функции положите n = 8);
function fib(n){
    if(n<=0) return;
    if(n === 2) return 1;
    if(n === 1) return 0;
    return fib(n-1) + fib(n-2);
}