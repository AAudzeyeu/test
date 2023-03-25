// //Ключевые Объекты ООП
// наследование
// инскапсуляция  ГЕТТЕРЫ И СЕТТЕРЫ
// абстракция 
// полимарфизм

// class Animal { //НАСЛЕДОВАНИЕ
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     walk() {
//         console.log('Animal is walkin');
//     }
//     eat() {
//         console.log('Animal is eating')
//     }
// }
// class Cat extends Animal {
//     constructor(name, age) {
//         super(name, age) 
//         this.type = 'cat'
//     }
// }

// const mysa = new Cat('Mysa', 4);
// console.log(mysa);
// mysa.eat();

// function User(login) { //ИНКАПСУЛЯЦИЯ 
//     this.login = login;


//     Object.defineProperty(this, 'password', {

//         get() {
//             return '********';
//         },

//         set(newPassword) {
//             if (newPassword.toUpperCase() === newPassword ||
//                 newPassword.toLowerCase() === newPassword ||
//                 newPassword.length < 8) {
//                 console.log('Password dont\'t')
//             } else this._password = newPassword
//         }
//     })

// };

// const testUser = new User('Ivan');

// console.log(testUser.password = 'wasdadasasdasdasdsdsds');


// class User { // ПОЛИМАРФИЗМ
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         return `My name\'s ${this.name}`
//     }
// }
// const myCrew = [new User('ivan'),
// new User('nick'),
// new User('artyom'),
// new User('egor')];

// const crewNames = myCrew.map((user) => {
//    return user.sayHi()
// })

// console.log(myCrew, crewNames);

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
// }

// class Cat extends Animal {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }

//     sleep = function() {
//         console.log(`${this.name} is sleeping`);
//     }

// }

// function hunt() {
//     console.log(`${this.name} is hunting`);
// }

// function learnHunting(cat) {
//     cat.hunt = hunt;
//     return cat;
// }

// const murka = new Cat('Murka', 28);
// const pushok = learnHunting(new Cat('Pushok', 2));
// console.log(murka);
// console.log(pushok);

//РЕКУРСИЯ -- ФУНКЦИЯ КОТОРАЯ ВОЗВРАЩАЕТ САМА СЕБЯ

// function calcFactorial(num) {
//     if(num === 0) return 1;
//         return num * calcFactorial(num - 1)

// }
// console.log(calcFactorial(6));