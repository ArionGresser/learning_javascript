// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Arion");
// console.log("Bruna");

// let firstName = "Arion";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Arion");

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// Litteral Syntax
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Jay';
// console.log(friends);

//  const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];

//  console.log(jonas);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1,age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];

// console.log(ages);

//Add Elements
const friends = ["Michael", "Steven", "Peter"];
const newLegth = friends.push('Jay');
console.log(friends);
console.log(newLegth);

friends.unshift('Jonh');
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);


console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
console.log(friends.includes('23'));

if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}

