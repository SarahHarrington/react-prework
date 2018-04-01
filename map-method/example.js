console.log('array map method lecture');

const caterpillar = 'Ben';

// const caterpillartoButterfly = function(caterpillar) {
//   return { name: caterpillar, isButterfly: true}
// }

//wrap the object in () so it doesn't think you're trying not to create another function
// const caterpillartoButterfly = caterpillar => ({ name: caterpillar, isButterfly: true});

// console.log(caterpillartoButterfly(caterpillar));

const caterpillarArray = [
  'Ben',
  'Charlotte',
  'Daisy',
  'Logan'
];

// const butterflyArray = [];

// caterpillarArray.forEach(function(caterpillar){
//   const newButterfly = caterpillartoButterfly(caterpillar);
//   butterflyArray.push(newButterfly);
// })

//map runs through the array like the forEach 
//map allows us to create a new array on the fly
// const butterflyArray = caterpillarArray.map(function(caterpillar){
//   const newButterfly = caterpillartoButterfly(caterpillar);
//   return newButterfly;
//   //builds the objects, then bundles them together and sets it to the butterflyArray
// });

//ES6 Function
const butterflyArray = caterpillarArray.map(caterpillar => ({ name: caterpillar, isButterfly: true}));

console.log(butterflyArray);