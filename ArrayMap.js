//Map: ata asole kind of loop protita element ke 
//visit korbe(caile element gula change korte pari)
// and return korbe arekta new array

var numbers = [1,2,3,4,5];
var result = numbers.map((num)=>{
      return num*3;  //every element of the array will multiplied by 3
});
console.log(`no change in main array: ${numbers}`);
console.log(`change after returning the new array : ${result}`);