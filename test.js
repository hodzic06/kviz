
/*const startButton = document.getElementById("start");


async function getUsers() {
    const token = localStorage.getItem("token");

    if (!token) {
        console.log("Token .");
        return;
    }

    try {
        const response = await fetch(
            "https://0c6e-77-239-14-36.ngrok-free.app/users",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );

        const data = await response.json();
        console.log("Users response:", data);
    } catch (error) {
        console.log("Get users error:", error);
    } finally {
        console.log("Get users request finished.");
    }
}

startButton.addEventListener("click", getUsers);

*/

/*
async function fetchData(url, method = "GET", body = null) {
    try {
        const headers = {
            "Content-Type": "application/json",
        };

        const options = {
            method,
            headers,
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log("gresa", error);
        throw error;
    }
}

if (body) {
    options.body = JSON.stringify(body);
    throw new Error("Body is required.");
}
*/

/*
document.getElementById('loginUser').addEventListener('click', getLoginInfo);

function getLoginInfo() {
    const inputEmail = document.getElementById('email').value;
    const inputPass = document.getElementById('password').value;

    async function loginUser() {
        try {
          const response = await fetch(
            "https://0c6e-77-239-14-36.ngrok-free.app/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
             "email":inputEmail,
             "password": inputPass,
              }),
            }
          );
          const data = await response.json();
          console.log(data);
          const token = data.user.token;
          localStorage.setItem('token',token);
          console.log('Token saved:',token);
        } catch (error) {
          console.log(error);
        } finally {
          console.log("Finally");
        }
      }
    loginUser(inputEmail, inputPass);
} 

function getToken(){
  const token = localStorage.getItem('token');
  if(!token){
   throw new Error('token is not valid')
  }
  else {
    return token;
  }
}

async function fetchData(url, method = 'GET', body = null) {
  if(!url) throw new Error('url is not valid');
  const token = getToken();
  const headers = {
      'Authorization': Bearer ${token},
      'Content-Type': 'application/json',
  };

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  try {
      const response = await fetch(url, options);
      return await response.json();
  } catch (error) {
      throw new Error('fetching failed')
  }
}

async function getUsers() {
  const data = await fetchData('https://0c6e-77-239-14-36.ngrok-free.app/users');
  console.log(data);
}

document.getElementById('button1').addEventListener('click', getUsers);

*/

/*
class User {
    city = "Sarajevo";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return ` ${this.name}, is ${this.age} years old`;
    }
    /*
        get name() {
            return this._name;
        }
    */
/*
 set name(value) {
     if (value.length < 3) {
         console.log("Name must  bea t  least  3 .....");
         return;
     }
     this._name = value;
 }
}
*/
/*

const user = new User("", 25);
const userInfo = user.getInfo();
console.log(user.city)
console.log(User.prototype.city);
console.log(User.prototype)
console.log(user.city)
console.log(userInfo);


*/

/*
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.score = 0;
    }

    getInfo() {
        return `${this.name}, is ${this.age} years old`;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 18) {
            console.log("Ne možete kreirati korisnika mlađeg od 18 godina");
            return;
        }
        this._age = value;
    }

    incrementScore() {
        this.score+=1;
    }

    decrementScore() {
        this.score-=1;
    }
}

const user = new User("Amar", 2);
const userInfo = user.getInfo();
console.log(userInfo);
*/

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }


    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still`);
    }

}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }

    stop() {
        console.log("Rabbit stop");
        super.stop();
    }
}

const rabbit = new Rabbit("White Rabbit");
rabbit.run(5);
rabbit.hide();
rabbit.stop();


class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;

    }

    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
const myCar = new Car("Toyota", "Corolla", 2021);
myCar.displayInfo();


class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} woff!`);
    }
}

const dog = new Dog("namir", "rettriver");
console.log(dog);

class Calc {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }

}

const calculator = new Calc();

console.log("sabiranje:", calculator.add(5, 2));
console.log("oduzimanje:", calculator.subtract(123, 25));
console.log("mnozenje:", calculator.multiply(130, 34));
console.log("dijeljenje:", calculator.divide(103, 64));


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student1 = new Student("Namir", 17, "F");
student1.introduce();
student1.study();

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    describe() {
        console.log(`"${this.title}" by ${this.author}`);
    }
}

const book = new Book("na drini cuprija", "Ivo Andric");
book.describe(); 
