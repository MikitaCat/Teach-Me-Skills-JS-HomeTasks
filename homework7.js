//Напишите функцию func() которая при каждом своем вызове будет возвращать количество 
//своих вызовов (сколько раз ее вызызвали до этого плюс этот вызов);
function makeCounter() {
    var currentCount = 1;
  
    return function() { // (**)
      return currentCount++;
    };
  }
  
  var counter = makeCounter();
  console.log(counter());
  console.log(counter());


//Напишите функцию которая будет увеличивать переменную let i = 0, от 0 до 20, при чем переменная будет 
//увеличивать свое значение на еденицу каждые 2 секунды. 
//Когда переменная станет равной 20 прекратить увеличение. 
//Попробуйте реализовать через setInterval и через рекурснивный setTimeout.

//setInterval
function int(){
    let i = 0;
    console.log(i);
    let intId = setInterval(() => {
        i+=1;
        if(i === 21){
            clearInterval(intId);
        }
        console.log(i)},
        2000);
}

//setTimeout
let i = 0;
function interval(){
    console.log(i);
    {setTimeout(() => {
        i += 1;
    }, 2000)}
    setTimeout(interval, 2000);
}



//Напишите функцию startTimer() которая будет 
//запускать вывод через confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?"),  
//при нажатии "ДА" вывоите alert("Реклама") через 5 секунд, 
//если нажали "НЕТ", то повторить вопрос confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?")
//и так до тех пор пока пользовательне нажмет "ДА" и не увидит эту рекламу через alert.  

function startTimer(){
    if(confirm("Реклама исчезнет через 5 секунд, вы согласны?")){
        setTimeout(() => alert("Реклама"), 5000)
    } else
    startTimer()
}
