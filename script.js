// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the 
// returned values in 3 different variables, and log them to the console

// Ans:-

// function describeCountry (country, population, capitalCity){
//  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const data1 = describeCountry('finland', 6, 'Helsinki');
// console.log(data1);

// const data2 = describeCountry('india', 8, 'Delhi');
// console.log(data2);

// const data3 = describeCountry('United Kindom', 4, 'London');
// console.log(data3);

//------------------------------------------------------------------------------------------------------

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population 
// represents. For example, China has 1441 million people, so it's about 18.2% of 
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900 
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called 
// 'percentageOfWorld2', and also call it with 3 country populations (can be 
// the same populations

// Ans:-

// function percentageOfWorld1(country, population){
//   return `${country} has ${population} million people, so its about ${population/7900*100} of the world
//   population`
// }
//  const popuLa1 = percentageOfWorld1('China', 1441);
//  console.log(popuLa1);
//  const popuLa2 = percentageOfWorld1('Italy', 185);
//  console.log(popuLa2);
//  const popuLa3 = percentageOfWorld1('Japan', 1324);
//  console.log(popuLa3);


//  const percentageOfWorld2 = function (country, population){
//     return `${country} has ${population} million people, so its about ${population/7900*100} of the world
//     population`
//  }
//  const popu1 = percentageOfWorld2('China', 1441);
//  console.log(popu1);
//  const popu2 = percentageOfWorld2('Italy', 185);
//  console.log(popu2);
//  const popu3 = percentageOfWorld2('Japan', 1324);
//  console.log(popu3);

//------------------------------------------------------------------------------------------------------

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called 
// 'percentageOfWorld3'


// Ans:-

// const percentageOfWorld3 = (country, population) =>{
//     const description = `${country} has ${population} million people, so its about ${population/7900*100} of the world population`
//    return description;
// }

// const data1 = percentageOfWorld3('China', 1441);
// console.log(data1);
// const data2 = percentageOfWorld3('India',1220);
// console.log(data2);
// const data3 = percentageOfWorld3('Japan', 1552);
// console.log(data3);



//------------------------------------------------------------------------------------------------------


// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you 
// like the most. This function takes in two arguments: 'country' and 
// 'population', and returns a string like this: 'China has 1441 million people, 
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the 
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice


// function percentageOfWorld1(population){
//     return (population / 7900)*100;
// }

// const describePopulation = function(country, population){
//     const percentage = percentageOfWorld1(population)
//     return `${country} has ${population} million people, which is about ${percentage}% of the world.`
// }


// console.log(describePopulation('China', 1441));
// console.log(describePopulation('India', 1332));
// console.log(describePopulation('Franc', 141));

//------------------------------------------------------------------------------------------------------

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the 
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 
// percentage values

const populations = [1441, 1332, 141, 3200];
console.log(populations);

if(populations.length === 4){
    console.log(true);
}
else{
    console.log(false);
}


function percentageOfWorld1(population){
        return (population / 7900)*100;
     }

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);






