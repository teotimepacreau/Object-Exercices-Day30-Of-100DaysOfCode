console.log('connecté !');
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/08_Day_Objects/08_day_objects.md//
// EXERCICE 1
// I.1 Create an empty object called dog

const dog = {}

// I.2 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = 'Frimousse'
dog.legs = 4
dog.color = 'white'
dog.bark = function(){
  return 'woof woof'
}

console.log(dog)

// I.3 Get bark value from the dog object
console.log(dog.bark)

// I.4 Set new properties the dog object: breed
dog.breed = 'Jack Russell'
console.log(dog)

// EXERCICE II
// II.1 Find the person who has the most skills in the users object.


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let mostSkilledPerson = null;

for (let user in users) {
  if (!mostSkilledPerson || users[user].skills.length > users[mostSkilledPerson].skills.length) {
    mostSkilledPerson = user;
  }
}

console.log(mostSkilledPerson);

// II.2 Count users, count logged in users, count users having greater than equal to 50 points from the following object.

let countUsers = 0

for(let user in users){
  countUsers++
}
console.log(countUsers)

let countLogged = 0
for(let user in users){
  if(users[user].isLoggedIn === true){
    countLogged++
  }
}
console.log(countLogged)

let moreThanFiftyPoints = 0
for(let user in users){
  if(users[user].points >= 50){
    moreThanFiftyPoints++
  }
}
console.log(moreThanFiftyPoints)

// II.3 Find people who are MERN stack developer from the users object
const requiredSkills = ['MongoDB', 'Express', 'React', 'Node'];
const mernDevs = [];

for (let user in users) {
  const userSkills = users[user].skills;
  if (requiredSkills.every(skill => userSkills.includes(skill))) {
    mernDevs.push(user);
  }
}

console.log(mernDevs);

// II.4 Set your name in the users object without modifying the original users object

const usersCopy = structuredClone(users)


usersCopy['Blabla'] = {
  email: 'blabla@gmail.com',
  skills: ['HTML', 'CSS', 'Javascript'],
  age: 25,
  isLoggedIn: false,
  points: 100
}

console.log(usersCopy)

// II.5 Add a key and value to each item of the usersCopy object
for(let item in usersCopy){
  usersCopy[item]['genre']='Male'
};

console.log(usersCopy)

// II.6 Get all keys or properties of users object
let keys = Object.keys(usersCopy)
console.log(keys)

// II.7 Get all the values of users object

let values = Object.values(usersCopy)
console.log(values)

// II.8 Get all entries

let entries = Object.entries(usersCopy)
console.log(entries)

for(const [keys, values] of entries){
  console.log(keys, values)
}
// EXERCICE III

// III.1 Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

const usersIn = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

function signUp(yourUserName, array) {
  const existingUser = array.find((element) => {
    return element.username === yourUserName
    });
  
  if (!existingUser) {
    array.push({ username: yourUserName });
  }
}

signUp('Thomas', usersIn)

console.log(usersIn)

signUp('Léo', usersIn)
console.log(usersIn)



const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
  ]

//III.2  Create a function called rateProduct which rates the product 

function rateProduct(nameOfTheProduct, array, rateOfTheProduct){
  const selectedProduct = array.find((element)=>{
    return element.name === nameOfTheProduct
  })
  if(selectedProduct){
    selectedProduct.ratings.push({userId: 'someUserID', rate: rateOfTheProduct})
  }
}

rateProduct('TV', products, 4)
console.log(products)

//III.3 Create a function called averageRating which calculate the average rating of a product

function averageRating(array){
  let totalRating = 0
  let numberOfRatings = 0
  for(let product of array){
    for(let rating of product.ratings){
      totalRating += rating.rate
      numberOfRatings++
    }
  }
const average = totalRating / numberOfRatings
return average
}

const avgRating = averageRating(products)
console.log(avgRating)

    
