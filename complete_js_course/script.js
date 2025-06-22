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

// Add Elements
// const friends = ["Michael", "Steven", "Peter"];
// const newLegth = friends.push('Jay');
// console.log(friends);
// console.log(newLegth);

// friends.unshift('Jonh');
// console.log(friends);

// //Remove elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));
// console.log(friends.includes('23'));

// if(friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }

//////////////////////////////////////
// Dot vs. Bracket Notation

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first'+ nameKey]);
// console.log(jonas['last'+ nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// Little Chalange
//Jonas has 3 friends, and his best friend is called Michael

// console.log([jonas.firstName], 'has', [jonas.friends.length], 'and his bestfriend is', [jonas.friends[0]]);

// console.log(`${jonas.firstName} has ${jonas.friends.length} and his bestfriend is ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverslicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }
    //  calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }
//      calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriverslicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(jonas.calcAge);
// console.log(jonas.age);

// console.log(jonas['calcAge'](1991));


// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver license"

// console.log(jonas.getSummary());