//Задание 1
function hello1(){
    console.log("Привет, JavaScript");
}
hello1();

//Задание 2
function hello2(name = "Гость"){
    console.log("Привет, "+name);
}
hello2("Василий");
hello2();

//Задание 3
function mul(n,m){
    console.log (n+m);
}
mul(4567234574, 56789023);

//Задание 4
function repeat(str = "", n=2){
    console.log(str.repeat(n));
}
repeat("hi", 5);
repeat("hello");

//Задание 5
function rgb(
    a = prompt('Ведите число от 0 до 255', '0'),
    b = prompt('Ведите число от 0 до 255', '0'),
    c = prompt('Ведите число от 0 до 255', '0'),
){
    if(((a && b && c)>0) && ((a && b && c) <= 255)){
    return `rgb(${a ? a : 0}, ${b ? b : 0}, ${c ? c : 0})`
    }
}
console.log(rgb());

//Задание 6
function avg(){
    var result;
    var leng = 0;
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === "number" && !isNaN(arguments[i])){
            leng++
            sum += arguments[i];
        }
    }
    result = sum / leng;
    return result;
}
console.log(avg(9, 10, 11));




