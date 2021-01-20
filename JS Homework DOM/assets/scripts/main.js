//Напишите код как получить h1, ul, коллекцию элементов li, коллекцию четных элементов li, 
//коллекцию нечетных элементов li (для этого вспоминаем odd, even в css)
let first = document.querySelector('h1');
let ullist = document.querySelector('ul');
let list = document.querySelectorAll('li');
let evenlist = document.querySelectorAll('li:nth-child(even)');
let oddlist = document.querySelectorAll('li:nth-child(odd)');

//Добавьте для всех четных элементов li красный цвет текста. 
//А для нечетных элементов синий цвет текста (это можно сделать через styles). 

//for(i = 0; i<evenlist.length; i++){
  //  evenlist[i].style.color = 'red'}

//for(i = 0; i<oddlist.length; i++){
//        oddlist[i].style.color = 'blue'}



//Задание со звездочкой. Для всех нечетных переключение цвета с красного на синий каждый две секунды
//(вначале красный через 2 секунды синий, потом через 2 секунды опять красный и т.д.).
//А для нечентных элементов переключение с синего на красный цвет каждые две секунды
//(вначале синий 2 секунды через 2 секунды красный, потом через 2 секунды опять синий и т.д.).
//Для этого использовать setInterval.
function int(){
    for(i = 0; i<evenlist.length; i++){
        evenlist[i].style.color = 'red'}
};


function int2(){
    for(i = 0; i<evenlist.length; i++){
        evenlist[i].style.color = 'blue'}
}


    

//Неудачно пытался реализовать через setTimeout
//let timer = setInterval(function int(){
//    for(i = 0; i<evenlist.length; i++){
//        evenlist[i].style.color = 'red'}
//        timer = setInterval(function int2(){
//            for(i = 0; i<evenlist.length; i++){
//                evenlist[i].style.color = 'blue'}
//        }, 2000)
//}, 2000)

setInterval(function int(){
    for(i = 0; i<evenlist.length; i++){
        evenlist[i].style.color = 'red'}
}, 2000)

setInterval(function int2(){
    for(i = 0; i<evenlist.length; i++){
        evenlist[i].style.color = 'blue'}
}, 4000);


setInterval(function int3(){
    for(i = 0; i<oddlist.length; i++){
        oddlist[i].style.color = 'blue'}
}, 2000)

setInterval(function int4(){
    for(i = 0; i<oddlist.length; i++){
        oddlist[i].style.color = 'red'}
}, 4000);
