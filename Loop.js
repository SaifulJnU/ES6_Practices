// for loop: sob kajer jonno
// for in: array er index ba object er key return kore
// for of: array er value return kore
//additaional: var holo function scope, let holo block scope


//for loop (for array)
var numbers=[2,3,56,3];
for(var i = 0; i < 4; i++)
{
    console.log(numbers[i]);
}

//for in 
for(x in numbers){
        console.log(x); // in: tai index return korbe
}

//for of
for(x of numbers){
        console.log(x)  // of: tai value return korbe
}

//In case of object
const obj = {
        //key: value
        name: "Saiful",
        address: "Dhupkhola, Gendaria, Dhaka",
        identity: "Student"
}

for(var x in obj)
{
    console.log(obj[x]); //to print obj value
}

for(var x in obj)
{
    console.log(x); //to print obj key
}