    // let js = 'amazing';
    // console.log(40 + 8 + 23 - 10);

    // console.log('Jonas');
    // console.log(23);

    // let firstName = "Jonas";
    // console.log(firstName);

    // let javascriptIsFun = true;
    // console.log(javascriptIsFun)
    
    // console.log(typeof javascriptIsFun)
    
    // Assignments 

    //1. Variables and Values
    //Declare variables called country, continent and population and assign their values according to your own country (population in millions). Log their values to the console.

    // let country = "Brasil";
    // let continent = "America";
    // let population = 250000000;
    // console.log(country);
    // console.log(continent);
    // console.log(population);



    //2. Data Types
   //Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet. 
   // Log the types of isIsland, population, country and language to the console.

//    let isIsland = false;
//    let language

//    console.log(typeof isIsland)
//    console.log(typeof population)
//    console.log(typeof country)
//    console.log(typeof language)

// const 

//    const firstName = 'Arion';
//    const job = 'millionaire';
//    const birthYear = 2002;
//    const year = 2025;

//    const arion = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old '+ job + '!';
//    console.log(arion);

//    const arionNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
//    console.log(arionNew);

const age = 15;
// const isOldEnough = age >= 18;

if(age >= 18) {
    console.log('Bruna can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Bruna is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2002;
let century;

if(birthYear <=2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);