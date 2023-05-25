// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}

let user1=new User(1,'Vanya','Pompa','vanyamanya@gmail.com','0687329536')
let user2=new User(2,'Lana','Ruba','Efaeamanya@gmail.com','0687539536')
let user3=new User(3,'Ken','Alos','vEFganya@gmail.com','0687329536')
let user4=new User(4,'Barbi','Korn','msefsanya@gmail.com','0687579536')
let user5=new User(5,'Julia','Krom','Fesfsmanya@gmail.com','0687529536')
let user6=new User(6,'Yura','Orka','fesefmanya@gmail.com','0687377536')
let user7=new User(7,'Alya','Kpir','efsdfanya@gmail.com','0687374336')
let user8=new User(8,'Yana','Skona','WEfefmanya@gmail.com','0682359536')
let user9=new User(9,'Sanya','Lokar','dsvsvrmanya@gmail.com','0682359536')
let user10=new User(10,'Anya','Kdonq','dsvdsmanya@gmail.com','0685329536')
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users=[]
    users.push(user1)
    users.push(user2)
    users.push(user3)
    users.push(user4)
    users.push(user5)
    users.push(user6)
    users.push(user7)
    users.push(user8)
    users.push(user9)
    users.push(user10)
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
 let filteredUsers=users.filter(value => value.id%2===0);
console.log(filteredUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.sort((a,b)=>a.id-b.id);
console.log(sortedUsers);



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname, email, phone,[...order]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let people1=new Client(1,'Valya','Pes','valyapes@gmail.com','0689729536',['Milk','Tea','Cake','Butter'])
let people2=new Client(2,'Alya','dsa','valyapefavs@gmail.com','0687869536',['Cake','Butter'])
let people3=new Client(3,'Malya','Aas','valyapefdavs@gmail.com','0687759536',['Tea'])
let people4=new Client(4,'Balya','sga','valyapedfavs@gmail.com','0686629536',['Milk','Tea','Cake','Butter','Chocolate','Bread'])
let people5=new Client(5,'Olya','rtj','valyapedsfvds@gmail.com','0687769536',['Milk','Tea','Cake','Butter','Korn'])
let people6=new Client(6,'Kolya','bss','valyadvzfpes@gmail.com','0685429536',['Butter'])
let people7=new Client(7,'Tolya','ndc','valyapeeytgs@gmail.com','0687329536',['Sugar','Salt','Beef'])
let people8=new Client(8,'Yana','bdf','valyapeetygs@gmail.com','0687979536',['Pocket','Pork'])
let people9=new Client(9,'Yara','nrt','valyapetnegfs@gmail.com','0687329536',['Chicken','Rabbit','Sweets'])
let people10=new Client(10,'Krya','ntd','valyargsdvpes@gmail.com','0675329536',['Lemon','Orange','Banana','Apples'])
let people=[]
    people.push(people1)
    people.push(people2)
    people.push(people3)
    people.push(people4)
    people.push(people5)
    people.push(people6)
    people.push(people7)
    people.push(people8)
    people.push(people9)
    people.push(people10)
console.log(people)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedPeople=people.sort((a,b)=>a.order.length-b.order.length);
console.log(sortedPeople);
