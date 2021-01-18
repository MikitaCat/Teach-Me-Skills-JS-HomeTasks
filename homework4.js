//Задание 1
var arr = [1, 10, 25, 67, 87, 56];
var leng = arr.push(4);
console.log(arr);
arr.pop(4);
arr.unshift(4);
console.log(arr);

//Задание 2
arr1 = [2, 5, 90, 4];
arr2 = arr1.concat(arr);
console.log(arr2);

//Задание 3
var ind = arr2.indexOf(90);
console.log(ind);
arr2.splice(2, 2, 19, 2, 91);
console.log(arr2);

//Задание 4
console.log(arr2.length)
var arr3 = arr2.slice(-4);
console.log(arr3);
arr3.sort();
console.log(arr3);

//Задание 5
arr2.sort(function(a, b){
    return b - a
})
console.log(arr2);
var sum = arr2.reduce(function (a, b){
    return a + b;
});
console.log(sum);

//Задание 6
var users = [
    {id: 1, name: "Вася", age: 20},
     {id: 2, name: "Петя", age: 19},
     {id: 3, name: "Маша", age: 18}
 ];

 users.push({id: 4, name: "Дима", age: 17});
 users.reverse();
 console.table(users);
 var petr = users.find((user) => user.name === "Петя");
 console.log(petr);
 var retrAge = petr.age;
 console.log(petr.age);

 
