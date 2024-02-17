const sentence = "hello there from lighthouse labs";

//define a new delay variable to add the 50ms intervals to
let delay = 0;
//loop through each char of the sentence
for (const char of sentence) {
  //use setTimeout to dealy each printing
  setTimeout(() => {
    process.stdout.write(char);
  }, delay); //use delay to start the delay count
  delay += 50; //then add 50 ms after each print
}
//now to break the print to a new line, use '\n' in a new setTimeout
setTimeout(() => {
  process.stdout.write('\n');
}, delay); //you can use delay here as well b/c it is defined globally and already at the correct time from the previous addtions


//console.log(char);
//process.stdout.write(char); prints chars on the sanme line. move this in the setTimeout
