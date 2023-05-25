// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineCapacity, driverName, driverAge){
    this.model=model
    this.manufacturer=manufacturer
    this.year=year
    this.maxSpeed=maxSpeed
    this.engineCapacity=engineCapacity
    this.drive=function (maxSpeed){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info=function (car){
       console.log(`| model: ${car.model} | manufacturer: ${car.manufacturer} | year: ${car.year} | maxSpeed: ${car.maxSpeed} | engineCapacity: ${car.engineCapacity} |`);
    }
    this.increaseMaxSpeed=function (newSpeed){
        let res = this.maxSpeed+newSpeed
        console.log(res)
    }
    this.changeYear=function (newValue){
        let term=newValue
        newValue=this.year
        this.year=term
        console.log(term)
    }
    this.driver={name: driverName,age:driverAge}
}

let auto=new Car('Ralliart','Mitsubishi',2008,220,'2.0L','Igor',26)
console.log(auto);
auto.drive(140)
auto.info(auto);
auto.increaseMaxSpeed(23)
auto.changeYear(2005)
// ______________________________________________________
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars{
    constructor(model, manufacturer, year, maxSpeed, engineCapacity, driverName, driverAge) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = {name: driverName,age:driverAge};
        this.drive=function (maxSpeed){
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
        this.info=function (cars){
            console.log(`| model: ${cars.model} | manufacturer: ${cars.manufacturer} | year: ${cars.year} | maxSpeed: ${cars.maxSpeed} | engineCapacity: ${cars.engineCapacity} |`);
        }
        this.increaseMaxSpeed=function (speedNew){
            let res = this.maxSpeed+speedNew
            console.log(res)
        }
        this.changeYear=function (valueNew){
            let term=valueNew
            valueNew=this.year
            this.year=term
            console.log(term)
        }
        }
    }
}
let autos=new Cars('LancerEvo','Mitsubishi',2012,213,'2.0L','Yura',40)
console.log(autos);
autos.drive(170)
autos.info(autos)
autos.increaseMaxSpeed(43)
autos.changeYear(2010)


//     ______________________________
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Pope{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let all=[];
let pope1=new Pope('Anya',23,35)
let pope2=new Pope('Alya',34,38)
let pope3=new Pope('PARASKA',87,36)
let pope4=new Pope('Yulya',24,37)
let pope5=new Pope('Julia',21,39)
let pope6=new Pope('Maya',31,32)
let pope7=new Pope('Olya',25,40)
let pope8=new Pope('Ryta',19,37)
let pope9=new Pope('Lina',28,34)
let pope10=new Pope('Margaret',36,38)

all.push(pope1)
all.push(pope2)
all.push(pope3)
all.push(pope4)
all.push(pope5)
all.push(pope6)
all.push(pope7)
all.push(pope8)
all.push(pope9)
all.push(pope10)
console.log(all);

class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let lovelass=new Prince('Zenyk',16,36)

for (let i = 0; i < all.length; i++) {
    let madonna=0
    if(all[i].footSize===lovelass.shoe){
        madonna=all[i];
        console.log(madonna)
    }
}

//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let taSama=all.find(value => value.footSize===36)
console.log(taSama);