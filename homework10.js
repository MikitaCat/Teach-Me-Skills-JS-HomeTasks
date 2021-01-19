//Создайте класс House, которая позволяет создавать объект здания с параметрами 
//длины(length), ширины(width) и количество этажей(floors)
//Добавьте ему статический метод sortBuyFloors 
//который можно будет использовать для сортировки зданий по возрастанию их высоты.

class House {
    constructor(length, width, floors){
    this.width = width
    this.length = length
    this.floors = floors
     }
    static sortBuyFloors(a, b){
    return a.floors-b.floors
      }
    }

    let house = new House(100, 400, 4);
    let house2 = new House(200, 800, 8);
    let house3 = new House (400, 1000, 10);

    function makeArr(){
        return Array.from(arguments)
        }

    let buildings = makeArr(house, house2, house3);
    let buildingsSort = buildings.sort(House.sortBuyFloors);


//На основании класса House создайте класс Skyscraper (небоскреб, по сути реализуйте через наследование). 
//Данный класс кроме свойств length, width и floors должен предоставлять дополнительное свойство offices
//(количество выделенных в офисе задний, можете задать их любым на ваше усмотрение);
//Добавьте свойство fullArea который будет соответствовать суммарной площади всех этажей вашего небоскреба. 
//Данное свойсвто создать через get/set. 
//При этом если площадь небоскреба увеличиась - то это значит что сверху построили еще этажи 
//а длина и ширина не поменялись, площадь может быть только 
//увеличена. Опишите в get как будет осуществляться подсчет площади и вывод этой площадь, 
//а в set определите как будет определяться новое количесвто этажей.

class Skyscraper extends House {
    constructor(length, width, floors, offices) {
        super(length, width, floors);
        this.offices = offices;
    }

    get fullArea() {
        return this.length * this.width * this.floors
    }

    set fullArea(value) {
        let total = this.length * this.width * this.floors
        if (value <= total) {
            alert('Вы ничего не построили!')
        } else {
            this.floors = value / (this.length * this.width)
            alert('Вы построили: ' + this.floors + ' этажей!')
        }
        return this.floors
    }
}


//Создайте три внебоскреба firstSkyscraper, secondSkyscraper и thirdSkyscraper. 
//Выведите площадь каждого из них используя get fullArea. Попробуйте задать кому-нибудь из
//них большую площаь чем первоначальная. 
//Выведите теперь новое количество этажей изменненного внебоскреба. 
//Убедитесь что количество этажей поменялось а длина и ширина - нет.
//Если это так - то логика внутри set fullArea реализована правильно. 

let firstSkyscraper = new Skyscraper(1200, 500, 60, 80);
firstSkyscraper.fullArea

let secondSkyscraper = new Skyscraper(900, 400, 40, 50);
secondSkyscraper.fullArea

let thirdSkyscraper = new Skyscraper(400, 100, 30, 20);
thirdSkyscraper.fullArea

thirdSkyscraper.fullArea = 300000000

//Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper в массив skyscrapers 
//и отсортируйте его по возрастанию высоты небоскребов, 
//используя статический метод класса-родителя sortBuyFloors.

let skyscrapers = makeArr(firstSkyscraper, secondSkyscraper, thirdSkyscraper).sort(House.sortBuyFloors);
