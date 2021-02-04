//Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель 
//загрязнения комнаты (от 0 до 10).
//В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, 
//это время равно значению 
//dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время 
//dirtyLevel * 1000.
//Для обработки успешной уборки в then используйте 
//console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент resolve.

//Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс 
//возвращали выполненный с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). 
//Где err это аргумент reject. Текст ошибки придумайте сами.

function cleanRoom(dirtyLevel){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(dirtyLevel <=10){
                resolve(dirtyLevel)
                    }else{
                    reject("The Room is too dirty")   
                    }
                }, dirtyLevel * 1000)
            })
        };

cleanRoom(6)
    .then(result => console.log(`Room has been cleaning during ${result} seconds`))
    .catch(err => console.log(err));

cleanRoom(11)
     .then(result => console.log(`Room has been cleaning during ${result} seconds`))
     .catch(err => console.log(err));


//Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку 
//трех комнат. Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может 
//начать убирать новую. Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. 
//Для этого функция cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, 
//каждый из кторых описывает уровень загрязнения каждой комнаты.

function cleanRooms(){
    return cleanRoom(dirtylevel_1)
        .then(result => {console.log(`First room has been cleaned during ${result} seconds`)
            return cleanRoom(dirtyLevel_2)
        })
        .then(result => {console.log(`Second room has been cleaned during ${result} seconds`)
            return cleanRoom(dirtyLevel_3)
        })
        .then(result => {console.log(`Third room has been cleaned during ${result} seconds`)
        })
        .catch(err => console.log(err))

}
            


//Задача на повторение массивов. Дан массив строк 
//(например ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]).
//Ваша задача написать функцию countRepeats которая будет выводить 
//информацию о том какой элемент в данном массиве сколько раз повторяется.
//Функция должна возвращать объект типа:
//	  	{
//			str:  3,
//			str1: 2,
//			str2: 2,
//			str4: 2,
//			str3: 1,
//		}	
//Обратите внимание что информация должна быть отсортирована по убыванию повторений.

