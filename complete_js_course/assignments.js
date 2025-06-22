// 1. Values and Variables

// 1.1 Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// 1.2 Log their values to the console.

// let country = "Croatia";
// let continent = "Europe";
// let population = "3.9";
// let isIsland = false;
// let language;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);
//=============================

// 2. Data Types

// 2.1 Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// 2.2 Log the types of isIsland, population, country and language to the console.

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//=============================

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals);

////////////////////////////////////


//Challenge 3
// Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// const jonh = {
//     fullName: 'Jonh Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// jonh.calcBMI();
// console.log(mark.bmi, jonh.bmi);

//"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// if(mark.bmi > jonh.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${jonh.fullName}'s (${jonh.bmi})!`)
// }else if (jonh.bmi > mark.bmi){
// console.log(`${jonh.fullName}'s BMI (${jonh.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// };
