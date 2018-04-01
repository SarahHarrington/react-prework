console.log('spread operator lecture');

// ...
//this is the operator
//for arrays, the ... removes the []
//for objects, the ... removes the {}

//this is a constant
// const numberArray = [2, 7, 5];
// const newNumber = 19;

// //using this method mutates the constant which should not change
// numberArray.push(newNumber);

// const numberArray = [2, 7, 5];
// const newNumber = 19;

// // the ... removes the [] and it puts the numbers in the new array
// const newNumberArray = [...numberArray, newNumber];

// console.log(newNumberArray);

// const bowler = {
//   name: 'Sarah',
//   latestScore: 73,
// };

// //this mutates the original const, in react, we want to maintain immutibility;
// bowler.latestScore = 107;

// console.log(bowler);

const bowler = {
  name: 'Sarah',
  isRightHanded: true,
  latestScore: 73,
};

const updateBowler = {
  ...bowler,
  latestScore: 107
}
//if the ...bowler is second, the last latestScore will be 73 because it would be last
//if mulitple properties are the same, the last one wins out

console.log(updateBowler);
