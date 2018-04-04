//Generator Functions

// node ready-set-go.js to run the functions in the terminal

console.log('generator functions lecture');

//to make the functions go in an order, you have to layer them to gether
// const readySetGo = () => {
//   setTimeout(() => {
//     console.log('Ready')
//     setTimeout(() => {
//       console.log('Set')
//       setTimeout(() => {
//         console.log('Go')
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }

// readySetGo();

//generator functions have a yield rather than a return
//we can yield pretty much anything from a generator function
//the generator will remember where it left off
// function* firstGenerator() {
//   yield 1;
//   yield 'Hello World';
//   yield { name: 'Sarah' };
// }

// function* readySetGo() {
//   yield delayPromiseWord('Ready');
//   yield delayPromiseWord('Set');
//   yield delayPromiseWord('Go');
// }

// //resolve is a function that is going to run to tell our promise that it's done
// const delayPromiseWord = word => new Promise(resolve => {
//   setTimeout(() => {
//     console.log(word);
//     resolve(); //kind of like a done
//   }, 1000);
// });

//to call the function you need to create an instance of it
// const firstGeneratorInstance = firstGenerator();

// console.log(firstGeneratorInstance.next()); // we get 1 the first time this is called
// console.log(firstGeneratorInstance.next()); // we get "hello world" the second time
// console.log(firstGeneratorInstance.next()); // we get the object the third time
// console.log(firstGeneratorInstance.next()); // value: undefined, done: true
// console.log(firstGeneratorInstance.next()); // value: undefined, done: true
// console.log(firstGeneratorInstance.next()); // value: undefined, done: true


//this takes in the generator function that has the yields
// const runEntireGenerator = (generatorFunc) => {
//   const generatorFuncInstance = generatorFunc(); //creates an instance of the generator function
//   let generatorResponse = generatorFuncInstance.next(); //runs the generator
//   while(!generatorResponse.done) { //while the response is not equal to done
//     console.log(generatorResponse.value); // logs the value from the generator function
//     generatorResponse = generatorFuncInstance.next(); //checks the next one to see if the generator reponse will be equal to done
//   }
// }


const runEntireGenerator = (generatorFunc) => {
  const generatorFuncInstance = generatorFunc(); //creates an instance of the generator function
  recursiveNext(generatorFuncInstance);// the generatorFuncInstance keeps track of where we are
}

//Refactored to be recursive
// const recursiveNext = (generatorFuncInstance) => {
//   let generatorResponse = generatorFuncInstance.next();
//   if (!generatorResponse.done) {
//     console.log(generatorResponse.value); 
//     recursiveNext(generatorFuncInstance);
//   }
// }

// const recursiveNext = (generatorFuncInstance) => {
//   let generatorResponse = generatorFuncInstance.next();
//   if (generatorResponse.done) { //basically checking to see if done is returning true
//     // do nothing, no more code to run
//   } 
//   else if (typeof generatorResponse.value.then === 'function') { //this checks to see if it's a promise
//     generatorResponse.value.then(() => { //waits for the function to complete and then does .then to do the recursiveNext
//       recursiveNext(generatorFuncInstance);
//     })
//   }
//   else {
//     console.log(generatorResponse.value); 
//     recursiveNext(generatorFuncInstance); //calls again with the same instance, keeping track of where the instance is
//   }
// }

// // runEntireGenerator(firstGenerator);
// runEntireGenerator(readySetGo);


function* readySetGo() {
  yield delayPromiseWord('Ready');
  yield delayPromiseWord('Set');
  yield delayPromiseWord('Go');
}

const delayPromiseWord = word => new Promise(resolve => {
  setTimeout(() => {
    console.log(word);
    resolve(); 
  }, 1000);
});

const runEntireGenerator = (generatorFunc) => { //calls the function 
  const generatorFuncInstance = generatorFunc(); //creates an instance of the function
  recursiveNext(generatorFuncInstance); // calls the recursive function with the instance of the function as the parameter
}

const recursiveNext = (generatorFuncInstance) => { //this function takes in the instance of the orginal function
  let generatorResponse = generatorFuncInstance.next(); //the response variable is set to the result of the instance.next - this
  if (generatorResponse.done) { // checks to see if the function comes up as true - if it does, it does nothing
    // do nothing, no more code to run
  } 
  else if (typeof generatorResponse.value.then === 'function') { //checks if the response is a function, if it is it 
    generatorResponse.value.then(() => { //waits for the result of the function and does a .then to start the next iteration
      recursiveNext(generatorFuncInstance); //calls the next iteration for recursive next on the original function instance yield
    })
  }
  else { // if it's not a function, it will just show the result of the function instance yield
    console.log(generatorResponse.value); 
    recursiveNext(generatorFuncInstance); 
  }
}

runEntireGenerator(readySetGo); // this calls the function with readySetGo as the parameter

