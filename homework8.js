//Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого 
//есть все элементы входных массивов.

var arrays = [[1, 2, 3], [4, 5], [6]];

var arrays = arrays.reduce(function(a,b){
    return a.concat(b)});

//Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, 
//age, city.
//С помощью данной функции создайте два объекта пользователей (два пользователя)
//, имя, фамилию, возраст, город проживания задайтесами. 

function Person(first_name, second_name, age, city){
    this.first_name = first_name
    this.second_name = second_name
    this.age = age
    this.city = city};

    let Igor = new Person("Igor", "Ivanov", 40, "Brest");
    let Ivan = new person("Ivan", "Igorev", 60, "Gomel");

    //Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей 
    //созданных в предыдущем задании.
    //Функция должна выполнять вывод информации и не принимать аргументов. 
    //По сути нужно одну функцию привязать два объекта. 

    
    Person.prototype.getInfo = function(){
        console.log(`Ваше имя - ${this.first_name}, Ваша фамилия - ${this.second_name},
        Ваш возраст - ${this.age}, Ваш город - ${this.city}`);

    }


    
      


