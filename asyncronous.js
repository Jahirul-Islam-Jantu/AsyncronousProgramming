// basic concept of asyncronous programming
// Asyncronous Task value can't be store in a variable

console.log(1); //Syncronous program to run first

setTimeout(() => {
  console.log(2); /** all the programs will be on a queue */
}, 0);
setTimeout(() => {
  console.log(3);
}, 0);
setTimeout(() => {
  console.log(4);
}, 0);
setTimeout(() => {
  console.log(5);
}, 0);
setTimeout(() => {
  console.log(6);
}, 0);

console.log(7); //Syncronous program to run second
// after all the syncronous programs Asyncronous programs will run

// lets discuss it in brief
function main() {
  setTimeout(() => {
    console.log("Asyncronous Program Last");
  }, 10);

  setTimeout(() => {
    console.log("Asyncronous Program Fast");
  }, 0);

  test();
}

function test() {
  console.log("Syncronous Program last");
}

console.log("Syncronous Program First");
main();
