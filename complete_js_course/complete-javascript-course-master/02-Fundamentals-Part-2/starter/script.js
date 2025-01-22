'use scrict';

// function logger(){
//     console.log('My name is Arion');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// function calcAge1(birthday){
//     const age = 2037 - birthday;
//     return age;
// }

// const age1 = calcAge1(2002);

// Function expression
// const calcAge2 = function (birthday){
//     return 2037 - birthday;
// }
// Arrow function
// const calcAge3 = birthday => 2037 - birthday;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearsUntilRetirement = (birthday, firstName) => {
//     const age = 2037 - birthday;
//     const retirment = 65 - age;
//     return `${firstName} retires in $`;
// }

// console.log(yearsUntilRetirement(2002));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

//  function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//      return juice;
//  }

//  console.log(fruitProcessor(10, 20))

// const calcAge = function (birthyear){
//     return 2037 - birthyear;
// }

//  const yearsUntilRetirement = function (birthyear, firstName) {
//     const age = calcAge(birthyear)
//      const retirment = 65 - age;
     
//      if(retirment > 0){
//          return retirment;
//      } else{
//         return 'Enjoy the life vacations!'
//      }
     
//  }
// console.log(yearsUntilRetirement(2002, 'Arion'));
// console.log(yearsUntilRetirement(1960, 'Helion'));

// const friends = ['Halison', 'Eduardo', 'Luigi'];
// console.log(friends)

// // const years = new Array(1994, 2001, 2002, 2005);

// console.log(friends[0]);
// console.log(friends[2])

// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Helion';
// console.log(friends);

// const arion = ['Arion', 'Gresser', 2037 - 2002, 'HelpDesk', friends];

// console.log(arion);

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const years = [1954, 1958, 1994, 2001, 2002];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];

// console.log(ages)

const friends = ['Halison', 'Eduardo', 'Luigi'];

// Add Elements
friends.push('Helion');
console.log(friends);


friends.unshift('Alex');
console.log(friends);

// Remove elements
friends.pop();
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Eduardo'));

