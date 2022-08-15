//Reduce: ata ke reduce bola hoy karon ata full arrray niye akat value dey.

var numbers = [12,3,4,5];

var result = numbers.reduce((preveousValue, currentValue, arr, index)=>{
        return preveousValue+currentValue;  // ekhane csum return korbe
},0); //this zero is the initial value of preveousValue


console.log(`output of reduced method: ${result}`);